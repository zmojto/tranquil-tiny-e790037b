import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Calendar } from "lucide-react";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  message: z.string().trim().max(500, "Message must be less than 500 characters").optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface RetreatInfo {
  name: string;
  location: string;
  country: string;
  dates: string;
  price: number;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  retreat: RetreatInfo | null;
}

const BookingModal = ({ isOpen, onClose, retreat }: BookingModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from('bookings').insert({
        full_name: data.name,
        email: data.email,
        phone: data.phone,
        special_requests: data.message || null,
        retreat_name: retreat?.name || '',
      });

      if (error) throw error;

      toast({
        title: "Vaša rezervácia bola odoslaná!",
        description: `Prijali sme vašu žiadosť o ${retreat?.name}. Budeme vás kontaktovať do 24 hodín.`,
      });

      // Fire-and-forget email notification
      supabase.functions.invoke('send-booking-email', {
        body: {
          full_name: data.name,
          email: data.email,
          phone: data.phone,
          retreat_name: retreat?.name || '',
          special_requests: data.message || null,
        },
      }).catch((err) => console.error('Email notification failed:', err));

      form.reset();
      onClose();
    } catch (error: any) {
      toast({
        title: "Chyba pri odosielaní",
        description: "Nepodarilo sa odoslať rezerváciu. Skúste to prosím znova.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!retreat) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-background">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground">
            Reserve Your Spot
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Complete the form below to request your reservation.
          </DialogDescription>
        </DialogHeader>

        {/* Retreat Info Card */}
        <div className="bg-primary/5 rounded-xl p-4 mb-4">
          <h3 className="font-serif text-xl text-foreground mb-2">{retreat.name}</h3>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              {retreat.location}, {retreat.country}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              {retreat.dates}
            </div>
            <div className="font-serif text-lg text-foreground mt-1">
              {retreat.price.toLocaleString()} € per person
            </div>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Requests (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Dietary requirements, room preferences, questions..."
                      className="resize-none"
                      rows={3}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="hero"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Request Reservation"}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              A $500 deposit is required to confirm your spot. We'll send payment details after receiving your request.
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;

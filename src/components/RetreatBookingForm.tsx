import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { MapPin, Calendar, Users } from "lucide-react";
import type { Retreat } from "@/data/retreats";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  message: z.string().trim().max(500, "Message must be less than 500 characters").optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface RetreatBookingFormProps {
  retreat: Retreat;
}

const RetreatBookingForm = ({ retreat }: RetreatBookingFormProps) => {
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
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Reservation Request Sent!",
      description: `We've received your request for ${retreat.name}. We'll contact you within 24 hours.`,
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-card scroll-mt-20">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans">
            Reserve Your Spot
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Begin Your Journey
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Complete the form below to request your reservation. Our team will contact you within 24 hours to confirm availability.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Retreat Summary Card */}
          <div className="md:col-span-2 bg-primary/5 rounded-2xl p-6 h-fit">
            <h3 className="font-serif text-2xl text-foreground mb-4">{retreat.name}</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{retreat.location}, {retreat.country}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{retreat.dates}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{retreat.spotsLeft} spots remaining</span>
              </div>
            </div>
            <div className="border-t border-primary/10 mt-6 pt-6">
              <div className="text-center">
                <span className="font-serif text-3xl text-foreground">${retreat.price.toLocaleString()}</span>
                <span className="text-muted-foreground ml-2">per person</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              A $500 deposit is required to confirm your spot. Payment details will be sent after your request is received.
            </p>
          </div>

          {/* Booking Form */}
          <div className="md:col-span-3 bg-background rounded-2xl border border-primary/10 p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                          rows={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Request Reservation"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetreatBookingForm;

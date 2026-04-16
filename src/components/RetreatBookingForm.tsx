import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
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
  name: z.string().trim().min(2, "Meno musí mať aspoň 2 znaky").max(100, "Meno musí mať menej ako 100 znakov"),
  email: z.string().trim().email("Zadajte platný e-mail").max(255, "E-mail musí mať menej ako 255 znakov"),
  phone: z.string().trim().min(10, "Zadajte platné telefónne číslo").max(20, "Telefónne číslo je príliš dlhé"),
  message: z.string().trim().max(500, "Správa musí mať menej ako 500 znakov").optional(),
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
    
    try {
      const { error } = await supabase.from('bookings').insert({
        full_name: data.name,
        email: data.email,
        phone: data.phone,
        special_requests: data.message || null,
        retreat_name: retreat.name,
      });

      if (error) throw error;

      toast({
        title: "Vaša rezervácia bola odoslaná!",
        description: `Prijali sme vašu žiadosť o ${retreat.name}. Budeme vás kontaktovať do 24 hodín.`,
      });

      // Fire-and-forget email notification
      supabase.functions.invoke('send-booking-email', {
        body: {
          full_name: data.name,
          email: data.email,
          phone: data.phone,
          retreat_name: retreat.name,
          special_requests: data.message || null,
        },
      }).catch((err) => console.error('Email notification failed:', err));

      form.reset();
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

  return (
    <section id="booking" className="py-16 md:py-24 bg-card scroll-mt-20">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans">
            Rezervujte si miesto
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Začnite svoju cestu
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Vyplňte formulár nižšie a požiadajte o rezerváciu. Náš tím vás bude kontaktovať do 24 hodín na potvrdenie dostupnosti.
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
                <span>{retreat.spotsLeft} zostávajúcich miest</span>
              </div>
            </div>
            <div className="border-t border-primary/10 mt-6 pt-6">
              <div className="text-center">
                <span className="font-serif text-3xl text-foreground">{retreat.price.toLocaleString('sk-SK')} €</span>
                <span className="text-muted-foreground ml-2">za osobu</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Na potvrdenie miesta sa vyžaduje záloha 500 €. Platobné údaje budú zaslané po prijatí vašej žiadosti.
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
                      <FormLabel>Celé meno</FormLabel>
                      <FormControl>
                        <Input placeholder="Vaše celé meno" {...field} />
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
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="vas@email.sk" {...field} />
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
                      <FormLabel>Telefónne číslo</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+421 900 000 000" {...field} />
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
                      <FormLabel>Špeciálne požiadavky (voliteľné)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Stravovanie, preferencie izby, otázky..."
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
                  {isSubmitting ? "Odosiela sa..." : "Odoslať rezerváciu"}
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

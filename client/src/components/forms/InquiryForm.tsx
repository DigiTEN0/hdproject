import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = insertInquirySchema.extend({
  phone: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function InquiryForm({ className }: { className?: string }) {
  const { mutate, isPending } = useCreateInquiry();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: FormData) {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <Card className={cn("bg-card", className)}>
      <CardHeader className="pb-4">
        <CardTitle className="font-display text-xl text-foreground">Vraag een Offerte Aan</CardTitle>
        <CardDescription>
          Vul onderstaand formulier in en wij nemen binnen 48 uur contact met u op.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Naam *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Uw volledige naam" 
                      className="bg-background" 
                      data-testid="input-name"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mailadres *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="uw@email.nl" 
                        type="email" 
                        className="bg-background" 
                        data-testid="input-email"
                        {...field} 
                      />
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
                    <FormLabel>Telefoonnummer</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="06 1234 5678" 
                        className="bg-background" 
                        data-testid="input-phone"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Uw wensen *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Vertel ons over uw project. Welk type veranda zoekt u? Wat zijn de afmetingen van uw terras?" 
                      className="min-h-[120px] bg-background" 
                      data-testid="input-message"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold h-12"
              disabled={isPending}
              data-testid="button-submit-inquiry"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Verzenden...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" /> Verstuur Aanvraag
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

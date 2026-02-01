import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

// Infer types from the schema used in routes
type InquiryInput = z.infer<typeof api.inquiries.create.input>;

export function useInquiries() {
  return useQuery({
    queryKey: [api.inquiries.list.path],
    queryFn: async () => {
      const res = await fetch(api.inquiries.list.path);
      if (res.status === 401) throw new Error("Unauthorized");
      if (!res.ok) throw new Error("Failed to fetch inquiries");
      return await res.json();
    },
  });
}

export function useCreateInquiry() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InquiryInput) => {
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit inquiry");
      }
      return await res.json();
    },
    onSuccess: () => {
      // Invalidate list if admin is viewing
      queryClient.invalidateQueries({ queryKey: [api.inquiries.list.path] });
      toast({
        title: "Aanvraag verstuurd!",
        description: "We nemen zo snel mogelijk contact met u op.",
      });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Er is iets misgegaan",
        description: error.message,
      });
    },
  });
}

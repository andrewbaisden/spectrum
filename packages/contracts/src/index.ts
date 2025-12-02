import { z } from "zod";

export const bookingInputSchema = z.object({
  gpName: z.string().min(1, "GP name is required"),
  email: z.string().email("Enter a valid email"),
  contactNumber: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || /^[0-9]+$/.test(val), {
      message: "Contact number must be numeric"
    })
    .refine((val) => (val ? val.length >= 6 : true), {
      message: "Contact number must be at least 6 digits"
    })
});

export const bookingResponseSchema = bookingInputSchema.extend({
  id: z.string().uuid(),
  createdAt: z.string().datetime()
});

export type BookingInput = z.infer<typeof bookingInputSchema>;
export type BookingResponse = z.infer<typeof bookingResponseSchema>;

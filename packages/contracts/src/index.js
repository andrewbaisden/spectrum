"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingResponseSchema = exports.bookingInputSchema = void 0;
const zod_1 = require("zod");
exports.bookingInputSchema = zod_1.z.object({
    gpName: zod_1.z.string().min(1, "GP name is required"),
    email: zod_1.z.string().email("Enter a valid email"),
    contactNumber: zod_1.z
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
exports.bookingResponseSchema = exports.bookingInputSchema.extend({
    id: zod_1.z.string().uuid(),
    createdAt: zod_1.z.string().datetime()
});

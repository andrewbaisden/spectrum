import { BookingInput } from "@tech-test/contracts";

export class BookingDto implements BookingInput {
  gpName!: string;
  email!: string;
  contactNumber?: string;
}

import { Body, Controller, Get, Param, Post, UsePipes } from "@nestjs/common";
import { bookingInputSchema, BookingResponse } from "@tech-test/contracts";

import { BookingDto } from "./dto/booking.dto";
import { BookingService } from "./booking.service";
import { ZodValidationPipe } from "./zod-validation.pipe";

@Controller("bookings")
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(bookingInputSchema))
  async create(@Body() body: BookingDto): Promise<BookingResponse> {
    return this.bookingService.createBooking(body);
  }

  @Get(":id")
  async getById(@Param("id") id: string): Promise<BookingResponse> {
    return this.bookingService.findById(id);
  }
}

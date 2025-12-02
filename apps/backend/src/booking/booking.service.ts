import { Injectable, NotFoundException } from "@nestjs/common";
import { BookingResponse } from "@tech-test/contracts";
import { Prisma } from "@prisma/client";

import { PrismaService } from "../prisma/prisma.service";
import { BookingDto } from "./dto/booking.dto";

@Injectable()
export class BookingService {
  constructor(private readonly prisma: PrismaService) {}

  async createBooking(payload: BookingDto): Promise<BookingResponse> {
    const booking = await this.prisma.booking.create({
      data: {
        gpName: payload.gpName,
        email: payload.email,
        contactNumber: payload.contactNumber ?? null
      }
    });

    return this.mapToResponse(booking);
  }

  async findById(id: string): Promise<BookingResponse> {
    const booking = await this.prisma.booking.findUnique({
      where: { id }
    });

    if (!booking) {
      throw new NotFoundException(`Booking with id ${id} not found`);
    }

    return this.mapToResponse(booking);
  }

  private mapToResponse(entity: Prisma.BookingGetPayload<{}>): BookingResponse {
    return {
      id: entity.id,
      gpName: entity.gpName,
      email: entity.email,
      contactNumber: entity.contactNumber ?? undefined,
      createdAt: entity.createdAt.toISOString()
    };
  }
}

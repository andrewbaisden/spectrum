import { bookingResponseSchema, BookingInput, BookingResponse } from "@tech-test/contracts";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

async function handleResponse<T>(response: Response, schema?: (data: unknown) => T): Promise<T> {
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "Request failed");
  }

  const data = await response.json();
  return schema ? schema(data) : data;
}

export async function createBooking(input: BookingInput): Promise<BookingResponse> {
  const res = await fetch(`${API_BASE_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(input)
  });

  return handleResponse(res, (data) => bookingResponseSchema.parse(data));
}

export async function getBooking(id: string): Promise<BookingResponse> {
  const res = await fetch(`${API_BASE_URL}/bookings/${id}`);
  return handleResponse(res, (data) => bookingResponseSchema.parse(data));
}

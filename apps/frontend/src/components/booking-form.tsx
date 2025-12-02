'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { bookingInputSchema, BookingInput } from '@tech-test/contracts';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { createBooking } from '../lib/api';
import { cleanContactNumber } from '../lib/form-helpers';

import { Button } from './ui/button';
import { Input } from './ui/input';

export function BookingForm() {
  const router = useRouter();
  const form = useForm<BookingInput>({
    resolver: zodResolver(bookingInputSchema),
    defaultValues: {
      gpName: '',
      email: '',
      contactNumber: '',
    },
    mode: 'onChange',
  });

  const mutation = useMutation({
    mutationFn: createBooking,
    onSuccess: (data) => {
      router.push(`/confirm?id=${data.id}`);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const onSubmit = handleSubmit((values) => {
    const payload = {
      ...values,
      contactNumber: cleanContactNumber(values.contactNumber),
    };
    mutation.mutate(payload);
  });

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2 border-2 border-solid rounded-lg p-2">
        <label
          className="text-sm font-semibold text-slate-700"
          htmlFor="gpName"
        >
          GP Name
        </label>
        <Input
          id="gpName"
          placeholder="Dr. Jane Doe"
          className="border-none p-0 h-8"
          {...register('gpName')}
          aria-invalid={!!errors.gpName}
        />
        {errors.gpName && (
          <p className="text-sm text-red-600">{errors.gpName.message}</p>
        )}
      </div>

      <div className="space-y-2 border-2 border-solid rounded-lg p-2">
        <label className="text-sm font-semibold text-slate-700" htmlFor="email">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="jane@example.com"
          className="border-none p-0 h-8"
          {...register('email')}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2 border-2 border-solid rounded-lg p-2">
        <label
          className="text-sm font-semibold text-slate-700"
          htmlFor="contactNumber"
        >
          Contact Number
        </label>
        <Input
          id="contactNumber"
          placeholder="07123456789"
          className="border-none p-0 h-8"
          {...register('contactNumber')}
          aria-invalid={!!errors.contactNumber}
        />
        {errors.contactNumber && (
          <p className="text-sm text-red-600">{errors.contactNumber.message}</p>
        )}
      </div>

      {mutation.error && (
        <p className="text-sm text-red-600">
          Something went wrong, please try again.
        </p>
      )}

      <div className="flex justify-end gap-6 pt-4">
        <Button
          type="button"
          variant="outline"
          className="w-40 text-indigo-500 border-indigo-500"
        >
          Previous
        </Button>
        <Button
          type="submit"
          className="w-40 bg-indigo-500 hover:bg-indigo-800"
          disabled={!isValid || mutation.isLoading}
        >
          {mutation.isLoading ? 'Submitting...' : 'Continue'}
        </Button>
      </div>
    </form>
  );
}

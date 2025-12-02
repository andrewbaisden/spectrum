'use client';

import { useQuery } from '@tanstack/react-query';
import { CheckCircleIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { getBooking } from '../lib/api';
import Check from '../public/check-btn.png';

import { Alert } from './ui/alert';
import { Button } from './ui/button';

interface ConfirmationProps {
  id: string;
}

export function Confirmation({ id }: ConfirmationProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['booking', id],
    queryFn: () => getBooking(id),
  });

  if (isLoading) {
    return <p className="text-sm text-slate-600">Loading confirmation...</p>;
  }

  if (error || !data) {
    return <p className="text-sm text-red-600">Unable to load booking.</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-3 text-center">
        <Image src={Check} height={200} width={150} alt="Checkmark" />
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Booking confirmed !
          </h1>
          <p className="text-sm text-slate-600 mt-4">
            You should soon receive an email confirming your booking, followed
            by a reminder email the day before your appointment to your
            registered email address.
          </p>
          <p className="text-sm text-slate-600 mt-4">
            To attend or cancel your session, go to the booking area by clicking
            the calendar icon in the top navigation
          </p>
        </div>
      </div>

      <Alert
        className="bg-amber-200 text-black"
        title="Important Note"
        description={
          <>
            <p>
              For both audio appointments and video appointments, you will need
              to return to the portal to join your session at the scheduled
              time.
            </p>
            <p className="mt-3">
              Clinicians do not call users directly. Ensure you log in a few
              minutes before your appointment to avoid missing your session.
            </p>
          </>
        }
      />

      <Link href="/" className="w-full inline-block">
        <Button
          variant="outline"
          className="bg-indigo-500 hover:bg-indigo-800 text-white w-full"
        >
          Return to Home
        </Button>
      </Link>
    </div>
  );
}

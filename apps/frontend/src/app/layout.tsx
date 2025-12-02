import type { Metadata } from 'next';

import './globals.css';
import { ReactQueryProvider } from '../providers/react-query-provider';

export const metadata: Metadata = {
  title: 'Booking Flow',
  description: 'Simple booking flow demo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}

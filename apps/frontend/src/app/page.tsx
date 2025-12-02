import { BookingForm } from '../components/booking-form';
import { Footer } from '../components/footer';

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-between px-4 py-16">
      <main className="flex-1">
        <section className="card p-0">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-slate-900">
              Please confirm or add to the below GP Contact <br />
              Details.
            </h1>
          </div>
          <BookingForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}

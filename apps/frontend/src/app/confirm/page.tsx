import { Confirmation } from '../../components/confirmation';
import { Footer } from '../../components/footer';

export default function ConfirmationPage({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  const id = searchParams?.id;

  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-between px-4 py-10">
      <main className="flex-1">
        <section className="card p-6">
          {!id ? (
            <p className="text-sm text-red-600">Missing booking id.</p>
          ) : (
            <Confirmation id={id} />
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

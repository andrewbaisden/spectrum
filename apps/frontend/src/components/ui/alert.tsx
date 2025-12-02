import { cn } from "../../lib/cn";

interface AlertProps {
  title: string;
  description: React.ReactNode;
  className?: string;
}

export function Alert({ title, description, className }: AlertProps) {
  return (
    <div className={cn("rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-900", className)}>
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-sm leading-relaxed space-y-2">{description}</div>
    </div>
  );
}

export function cleanContactNumber(value?: string): string | undefined {
  if (!value) return undefined;
  const digitsOnly = value.replace(/[^0-9]/g, "");
  return digitsOnly.length ? digitsOnly : undefined;
}

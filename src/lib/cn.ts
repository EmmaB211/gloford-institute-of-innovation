/** Minimal className combiner to avoid a full clsx/tailwind-merge dependency. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

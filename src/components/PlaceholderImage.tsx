import type { LucideIcon } from "lucide-react";
import { ImageOff } from "lucide-react";
import { cn } from "../lib/cn";

interface PlaceholderImageProps {
  label: string;
  icon?: LucideIcon;
  className?: string;
  tone?: "primary" | "secondary" | "accent";
}

const tones = {
  primary: "from-primary-600 to-primary-800",
  secondary: "from-secondary-700 to-secondary-900",
  accent: "from-accent-500 to-accent-700",
};

/**
 * Decorative placeholder used wherever a final photograph has not been supplied yet.
 * Renders a labeled gradient panel instead of a broken <img> reference.
 */
export default function PlaceholderImage({
  label,
  icon: Icon = ImageOff,
  className,
  tone = "primary",
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder image for ${label}`}
      className={cn(
        "flex flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br text-white",
        tones[tone],
        className,
      )}
    >
      <Icon className="h-8 w-8 opacity-80" aria-hidden="true" />
      <span className="px-3 text-center text-xs font-medium uppercase tracking-wide opacity-80">
        {label}
      </span>
    </div>
  );
}

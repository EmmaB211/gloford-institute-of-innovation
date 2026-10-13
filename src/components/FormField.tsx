import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "../lib/cn";

interface BaseProps {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children?: ReactNode;
}

type InputProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & { as?: "input" };
type TextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };
type SelectProps = BaseProps & { as: "select"; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void };

export default function FormField(props: InputProps | TextareaProps | SelectProps) {
  const { label, name, error, required, as = "input", children, ...rest } = props;
  const fieldId = `field-${name}`;
  const errorId = `${fieldId}-error`;

  const baseClass = cn(
    "w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-neutral-charcoal placeholder:text-neutral-gray/70 transition focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100",
    error ? "border-red-400" : "border-neutral-light",
  );

  return (
    <div>
      <label htmlFor={fieldId} className="mb-1.5 block text-sm font-medium text-neutral-charcoal">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {as === "textarea" && (
        <textarea
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          id={fieldId}
          name={name}
          className={cn(baseClass, "min-h-[120px] resize-y")}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        />
      )}

      {as === "select" && (
        <select
          id={fieldId}
          name={name}
          className={baseClass}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          value={(props as SelectProps).value}
          onChange={(props as SelectProps).onChange}
        >
          {children}
        </select>
      )}

      {as === "input" && (
        <input
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          id={fieldId}
          name={name}
          className={baseClass}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        />
      )}

      {error && (
        <p id={errorId} className="mt-1.5 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, BrainCircuit, HandCoins, Laptop, X } from "lucide-react";
import LoanApplicationForm from "./LoanApplicationForm";
import TrainingRegistrationForm from "./TrainingRegistrationForm";

type TrainingInterest = "AI Training" | "ICT Boot Camp";
type PopupSelection = TrainingInterest | "loan" | null;

interface VisitorActionPopupProps {
  onClose: () => void;
}

const actionClass =
  "flex w-full items-center gap-4 rounded-xl border border-neutral-light bg-white p-4 text-left transition hover:border-primary-300 hover:bg-primary-50 focus-visible:outline-primary-700";

export default function VisitorActionPopup({ onClose }: VisitorActionPopupProps) {
  const [selection, setSelection] = useState<PopupSelection>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusableElements?.length) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const title = selection === "loan"
    ? "Apply for a Loan"
    : selection
      ? `Register for ${selection}`
      : "What would you like to do?";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-charcoal/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="visitor-action-title"
        className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <header className="flex shrink-0 items-center justify-between border-b border-neutral-light px-5 py-4 sm:px-7">
          <div className="flex items-center gap-3">
            {selection && (
              <button
                type="button"
                onClick={() => setSelection(null)}
                aria-label="Back to options"
                className="rounded-full p-2 text-neutral-gray transition hover:bg-neutral-light hover:text-neutral-charcoal"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </button>
            )}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-700">GLOFORD Institute of Innovation</p>
              <h2 id="visitor-action-title" className="mt-1 text-xl text-neutral-charcoal">{title}</h2>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close popup"
            className="rounded-full p-2 text-neutral-gray transition hover:bg-neutral-light hover:text-neutral-charcoal"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>

        <div className="min-h-0 overflow-y-auto p-5 sm:p-7">
          {selection === null ? (
            <div>
              <p className="mb-5 text-sm text-neutral-gray">
                Choose an option to register your training interest or start a loan application.
              </p>
              <div className="space-y-3">
                <button type="button" className={actionClass} onClick={() => setSelection("AI Training")}>
                  <BrainCircuit className="h-7 w-7 shrink-0 text-primary-700" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-neutral-charcoal">AI Training</span>
                    <span className="mt-1 block text-sm text-neutral-gray">Register your interest in practical AI training.</span>
                  </span>
                </button>
                <button type="button" className={actionClass} onClick={() => setSelection("ICT Boot Camp")}>
                  <Laptop className="h-7 w-7 shrink-0 text-primary-700" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-neutral-charcoal">ICT Boot Camp</span>
                    <span className="mt-1 block text-sm text-neutral-gray">Sign up for hands-on ICT skills training.</span>
                  </span>
                </button>
                <button type="button" className={actionClass} onClick={() => setSelection("loan")}>
                  <HandCoins className="h-7 w-7 shrink-0 text-primary-700" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-neutral-charcoal">Apply for a Loan</span>
                    <span className="mt-1 block text-sm text-neutral-gray">Tell us about your business and financing needs.</span>
                  </span>
                </button>
              </div>
              <p className="mt-5 text-center text-xs text-neutral-gray">
                You can close this window to continue browsing.
              </p>
            </div>
          ) : selection === "loan" ? (
            <>
              <p className="mb-5 text-sm text-neutral-gray">
                Share your details to prepare a loan enquiry. Applying does not guarantee approval.
              </p>
              <LoanApplicationForm />
            </>
          ) : (
            <>
              <p className="mb-5 text-sm text-neutral-gray">
                Complete the form to register your interest. We will share details as sessions are confirmed.
              </p>
              <TrainingRegistrationForm initialInterest={selection} />
            </>
          )}
        </div>
      </section>
    </div>
  );
}

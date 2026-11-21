import { useState } from "react";
import type { FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, PackagePlus } from "lucide-react";
import FormField from "./FormField";
import LocationField from "./LocationField";
import { sendFormSubmission } from "../lib/sendFormSubmission";

type Status = "idle" | "submitting" | "success" | "error";

export default function GrainSubmissionForm() {
  const [grainType, setGrainType] = useState("Maize");
  const [amount, setAmount] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [amountError, setAmountError] = useState("");
  const [submissionError, setSubmissionError] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submitGrainAmount = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const numericAmount = Number(amount);

    if (!amount || !Number.isFinite(numericAmount) || numericAmount <= 0) {
      setAmountError("Enter a valid grain amount greater than 0 kg.");
      return;
    }

    setAmountError("");
    setSubmissionError("");
    setStatus("submitting");
    try {
      const result = await sendFormSubmission("grain", {
        grainType,
        amountKilograms: amount,
        location,
      });
      setEmailSent(result.emailSent);
      setStatus("success");
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : "We could not submit your grain amount. Please try again later.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-center text-center">
        <CheckCircle2 className="h-12 w-12 text-primary-700" aria-hidden="true" />
        <h2 className="mt-4 text-2xl text-neutral-charcoal">Grain Amount Submitted</h2>
        <p className="mt-2 text-sm text-neutral-gray">
          {Number(amount).toLocaleString()} kg of {grainType}{location ? ` in ${location}` : ""} was saved
          {emailSent ? " and emailed to our agribusiness team." : ", but the email notification could not be sent."}
        </p>
        <button
          type="button"
          onClick={() => {
            setAmount("");
            setLocation("");
            setStatus("idle");
          }}
          className="mt-5 text-sm font-semibold text-primary-700 hover:text-primary-800"
        >
          Submit another amount
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="text-center">
        <PackagePlus className="mx-auto h-9 w-9 text-primary-700" aria-hidden="true" />
        <h2 className="mt-3 text-2xl text-neutral-charcoal">Submit Your Grain Quantity</h2>
        <p className="mt-2 text-sm text-neutral-gray">
          Share your crop and available volume. The details will be sent to our agribusiness team.
        </p>
      </div>
      <form onSubmit={submitGrainAmount} noValidate className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            as="select"
            label="Grain Type"
            name="grainType"
            required
            value={grainType}
            onChange={(event) => setGrainType(event.target.value)}
          >
            <option value="Maize">Maize</option>
            <option value="Rice">Rice</option>
            <option value="Beans">Beans</option>
            <option value="Soybeans">Soybeans</option>
            <option value="Sesame">Sesame</option>
            <option value="Millet">Millet</option>
            <option value="Sorghum">Sorghum</option>
            <option value="Other">Other</option>
          </FormField>
          <FormField
            label="Amount in Kilograms"
            name="grainAmount"
            type="number"
            min="1"
            step="1"
            required
            placeholder="e.g. 500"
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value);
              setAmountError("");
              setSubmissionError("");
              setStatus("idle");
            }}
            error={amountError}
          />
        </div>
        <LocationField
          label="Location"
          name="grainLocation"
          value={location}
          onChange={(value) => {
            setLocation(value);
            setSubmissionError("");
            setStatus("idle");
          }}
        />
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm font-medium text-red-500">
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            {submissionError}
          </p>
        )}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-7 py-3.5 font-semibold text-white transition hover:bg-primary-800 disabled:opacity-60"
        >
          {status === "submitting" ? (
            <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</>
          ) : (
            <><PackagePlus className="h-4 w-4" /> Submit Grain Amount</>
          )}
        </button>
      </form>
    </>
  );
}

import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import FormField from "./FormField";

interface LoanFormData {
  fullName: string;
  phone: string;
  email: string;
  businessName: string;
  businessType: string;
  location: string;
  amountRequired: string;
  purpose: string;
  businessStatus: "new" | "existing" | "";
  additionalInfo: string;
}

const initialData: LoanFormData = {
  fullName: "",
  phone: "",
  email: "",
  businessName: "",
  businessType: "",
  location: "",
  amountRequired: "",
  purpose: "",
  businessStatus: "",
  additionalInfo: "",
};

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<keyof LoanFormData, string>>;

export default function LoanApplicationForm() {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = <K extends keyof LoanFormData>(key: K, value: LoanFormData[K]) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const validate = (): boolean => {
    const next: Errors = {};
    if (!data.fullName.trim()) next.fullName = "Full name is required.";
    if (!data.phone.trim()) next.phone = "Phone number is required.";
    if (!data.email.trim()) next.email = "Email address is required.";
    else if (!/^\S+@\S+\.\S+$/.test(data.email)) next.email = "Enter a valid email address.";
    if (!data.businessName.trim()) next.businessName = "Business name is required.";
    if (!data.businessType.trim()) next.businessType = "Business type is required.";
    if (!data.location.trim()) next.location = "Location is required.";
    if (!data.amountRequired.trim()) next.amountRequired = "Amount required is required.";
    if (!data.purpose.trim()) next.purpose = "Purpose of loan is required.";
    if (!data.businessStatus) next.businessStatus = "Please select an option.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      // Placeholder submission — replace with a real API call once a lending/CRM backend is available.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setData(initialData);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-primary-200 bg-primary-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary-700" />
        <h3 className="text-lg text-neutral-charcoal">Application Received</h3>
        <p className="max-w-md text-sm text-neutral-gray">
          Thank you for submitting your financing application. Our team will review
          your details and contact you. Submission does not guarantee approval.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-primary-700 hover:text-primary-800"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" name="fullName" required value={data.fullName} onChange={(e) => update("fullName", e.target.value)} error={errors.fullName} />
        <FormField label="Phone Number" name="phone" type="tel" required value={data.phone} onChange={(e) => update("phone", e.target.value)} error={errors.phone} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Email" name="email" type="email" required value={data.email} onChange={(e) => update("email", e.target.value)} error={errors.email} />
        <FormField label="Business Name" name="businessName" required value={data.businessName} onChange={(e) => update("businessName", e.target.value)} error={errors.businessName} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Business Type" name="businessType" required value={data.businessType} onChange={(e) => update("businessType", e.target.value)} error={errors.businessType} />
        <FormField label="Location" name="location" required value={data.location} onChange={(e) => update("location", e.target.value)} error={errors.location} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Amount Required" name="amountRequired" required value={data.amountRequired} onChange={(e) => update("amountRequired", e.target.value)} error={errors.amountRequired} />
        <FormField
          as="select"
          label="New or Existing Business"
          name="businessStatus"
          required
          value={data.businessStatus}
          onChange={(e) => update("businessStatus", e.target.value as LoanFormData["businessStatus"])}
          error={errors.businessStatus}
        >
          <option value="">Select an option</option>
          <option value="new">New Business</option>
          <option value="existing">Existing Business</option>
        </FormField>
      </div>
      <FormField label="Purpose of Loan" name="purpose" required value={data.purpose} onChange={(e) => update("purpose", e.target.value)} error={errors.purpose} />
      <FormField as="textarea" label="Additional Information" name="additionalInfo" value={data.additionalInfo} onChange={(e) => update("additionalInfo", e.target.value)} />

      <p className="text-xs text-neutral-gray">
        Submitting this form does not guarantee loan approval. All applications are
        subject to review.
      </p>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm font-medium text-red-500">
          <AlertCircle className="h-4 w-4" /> Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-7 py-3.5 font-semibold text-white transition hover:bg-primary-800 disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Submit Application
          </>
        )}
      </button>
    </form>
  );
}

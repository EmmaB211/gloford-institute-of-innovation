import { useState } from "react";
import type { FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import FormField from "./FormField";
import { sendFormSubmission } from "../lib/sendFormSubmission";

type LoanProduct = "microbusiness" | "wealth-from-waste" | "";

interface LoanFormData {
  loanProduct: LoanProduct;
  fullName: string;
  phone: string;
  email: string;
  age: string;
  businessStatus: "active" | "not-yet-operating" | "";
  businessName: string;
  businessType: string;
  CurrentMonthlyIncome: string;
  BusinessWorth: string;
  location: string;
  amountRequired: string;
  purpose: string;
  TypeofColateral: string;
  groupName: string;
  groupLeader: string;
  HaveyoueverborrowedFromAnyfinacialInstitution: string;
  additionalInfo: string;
}

const initialData: LoanFormData = {
  loanProduct: "",
  fullName: "",
  phone: "",
  email: "",
  age: "",
  businessStatus: "",
  businessName: "",
  businessType: "",
  CurrentMonthlyIncome: "",
  BusinessWorth: "",
  location: "",
  amountRequired: "",
  purpose: "",
  TypeofColateral: "",
  groupName: "",
  groupLeader: "",
  HaveyoueverborrowedFromAnyfinacialInstitution: "",
  additionalInfo: "",
};

type Errors = Partial<Record<keyof LoanFormData, string>>;
type Status = "idle" | "submitting" | "success" | "error";

export default function LoanApplicationForm() {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submissionError, setSubmissionError] = useState("");

  const update = <K extends keyof LoanFormData>(key: K, value: LoanFormData[K]) => {
    setData((previous) => ({ ...previous, [key]: value }));
    setStatus("idle");
    setSubmissionError("");
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!data.loanProduct) next.loanProduct = "Select a loan product.";
    if (!data.fullName.trim()) next.fullName = "Full name is required.";
    if (!data.phone.trim()) next.phone = "Phone number is required.";
    if (!data.email.trim()) next.email = "Email address is required.";
    else if (!/^\S+@\S+\.\S+$/.test(data.email)) next.email = "Enter a valid email address.";
    if (data.loanProduct === "wealth-from-waste") {
      const age = Number(data.age);
      if (!data.age.trim()) next.age = "Age is required for this program.";
      else if (!Number.isInteger(age) || age < 18 || age > 35) next.age = "The fund brief specifies applicants aged 18–35.";
      if (!data.groupName.trim()) next.groupName = "Group name is required for this program.";
      if (!data.groupLeader.trim()) next.groupLeader = "Group leader name is required for this program.";
    }
    if (data.loanProduct === "microbusiness" && !data.businessStatus) {
      next.businessStatus = "Select the current operating status.";
    }
    if (!data.businessName.trim()) next.businessName = "Business or venture name is required.";
    if (!data.businessType.trim()) next.businessType = "Business activity is required.";
    if (!data.location.trim()) next.location = "Location is required.";
    if (!data.amountRequired.trim()) next.amountRequired = "Requested amount is required.";
    else if (!/^\d[\d,]*(\.\d{1,2})?$/.test(data.amountRequired.trim())) next.amountRequired = "Enter a valid amount.";
    if (!data.purpose.trim()) next.purpose = "Purpose of financing is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setSubmissionError("");
    setErrors({});
    try {
      await sendFormSubmission("loan", data);
      setStatus("success");
      setData(initialData);
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : "We could not submit your enquiry. Please try again later.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-center gap-3 rounded-2xl border border-primary-200 bg-primary-50 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary-700" aria-hidden="true" />
        <h3 className="text-lg text-neutral-charcoal">Loan Enquiry Sent</h3>
        <p className="max-w-md text-sm text-neutral-gray">
          Your enquiry has been emailed to GLOFORD Institute of Innovation. Submission does not guarantee loan approval.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-primary-700 hover:text-primary-800"
        >
          Start another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <FormField
        as="select"
        label="Loan Product"
        name="loanProduct"
        required
        value={data.loanProduct}
        onChange={(event) => {
          const value = event.target.value;
          update("loanProduct", value === "microbusiness" || value === "wealth-from-waste" ? value : "");
        }}
        error={errors.loanProduct}
      >
        <option value="">Select a product</option>
        <option value="microbusiness">Microbusiness Credit Support (MBCS)</option>
        <option value="wealth-from-waste">Wealth from Waste (WFW) Early-Stage Financing</option>
      </FormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" name="fullName" required value={data.fullName} onChange={(event) => update("fullName", event.target.value)} error={errors.fullName} />
        <FormField label="Phone Number" name="phone" type="tel" required value={data.phone} onChange={(event) => update("phone", event.target.value)} error={errors.phone} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Email" name="email" type="email" required value={data.email} onChange={(event) => update("email", event.target.value)} error={errors.email} />
        {data.loanProduct === "wealth-from-waste" && (
          <FormField label="Age" name="age" type="number" min="18" max="35" required value={data.age} onChange={(event) => update("age", event.target.value)} error={errors.age} />
        )}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Business / Venture Name" name="businessName" required value={data.businessName} onChange={(event) => update("businessName", event.target.value)} error={errors.businessName} />
        <FormField label="Business Activity" name="businessType" required value={data.businessType} onChange={(event) => update("businessType", event.target.value)} error={errors.businessType} />
      </div>
      {data.loanProduct === "microbusiness" && (
        <FormField
          as="select"
          label="Is the business currently operating?"
          name="businessStatus"
          required
          value={data.businessStatus}
          onChange={(event) => {
            const value = event.target.value;
            update("businessStatus", value === "active" || value === "not-yet-operating" ? value : "");
          }}
          error={errors.businessStatus}
        >
          <option value="">Select an option</option>
          <option value="active">Yes, currently operating</option>
          <option value="not-yet-operating">No, not yet operating</option>
        </FormField>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Business Location" name="location" required value={data.location} onChange={(event) => update("location", event.target.value)} error={errors.location} />
        <FormField label="Amount Requested (UGX)" name="amountRequired" inputMode="decimal" required value={data.amountRequired} onChange={(event) => update("amountRequired", event.target.value)} error={errors.amountRequired} />
      </div>
      {data.loanProduct === "wealth-from-waste" && (
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Group Name" name="groupName" required value={data.groupName} onChange={(event) => update("groupName", event.target.value)} error={errors.groupName} />
          <FormField label="Group Leader / Primary Guarantor" name="groupLeader" required value={data.groupLeader} onChange={(event) => update("groupLeader", event.target.value)} error={errors.groupLeader} />
        </div>
      )}
      <FormField label="Purpose of Financing" name="purpose" required value={data.purpose} onChange={(event) => update("purpose", event.target.value)} error={errors.purpose} />
      <FormField as="textarea" label="Additional Information" name="additionalInfo" value={data.additionalInfo} onChange={(event) => update("additionalInfo", event.target.value)} />

      <p className="text-xs leading-relaxed text-neutral-gray">
        Your enquiry will be emailed to GLOFORD Institute of Innovation. This is not a loan approval. Do not enter your National ID number or other sensitive information here.
      </p>

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
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
        ) : (
          <><Send className="h-4 w-4" /> Submit Loan Enquiry</>
        )}
      </button>
    </form>
  );
}

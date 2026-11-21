import { useState } from "react";
import type { FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import FormField from "./FormField";
import LocationField from "./LocationField";
import { trainingCategories } from "../data/training";
import { sendFormSubmission } from "../lib/sendFormSubmission";

interface TrainingFormData {
  fullName: string;
  phone: string;
  email: string;
  age: string;
  location: string;
  trainingInterest: string;
  experienceLevel: "beginner" | "intermediate" | "advanced" | "";
  message: string;
}

const initialData: TrainingFormData = {
  fullName: "",
  phone: "",
  email: "",
  age: "",
  location: "",
  trainingInterest: "",
  experienceLevel: "",
  message: "",
};

type Errors = Partial<Record<keyof TrainingFormData, string>>;
type Status = "idle" | "submitting" | "success" | "error";

interface TrainingRegistrationFormProps {
  initialInterest?: string;
}

export default function TrainingRegistrationForm({ initialInterest = "" }: TrainingRegistrationFormProps) {
  const [data, setData] = useState(() => ({ ...initialData, trainingInterest: initialInterest }));
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submissionError, setSubmissionError] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const update = <K extends keyof TrainingFormData>(key: K, value: TrainingFormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setStatus("idle");
    setSubmissionError("");
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!data.fullName.trim()) next.fullName = "Full name is required.";
    if (!data.phone.trim()) next.phone = "Phone number is required.";
    if (!data.email.trim()) next.email = "Email address is required.";
    else if (!/^\S+@\S+\.\S+$/.test(data.email)) next.email = "Enter a valid email address.";
    if (!data.age.trim()) next.age = "Age is required.";
    if (!data.location.trim()) next.location = "Location is required.";
    if (!data.trainingInterest.trim()) next.trainingInterest = "Please select a training interest.";
    if (!data.experienceLevel) next.experienceLevel = "Please select an experience level.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setSubmissionError("");
    try {
      const result = await sendFormSubmission("training", data);
      setEmailSent(result.emailSent);
      setStatus("success");
      setData(initialData);
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : "We could not submit your registration. Please try again later.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-center gap-3 rounded-2xl border border-primary-200 bg-primary-50 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary-700" aria-hidden="true" />
        <h3 className="text-lg text-neutral-charcoal">Registration Received</h3>
        <p className="max-w-md text-sm text-neutral-gray">
          {emailSent
            ? "Thank you. Your registration has been saved and emailed to GLOFORD Institute of Innovation."
            : "Thank you. Your registration has been saved, but the email notification could not be sent."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-primary-700 hover:text-primary-800"
        >
          Register another interest
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" name="fullName" required value={data.fullName} onChange={(event) => update("fullName", event.target.value)} error={errors.fullName} />
        <FormField label="Phone" name="phone" type="tel" required value={data.phone} onChange={(event) => update("phone", event.target.value)} error={errors.phone} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Email" name="email" type="email" required value={data.email} onChange={(event) => update("email", event.target.value)} error={errors.email} />
        <FormField label="Age" name="age" type="number" min={1} required value={data.age} onChange={(event) => update("age", event.target.value)} error={errors.age} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <LocationField
          label="Location"
          name="location"
          required
          value={data.location}
          onChange={(value) => update("location", value)}
          error={errors.location}
        />
        <FormField
          as="select"
          label="Training Interest"
          name="trainingInterest"
          required
          value={data.trainingInterest}
          onChange={(event) => update("trainingInterest", event.target.value)}
          error={errors.trainingInterest}
        >
          <option value="">Select a training category</option>
          {trainingCategories.map((category) => (
            <option key={category.id} value={category.title}>
              {category.title}
            </option>
          ))}
        </FormField>
      </div>
      <FormField
        as="select"
        label="Experience Level"
        name="experienceLevel"
        required
        value={data.experienceLevel}
        onChange={(event) => update("experienceLevel", event.target.value as TrainingFormData["experienceLevel"])}
        error={errors.experienceLevel}
      >
        <option value="">Select experience level</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </FormField>
      <FormField as="textarea" label="Message" name="message" value={data.message} onChange={(event) => update("message", event.target.value)} />

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
          <><Send className="h-4 w-4" /> Register for Training</>
        )}
      </button>
    </form>
  );
}

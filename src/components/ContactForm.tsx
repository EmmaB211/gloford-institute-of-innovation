import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import FormField from "./FormField";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): boolean => {
    const nextErrors: Partial<ContactFormData> = {};
    if (!data.name.trim()) nextErrors.name = "Full name is required.";
    if (!data.email.trim()) nextErrors.email = "Email address is required.";
    else if (!/^\S+@\S+\.\S+$/.test(data.email)) nextErrors.email = "Enter a valid email address.";
    if (!data.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!data.message.trim()) nextErrors.message = "Message is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      // Placeholder submission — replace with a real API call once a backend endpoint is available,
      // e.g. fetch(import.meta.env.VITE_API_URL + "/contact", { method: "POST", body: JSON.stringify(data) })
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
        <h3 className="text-lg text-neutral-charcoal">Message Sent</h3>
        <p className="text-sm text-neutral-gray">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-primary-700 hover:text-primary-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Name"
          name="name"
          required
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          error={errors.name}
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          required
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          error={errors.email}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Phone"
          name="phone"
          type="tel"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
        <FormField
          label="Subject"
          name="subject"
          required
          value={data.subject}
          onChange={(e) => setData({ ...data, subject: e.target.value })}
          error={errors.subject}
        />
      </div>
      <FormField
        as="textarea"
        label="Message"
        name="message"
        required
        value={data.message}
        onChange={(e) => setData({ ...data, message: e.target.value })}
        error={errors.message}
      />

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
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send Message
          </>
        )}
      </button>
    </form>
  );
}

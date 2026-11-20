import { supabase } from "./supabase";

export type FormSubmissionType = "contact" | "training" | "loan" | "grain";

export async function sendFormSubmission(
  type: FormSubmissionType,
  data: object,
): Promise<void> {
  if (!supabase) {
    throw new Error("Form email is not configured. Please contact the website administrator.");
  }

  const { error } = await supabase.functions.invoke("send-form-email", {
    body: { type, data },
  });

  if (error) {
    throw new Error("We could not send your form right now. Please try again later or contact us by email.");
  }
}

import { supabase } from "./supabase";

export type FormSubmissionType = "contact" | "training" | "loan" | "grain";

export interface FormSubmissionResult {
  emailSent: boolean;
}

async function getInvocationErrorMessage(error: unknown): Promise<string> {
  const context =
    error && typeof error === "object" && "context" in error
      ? error.context
      : null;

  if (!(context instanceof Response)) {
    return "We could not save your form right now. Please try again later or contact us by email.";
  }

  let responseBody: unknown;
  try {
    responseBody = await context.clone().json();
  } catch {
    return "We could not save your form right now. Please try again later or contact us by email.";
  }

  if (
    context.status === 404 &&
    responseBody &&
    typeof responseBody === "object" &&
    "code" in responseBody &&
    responseBody.code === "NOT_FOUND"
  ) {
    return "The form service has not been deployed to this website's Supabase project yet. Please contact the website administrator.";
  }

  if (
    responseBody &&
    typeof responseBody === "object" &&
    "error" in responseBody &&
    typeof responseBody.error === "string"
  ) {
    if (responseBody.error === "Form storage is not configured.") {
      return "Form storage is not configured on the server yet. Please contact the website administrator.";
    }
    if (responseBody.error === "The form could not be saved.") {
      return "The form could not be saved to the database. Please contact the website administrator.";
    }
  }

  return "We could not save your form right now. Please try again later or contact us by email.";
}

export async function sendFormSubmission(
  type: FormSubmissionType,
  data: object,
): Promise<FormSubmissionResult> {
  if (!supabase) {
    throw new Error("Form submission is not configured. Please contact the website administrator.");
  }

  const { data: result, error } = await supabase.functions.invoke<{
    stored?: boolean;
    emailSent?: boolean;
  }>("send-form-email", {
    body: { type, data },
  });

  if (error) {
    throw new Error(await getInvocationErrorMessage(error));
  }

  if (!result?.stored) {
    throw new Error("We could not confirm that your form was saved. Please try again later.");
  }

  return { emailSent: result.emailSent === true };
}

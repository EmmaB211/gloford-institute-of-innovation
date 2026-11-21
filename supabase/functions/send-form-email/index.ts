const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const formLabels: Record<string, string> = {
  contact: "Website contact message",
  training: "Training registration",
  loan: "Loan enquiry",
  grain: "Grain quantity submission",
};

const fieldLabels: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  subject: "Subject",
  message: "Message",
  fullName: "Full name",
  age: "Age",
  location: "Location",
  trainingInterest: "Training interest",
  experienceLevel: "Experience level",
  loanProduct: "Loan product",
  businessStatus: "Business currently operating",
  businessName: "Business or venture name",
  businessType: "Business activity",
  amountRequired: "Amount requested (UGX)",
  purpose: "Purpose of financing",
  groupName: "Group name",
  groupLeader: "Group leader",
  additionalInfo: "Additional information",
  grainType: "Grain type",
  amountKilograms: "Amount (kg)",
};

const requiredFields: Record<string, string[]> = {
  contact: ["name", "email", "subject", "message"],
  training: ["fullName", "phone", "email", "trainingInterest"],
  loan: ["loanProduct", "fullName", "phone", "email", "businessName", "businessType", "location", "amountRequired", "purpose"],
  grain: ["grainType", "amountKilograms"],
};

interface SubmissionRequest {
  type: string;
  data: Record<string, string>;
}

function jsonResponse(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (request: Request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed." }, 405);
  }

  let submission: SubmissionRequest;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 30000) {
      return jsonResponse({ error: "Form submission is too large." }, 413);
    }
    submission = JSON.parse(rawBody) as SubmissionRequest;
  } catch {
    return jsonResponse({ error: "Request body must be valid JSON." }, 400);
  }

  if (
    !submission ||
    typeof submission.type !== "string" ||
    !Object.hasOwn(formLabels, submission.type) ||
    !submission.data ||
    typeof submission.data !== "object" ||
    Array.isArray(submission.data)
  ) {
    return jsonResponse({ error: "Invalid form submission." }, 400);
  }

  const entries = Object.entries(submission.data);
  if (
    entries.length === 0 ||
    entries.length > 40 ||
    entries.reduce((total, [, value]) => total + (typeof value === "string" ? value.length : 0), 0) > 20000 ||
    entries.some(([key, value]) =>
      !key.trim() || key.length > 80 || typeof value !== "string" || value.length > 5000
    ) ||
    requiredFields[submission.type].some((field) => !submission.data[field]?.trim()) ||
    (submission.data.email !== undefined && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.data.email.trim()))
  ) {
    return jsonResponse({ error: "Form data is invalid or too large." }, 400);
  }

  const projectUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!projectUrl || !serviceRoleKey) {
    console.error("Form storage is missing required Supabase server configuration.");
    return jsonResponse({ error: "Form storage is not configured." }, 500);
  }

  let storageResponse: Response;
  try {
    storageResponse = await fetch(`${projectUrl.replace(/\/$/, "")}/rest/v1/form_submissions`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        form_type: submission.type,
        data: submission.data,
      }),
    });
  } catch (error) {
    console.error("Form storage request failed:", error);
    return jsonResponse({ error: "Could not reach form storage." }, 502);
  }

  if (!storageResponse.ok) {
    console.error("Supabase rejected a form submission with status:", storageResponse.status);
    return jsonResponse({ error: "The form could not be saved." }, 502);
  }

  const apiKey = Deno.env.get("RESEND_API_KEY");
  const recipient = Deno.env.get("EMAIL_TO");
  const sender = Deno.env.get("EMAIL_FROM");
  if (!apiKey || !recipient || !sender) {
    console.error("Email delivery is missing required server configuration.");
    return jsonResponse({ stored: true, emailSent: false }, 200);
  }

  const label = formLabels[submission.type];
  const subjectDetail =
    submission.data.subject ?? submission.data.businessName ?? submission.data.trainingInterest ?? "";
  const subject = `${label}${subjectDetail ? ` - ${subjectDetail.replace(/[\r\n]/g, " ").slice(0, 100)}` : ""}`;
  const text = entries
    .filter(([, value]) => value.trim())
    .map(([key, value]) => `${fieldLabels[key] ?? key.replace(/([A-Z])/g, " $1")}: ${value.trim()}`)
    .join("\n");
  const replyTo = submission.data.email?.trim();
  const validReplyTo = replyTo && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo) ? replyTo : undefined;

  let resendResponse: Response;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        subject,
        text,
        ...(validReplyTo ? { reply_to: validReplyTo } : {}),
      }),
    });
  } catch (error) {
    console.error("Email provider request failed:", error);
    return jsonResponse({ stored: true, emailSent: false }, 200);
  }

  if (!resendResponse.ok) {
    console.error("Email provider rejected a form email with status:", resendResponse.status);
    return jsonResponse({ stored: true, emailSent: false }, 200);
  }

  return jsonResponse({ stored: true, emailSent: true }, 200);
});

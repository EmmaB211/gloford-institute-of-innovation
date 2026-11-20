import Seo from "../lib/seo";

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Privacy Policy for GLOFORD Institute of Innovation."
      />
      <div className="container-page max-w-3xl py-20">
        <h1 className="text-page-title">Privacy Policy</h1>
        <p className="mt-6 text-sm leading-relaxed text-neutral-gray">
          Information submitted through the contact, training, loan enquiry and grain forms is
          transmitted to GLOFORD Institute of Innovation's configured company inbox using
          Supabase Edge Functions and Resend email delivery. These submissions are not stored
          in this website's database, but the delivery services may process them to send the email.
          Do not submit National ID numbers or attach sensitive documents through these forms.
          GLOFORD should publish a complete privacy policy covering data retention and individual
          privacy rights.
        </p>
      </div>
    </>
  );
}

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
          stored in a Supabase database and can be accessed by authorized GLOFORD site
          administrators. The website also attempts to email submissions to GLOFORD Institute
          of Innovation's configured company inbox using Supabase Edge Functions and Resend.
          Supabase and Resend may process this information to provide these services. Do not
          submit National ID numbers or attach sensitive documents through these forms. GLOFORD
          should publish a complete privacy policy covering data retention and individual privacy
          rights.
        </p>
      </div>
    </>
  );
}

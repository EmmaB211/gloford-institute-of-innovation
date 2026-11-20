# GLOFORD Institute of Innovation

## Run locally

Install dependencies and run the Vite development server:

```sh
npm ci
npm run dev
```

## Content management system setup

The admin console is available at `/admin`. It uses Supabase Auth for admin sign-in and Supabase Postgres with row-level security for published content. Until Supabase is configured, the public website uses its bundled default content and the admin console displays setup instructions.

1. Create a Supabase project.
2. Open the project's SQL Editor and run [`supabase/schema.sql`](./supabase/schema.sql).
3. In Supabase Authentication, create the initial admin user. Public sign-up is not exposed by this app.
4. Promote that account in the SQL Editor, replacing the email:

   ```sql
   insert into public.site_admins (user_id)
   select id from auth.users where email = 'admin@example.org';
   ```

5. Copy `.env.example` to `.env.local` and set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` from the Supabase project's API settings. These are public client values; never put a `service_role` key in the website.
6. Restart the dev server, open `/admin`, and sign in. Website settings, home/about copy, impact stats, service/program descriptions, and hero slides can be edited and published there.

For GitHub Pages deployment, add repository Actions variables named `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. The workflow injects them at build time. Keep admin account provisioning in Supabase; client-side CMS access is restricted by the database policies in the schema.

## Form email delivery

Contact messages, training registrations, loan enquiries and grain submissions are sent to the configured company inbox by the `send-form-email` Supabase Edge Function. Email delivery uses Resend; the API key stays in Supabase and is never included in the website bundle.

1. Verify a sender domain in Resend and create a Resend API key.
2. Set the Edge Function secrets in the Supabase project. Use the verified sender address for `EMAIL_FROM`:

   ```sh
   supabase secrets set RESEND_API_KEY=re_your_key EMAIL_TO=info@glofordinnovation.org "EMAIL_FROM=GLOFORD Institute <website@your-verified-domain.org>"
   ```

   The example routes submissions to the company address published on the website; change `EMAIL_TO` if they should go to another company inbox.
3. Deploy the function:

   ```sh
   supabase functions deploy send-form-email
   ```

4. Configure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` for the same project in local `.env.local` and in the website deployment environment.

The forms show a success message only after Resend accepts the email request. The loan form sends an enquiry and does not constitute a formal loan approval or include uploaded documents.

## Checks

```sh
npm run lint
npm run build
```

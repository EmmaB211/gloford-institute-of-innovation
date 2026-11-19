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

## Checks

```sh
npm run lint
npm run build
```

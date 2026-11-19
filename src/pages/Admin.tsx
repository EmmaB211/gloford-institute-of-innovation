import { useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { ArrowLeft, LogOut, Save, Settings, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { defaultSiteContent, mergeSiteContent } from "../content/siteContent";
import type { SiteContent } from "../content/siteContent";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

type AdminStatus = "checking" | "signedOut" | "checkingRole" | "notAdmin" | "editor";
type EditorSection = "settings" | "hero" | "home" | "about" | "collections";

const sections: { id: EditorSection; label: string }[] = [
  { id: "settings", label: "Website settings" },
  { id: "hero", label: "Home hero" },
  { id: "home", label: "Home page" },
  { id: "about", label: "About page" },
  { id: "collections", label: "Impact, services & programs" },
];

function TextInput({
  label,
  value,
  onChange,
  multiline = false,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  type?: string;
  required?: boolean;
}) {
  const className =
    "w-full rounded-lg border border-neutral-light bg-white px-4 py-3 text-sm text-neutral-charcoal focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100";

  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-neutral-charcoal">{label}</span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={4}
          className={className}
        />
      ) : (
        <input
          type={type}
          required={required}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={className}
        />
      )}
    </label>
  );
}

function JsonEditor({
  label,
  value,
  onChange,
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-neutral-charcoal">{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={12}
        spellCheck={false}
        className="w-full rounded-lg border border-neutral-light bg-white px-4 py-3 font-mono text-xs text-neutral-charcoal focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
      />
      {error && <span className="mt-1.5 block text-xs font-medium text-red-600">{error}</span>}
    </label>
  );
}

function FieldGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-5 md:grid-cols-2">{children}</div>;
}

export default function Admin() {
  const [status, setStatus] = useState<AdminStatus>(isSupabaseConfigured ? "checking" : "signedOut");
  const [user, setUser] = useState<User | null>(null);
  const [section, setSection] = useState<EditorSection>("settings");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [draft, setDraft] = useState<SiteContent>(defaultSiteContent);
  const [statsJson, setStatsJson] = useState(JSON.stringify(defaultSiteContent.impactStats, null, 2));
  const [servicesJson, setServicesJson] = useState(JSON.stringify(defaultSiteContent.services, null, 2));
  const [programsJson, setProgramsJson] = useState(JSON.stringify(defaultSiteContent.programs, null, 2));
  const [slidesJson, setSlidesJson] = useState(JSON.stringify(defaultSiteContent.hero.slides, null, 2));
  const [jsonError, setJsonError] = useState("");

  const loadContent = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("site_content")
      .select("content")
      .eq("id", "main")
      .maybeSingle();

    if (error) {
      setMessage(`Could not load saved site content: ${error.message}`);
      return;
    }

    const content = data?.content
      ? mergeSiteContent(data.content as Partial<SiteContent>)
      : defaultSiteContent;
    setDraft(content);
    setStatsJson(JSON.stringify(content.impactStats, null, 2));
    setServicesJson(JSON.stringify(content.services, null, 2));
    setProgramsJson(JSON.stringify(content.programs, null, 2));
    setSlidesJson(JSON.stringify(content.hero.slides, null, 2));
  };

  const verifyAdmin = async (currentUser: User) => {
    if (!supabase) return;
    setStatus("checkingRole");
    const { data, error } = await supabase
      .from("site_admins")
      .select("user_id")
      .eq("user_id", currentUser.id)
      .maybeSingle();

    if (error) {
      setMessage(`Could not verify admin access: ${error.message}`);
      setStatus("notAdmin");
      return;
    }
    if (!data) {
      setStatus("notAdmin");
      return;
    }

    setUser(currentUser);
    setStatus("editor");
    await loadContent();
  };

  useEffect(() => {
    let active = true;
    void supabase?.auth.getSession().then(({ data, error }) => {
      if (!active) return;
      if (error) {
        setMessage(`Could not restore the admin session: ${error.message}`);
        setStatus("signedOut");
      } else if (data.session?.user) {
        void verifyAdmin(data.session.user);
      } else {
        setStatus("signedOut");
      }
    });

    return () => {
      active = false;
    };
  }, []);

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    if (!supabase) return;
    setMessage("");
    setStatus("checkingRole");
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(`Sign-in failed: ${error.message}`);
      setStatus("signedOut");
      return;
    }
    await verifyAdmin(data.user);
  };

  const handleLogout = async () => {
    if (!supabase) return;
    const { error } = await supabase.auth.signOut();
    if (error) {
      setMessage(`Could not sign out: ${error.message}`);
      return;
    }
    setUser(null);
    setStatus("signedOut");
  };

  const updateText = (
    group: "settings" | "hero" | "home" | "about",
    key: string,
    value: string,
  ) => {
    setMessage("");
    setDraft((current) => ({
      ...current,
      [group]: { ...current[group], [key]: value },
    }));
  };

  const handleSave = async () => {
    if (!supabase || !user) return;
    let impactStats: SiteContent["impactStats"];
    let services: SiteContent["services"];
    let programs: SiteContent["programs"];
    let slides: SiteContent["hero"]["slides"];

    try {
      const parsedStats: unknown = JSON.parse(statsJson);
      const parsedServices: unknown = JSON.parse(servicesJson);
      const parsedPrograms: unknown = JSON.parse(programsJson);
      const parsedSlides: unknown = JSON.parse(slidesJson);
      const isObject = (value: unknown): value is Record<string, unknown> =>
        typeof value === "object" && value !== null && !Array.isArray(value);
      const isContentItems = (value: unknown): value is SiteContent["services"] =>
        Array.isArray(value) &&
        value.every((item) => isObject(item) && typeof item.id === "string" && typeof item.title === "string" && typeof item.description === "string");
      const isStats = (value: unknown): value is SiteContent["impactStats"] =>
        Array.isArray(value) &&
        value.every((item) =>
          isObject(item) &&
          typeof item.id === "string" &&
          typeof item.label === "string" &&
          typeof item.value === "number" &&
          Number.isFinite(item.value) &&
          typeof item.suffix === "string",
        );
      const isSlides = (value: unknown): value is SiteContent["hero"]["slides"] =>
        Array.isArray(value) &&
        value.length > 0 &&
        value.every((slide) =>
          isObject(slide) &&
          typeof slide.src === "string" &&
          typeof slide.alt === "string" &&
          typeof slide.label === "string",
        );

      if (!isStats(parsedStats)) throw new Error("Impact statistics must be an array of id, label, numeric value and suffix fields.");
      if (!isContentItems(parsedServices)) throw new Error("Services must be an array of id, title and description fields.");
      if (!isContentItems(parsedPrograms)) throw new Error("Programs must be an array of id, title and description fields.");
      if (!isSlides(parsedSlides)) throw new Error("Hero slides must be an array with at least one slide, each with src, alt and label fields.");

      impactStats = parsedStats;
      services = parsedServices;
      programs = parsedPrograms;
      slides = parsedSlides;
    } catch (error) {
      setJsonError(error instanceof Error ? error.message : "Check the JSON content and try again.");
      return;
    }

    const content: SiteContent = {
      ...draft,
      impactStats,
      services,
      programs,
      hero: { ...draft.hero, slides },
    };

    setJsonError("");
    setMessage("");
    setSaving(true);
    const { error } = await supabase.from("site_content").upsert(
      { id: "main", content, updated_by: user.id, updated_at: new Date().toISOString() },
      { onConflict: "id" },
    );
    setSaving(false);
    if (error) {
      setMessage(`Could not save changes: ${error.message}`);
      return;
    }
    setDraft(content);
    setMessage("Changes saved. They are now live on the public website.");
  };

  if (!isSupabaseConfigured) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-neutral-offwhite px-4 py-12">
        <div className="max-w-2xl rounded-2xl border border-neutral-light bg-white p-8 shadow-sm">
          <Settings className="h-10 w-10 text-primary-700" aria-hidden="true" />
          <h1 className="mt-4 text-2xl text-neutral-charcoal">CMS setup required</h1>
          <p className="mt-3 text-sm leading-relaxed text-neutral-gray">
            Connect a Supabase project to enable admin login and persistent website editing. Follow the setup steps in README.md, then add the project URL and anon key to your environment.
          </p>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700">
            <ArrowLeft className="h-4 w-4" /> Return to website
          </Link>
        </div>
      </main>
    );
  }

  if (status !== "editor") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-neutral-offwhite px-4 py-12">
        <div className="w-full max-w-md rounded-2xl border border-neutral-light bg-white p-8 shadow-sm">
          <ShieldCheck className="h-10 w-10 text-primary-700" aria-hidden="true" />
          <h1 className="mt-4 text-2xl text-neutral-charcoal">GLOFORD Site Admin</h1>
          {status === "checking" || status === "checkingRole" ? (
            <p className="mt-4 text-sm text-neutral-gray">Checking admin access…</p>
          ) : status === "notAdmin" ? (
            <>
              <p className="mt-4 text-sm text-neutral-gray">
                This account is not listed as a site administrator. Ask the Supabase project owner to grant admin access.
              </p>
              <button type="button" onClick={() => void handleLogout()} className="mt-4 text-sm font-semibold text-primary-700">
                Sign out of this account
              </button>
            </>
          ) : (
            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <TextInput label="Admin email" type="email" required value={email} onChange={setEmail} />
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-neutral-charcoal">Password</span>
                <input
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-lg border border-neutral-light px-4 py-3 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-primary-700 px-6 py-3 font-semibold text-white transition hover:bg-primary-800"
              >
                Sign in
              </button>
            </form>
          )}
          {message && <p role="alert" className="mt-4 text-sm text-red-600">{message}</p>}
          <Link to="/" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700">
            <ArrowLeft className="h-4 w-4" /> Return to website
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-offwhite">
      <header className="border-b border-neutral-light bg-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-700">Content Management</p>
            <h1 className="mt-1 text-2xl text-neutral-charcoal">Website configuration</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-medium text-primary-700 hover:text-primary-800">View website</Link>
            <button type="button" onClick={handleLogout} className="inline-flex items-center gap-2 text-sm font-medium text-neutral-charcoal">
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="container-page grid gap-8 py-8 lg:grid-cols-[240px_1fr]">
        <nav aria-label="CMS sections" className="flex gap-2 overflow-auto lg:flex-col">
          {sections.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSection(item.id)}
              className={`shrink-0 rounded-lg px-4 py-3 text-left text-sm font-medium ${
                section === item.id ? "bg-primary-700 text-white" : "bg-white text-neutral-charcoal hover:bg-primary-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <section className="rounded-2xl border border-neutral-light bg-white p-6 shadow-sm sm:p-8">
          {section === "settings" && (
            <div className="space-y-5">
              <h2 className="text-xl text-neutral-charcoal">Website settings</h2>
              <FieldGrid>
                <TextInput label="Website name" value={draft.settings.siteName} onChange={(value) => updateText("settings", "siteName", value)} />
                <TextInput label="Tagline" value={draft.settings.tagline} onChange={(value) => updateText("settings", "tagline", value)} />
                <TextInput label="Contact email" value={draft.settings.contactEmail} onChange={(value) => updateText("settings", "contactEmail", value)} />
                <TextInput label="Contact phone" value={draft.settings.contactPhone} onChange={(value) => updateText("settings", "contactPhone", value)} />
                <TextInput label="SEO page title" value={draft.settings.seoTitle} onChange={(value) => updateText("settings", "seoTitle", value)} />
                <TextInput label="SEO description" value={draft.settings.seoDescription} onChange={(value) => updateText("settings", "seoDescription", value)} multiline />
              </FieldGrid>
              <TextInput label="Office address" value={draft.settings.address} onChange={(value) => updateText("settings", "address", value)} multiline />
            </div>
          )}

          {section === "hero" && (
            <div className="space-y-5">
              <h2 className="text-xl text-neutral-charcoal">Home page hero</h2>
              <TextInput label="Eyebrow text" value={draft.hero.eyebrow} onChange={(value) => updateText("hero", "eyebrow", value)} />
              <TextInput label="Main heading" value={draft.hero.title} onChange={(value) => updateText("hero", "title", value)} />
              <TextInput label="Description" value={draft.hero.description} onChange={(value) => updateText("hero", "description", value)} multiline />
              <FieldGrid>
                <TextInput label="Primary button label" value={draft.hero.primaryButtonLabel} onChange={(value) => updateText("hero", "primaryButtonLabel", value)} />
                <TextInput label="Primary button path" value={draft.hero.primaryButtonPath} onChange={(value) => updateText("hero", "primaryButtonPath", value)} />
                <TextInput label="Secondary button label" value={draft.hero.secondaryButtonLabel} onChange={(value) => updateText("hero", "secondaryButtonLabel", value)} />
                <TextInput label="Secondary button path" value={draft.hero.secondaryButtonPath} onChange={(value) => updateText("hero", "secondaryButtonPath", value)} />
              </FieldGrid>
              <p className="text-sm text-neutral-gray">Use publicly accessible image URLs for each slide. The current images are bundled with the site.</p>
              <JsonEditor label="Hero slides (JSON: image URL, alt text and caption)" value={slidesJson} onChange={(value) => { setMessage(""); setSlidesJson(value); }} error={jsonError} />
            </div>
          )}

          {section === "home" && (
            <div className="space-y-5">
              <h2 className="text-xl text-neutral-charcoal">Home page sections</h2>
              <TextInput label="Pillars section heading" value={draft.home.pillarsTitle} onChange={(value) => updateText("home", "pillarsTitle", value)} />
              <TextInput label="Pillars section description" value={draft.home.pillarsDescription} onChange={(value) => updateText("home", "pillarsDescription", value)} multiline />
              <TextInput label="Story section heading" value={draft.home.storyTitle} onChange={(value) => updateText("home", "storyTitle", value)} />
              <TextInput label="Story section description" value={draft.home.storyDescription} onChange={(value) => updateText("home", "storyDescription", value)} multiline />
              <TextInput label="Programs heading" value={draft.home.programsTitle} onChange={(value) => updateText("home", "programsTitle", value)} />
              <TextInput label="Programs description" value={draft.home.programsDescription} onChange={(value) => updateText("home", "programsDescription", value)} multiline />
            </div>
          )}

          {section === "about" && (
            <div className="space-y-5">
              <h2 className="text-xl text-neutral-charcoal">About page</h2>
              <TextInput label="Introduction" value={draft.about.introduction} onChange={(value) => updateText("about", "introduction", value)} multiline />
              <TextInput label="Vision" value={draft.about.vision} onChange={(value) => updateText("about", "vision", value)} multiline />
              <TextInput label="Mission" value={draft.about.mission} onChange={(value) => updateText("about", "mission", value)} multiline />
            </div>
          )}

          {section === "collections" && (
            <div className="space-y-6">
              <h2 className="text-xl text-neutral-charcoal">Impact, services & programs</h2>
              <p className="text-sm text-neutral-gray">
                Edit these lists as valid JSON. Keep each existing item ID so the website can match its icon, category and links.
              </p>
              <JsonEditor label="Impact statistics" value={statsJson} onChange={(value) => { setMessage(""); setStatsJson(value); }} error={jsonError} />
              <JsonEditor label="Services (ID, title and description)" value={servicesJson} onChange={(value) => { setMessage(""); setServicesJson(value); }} error={jsonError} />
              <JsonEditor label="Programs (ID, title and description)" value={programsJson} onChange={(value) => { setMessage(""); setProgramsJson(value); }} error={jsonError} />
            </div>
          )}

          {message && (
            <p role={message.startsWith("Could not") ? "alert" : "status"} className={`mt-6 text-sm ${message.startsWith("Could not") ? "text-red-600" : "text-primary-700"}`}>
              {message}
            </p>
          )}
          <button
            type="button"
            disabled={saving}
            onClick={() => void handleSave()}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-700 px-7 py-3 font-semibold text-white transition hover:bg-primary-800 disabled:opacity-60"
          >
            <Save className="h-4 w-4" /> {saving ? "Saving…" : "Save and publish"}
          </button>
        </section>
      </div>
    </main>
  );
}

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Link2, BarChart3, LayoutDashboard, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant URL Shortening",
    description:
      "Paste any long URL and get a clean, shareable short link in seconds. No sign-up required to try it out.",
  },
  {
    icon: BarChart3,
    title: "Click Analytics",
    description:
      "Track every click on your links. See how many times each link has been visited and monitor performance over time.",
  },
  {
    icon: LayoutDashboard,
    title: "Manage Your Links",
    description:
      "A personal dashboard to view, edit, and delete all your shortened links in one place.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center gap-8 px-6 py-24 text-center md:py-36">
        <div className="flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
          <Link2 className="size-3.5" />
          <span>Simple. Fast. Reliable.</span>
        </div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
          Shorten URLs.{" "}
          <span className="text-muted-foreground">Track every click.</span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Create short, memorable links in seconds and get real-time analytics
          to understand how your audience engages with your content.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <SignUpButton mode="modal">
            <Button size="lg" className="px-8">
              Get started for free
            </Button>
          </SignUpButton>
          <SignInButton mode="modal">
            <Button variant="outline" size="lg" className="px-8">
              Sign in
            </Button>
          </SignInButton>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Everything you need to manage your links
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 text-card-foreground"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center gap-6 px-6 py-24 text-center">
        <h2 className="max-w-lg text-2xl font-semibold tracking-tight md:text-3xl">
          Ready to start shortening?
        </h2>
        <p className="max-w-md text-muted-foreground">
          Join today and take control of your links. It&apos;s free to get
          started.
        </p>
        <SignUpButton mode="modal">
          <Button size="lg" className="px-10">
            Create your account
          </Button>
        </SignUpButton>
      </section>
    </main>
  );
}

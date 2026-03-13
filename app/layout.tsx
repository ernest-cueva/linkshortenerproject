import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LinkShort — Shorten & Track URLs",
  description:
    "Create short, memorable links in seconds and track every click with real-time analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider appearance={{ theme: shadcn }}>
          <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur">
            <span className="flex items-center gap-2 font-semibold text-foreground">
              <Link2 className="size-5" aria-hidden="true" />
              LinkShort
            </span>
            <div className="flex items-center gap-2">
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <Button variant="ghost">Sign in</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button>Sign up</Button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}

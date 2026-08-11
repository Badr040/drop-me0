import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ReduxProvider from "@/providers/ReduxProvider";

export const metadata: Metadata = {
  title: "Drop Me - Smart Recycling Solution",
  description:
    "Join Drop Me and earn rewards while helping the environment through smart recycling.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ReduxProvider>{children}</ReduxProvider>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}

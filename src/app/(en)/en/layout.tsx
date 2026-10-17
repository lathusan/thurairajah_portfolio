import type { Metadata, Viewport } from "next";
import "../../fonts";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Sinniah Thurairajah | Mridangam Artist",
  description: "Sinniah Thurairajah – mridangam artist, teacher and examiner. Jaffna, Sri Lanka.",
  alternates: { languages: { ta: "/" } },
};
export const viewport: Viewport = { themeColor: "#2a0d12" };

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

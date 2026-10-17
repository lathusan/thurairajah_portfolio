import type { Metadata, Viewport } from "next";
import "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "சின்னையா துரைராஜா | மிருதங்கக் கலைஞர்",
  description: "சின்னையா துரைராஜா – மிருதங்கக் கலைஞர், ஆசிரியர், பரீட்சகர். யாழ்ப்பாணம், இலங்கை.",
  alternates: { languages: { en: "/en" } },
};
export const viewport: Viewport = { themeColor: "#2a0d12" };

export default function TamilLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ta">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

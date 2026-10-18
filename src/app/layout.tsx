import type { Metadata } from "next";
import { Cinzel, Source_Sans_3 } from "next/font/google";
import { SITE } from "@/lib/config";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${SITE.name} · ${SITE.tagline}`,
  description:
    "Tacos, campechanas y costillas de jabalí en Chalco. Hornería artesanal — El Asador de Odin.",
  openGraph: {
    title: SITE.name,
    description: SITE.heroLine,
    images: [{ url: "/logo-asador-odin.jpg" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col texture-char">{children}</body>
    </html>
  );
}

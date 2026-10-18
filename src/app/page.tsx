import { Contact } from "@/components/contact";
import { FireAtmosphere } from "@/components/fire-atmosphere";
import { Hero } from "@/components/hero";
import { Locations } from "@/components/locations";
import { MenuSection } from "@/components/menu-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappFab } from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <MenuSection />
        <FireAtmosphere />
        <Locations />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsappFab />
    </>
  );
}

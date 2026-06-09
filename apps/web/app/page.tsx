import { Suspense } from "react";
import { Navbar } from "@/components/landing/navbar";
import { AccountDeletedBanner } from "@/components/landing/account-deleted-banner";
import { Hero } from "@/components/landing/hero";
import { TrustedBy } from "@/components/landing/trusted-by";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Integrations } from "@/components/landing/integrations";
import { Benefits } from "@/components/landing/benefits";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Suspense fallback={null}>
        <AccountDeletedBanner />
      </Suspense>
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <Integrations />
        <Benefits />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

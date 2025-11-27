import { DealsGrid } from "@/components/DealsGrid";
import { ShareBanner } from "@/components/ShareBanner";
import { TermsNotice } from "@/components/TermsNotice";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#fffdf0] text-right">
      <DealsGrid />
      <TermsNotice />
      <ShareBanner />
    </main>
  );
}

import Hero from "@/src/components/sections/Hero"
import FuturaExperience from "@/src/components/FuturaExperience";
import Collections from "@/src/components/sections/Collections";
import FAQ from "@/src/components/sections/FAQ";
import FeaturedMasterpiece from "@/src/components/sections/FeaturedMasterpiece";
import MuseList from "@/src/components/sections/MuseList";
import StatementStrip from "@/src/components/sections/StatementStrip";


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden">
  
      <Hero />
      <FeaturedMasterpiece />
      <FuturaExperience />
      <StatementStrip />
      <Collections />
      <MuseList />
      <FAQ />
    </main>
  );
}
import Hero from "../components//sections/Hero";
import FuturaExperience from "../components/FuturaExperience";
import Collections from "@/src/components/sections/Collections";
import FAQ from "../components/sections/FAQ";
import FeaturedMasterpiece from "../components/sections/FeaturedMasterpiece";
import MuseList from "../components/sections/MuseList";
import StatementStrip from "../components/sections/StatementStrip";


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
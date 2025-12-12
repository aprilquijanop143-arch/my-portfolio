import { BentoCard } from "./components/ui/BentoCard";
import { HeroBento } from "./components/HeroBento";
import { SkillsBento } from "./components/SkillsBento";
import { ValueBento } from "./components/ValueBento";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* BENTO GRID HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

          {/* Hero Tile - Extended to fill space */}
          <BentoCard colSpan={3} rowSpan={2} className="md:col-span-3 md:row-span-2 lg:col-span-3 lg:row-span-2">
            <HeroBento />
          </BentoCard>

          {/* Skills Tile */}
          <BentoCard colSpan={1} rowSpan={1} className="md:col-span-3 lg:col-span-1">
            <SkillsBento />
          </BentoCard>

          {/* Value Tile */}
          <BentoCard colSpan={1} rowSpan={1} className="md:col-span-3 lg:col-span-1">
            <ValueBento />
          </BentoCard>

        </div>

        {/* SECTIONS BELOW GRID */}
        <div className="space-y-24 mt-24">
          <Projects />
          <Services />
          <Contact />
        </div>

        <footer className="py-8 text-center text-zinc-600 text-sm">
          © {new Date().getFullYear()} April Quijano. All rights reserved.
        </footer>
      </div>
    </main>
  );
}

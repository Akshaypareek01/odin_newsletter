import Blog from "@/components/sections/blog";
import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import Problem from "@/components/sections/problem";
import Problem2 from "@/components/sections/problem2";

import Solution from "@/components/sections/solution";
import { SparklesText } from "@/components/ui/sparkles-text"

export default function Home() {
  return (
    <main>
     
      <Hero />
      <Problem />
      <Problem2 />
      <Solution />
      
      <CTA />
    </main>
  );
}

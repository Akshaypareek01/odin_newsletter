import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap } from "lucide-react";
import { DottedMap } from "@/components/ui/dotted-map"
import { SparklesText } from "@/components/ui/sparkles-text"
import { BorderBeam } from "@/components/magicui/border-beam"
import { Highlighter } from "@/components/ui/highlighter"
import FlickeringGrid from "@/components/magicui/flickering-grid"

export function FlickeringGridRoundedDemo() {
  return (
    <div className="bg-background relative size-[600px] w-full overflow-hidden rounded-lg border">
      <FlickeringGrid
        className="relative inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={800}
      />
    </div>
  )
}


const problems = [
  {
    title: "Native AI-powered products & platforms",
    description:
      "Build intelligent, self-learning systems that automate workflows, predict outcomes, and scale with your business in real time.",
    icon: Brain,
  },
  {
    title: "Next Generation End-to-end digital transformation",
    description:
      "From strategy to execution — we help you reimagine processes, integrate AI, and accelerate growth across every layer of your organization.",
    icon: Zap,
  },
  {
    title: "Design, marketing, and automation intelligence",
    description:
      "Blend creativity with data-driven automation to craft experiences that engage customers, optimize campaigns, and drive measurable results.",
    icon: Shield,
  },
];

export default function Component() {
  return (
  
   <div className="bg-background relative  w-full overflow-hidden">
     <Section className="absolute" id="whats-in-it-for-you" >
    
     <SparklesText sparklesCount={4} className="text-center text-3xl font-medium leading-tight text-foreground" > What’s In It For You</SparklesText>
      <br />
      <p className="text-justify text-lg text-muted-foreground">At Odin AI, we believe <Highlighter action="underline" color="#FF9800"> AI should work for your business</Highlighter>,  not overwhelm it. 
        <br /><br />
      In a world flooded with hype, we focus on what truly matters — practical, results-driven intelligence tailored to your goals.
      <br /><br />
      we cut through the noise to bring you real, results-driven AI — solutions that automate workflows, improve decisions, 
      and deliver measurable business impact. Our approach is custom-fit, not one-size-fits-all, ensuring seamless integration 
      with your existing systems and scalable growth. 
      <br /><br />
      Every innovation we build is designed for ROI — Return on Intelligence, turning advanced technology into higher efficiency, smarter insights, and faster performance.
      <br /><br />
      
      </p>
      
     
     </Section>
      <FlickeringGrid
        className="relative inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.3}
        flickerChance={0.1}
        height={900}
        width={400}
      />

    
    </div>
   
  );
}

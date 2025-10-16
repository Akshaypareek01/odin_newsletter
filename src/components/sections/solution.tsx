"use client";

import FlickeringGrid from "@/components/magicui/flickering-grid";
import Ripple from "@/components/magicui/ripple";
import Safari from "@/components/safari";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SparklesText } from "@/components/ui/sparkles-text"
import { Highlighter } from "../ui/highlighter";

const features = [
  {
    title: "StepsStamp — Where Blockchain Meets IoT",
    description:
      "Earlier this year, We built a next-gen ecosystem that rewards real-world activity through blockchain-backed tracking.StepsStamp merges IoT sensors with crypto technology, turning everyday motion into verifiable, digital value.",
    className: "hover:bg-red-500/10 transition-all duration-500 ease-out",
    content: (
      <>
        <Safari
          src={`/ssbs.png`}
          className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
  {
    title: "Addons — AI in Manufacturing & Supply Chain",
    description:
      "We’re redefining operational intelligence for the real world. Addons integrates AI-driven demand forecasting, inventory optimization, and production analytics to help factories make smarter, faster decisions.",
    className:
      "order-3 xl:order-none hover:bg-blue-500/10 transition-all duration-500 ease-out",
    content: (
      <Safari
        src={`/dashboards.png`}
   
        className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
      />
    ),
  },
  {
    title: "VSC UNIA — Marketplace for Professionals & Procurement",
    description:
      "A breakthrough in how professional services are discovered and managed.VSC UNIA connects CAs, legal experts, and consultants with businesses through a transparent, intelligent marketplace built for trust and efficiency.",
    className:
      "md:row-span-2 hover:bg-orange-500/10 transition-all duration-500 ease-out",
    content: (
      <>
        <FlickeringGrid
          className="z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
          squareSize={4}
          gridGap={6}
          color="#000"
          maxOpacity={0.1}
          flickerChance={0.1}
          height={800}
          width={200}
        />
        <Safari
          src={`/dashboard2.png`}
         
          className="-mb-48 ml-12 mt-16 h-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-x-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
  {
    title: "ProwPlus AI — Our In-House AI-Native ERP System",
    description:
      "Our flagship platform designed to supercharge business productivity.ProwPlus AI is a modular ERP powered by built-in AI agents, automating everything from projects and sales to finance and marketing — a true reflection of our mission to build intelligent, self-evolving systems.",
    className:
      "flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-green-500/10 transition-all duration-500 ease-out",
    content: (
      <>
        <Ripple className="absolute -bottom-full" />
        <Safari
          src={`/dashboard2.png`}
          url="https://acme.ai"
          className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
];

export default function Component() {
  return (
    <Section
    
      className="bg-neutral-100 dark:bg-neutral-900"
    > 
    
  <div className="flex flex-col items-center justify-center text-center space-y-4">
    <SparklesText sparklesCount={7} className="text-2xl font-medium leading-tight text-foreground">
      Highlights of this year
    </SparklesText>
    
    <div className="text-lg text-muted-foreground max-w-4xl mx-auto space-y-4">
      <p>This year has been a landmark in our journey — a blend of innovation, collaboration, and purposeful creation.</p>
      <p>Here are some of the projects that defined our evolution from <Highlighter action="underline" color="#FF9800"> The Odin </Highlighter> to <Highlighter action="underline" color="#FF9800"> Odin AI </Highlighter></p>
    </div>
  </div>


      <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={cn(
              "group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl",
              feature.className
            )}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-semibold mb-2 text-primary">
                {feature.title}
              </h3>
              <p className="text-foreground">{feature.description}</p>
            </div>
            {feature.content}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

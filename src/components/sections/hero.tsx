"use client";

import { motion } from "framer-motion";

import { Icons } from "@/components/icons";
import HeroVideoDialog from "@/components/magicui/hero-video";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { GridBeams } from "@/components/magicui/grid-beams";
import { AuroraText } from "@/components/magicui/aurora-text";
import { RainbowButton } from "../magicui/rainbow-button";
import Logos from "@/components/sections/logos";


const ease = [0.16, 1, 0.3, 1];

function HeroPill() {
  return (
    <motion.a
      href="/blog/introducing-acme-ai"
      className="flex w-auto items-center space-x-2 rounded-full bg-primary/20 px-2 py-1 ring-1 ring-accent whitespace-pre"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="w-fit rounded-full bg-accent px-2 py-0.5 text-center text-xs font-medium text-primary sm:text-sm">
      ✨ Happy Diwali
      </div>
      <p className="text-xs font-medium text-white sm:text-sm">
     The Annual Newsletter
      </p>
      <svg
        width="12"
        height="12"
        className="ml-1"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
          fill="hsl(var(--primary))"
        />
      </svg>
    </motion.a>
  );
}

function HeroTitles() {
  return (
    <div className="flex w-full max-w-4xl flex-col space-y-4 overflow-hidden pt-8">
      <motion.h1
        className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      >
        {["The Odin", "Is Now", "  "].map((text, index) => (
          <motion.span
            key={index}
            className="inline-block px-1 md:px-2 text-balance font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease,
            }}
          >
            {text === "  " ? (
              <>
                {text} <AuroraText 
                colors={["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"]} 
                speed={1}>Odin AI</AuroraText>
              </>
            ) : (
              text
            )}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="text-justify text-lg "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
       
       As we celebrate Diwali and the spirit of new beginnings, we’re thrilled to share an exciting milestone — The Odin is now Odin AI. </motion.p>
    <br />
    <motion.p
        className="text-justify text-lg "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
  Over the past years, we’ve grown from a passionate digital studio into a company that helps businesses harness the power of technology, design, and human creativity. This transition marks our evolution into an AI-native innovation lab, building solutions that think, adapt, and grow with you.  </motion.p>
    <br />
 
  
  
  
  </div>
  );
}

function HeroCTA() {
  const scrollToWhyChange = () => {
    const element = document.getElementById('why-the-change');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <motion.div
        className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <button onClick={scrollToWhyChange}>
          <RainbowButton
            size='lg'
            style={{ fontSize: '16px', padding: '25px 50px' }}
          >
            Explore Now
          </RainbowButton>
        </button>
      </motion.div>
     
    </>
  );
}

function HeroImage() {
  return (
    <motion.div
      className="relative mx-auto flex w-full items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease }}
    >
      <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="/dashboard.png"
        thumbnailAlt="Hero Video"
        className="border rounded-lg shadow-lg max-w-screen-lg mt-16"
      />
    </motion.div>
  );
}


export default function Hero2() { 
  return (
    <GridBeams
    gridSize={0}
    gridColor="rgba(255, 255, 255, 0.2)"
    rayCount={20}
    rayOpacity={0.15}
    raySpeed={1.5}
    rayLength="30vh"
    gridFadeStart={5}
    gridFadeEnd={90}
    className="h-full w-full"
    >
    <div className="relative flex size-full min-h-screen items-start justify-center overflow-visible rounded-lg w-full">
      <GridPattern
        width={100}
        height={100}
        x={-10}
        y={-10}
        strokeDasharray="0"
        className={cn(
          "fill-gray-400/20 stroke-gray-400/20",
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        )}
      />
       <section id="hero">
      <div className="relative flex w-full flex-col items-center justify-start px-4 pt-20 pb-20 sm:px-6 sm:pt-24 md:pt-20 lg:px-8">
        <HeroPill />
        <HeroTitles />
        <HeroCTA />
    
     <br />  <br /> <br />
      </div>
    </section>
    <div className="pointer-events-none w-full absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4"></div>

    </div>
    </GridBeams>
  );
}
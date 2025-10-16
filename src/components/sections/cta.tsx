import { Icons } from "@/components/icons";
import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LightRays } from "@/components/ui/light-rays"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import { Input } from "../ui/input";


export default function CtaSection() {
  return (
    <Section
      id="cta"
      title="Susbcribe for the most valuable insights and updates in form of a Monthly Newsletter"
     
      className="bg-primary/10 rounded-xl"
    > <LightRays />
      <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
     
     <Input type="email" placeholder="Your Email" />
        <RainbowButton variant="default" className="w-full sm:w-auto">Subscribe Now</RainbowButton>
      </div> 
    </Section>
  );
}

import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap } from "lucide-react";
import { DottedMap } from "@/components/ui/dotted-map"
import { SparklesText } from "@/components/ui/sparkles-text"
import { BorderBeam } from "@/components/magicui/border-beam"
import { Highlighter } from "@/components/ui/highlighter"


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
    <Section id="why-the-change" >
      <div style={{marginTop: '-50px'}}>
        <SparklesText sparklesCount={7} className="text-center text-3xl font-medium leading-tight text-foreground" > Why The Change?</SparklesText>
        <br />
        <p className="text-center text-lg text-muted-foreground">Because <Highlighter action="underline" color="#FF9800"> the  world is shifting </Highlighter>— and so are we.<br />
        Odin AI represents our commitment to create smarter, faster, and more meaningful impact across:</p>
      </div>

      <div className="relative">
        {/* Background Map */}
       
        
        {/* Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {problems.map((problem, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.2} inView>
              <Card className="bg-background/80 backdrop-blur-sm border border-border/50 shadow-none">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">{problem.title}</h4>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
                <BorderBeam
        duration={15}
        size={100}
        className="from-transparent via-red-500 to-transparent"
      />
     
              </Card>
            </BlurFade>
          ))}
          
        </div>
      </div>
     
    </Section>
  );
}

"use client";

import Drawer from "@/components/drawer";
import { Icons } from "@/components/icons";
import Menu from "@/components/menu";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export default function Header() {
  const [addBorder, setAddBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setAddBorder(true);
      } else {
        setAddBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 py-2 transition-all duration-300",
        addBorder 
          ? "bg-background/80 backdrop-blur-md border-border/80" 
          : "bg-background/80 backdrop-blur-md"
      )}
    >
      <div className="flex items-center container mx-auto">
        <Link
          href="/"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2"
        >
          <Image
            src="/pp_icons.png"
            alt="Logo"
            className="h-[60px] w-auto object-contain"
            width={60}
            height={60}
          />
          <span className="font-bold text-xl" style={{ fontWeight: "700" }}>PROWPLUS</span>
        </Link>

        <div className="hidden lg:block flex-1">
          <div className="flex items-center justify-center">
            <nav>
              <Menu />
            </nav>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="gap-2 flex">
            <Link
              href="/login"
              className={buttonVariants({ variant: "outline" })}
            >
              Login
            </Link>
            <RainbowButton
              className="w-full sm:w-auto px-6 py-2"
            >
              Get Started for Free
            </RainbowButton>
          </div>
        </div>
        <div className="mt-2 cursor-pointer block lg:hidden">
          <Drawer />
        </div>
      </div>
      <hr
        className={cn(
          "absolute w-full bottom-0 transition-opacity duration-300 ease-in-out",
          addBorder ? "opacity-100" : "opacity-0"
        )}
      />
    </header>
  );
}

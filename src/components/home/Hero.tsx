"use client";

import { motion } from "framer-motion";
import LiquidEther from "../effects/LiquidEther";
import GlowButton from "../ui/GlowButton";
import CtaButton from "@/components/ui/CtaButton";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background Fluid */}
      <div className="absolute inset-0 opacity-80">
        <LiquidEther
          colors={[
            "#6f4ef2",
            "#c998ff",
            "#7b61ff",
          ]}
          mouseForce={30}
          cursorSize={110}
          isViscous={false}
          viscous={20}
          iterationsViscous={12}
          iterationsPoisson={12}
          resolution={0.25}
          isBounce={false}
          autoDemo
          autoSpeed={0.4}
          autoIntensity={2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      {/* Gradient Glow */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.25),transparent_35%)]" />

      {/* Content */}
      {/* Content */}
<div className="relative z-10 h-full flex items-center">
  <div className="container mx-auto px-6">
    <div className="grid lg:grid-cols-12 gap-10 items-end">

      {/* LEFT SIDE */}
      <div className="lg:col-span-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            uppercase
            tracking-[0.35em]
            text-[12px]
            text-white/50
            mb-8
          "
        >
          Creative Developer • Web Designer
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-[clamp(3.5rem,7vw,7rem)]
            leading-[0.92]
            tracking-[-0.07em]
            font-semibold
            text-white
            max-w-[900px]
          "
        >
          Designing immersive digital experiences for modern brands.
        </motion.h1>
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.4,
          duration: 0.8,
        }}
        className="
          lg:col-span-4
          flex
          flex-col
          items-start
          lg:items-end
          gap-8
          pb-4
        "
      >
        <p
          className="
            max-w-[320px]
            text-[15px]
            leading-[1.9]
            text-white/65
            lg:text-right
          "
        >
          Boutique web design and frontend development
          studio crafting cinematic, high-converting,
          and visually rich websites for ambitious businesses.
        </p>

        <div className="flex items-center gap-6 relative z-20">
          <Link href="/work" className="contents">
            <GlowButton text="View Projects" />
          </Link>

          <Link href="/contact" className="contents">
            <CtaButton text="Start Project" />
          </Link>
        </div>
      </motion.div>

    </div>
  </div>
</div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-[2]" />
    </section>
  );
}
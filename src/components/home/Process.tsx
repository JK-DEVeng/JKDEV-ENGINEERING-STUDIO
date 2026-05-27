"use client";
import { useState } from "react";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      num: "01",
      phase: "Discovery & Alignment",
      timeline: "Week 1",
      title: "Deconstruct your vision",
      desc: "We analyze your target business goals, aesthetic references, and unique industry requirements (like property maps or clinical intake flows) to map out a concrete architecture blueprint."
    },
    {
      num: "02",
      phase: "UI/UX Architecture",
      timeline: "Weeks 2-3",
      title: "Interactive visual layouts",
      desc: "Engineering high-fidelity visual mockups crafted to elevate your brand value. We map out spatial layouts, typography scales, and structural transitions tailored to your target audience."
    },
    {
      num: "03",
      phase: "Production Development",
      timeline: "Weeks 4-6",
      title: "Clean, performant codebase",
      desc: "Translating verified layouts into stable, ultra-fast production builds using Next.js, React, and Tailwind. We wire up custom CMS frameworks, interactive systems, and responsive animation loops."
    },
    {
      num: "04",
      phase: "Optimization & Launch",
      timeline: "Week 7",
      title: "Seamless execution launch",
      desc: "Executing rigorous performance evaluations, full mobile scaling testing, and deep-level technical on-page SEO integration. We manage domain handoff and production server hosting setup perfectly."
    }
  ];

  return (
    <section 
      id="process" 
      className="responsive-section-process"
      style={{
        width: "100%", 
        backgroundColor: "#030303", 
        boxSizing: "border-box", 
        borderTop: "1px solid rgba(255,255,255,0.02)"
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        
        {/* HEADER ROW */}
        <div style={{ marginBottom: "64px" }}>
          <p style={{ color: "#a855f7", textTransform: "uppercase", fontSize: "13px", fontWeight: 600, letterSpacing: "2px", margin: "0 0 12px 0" }}>
            The Blueprint
          </p>
          <h2 style={{ color: "#ffffff", fontSize: "40px", fontWeight: 800, margin: 0, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
            Execution Pipeline
          </h2>
        </div>

        {/* TIMELINE COLUMN ACCORDION STACK */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {steps.map((step, idx) => {
            const isHovered = activeStep === idx;

            return (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  padding: "40px 12px",
                  gap: "24px",
                  justifyContent: "space-between",
                  transition: "all 0.4s ease",
                  backgroundColor: isHovered ? "rgba(255, 255, 255, 0.01)" : "transparent"
                }}
              >
                {/* PART 1: CHRONO STEP & SUB-PHASE CAPTION */}
                <div style={{ display: "flex", gap: "32px", flex: "1 1 300px", alignItems: "flex-start" }}>
                  <span style={{ 
                    color: isHovered ? "#a855f7" : "rgba(255,255,255,0.15)", 
                    fontFamily: "monospace", 
                    fontSize: "16px", 
                    fontWeight: 700, 
                    transition: "color 0.3s",
                    paddingTop: "2px"
                  }}>
                    {step.num}
                  </span>
                  <div>
                    <h3 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, margin: "0 0 6px 0", transition: "color 0.3s" }}>
                      {step.phase}
                    </h3>
                    <span style={{ color: "#71717a", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", backgroundColor: "rgba(255,255,255,0.03)", padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.05)" }}>
                      {step.timeline}
                    </span>
                  </div>
                </div>

                {/* PART 2: SUMMARY SPEC DETAILS DESC */}
                <div style={{ flex: "1 1 500px", maxWidth: "620px" }}>
                  <h4 style={{ color: isHovered ? "#a855f7" : "#ffffff", fontSize: "16px", fontWeight: 600, margin: "0 0 10px 0", transition: "color 0.3s" }}>
                    {step.title}
                  </h4>
                  <p style={{ color: "#a1a1aa", fontSize: "14.5px", lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
                    {step.desc}
                  </p>
                </div>

              </div>
            );
          })}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} /> {/* Closing boundary list bar */}
        </div>

      </div>
    </section>
  );
}
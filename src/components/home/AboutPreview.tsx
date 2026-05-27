"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function AboutPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pillars = [
    {
      title: "Design-Led Strategy",
      desc: "We don't use generic templates. Every layout architecture is custom-tailored to communicate your brand's atmosphere and prestige."
    },
    {
      title: "Production-Grade Engineering",
      desc: "Built with Next.js and clean semantics. Optimized for lightning-fast load speeds, fluid interactions, and flawless mobile responsiveness."
    },
    {
      title: "Conversion Architecture",
      desc: "A beautiful site is useless if it doesn't perform. We engineer user paths that turn high-intent traffic into direct inquiries."
    }
  ];

  return (
    <section 
      id="about" 
      className="responsive-section-about"
      style={{ 
        width: "100%",
        backgroundColor: "#030303", 
        boxSizing: "border-box", 
        borderTop: "1px solid rgba(255,255,255,0.02)" 
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "64px", alignItems: "start" }}>
        
        {/* LEFT COLUMN: BRAND MANIFESTO */}
        <div style={{ position: "sticky", top: "120px" }}>
          <p style={{ color: "#a855f7", textTransform: "uppercase", fontSize: "13px", fontWeight: 600, letterSpacing: "2px", margin: "0 0 16px 0" }}>
            Who We Are
          </p>
          <h2 style={{ color: "#ffffff", fontSize: "42px", fontWeight: 800, margin: "0 0 24px 0", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            WE BUILD DIGITAL SPACE FOR MODERN BRANDS.
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: "16px", lineHeight: 1.6, margin: "0 0 32px 0", fontWeight: 400 }}>
            We are a boutique digital design and development practice. We partner with interior studios, luxury real estate developers, and local businesses to transform static web footprints into premium digital experiences.
          </p>
          
          {/* OPTIONAL INTERNAL LINK TO FULL ABOUT INFRASTRUCTURE PAGE */}
          <a
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              paddingBottom: "4px",
              transition: "border-color 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderBottom = "1px solid #a855f7"}
            onMouseLeave={(e) => e.currentTarget.style.borderBottom = "1px solid rgba(255,255,255,0.2)"}
          >
            Let's start a project <ArrowRight size={14} />
          </a>
        </div>

        {/* RIGHT COLUMN: REASONING PILLARS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {pillars.map((pillar, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  backgroundColor: "rgba(15, 15, 16, 0.45)",
                  border: isHovered ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(255, 255, 255, 0.04)",
                  borderRadius: "20px",
                  padding: "36px",
                  boxSizing: "border-box",
                  backdropFilter: "blur(20px)",
                  transition: "all 0.3s ease",
                  transform: isHovered ? "translateX(6px)" : "translateX(0px)"
                }}
              >
                <div style={{ display: "flex", gap: "16px", alignItems: "baseline", marginBottom: "12px" }}>
                  <span style={{ fontFamily: "monospace", fontSize: "13px", color: isHovered ? "#a855f7" : "#71717a", fontWeight: 600, transition: "color 0.2s" }}>
                    // 0{idx + 1}
                  </span>
                  <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 700, margin: 0 }}>
                    {pillar.title}
                  </h3>
                </div>
                
                <p style={{ color: "#a1a1aa", fontSize: "14px", lineHeight: 1.6, margin: 0, paddingLeft: "36px" }}>
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
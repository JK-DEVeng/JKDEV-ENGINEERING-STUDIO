"use client";
import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function PricingSection() {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);

  const tiers = [
    {
      id: 1,
      name: "Showcase Experience",
      price: "$700 – $1.5k",
      desc: "Perfect for luxury showcases, interior studios, antique brands, personal brands, and boutique businesses.",
      features: [
        "Custom visual design",
        "Responsive development",
        "Smooth interactions",
        "Contact/inquiry systems",
        "Basic SEO setup"
      ],
      highlighted: false
    },
    {
      id: 2,
      name: "Business Platform",
      price: "$2k – $4k+",
      desc: "Perfect for real estate systems, booking platforms, multi-page business websites, and dynamic inventory/catalog systems.",
      features: [
        "Everything in Showcase",
        "Multi-page architecture",
        "Advanced UI systems",
        "CMS/integration support",
        "Structured scalability"
      ],
      highlighted: true // Highlighted variant
    }
  ];

  return (
    <section id="pricing" style={{ width: "100%", padding: "100px 32px", backgroundColor: "#030303", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        
        {/* SMALL INTRO HEADER */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{ color: "#a855f7", textTransform: "uppercase", fontSize: "13px", fontWeight: 600, letterSpacing: "2px", margin: "0 0 12px 0" }}>
            Investment
          </p>
          <h2 style={{ color: "#ffffff", fontSize: "40px", fontWeight: 800, margin: "0 0 16px 0", textTransform: "uppercase", letterSpacing: "-0.02em" }}>
            Project Frameworks
          </h2>
        </div>

        {/* 2 MAIN PACKAGES GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", alignItems: "start", marginBottom: "56px" }}>
          {tiers.map((tier, idx) => {
            const isHovered = hoveredTier === idx;
            
            return (
              <div
                key={tier.id}
                onMouseEnter={() => setHoveredTier(idx)}
                onMouseLeave={() => setHoveredTier(null)}
                style={{
                  backgroundColor: "rgba(15, 15, 16, 0.45)",
                  border: tier.highlighted 
                    ? (isHovered ? "1px solid #a855f7" : "1px solid rgba(168, 85, 247, 0.4)") 
                    : (isHovered ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255, 255, 255, 0.05)"),
                  borderRadius: "24px",
                  padding: "48px 40px",
                  boxSizing: "border-box",
                  backdropFilter: "blur(20px)",
                  position: "relative",
                  transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
                  boxShadow: tier.highlighted && isHovered ? "0 30px 60px -25px rgba(168,85,247,0.15)" : "none"
                }}
              >
                {tier.highlighted && (
                  <span style={{ position: "absolute", top: "24px", right: "32px", backgroundColor: "rgba(168, 85, 247, 0.15)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "#c084fc", fontSize: "11px", fontWeight: 600, padding: "4px 12px", borderRadius: "9999px", textTransform: "uppercase" }}>
                    Recommended
                  </span>
                )}

                <h3 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700, margin: "0 0 6px 0" }}>{tier.name}</h3>
                <p style={{ color: "#71717a", fontSize: "14px", margin: "0 0 28px 0", lineHeight: 1.5, minHeight: "42px" }}>{tier.desc}</p>
                
                <div style={{ marginBottom: "32px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "24px" }}>
                  <span style={{ color: "#ffffff", fontSize: "38px", fontWeight: 800, letterSpacing: "-0.01em" }}>{tier.price}</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <Check size={14} className="text-purple-500" style={{ minWidth: "14px" }} />
                      <span style={{ color: "#a1a1aa", fontSize: "14px" }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA TO VIEW FULL PRICING PAGE */}
        <div style={{ textAlign: "center" }}>
          <a
            href="/pricing"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "14px 28px",
              borderRadius: "9999px",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            View Full Pricing <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
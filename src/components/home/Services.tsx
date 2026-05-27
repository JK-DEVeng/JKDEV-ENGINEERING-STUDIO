"use client";
import { Layers, Layout, Monitor, Sparkles, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // ⚡ Dynamic breakpoint listener preserves desktop layout metrics automatically
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const services = [
    {
      id: 1,
      icon: <Layout size={28} className="text-purple-400" />,
      title: "Immersive UI/UX Design",
      desc: "Architecting user interfaces that tell a story. From luxury real estate portals to high-end interior studio platforms, focused on high visual fidelity and conversions.",
      gridSpan: "col-span-1 md:col-span-2",
    },
    {
      id: 2,
      icon: <Monitor size={28} className="text-purple-400" />,
      title: "Creative Engineering",
      desc: "Building highly stable frontends utilizing Next.js, React, and Tailwind with smooth, fluid micro-interactions.",
      gridSpan: "col-span-1",
    },
    {
      id: 3,
      icon: <Layers size={28} className="text-purple-400" />,
      title: "Niche Database Systems",
      desc: "Integrating specialized clinical booking systems, real-estate property engines, and structured antique ledger archives.",
      gridSpan: "col-span-1",
    },
    {
      id: 4,
      icon: <Sparkles size={28} className="text-purple-400" />,
      title: "Art Direction & Branding",
      desc: "Formulating cohesive digital identities, clean font choices, and minimalist asset configurations that make local businesses look like global luxury brands.",
      gridSpan: "col-span-1 md:col-span-2",
    },
  ];

  return (
    <section id="services" style={{ width: "100%", padding: isMobile ? "80px 16px" : "100px 32px", backgroundColor: "#030303", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "1340px", margin: "0 auto", width: "100%" }}>
        
        {/* HEADER */}
        {/* ⚡ Switches to a column on mobile so links don't crowd the heading text */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-end", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "16px" : "0px", marginBottom: "64px" }}>
          <div>
            <p style={{ color: "#a855f7", textTransform: "uppercase", fontSize: "14px", fontWeight: 600, letterSpacing: "2px", margin: "0 0 12px 0" }}>
              Capabilities
            </p>
            <h2 style={{ color: "#ffffff", fontSize: isMobile ? "32px" : "48px", fontWeight: 800, letterSpacing: "-0.02em", margin: 0, textTransform: "uppercase" }}>
              What I Bring To The Table
            </h2>
          </div>
          <a 
            href="/services" 
            style={{ color: "#a1a1aa", textDecoration: "none", fontSize: "14px", fontWeight: 500, display: "flex", alignItems: "center", gap: "6px", transition: "color 0.3s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#a1a1aa"}
          >
            Explore Full Page <ArrowRight size={16} />
          </a>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "24px",
          gridAutoRows: "minmax(260px, auto)"
        }}>
          {services.map((service, idx) => {
            const isHovered = hoveredCard === idx;
            const isWide = service.gridSpan.includes("md:col-span-2");

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  // ⚡ If it's a mobile viewport, override span 2 layout constraints to span 1 safely
                  gridColumn: isMobile ? "span 1" : (isWide ? "span 2" : "span 1"),
                  backgroundColor: "rgba(15, 15, 16, 0.45)",
                  border: isHovered ? "1px solid rgba(168, 85, 247, 0.25)" : "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "24px",
                  padding: isMobile ? "32px 24px" : "40px", // ⚡ Snug inner padding looks cleaner on small viewports
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backdropFilter: "blur(20px)",
                  transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
                  boxShadow: isHovered ? "0 20px 40px -20px rgba(168,85,247,0.15)" : "none",
                }}
              >
                <div>
                  <div style={{ 
                    width: "56px", 
                    height: "56px", 
                    borderRadius: "14px", 
                    backgroundColor: "rgba(255,255,255,0.02)", 
                    border: "1px solid rgba(255,255,255,0.05)",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    marginBottom: "32px",
                    color: isHovered ? "#a855f7" : "#ffffff",
                    transition: "all 0.3s"
                  }}>
                    {service.icon}
                  </div>
                  <h3 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 700, margin: "0 0 12px 0", letterSpacing: "-0.01em" }}>
                    {service.title}
                  </h3>
                  <p style={{ color: "#a1a1aa", fontSize: "15px", lineHeight: 1.6, margin: 0, fontWeight: 400, maxWidth: "520px" }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
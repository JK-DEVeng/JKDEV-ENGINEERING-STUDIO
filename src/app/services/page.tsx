"use client";
import Navbar from "@/components/layout/Navbar";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

const completeServicesDetails = [
  {
    num: "01",
    title: "Luxury Real Estate Engines",
    focus: "Visual Conversion & Property Discovery",
    details: "High-end UI design designed specifically for modern property brokerages. We build ultra-crisp interactive layouts, map API coordinates, and implement lightning-fast filters that make real estate browsing feel smooth and look premium.",
  },
  {
    num: "02",
    title: "Artistic Interior & Studio Portfolios",
    focus: "Fluid Presentation & Micro-Animations",
    details: "Tailored showcase spaces built with Next.js and custom Framer Motion timelines. We treat design work like art, utilizing wide layout gaps, high-quality image container scaling, and fluid transitions to perfectly highlight high-end interior spaces.",
  },
  {
    num: "03",
    title: "Heritage Craft & E-Commerce Art Archives",
    focus: "Storytelling-Driven Commerce Architecture",
    details: "Converting rich cultural traditions—like Jaipur Blue Pottery—into highly functional digital storefronts. We balance rich historical storytelling typography with stable checkout pathways, inventory layouts, and product galleries.",
  },
  {
    num: "04",
    title: "Bespoke Administrative Hubs & Healthcare Portals",
    focus: "Clinical Precision & Frictionless Booking",
    details: "Clean, responsive, hyper-functional web design frameworks engineered for client intake. We wrap secure infrastructure, patient booking pathways, and facility scheduling options inside a trustworthy, clean user experience.",
  },
  {
    num: "05",
    title: "Vintage Showrooms & Antique Lead Generation",
    focus: "Classical Aesthetic with Modern Performance",
    details: "Redesigning legacy catalogs into immersive interactive spaces. We blend old-world, premium visual themes with modern optimization, SEO pipelines, and fast inquiry forms designed to capture luxury collector leads.",
  }
];

export default function ServicesPage() {
  const [isMobile, setIsMobile] = useState(false);

  // Dynamic window listener handles seamless mobile adaptations
  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <main style={{ backgroundColor: "#030303", minHeight: "100vh", width: "100%", overflowX: "hidden" }}>
      <Navbar />

      {/* HEADER CAPTION ROW */}
      <section style={{ width: "100%", padding: isMobile ? "120px 16px 48px 16px" : "180px 32px 64px 32px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          
          <a 
            href="/" 
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#71717a", textDecoration: "none", fontSize: "14px", fontWeight: 500, marginBottom: "24px", transition: "color 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#71717a"}
          >
            <ArrowLeft size={16} /> Back to home
          </a>

          <h1 style={{ color: "#ffffff", fontSize: isMobile ? "40px" : "72px", fontWeight: 900, letterSpacing: "-0.04em", margin: "0 0 16px 0", textTransform: "uppercase" }}>
            Expertise & Niches
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: isMobile ? "15px" : "18px", maxWidth: "600px", margin: 0, lineHeight: 1.6 }}>
            Deep vertical solutions spanning engineering, interactive design, and specialized business logic pipelines.
          </p>
        </div>
      </section>

      {/* EDITORIAL STACK LIST SECTION */}
      <section style={{ width: "100%", padding: isMobile ? "0 16px 100px 16px" : "0 32px 140px 32px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          
          <div style={{ display: "flex", flexDirection: "column" }}>
            {completeServicesDetails.map((item) => (
              <div 
                key={item.num}
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  padding: isMobile ? "32px 0" : "48px 0",
                  gap: isMobile ? "16px" : "32px",
                  justifyContent: "space-between"
                }}
              >
                {/* NUMBER & PRIMARY TITLE TITLE */}
                <div style={{ 
                  display: "flex", 
                  gap: isMobile ? "16px" : "40px", 
                  flex: isMobile ? "1 1 auto" : "1 1 400px" 
                }}>
                  <span style={{ color: "#a855f7", fontFamily: "monospace", fontSize: "16px", fontWeight: 600, paddingTop: "4px" }}>
                    {item.num}
                  </span>
                  <div>
                    <h2 style={{ color: "#ffffff", fontSize: isMobile ? "24px" : "32px", fontWeight: 800, margin: "0 0 8px 0", letterSpacing: "-0.02em" }}>
                      {item.title}
                    </h2>
                    <span style={{ color: "#71717a", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1px" }}>
                      {item.focus}
                    </span>
                  </div>
                </div>

                {/* DETAILED CONTENT ROW */}
                <div style={{ flex: isMobile ? "1 1 auto" : "1 1 500px", maxWidth: "580px", paddingLeft: isMobile ? "32px" : "0" }}>
                  <p style={{ color: "#a1a1aa", fontSize: isMobile ? "14px" : "16px", lineHeight: 1.7, margin: 0 }}>
                    {item.details}
                  </p>
                </div>

              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
          </div>

        </div>
      </section>

      {/* CORE SERVICE CAPSULES SECTION */}
      <section style={{ width: "100%", padding: isMobile ? "0 16px 100px 16px" : "0 32px 140px 32px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          
          {/* MICRO SECTION TITLE BLOCK */}
          <div style={{ marginBottom: "32px" }}>
            <p style={{ color: "#a855f7", textTransform: "uppercase", fontSize: "12px", fontWeight: 600, letterSpacing: "2px", margin: "0 0 8px 0" }}>
              Core Capabilities
            </p>
            <h3 style={{ color: "#ffffff", fontSize: isMobile ? "22px" : "28px", fontWeight: 800, margin: 0, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
              Tailored Execution Models
            </h3>
          </div>

          {/* CAPSULE DECK CONTAINER GRID */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(240px, 1fr))", 
            gap: "16px" 
          }}>
            {[
              {
                title: "Custom Website Design",
                desc: "Design-led websites crafted for real estate, interior, hospitality, and modern local brands."
              },
              {
                title: "Frontend Development",
                desc: "Responsive modern builds focused on performance, smooth interactions, and clean structure."
              },
              {
                title: "Website Refreshes",
                desc: "Transforming outdated business websites into clearer, more modern digital experiences."
              },
              {
                title: "Brand & Visual Direction",
                desc: "Helping businesses present themselves with stronger visual clarity, structure, and online identity."
              }
            ].map((capsule, index) => (
              <div
                key={index}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(168, 85, 247, 0.25)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.transform = "translateY(0px)";
                }}
                style={{
                  backgroundColor: "rgba(15, 15, 16, 0.45)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "20px",
                  padding: isMobile ? "24px 20px" : "32px 28px",
                  boxSizing: "border-box",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: "14px",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* CAPSULE INDICATOR DOT ELEMENT */}
                <div style={{ 
                  width: "6px", 
                  height: "6px", 
                  backgroundColor: "#a855f7", 
                  borderRadius: "50%",
                  boxShadow: "0 0 12px #a855f7"
                }} />

                {/* TEXT LAYER ARCHITECTURES */}
                <div>
                  <h4 style={{ 
                    color: "#ffffff", 
                    fontSize: "18px", 
                    fontWeight: 700, 
                    margin: "0 0 10px 0",
                    letterSpacing: "-0.01em"
                  }}>
                    {capsule.title}
                  </h4>
                  <p style={{ 
                    color: "#a1a1aa", 
                    fontSize: "14px", 
                    lineHeight: 1.5, 
                    margin: 0,
                    fontWeight: 400
                  }}>
                    {capsule.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
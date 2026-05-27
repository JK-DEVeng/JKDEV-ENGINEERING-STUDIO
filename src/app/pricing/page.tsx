"use client";
import Navbar from "@/components/layout/Navbar";
import { ArrowLeft, Check, Plus, Minus, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function PricingPage() {
  const [isMobile, setIsMobile] = useState(false);

  // Dynamic window listener handles seamless mobile adaptations
  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Add-on State Controls for Section 3 calculator block
  const [addons, setAddons] = useState({
    seo: false,
    cms: false,
    booking: false,
    copywriting: false,
    maintenance: false,
  });

  const toggleAddon = (key: keyof typeof addons) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculate dynamic custom adjustments over package setups
  const addonChangeRates = { seo: 400, cms: 800, booking: 700, copywriting: 300, maintenance: 150 };
  const calculatedAddonTotal = 
    (addons.seo ? addonChangeRates.seo : 0) +
    (addons.cms ? addonChangeRates.cms : 0) +
    (addons.booking ? addonChangeRates.booking : 0) +
    (addons.copywriting ? addonChangeRates.copywriting : 0) +
    (addons.maintenance ? addonChangeRates.maintenance : 0);

  return (
    <main style={{ backgroundColor: "#030303", minHeight: "100vh", width: "100%", overflowX: "hidden" }}>
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section style={{ width: "100%", padding: isMobile ? "120px 16px 48px 16px" : "180px 32px 64px 32px", boxSizing: "border-box", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <a 
            href="/" 
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#71717a", textDecoration: "none", fontSize: "14px", fontWeight: 500, marginBottom: "24px", transition: "color 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#71717a"}
          >
            <ArrowLeft size={16} /> Back to home
          </a>
          <h1 style={{ color: "#ffffff", fontSize: isMobile ? "32px" : "56px", fontWeight: 900, letterSpacing: "-0.03em", margin: "0 0 16px 0", textTransform: "uppercase", lineHeight: 1.1 }}>
            Investment & Project Structure
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: isMobile ? "14.5px" : "16px", maxWidth: "680px", margin: 0, lineHeight: 1.6 }}>
            Clear project frameworks designed for modern brands, studios, and premium local businesses. 
            <span style={{ display: "block", marginTop: "12px", color: "#71717a", fontSize: "13px" }}>
              * Every project is custom-built. Final pricing depends on scope, functionality, integrations, timelines, and content requirements.
            </span>
          </p>
        </div>
      </section>

      {/* SECTION 2 — CORE PACKAGES */}
      <section style={{ width: "100%", padding: isMobile ? "48px 16px" : "100px 32px", boxSizing: "border-box" }}>
        <div style={{ 
          maxWidth: "1100px", 
          margin: "0 auto", 
          width: "100%", 
          display: "grid", 
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(400px, 1fr))", 
          gap: isMobile ? "24px" : "40px" 
        }}>
          
          {/* PACKAGE A: SHOWCASE WEBSITE */}
          <div style={{ backgroundColor: "rgba(15, 15, 16, 0.45)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "24px", padding: isMobile ? "28px 20px" : "44px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h2 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 800, margin: "0 0 4px 0" }}>Showcase Website</h2>
              <span style={{ color: "#a855f7", fontSize: "20px", fontWeight: 700, display: "block", marginBottom: "20px" }}>Starting at $1,000</span>
              
              <p style={{ color: "#71717a", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", margin: "0 0 8px 0", letterSpacing: "1px" }}>Best For:</p>
              <p style={{ color: "#a1a1aa", fontSize: "14px", margin: "0 0 28px 0", lineHeight: 1.5 }}>Interior studios, antique shops, pottery brands, creative portfolios.</p>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "20px" }}>
                <p style={{ color: "#71717a", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", margin: "0 0 14px 0", letterSpacing: "1px" }}>Features Included:</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {["1–5 pages", "Premium UI design", "Responsive layout", "Animations / Interactions", "Contact forms", "Launch support"].map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#ffffff", fontSize: "14px" }}>
                      <Check size={14} style={{ color: "#c084fc" }} /> {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "50px", borderRadius: "9999px", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#ffffff", textDecoration: "none", fontSize: "14px", fontWeight: 600, marginTop: "32px", transition: "all 0.3s" }} onMouseEnter={(e)=>e.currentTarget.style.backgroundColor="rgba(255,255,255,0.08)"} onMouseLeave={(e)=>e.currentTarget.style.backgroundColor="rgba(255,255,255,0.03)"}>
              Request Project Estimate
            </a>
          </div>

          {/* PACKAGE B: BUSINESS PLATFORM */}
          <div style={{ backgroundColor: "rgba(15, 15, 16, 0.45)", border: "1px solid rgba(168, 85, 247, 0.3)", borderRadius: "24px", padding: isMobile ? "28px 20px" : "44px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 20px 40px -20px rgba(168,85,247,0.05)" }}>
            <div>
              <h2 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 800, margin: "0 0 4px 0" }}>Business Platform</h2>
              <span style={{ color: "#a855f7", fontSize: "20px", fontWeight: 700, display: "block", marginBottom: "20px" }}>Starting at $3.5k</span>
              
              <p style={{ color: "#71717a", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", margin: "0 0 8px 0", letterSpacing: "1px" }}>Best For:</p>
              <p style={{ color: "#a1a1aa", fontSize: "14px", margin: "0 0 28px 0", lineHeight: 1.5 }}>Real estate systems, clinic websites, business operations, advanced lead funnels.</p>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "20px" }}>
                <p style={{ color: "#71717a", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", margin: "0 0 14px 0", letterSpacing: "1px" }}>Features Included:</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {["Dynamic architecture", "Multi-page systems", "CMS / Integrations", "Advanced interactions", "Scalability structure", "Performance optimization"].map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#ffffff", fontSize: "14px" }}>
                      <Check size={14} style={{ color: "#c084fc" }} /> {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "50px", borderRadius: "9999px", backgroundColor: "#ffffff", color: "#000000", textDecoration: "none", fontSize: "14px", fontWeight: 600, marginTop: "32px", transition: "opacity 0.2s" }} onMouseEnter={(e)=>e.currentTarget.style.opacity="0.9"} onMouseLeave={(e)=>e.currentTarget.style.opacity="1"}>
              Discuss Your Project
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 3 — OPTIONAL ADD-ONS (CALCULATOR SYSTEM) */}
      <section style={{ width: "100%", padding: isMobile ? "24px 16px 64px 16px" : "40px 32px 100px 32px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%", backgroundColor: "rgba(15,15,16,0.2)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "24px", padding: isMobile ? "24px 16px" : "40px" }}>
          
          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, margin: "0 0 6px 0" }}>3. Optional Scope Add-ons</h3>
            <p style={{ color: "#71717a", fontSize: "13.5px", margin: 0 }}>Select modules to dynamically add to your project core framework estimate.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {[
              { key: "seo", name: "SEO Expansion", price: 400, display: "+$400" },
              { key: "cms", name: "CMS Integration", price: 800, display: "+$800" },
              { key: "booking", name: "Booking System", price: 700, display: "+$700" },
              { key: "copywriting", name: "Copywriting / Content Messaging", price: 300, display: "+$300" },
              { key: "maintenance", name: "Monthly Maintenance Support Infrastructure", price: 150, display: "+$150/mo" },
            ].map((addon) => {
              const isSelected = addons[addon.key as keyof typeof addons];
              return (
                <div 
                  key={addon.key}
                  onClick={() => toggleAddon(addon.key as keyof typeof addons)}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", borderRadius: "12px", cursor: "pointer", transition: "all 0.2s", gap: "12px",
                    backgroundColor: isSelected ? "rgba(168, 85, 247, 0.04)" : "transparent",
                    border: isSelected ? "1px solid rgba(168, 85, 247, 0.2)" : "1px solid transparent"
                  }}
                  onMouseEnter={(e) => { if(!isSelected) e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)"; }}
                  onMouseLeave={(e) => { if(!isSelected) e.currentTarget.style.backgroundColor = "transparent"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
                    <div style={{ width: "20px", height: "20px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", display: "flex", flexShrink: 0, alignItems: "center", justifyContent: "center", color: "#ffffff", backgroundColor: isSelected ? "#a855f7" : "transparent" }}>
                      {isSelected ? <Minus size={12} /> : <Plus size={12} />}
                    </div>
                    <span style={{ color: isSelected ? "#ffffff" : "#a1a1aa", fontSize: "14px", fontWeight: 500, lineHeight: 1.3 }}>{addon.name}</span>
                  </div>
                  <span style={{ color: isSelected ? "#c084fc" : "#71717a", fontSize: "14px", fontWeight: 600, whiteSpace: "nowrap" }}>{addon.display}</span>
                </div>
              );
            })}
          </div>

          {calculatedAddonTotal > 0 && (
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: "20px", paddingTop: "16px", display: "flex", flexDirection: isMobile ? "column" : "row", gap: "8px", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center" }}>
              <span style={{ color: "#71717a", fontSize: "13.5px" }}>Selected Add-ons Baseline Accumulation:</span>
              <span style={{ color: "#a855f7", fontSize: "20px", fontWeight: 700 }}>+${calculatedAddonTotal}</span>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section style={{ width: "100%", padding: isMobile ? "0 16px 100px 16px" : "0 32px 140px 32px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: isMobile ? "64px" : "100px", textAlign: "center" }}>
          <h2 style={{ color: "#ffffff", fontSize: isMobile ? "28px" : "44px", fontWeight: 800, margin: "0 0 16px 0", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Let’s Build Something Exceptional
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: isMobile ? "14.5px" : "16px", maxWidth: "540px", margin: "0 auto 36px auto", lineHeight: 1.6 }}>
            Share your project vision, references, and business goals — I’ll help structure the right solution.
          </p>
          <a 
            href="/contact" 
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", height: "52px", padding: "0 28px", borderRadius: "9999px", backgroundColor: "#ffffff", color: "#000000", fontSize: "14px", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s", width: isMobile ? "100%" : "auto", boxSizing: "border-box" }}
            onMouseEnter={(e)=>e.currentTarget.style.opacity="0.9"}
            onMouseLeave={(e)=>e.currentTarget.style.opacity="1"}
          >
            Start a Conversation <ArrowRight size={16} />
          </a>
        </div>
      </section>

    </main>
  );
}
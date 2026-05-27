"use client";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      className="responsive-footer"
      style={{ 
        width: "100%", 
        backgroundColor: "#030303",
        boxSizing: "border-box", 
        borderTop: "1px solid rgba(255,255,255,0.03)" 
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        
        {/* TOP ROW: LINKS MATRIX & NEWSLETTER */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", marginBottom: "80px", alignItems: "start" }}>
          
          {/* COLUMN 1: INDEX NAVIGATION */}
          <div>
            <span style={{ display: "block", fontSize: "11px", textTransform: "uppercase", color: "#52525b", letterSpacing: "2px", fontWeight: 700, marginBottom: "20px" }}>// Navigation</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Work", "Services", "Pricing", "Process", "About"].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  style={{ color: "#a1a1aa", fontSize: "14px", textDecoration: "none", width: "fit-content", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#a1a1aa"}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: EXTERNAL NETWORKS */}
          <div>
            <span style={{ display: "block", fontSize: "11px", textTransform: "uppercase", color: "#52525b", letterSpacing: "2px", fontWeight: 700, marginBottom: "20px" }}>// Relays</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="https://www.instagram.com/jkdev_eng/?__pwa=1#" target="_blank" rel="noopener noreferrer" style={{ color: "#a1a1aa", fontSize: "14px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }} onMouseEnter={(e)=>e.currentTarget.style.color="#ffffff"} onMouseLeave={(e)=>e.currentTarget.style.color="#a1a1aa"}>
                Instagram <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
              </a>
              <a href="https://www.facebook.com/me/" target="_blank" rel="noopener noreferrer" style={{ color: "#a1a1aa", fontSize: "14px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }} onMouseEnter={(e)=>e.currentTarget.style.color="#ffffff"} onMouseLeave={(e)=>e.currentTarget.style.color="#a1a1aa"}>
                Facebook <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
              </a>
              <a href="mailto:jitendrasoniku@gmail.com" style={{ color: "#a1a1aa", fontSize: "14px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }} onMouseEnter={(e)=>e.currentTarget.style.color="#ffffff"} onMouseLeave={(e)=>e.currentTarget.style.color="#a1a1aa"}>
                Secure Mail <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
              </a>
            </div>
          </div>

          {/* COLUMN 3: SYSTEM OPERATIONAL STATUS */}
          <div style={{ lgGridColumnEnd: "span 2" }}>
            <span style={{ display: "block", fontSize: "11px", textTransform: "uppercase", color: "#52525b", letterSpacing: "2px", fontWeight: 700, marginBottom: "20px" }}>// Availability Status</span>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22c55e", display: "inline-block", boxShadow: "0 0 12px #22c55e" }}></span>
              <span style={{ fontSize: "14px", color: "#ffffff", fontWeight: 500 }}>Accepting Q3 Project Targets</span>
            </div>
            <p style={{ color: "#71717a", fontSize: "13px", lineHeight: 1.5, margin: 0, maxWidth: "260px" }}>
              Booking schedule capacity is limited to maintain high production quality control.
            </p>
          </div>

        </div>

        {/* MIDDLE ROW: CINEMATIC HUGE STUDIO TEXT TYPOGRAPHY */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.03)", paddingTop: "40px", paddingBottom: "20px", userSelect: "none" }}>
          <h2 style={{ 
            fontSize: "clamp(48px, 13vw, 150px)", 
            fontWeight: 900, 
            textAlign: "center", 
            textTransform: "uppercase", 
            letterSpacing: "-0.05em", 
            margin: 0, 
            lineHeight: 0.8,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.04)"
          }}>
            JKDEV STUDIO
          </h2>
        </div>

        {/* BOTTOM ROW: META SUBTEXTS */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", borderTop: "1px solid rgba(255,255,255,0.03)", paddingTop: "24px" }}>
          <span style={{ fontSize: "12px", fontFamily: "monospace", color: "#52525b" }}>
            © {currentYear} JKDEV. Engineered precisely with Next.js.
          </span>
          
          {/* BACK TO TOP RELAY */}
          <button 
            onClick={scrollToTop}
            style={{ backgroundColor: "transparent", border: "none", color: "#71717a", fontSize: "12px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "1px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px" }}
            onMouseEnter={(e)=>e.currentTarget.style.color="#ffffff"}
            onMouseLeave={(e)=>e.currentTarget.style.color="#71717a"}
          >
            Back to upper layer ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
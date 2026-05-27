"use client";
import Navbar from "@/components/layout/Navbar";
import { Mail, ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ email: "", phone: "", social: "", message: "" });
  const [activeTier, setActiveTier] = useState<string>("Showcase Experience");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const projectTiers = [
    { label: "Showcase Experience", range: "$700 – $1.5k" },
    { label: "Business Platform", range: "$2k – $4k+" },
    { label: "Architectural Enterprise", range: "Custom Scope" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, projectType: activeTier }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ email: "", phone: "", social: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main style={{ backgroundColor: "#030303", minHeight: "100vh", width: "100%", color: "#ffffff", fontFamily: "sans-serif" }}>
      <Navbar />

      <section style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", padding: "160px 24px 100px 24px", boxSizing: "border-box" }}>
        
        {/* TOP META CONTROLS */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "80px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "24px" }}>
          <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#71717a", textDecoration: "none", fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
            <ArrowLeft size={14} /> Escape Index
          </a>
          <span style={{ fontSize: "12px", fontFamily: "monospace", color: "#a855f7", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px" }}>
            // Secure Handoff Pipeline
          </span>
        </div>

        {/* ASYMMETRIC GRID SYSTEM */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "80px", alignItems: "start" }}>
          
          {/* LEFT SIDE: MANIFESTO HEADLINES & SOCIAL DIRECTORY */}
          <div>
            <span style={{ color: "#a855f7", textTransform: "uppercase", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", display: "block", marginBottom: "16px" }}>
              Project Initialization
            </span>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em", margin: "0 0 32px 0", textTransform: "uppercase" }}>
              Let’s Start <br />Something <br /><span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Exceptional.</span>
            </h1>
            <p style={{ color: "#a1a1aa", fontSize: "16px", lineHeight: 1.7, margin: "0 0 64px 0", maxWidth: "440px" }}>
              We orchestrate high-performance frontend interfaces for modern brands. Drop your execution targets below to secure project schedule alignment.
            </p>

            {/* HIGH-END MINIMALIST LINK MATRIX */}
            {/* HIGH-END MINIMALIST LINK MATRIX */}
<div style={{ display: "flex", flexDirection: "column", gap: "12px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "32px" }}>
  <span style={{ fontSize: "11px", textTransform: "uppercase", color: "#71717a", letterSpacing: "2px", fontWeight: 600, marginBottom: "8px" }}>
    Direct Relays
  </span>
  
  {/* INSTAGRAM LINK */}
  <a 
    href="https://www.instagram.com/jkdev_eng/?__pwa=1#" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", color: "#a1a1aa", padding: "14px 20px", borderRadius: "12px", backgroundColor: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)", transition: "all 0.3s" }}
    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#ffffff"; }}
    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.03)"; e.currentTarget.style.color = "#a1a1aa"; }}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
    <span style={{ fontSize: "14px", fontWeight: 600 }}>Instagram</span>
  </a>

  {/* FACEBOOK LINK */}
  <a 
    href="https://www.facebook.com/me/" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", color: "#a1a1aa", padding: "14px 20px", borderRadius: "12px", backgroundColor: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)", transition: "all 0.3s" }}
    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#ffffff"; }}
    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.03)"; e.currentTarget.style.color = "#a1a1aa"; }}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
    <span style={{ fontSize: "14px", fontWeight: 600 }}>Facebook</span>
  </a>

  {/* EMAIL LINK */}
  <a 
    href="mailto:jitendrasoniku@gmail.com" 
    style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", color: "#a1a1aa", padding: "14px 20px", borderRadius: "12px", backgroundColor: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)", transition: "all 0.3s" }}
    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#ffffff"; }}
    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.03)"; e.currentTarget.style.color = "#a1a1aa"; }}
  >
    <Mail size={18} />
    <span style={{ fontSize: "14px", fontWeight: 600 }}>Email Directory</span>
  </a>
</div>
          </div>

          {/* RIGHT SIDE: PREMIUM MATRIX FORM */}
          <div>
            {status === "success" ? (
              <div style={{ border: "1px solid #a855f7", padding: "64px 40px", borderRadius: "32px", textAlign: "center", backgroundColor: "rgba(168,85,247,0.02)" }}>
                <h3 style={{ fontSize: "24px", fontWeight: 800, margin: "0 0 12px 0", textTransform: "uppercase" }}>Transmission Received</h3>
                <p style={{ color: "#a1a1aa", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>The execution pipeline has indexed your parameters. Expect alignment confirmation within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                
                {/* INTERACTIVE CUSTOM BUDGET TIER TILES */}
                <div>
                  <label style={{ display: "block", color: "#71717a", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "16px" }}>Select Project Scale Scale Context</label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {projectTiers.map((tier) => {
                      const isSelected = activeTier === tier.label;
                      return (
                        <div
                          key={tier.label}
                          onClick={() => setActiveTier(tier.label)}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "20px 24px",
                            borderRadius: "14px",
                            backgroundColor: isSelected ? "rgba(168, 85, 247, 0.06)" : "rgba(255,255,255,0.01)",
                            border: isSelected ? "1px solid #a855f7" : "1px solid rgba(255,255,255,0.06)",
                            cursor: "pointer",
                            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                          }}
                        >
                          <span style={{ fontSize: "14px", fontWeight: 600, color: isSelected ? "#ffffff" : "#a1a1aa" }}>{tier.label}</span>
                          <span style={{ fontSize: "12px", fontFamily: "monospace", color: isSelected ? "#c084fc" : "#71717a", fontWeight: 600 }}>{tier.range}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* THE CORE TEXT PARAMETER FIELDS */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div style={{ position: "relative" }}>
                    <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Your Email Destination" style={{ width: "100%", height: "56px", backgroundColor: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.12)", color: "#ffffff", fontSize: "15px", padding: "0 4px", boxSizing: "border-box", outline: "none", transition: "border-color 0.3s" }} onFocus={(e)=>e.currentTarget.style.borderBottomColor="#a855f7"} onBlur={(e)=>e.currentTarget.style.borderBottomColor="rgba(255,255,255,0.12)"} />
                  </div>

                  <div style={{ position: "relative" }}>
                    <input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Contact Phone Connection" style={{ width: "100%", height: "56px", backgroundColor: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.12)", color: "#ffffff", fontSize: "15px", padding: "0 4px", boxSizing: "border-box", outline: "none", transition: "border-color 0.3s" }} onFocus={(e)=>e.currentTarget.style.borderBottomColor="#a855f7"} onBlur={(e)=>e.currentTarget.style.borderBottomColor="rgba(255,255,255,0.12)"} />
                  </div>

                  <div style={{ position: "relative" }}>
                    <input type="url" value={formData.social} onChange={(e) => setFormData({ ...formData, social: e.target.value })} placeholder="Social Reference Handle / Portfolio Link (Optional)" style={{ width: "100%", height: "56px", backgroundColor: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.12)", color: "#ffffff", fontSize: "15px", padding: "0 4px", boxSizing: "border-box", outline: "none", transition: "border-color 0.3s" }} onFocus={(e)=>e.currentTarget.style.borderBottomColor="#a855f7"} onBlur={(e)=>e.currentTarget.style.borderBottomColor="rgba(255,255,255,0.12)"} />
                  </div>

                  <div style={{ position: "relative", marginTop: "12px" }}>
                    <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Outline your visual objectives, aesthetic requirements, and core features..." style={{ width: "100%", backgroundColor: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.12)", color: "#ffffff", fontSize: "15px", padding: "8px 4px", boxSizing: "border-box", outline: "none", resize: "none", lineHeight: 1.6, transition: "border-color 0.3s" }} onFocus={(e)=>e.currentTarget.style.borderBottomColor="#a855f7"} onBlur={(e)=>e.currentTarget.style.borderBottomColor="rgba(255,255,255,0.12)"} />
                  </div>
                </div>

                {/* THE HIGH-END ACTION EXECUTOR */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    border: "none",
                    borderRadius: "16px",
                    fontSize: "14px",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#a855f7";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.color = "#000000";
                  }}
                >
                  {status === "submitting" ? <Loader2 size={18} className="animate-spin" /> : <>Transmit Project Architecture <ArrowRight size={14} /></>}
                </button>
                
                {status === "error" && <p style={{ color: "#ef4444", fontSize: "13px", textAlign: "center", fontWeight: 500 }}>Transmission sequence dropped. Verify local input formatting fields.</p>}
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}
"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  q: string;
  a: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: "01",
      q: "How long does a project take?",
      a: "Most projects take between 2–6 weeks depending on scope, content readiness, and functionality requirements. More advanced platforms or multi-page systems may require additional development time."
    },
    {
      id: "02",
      q: "Do you redesign existing websites?",
      a: "Yes. We can modernize existing websites while improving structure, responsiveness, performance, and overall visual direction without losing your brand identity."
    },
    {
      id: "03",
      q: "Can I update content later?",
      a: "Absolutely. Websites are structured so text, images, and key content can be updated easily after launch. Guidance can also be provided if needed."
    },
    {
      id: "04",
      q: "Do you provide hosting help?",
      a: "Yes. We assist with deployment, hosting setup, domain connection, and launch configuration to ensure a smooth publishing process."
    },
    {
      id: "05",
      q: "What platforms do you use?",
      a: "We primarily build using modern frontend technologies including Next.js, React, Tailwind CSS, Framer Motion, and custom responsive development workflows."
    },
    {
      id: "06",
      q: "Do you offer ongoing support?",
      a: "Yes. Ongoing maintenance, updates, optimization, and technical support can be discussed depending on project requirements."
    },
    {
      id: "07",
      q: "Can pricing change?",
      a: "Yes. Final pricing may vary depending on project complexity, content requirements, integrations, revisions, and additional functionality requested during planning."
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" style={{ width: "100%", padding: "140px 32px", backgroundColor: "#030303", boxSizing: "border-box", borderTop: "1px solid rgba(255,255,255,0.02)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "64px", alignItems: "start" }}>
        
        {/* LEFT COLUMN: FIXED TITLE HEADER */}
        <div style={{ position: "sticky", top: "120px" }}>
          <p style={{ color: "#a855f7", textTransform: "uppercase", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", margin: "0 0 16px 0" }}>
            Inquiry Protocol
          </p>
          <h2 style={{ color: "#ffffff", fontSize: "42px", fontWeight: 800, margin: "0 0 24px 0", textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Frequently Asked <br />Questions
          </h2>
          <p style={{ color: "#71717a", fontSize: "15px", lineHeight: 1.6, margin: 0, maxWidth: "320px" }}>
            Clear alignment on project variables, operational methods, and execution boundaries.
          </p>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE ACCORDION LIST */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: isOpen ? "rgba(255,255,255,0.01)" : "transparent",
                  border: isOpen ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255, 255, 255, 0.03)",
                  borderRadius: "16px",
                  padding: "24px 28px",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
                onClick={() => toggleFAQ(item.id)}
              >
                {/* ACCORDION TRIGGER ROW */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
                  <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    <span style={{ fontFamily: "monospace", fontSize: "12px", color: isOpen ? "#a855f7" : "#52525b", fontWeight: 600, transition: "color 0.2s" }}>
                      {item.id}
                    </span>
                    <h3 style={{ color: isOpen ? "#ffffff" : "#e4e4e7", fontSize: "16px", fontWeight: 600, margin: 0, transition: "color 0.2s" }}>
                      {item.q}
                    </h3>
                  </div>
                  
                  <div style={{ color: isOpen ? "#a855f7" : "#71717a", transition: "color 0.2s", flexShrink: 0 }}>
                    {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                  </div>
                </div>
                
                {/* EXPANDABLE BODY TEXT */}
                <div 
                  style={{ 
                    maxHeight: isOpen ? "200px" : "0px", 
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <p style={{ color: "#a1a1aa", fontSize: "14.5px", lineHeight: 1.6, margin: "16px 0 0 36px" }}>
                    {item.a}
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
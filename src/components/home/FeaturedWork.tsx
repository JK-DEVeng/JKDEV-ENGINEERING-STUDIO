// components/home/FeaturedWork.tsx
"use client";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

type Project = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
  liveLink: string;
};

const projectsData: Project[] = [
  {
    id: "01",
    title: "Aura Real Estate",
    category: "Development • UI/UX Design",
    tags: ["React", "Tailwind", "Real Estate Engine"],
    image: "/images/aura.png",
    liveLink: "https://aura-real-estate1.netlify.app/",
  },
  {
    id: "02",
    title: "Vera Interior Studio",
    category: "Web Design • Art Direction",
    tags: ["Next.js", "Framer Motion", "Interior Space"],
    image: "/images/vera.png",
    liveLink: "https://vera-interior-studio.netlify.app/",
  },
  {
    id: "03",
    title: "Final Build Production V2",
    category: "Full-Stack • Creative Interactive",
    tags: ["TypeScript", "WebGL", "Production Architecture"],
    image: "/images/final.png",
    liveLink: "https://final-build-v2.netlify.app/",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // ⚡ Dynamic breakpoint listener preserves desktop style defaults automatically
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section id="work" style={{ width: "100%", padding: isMobile ? "80px 16px" : "100px 32px", backgroundColor: "#030303", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "1340px", margin: "0 auto", width: "100%" }}>
        
        {/* SECTION HEADER */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-end", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "16px" : "0px", marginBottom: "64px" }}>
          <div>
            <p style={{ color: "#a855f7", textTransform: "uppercase", fontSize: "14px", fontWeight: 600, letterSpacing: "2px", margin: "0 0 12px 0" }}>
              Selected Work
            </p>
            <h2 style={{ color: "#ffffff", fontSize: isMobile ? "32px" : "48px", fontWeight: 800, letterSpacing: "-0.02em", margin: 0, textTransform: "uppercase" }}>
              Featured Case Studies
            </h2>
          </div>
          <a 
            href="/work" 
            style={{ color: "#a1a1aa", textDecoration: "none", fontSize: "14px", fontWeight: 500, display: "flex", alignItems: "center", gap: "6px", transition: "color 0.3s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#a1a1aa"}
          >
            View All Projects ({projectsData.length}) <ArrowUpRight size={16} />
          </a>
        </div>

        {/* PROJECTS STAGGERED GRID */}
        {/* ⚡ Mobile drops to 1fr, bypassing the rigid 550px restriction */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(550px, 1fr))", gap: "40px" }}>
          {projectsData.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const isEven = index % 2 === 1;
            
            // ⚡ Zeroes out desktop stagger offset on single-column mobile views
            const marginTopValue = isEven && !isMobile ? "60px" : "0px";

            return (
              <a
                key={project.id}
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  cursor: "pointer",
                  marginTop: marginTopValue,
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: isHovered ? "translateY(-8px)" : "translateY(0px)",
                }}
              >
                {/* CARD VISUAL BODY FRAME */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16/10",
                    borderRadius: "24px",
                    overflow: "hidden",
                    position: "relative",
                    backgroundColor: "rgba(15, 15, 16, 0.45)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s",
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                      filter: isHovered ? "brightness(0.95)" : "brightness(0.75)",
                    }}
                  />

                  {/* HOVER ARROW FLOATER HUB */}
                  <div
                    style={{
                      position: "absolute",
                      top: "24px",
                      right: "24px",
                      width: "52px",
                      height: "52px",
                      backgroundColor: isHovered ? "#ffffff" : "rgba(15, 15, 16, 0.8)",
                      color: isHovered ? "#000000" : "#ffffff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      transform: isHovered ? "scale(1) rotate(45deg)" : "scale(0.8) rotate(0deg)",
                      opacity: isHovered ? 1 : 0,
                    }}
                  >
                    <ArrowUpRight size={22} />
                  </div>
                  
                  {/* MINI TOP LEFT INDEX BADGE */}
                  <div style={{ position: "absolute", bottom: "24px", left: "24px", color: "rgba(255,255,255,0.4)", fontSize: "14px", fontWeight: 600, fontFamily: "monospace" }}>
                    {project.id}
                  </div>
                </div>

                {/* METADATA LOWER TEXT ROW */}
                {/* ⚡ Flex wrap lets items stack beautifully on slim viewports */}
                <div style={{ marginTop: "20px", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: "16px", padding: "0 4px" }}>
                  <div>
                    <h3 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 700, margin: "0 0 6px 0" }}>
                      {project.title}
                    </h3>
                    <p style={{ color: "#71717a", fontSize: "14px", margin: 0, fontWeight: 500 }}>
                      {project.category}
                    </p>
                  </div>

                  {/* MINI TECHNOLOGY PILL LABELS */}
                  {/* ⚡ flexWrap lets tags gracefully shift down instead of flying off the screen boundary */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "12px",
                          fontWeight: 500,
                          color: "#a1a1aa",
                          backgroundColor: "rgba(255, 255, 255, 0.03)",
                          padding: "6px 12px",
                          borderRadius: "9999px",
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                          whiteSpace: "nowrap"
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
"use client";
import Navbar from "@/components/layout/Navbar"; 
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

type Project = {
  id: string;
  title: string;
  category: string;
  filterGroup: "Real Estate" | "Interior" | "Pottery" | "Healthcare" | "Antiques";
  tags: string[];
  image: string;
  liveLink: string;
};

const allProjectsData: Project[] = [
  // A - REAL ESTATE PROJECTS
  { 
    id: "01", 
    title: "Aura Real Estate", 
    category: "Real Estate • Dynamic Portal", 
    filterGroup: "Real Estate", 
    tags: ["React", "Tailwind"], 
    image: "/images/aura.png", 
    liveLink: "https://aura-real-estate1.netlify.app/" 
  },
  { 
    id: "02", 
    title: "Homes by Lachandra", 
    category: "Real Estate • Luxury Brokerage", 
    filterGroup: "Real Estate", 
    tags: ["Next.js", "Property Maps"], 
    image: "/images/lachandra.png", 
    liveLink: "https://homes-by-lachandra.netlify.app/" 
  },
  { 
    id: "03", 
    title: "Prime Estate Site", 
    category: "Real Estate • Architectural Listing", 
    filterGroup: "Real Estate", 
    tags: ["UI/UX", "Tailwind"], 
    image: "/images/prime.png", 
    liveLink: "https://primeestatesite.netlify.app/" 
  },

  // B - INTERIOR DESIGN & HOME DECOR PROJECTS
  { 
    id: "04", 
    title: "Vera Interior Studio", 
    category: "Interior Design • Creative Showcase", 
    filterGroup: "Interior", 
    tags: ["Next.js", "Framer Motion"], 
    image: "/images/vera.png", 
    liveLink: "https://vera-interior-studio.netlify.app/" 
  },
  { 
    id: "05", 
    title: "Aether Studio Hub", 
    category: "Interior Design • Portfolio Experience", 
    filterGroup: "Interior", 
    tags: ["TypeScript", "Minimalism"], 
    image: "/images/aether.png", 
    liveLink: "https://aetherstudeio.netlify.app/" 
  },
  { 
    id: "06", 
    title: "Velora Atelier", 
    category: "Home Decor • Premium Boutique", 
    filterGroup: "Interior", 
    tags: ["E-Commerce", "Webflow Style"], 
    image: "/images/velora.png", 
    liveLink: "https://veloraatelier.netlify.app/" 
  },

  // C - POTTERY PROJECTS
  { 
    id: "07", 
    title: "Jaipur Blue Art Pottery", 
    category: "Heritage Craft • Cultural Archive", 
    filterGroup: "Pottery", 
    tags: ["E-Commerce", "Art Showcase"], 
    image: "/images/jaipur-pottery.png", 
    liveLink: "https://jaipur-blue-art-pottery.netlify.app/" 
  },

  // D - DENTAL CLINIC PROJECTS
  { 
    id: "08", 
    title: "Sky Dental Clinic NYC", 
    category: "Healthcare • Clinical Infrastructure", 
    filterGroup: "Healthcare", 
    tags: ["Booking System", "Responsive Layout"], 
    image: "/images/sky-dental.png", 
    liveLink: "https://skydentalclinicnyc.netlify.app/" 
  },

  // E - ANTIQUES LEAD PROJECTS
  { 
    id: "09", 
    title: "Carrie Scotts Antiques", 
    category: "Curated Antiques • Lead Generation", 
    filterGroup: "Antiques", 
    tags: ["Vintage UI", "Showroom"], 
    image: "/images/carrie-antiques.png", 
    liveLink: "https://carrie-scotts-antiques.netlify.app/" 
  },
  { 
    id: "10", 
    title: "Vintage Comstock Legacy", 
    category: "Antiques • Classical Ledger", 
    filterGroup: "Antiques", 
    tags: ["Retro Theme", "Archive Data"], 
    image: "/images/comstock-v1.png", 
    liveLink: "https://vintage-comstock.netlify.app/" 
  },
  { 
    id: "11", 
    title: "Vintage Comstock Production V2", 
    category: "Antiques • High-End Redesign (Premium)", 
    filterGroup: "Antiques", 
    tags: ["Structured Layout", "Immersive Feel"], 
    image: "/images/final.png", 
    liveLink: "https://final-build-v2.netlify.app/" 
  }
];

const categories = ["All", "Real Estate", "Interior", "Pottery", "Healthcare", "Antiques"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // ⚡ Breakpoint listener handles clean responsiveness
  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const filteredProjects = allProjectsData.filter((project) => 
    activeFilter === "All" ? true : project.filterGroup === activeFilter
  );

  return (
    <main style={{ backgroundColor: "#030303", minHeight: "100vh", width: "100%", overflowX: "hidden" }}>
      <Navbar />

      {/* WORK HERO TITLE SECTION */}
      <section style={{ width: "100%", padding: isMobile ? "120px 16px 40px 16px" : "180px 32px 40px 32px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", width: "100%" }}>
          
          <a 
            href="/" 
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#71717a", textDecoration: "none", fontSize: "14px", fontWeight: 500, marginBottom: "24px", transition: "color 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#71717a"}
          >
            <ArrowLeft size={16} /> Back to home
          </a>

          <h1 style={{ color: "#ffffff", fontSize: isMobile ? "40px" : "72px", fontWeight: 900, letterSpacing: "-0.04em", margin: "0 0 16px 0", textTransform: "uppercase" }}>
            Archive index
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: isMobile ? "15px" : "18px", maxWidth: "600px", margin: "0 0 48px 0", lineHeight: 1.6 }}>
            A curated showcase of applications, interfaces, and creative interactive deployments engineered from scratch.
          </p>

          {/* DYNAMIC CATEGORY FILTER TRACKER CAPSULE */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "24px" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: isMobile ? "8px 16px" : "10px 24px",
                  fontSize: isMobile ? "13px" : "14px",
                  fontWeight: 500,
                  borderRadius: "9999px",
                  cursor: "pointer",
                  border: activeFilter === cat ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.03)",
                  backgroundColor: activeFilter === cat ? "#ffffff" : "rgba(15, 15, 16, 0.45)",
                  color: activeFilter === cat ? "#000000" : "#a1a1aa",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* COMPACTED ARCHIVE STAGGERED DISPLAY GRID */}
      <section style={{ width: "100%", padding: isMobile ? "0 16px 80px 16px" : "0 32px 120px 32px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1340px", margin: "0 auto", width: "100%" }}>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(550px, 1fr))", 
            gap: isMobile ? "32px" : "48px 40px" 
          }}>
            {filteredProjects.map((project, index) => {
              const isHovered = hoveredIndex === index;
              
              const isEven = index % 2 === 1;
              // ⚡ Disable masonry top alignment offset when stacked down into 1 column on mobile
              const marginTopValue = isEven && !isMobile ? "48px" : "0px";

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
                    marginTop: marginTopValue,
                    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isHovered ? "translateY(-6px)" : "translateY(0px)",
                  }}
                >
                  {/* METADATA PICTURE BOX CONTAINER */}
                  <div style={{ width: "100%", aspectRatio: "16/10", borderRadius: "24px", overflow: "hidden", position: "relative", backgroundColor: "rgba(15, 15, 16, 0.45)", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s",
                        transform: isHovered ? "scale(1.04)" : "scale(1)",
                        filter: isHovered ? "brightness(0.95)" : "brightness(0.75)"
                      }}
                    />

                    {/* WHEEL ARROW HOVER INTERACTION TRIGGER HUB */}
                    <div style={{
                      position: "absolute", top: "24px", right: "24px", width: "52px", height: "52px",
                      backgroundColor: isHovered ? "#ffffff" : "rgba(15, 15, 16, 0.8)",
                      color: isHovered ? "#000000" : "#ffffff",
                      borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                      border: "1px solid rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      transform: isHovered ? "scale(1) rotate(45deg)" : "scale(0.8) rotate(0deg)",
                      opacity: isHovered ? 1 : 0
                    }}>
                      <ArrowUpRight size={22} />
                    </div>

                    <div style={{ position: "absolute", bottom: "24px", left: "24px", color: "rgba(255,255,255,0.4)", fontSize: "14px", fontWeight: 600, fontFamily: "monospace" }}>
                      {project.id}
                    </div>
                  </div>

                  {/* BOTTOM TYPOGRAPHY META LAYOUTS */}
                  {/* ⚡ Adapts to vertical flexbox layout with custom gaps on smaller displays */}
                  <div style={{ 
                    marginTop: "20px", 
                    display: "flex", 
                    flexDirection: isMobile ? "column" : "row", 
                    justifyContent: "space-between", 
                    alignItems: isMobile ? "flex-start" : "center", 
                    gap: "12px",
                    padding: "0 4px" 
                  }}>
                    <div>
                      <h3 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 700, margin: "0 0 6px 0" }}>
                        {project.title}
                      </h3>
                      <p style={{ color: "#71717a", fontSize: "14px", margin: 0, fontWeight: 500 }}>
                        {project.category}
                      </p>
                    </div>

                    {/* MINI TECHNOLOGY PILL LABELS */}
                    {/* ⚡ flexWrap lets tags flow to secondary text lines gracefully */}
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
    </main>
  );
}
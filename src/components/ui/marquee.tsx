"use client";
import React from "react";

type MarqueeItem = {
  text: string;
  outline: boolean;
};

const marqueeData: MarqueeItem[] = [
  { text: "Development", outline: false },
  { text: "UI/UX Design", outline: true },
  { text: "Branding", outline: false },
  { text: "Immersive Web", outline: true },
  { text: "Strategy", outline: false },
  { text: "Motion Graphics", outline: true },
];

export default function Marquee() {
  // Helper to render the sequence block
  const renderBlock = () => (
    <div 
      style={{
        display: "flex",
        alignItems: "center",
        gap: "48px",
        paddingRight: "48px",
        // Cubic-bezier maintains frame alignment across continuous loop repetitions
        animation: "marqueeScroll 25s linear infinite",
      }}
    >
      {marqueeData.map((item, index) => (
        <React.Fragment key={index}>
          {/* TEXT BLOCK */}
          <span
            style={{
              fontSize: "44px", // Balanced scale so it doesn't take over the screen
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              whiteSpace: "nowrap",
              display: "inline-block",
              lineHeight: 1,
              // Conditional styling based on background types
              color: item.outline ? "transparent" : "#ffffff",
              WebkitTextStroke: item.outline ? "1px rgba(255, 255, 255, 0.2)" : "none",
              background: item.outline 
                ? "none" 
                : "linear-gradient(180deg, #ffffff 40%, #a1a1aa 100%)",
              WebkitBackgroundClip: item.outline ? "text" : "text",
              WebkitTextFillColor: item.outline ? "transparent" : "transparent",
            }}
          >
            {item.text}
          </span>

          {/* CUSTOM GEOMETRIC STAR ACCENT */}
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#a855f7", // Matching your brand glow color profile
              flexShrink: 0,
              clipPath: "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)",
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <section style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      {/* GLOBAL KEYFRAME ANIMATION INJECTION */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* OUTER VISUAL CONTAINER CONTAINER */}
      <div
        className="group"
        style={{
          width: "100%",
          overflow: "hidden",
          userSelect: "none",
          padding: "32px 0",
          background: "linear-gradient(180deg, rgba(15, 15, 16, 0.2) 0%, rgba(5, 5, 6, 0.4) 100%)",
          borderTop: "1px solid rgba(255, 255, 255, 0.04)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
          display: "flex",
        }}
      >
        {/* INNER TRACK HOLDING TWO DUPLICATE BLOCKS FOR SEAMLESS LOOPING */}
        <div 
          style={{ display: "flex", whiteSpace: "nowrap" }}
          // Custom CSS injection mapping allows child animations to pause together on hover
          onMouseEnter={(e) => {
            const targets = e.currentTarget.querySelectorAll("div");
            targets.forEach(t => t.style.animationPlayState = "paused");
          }}
          onMouseLeave={(e) => {
            const targets = e.currentTarget.querySelectorAll("div");
            targets.forEach(t => t.style.animationPlayState = "running");
          }}
        >
          {renderBlock()}
          {renderBlock()}
        </div>
      </div>
    </section>
  );
}
"use client";
import Logo from "@/assets/logo/logo";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // ⚡ Track true mobile screen match

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  // ⚡ Dynamic screen tracking hook
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    // Check screen width instantly on load and resize
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the standard md breakpoint
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [handleScroll]);

  const navLinks = ["About us", "Services", "Work", "Pricing", "Process", "Contact"];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        padding: isMobile ? '16px 16px 0 16px' : '24px 24px 0 24px',
        boxSizing: 'border-box'
      }}
    >
      <div 
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          width: '100%',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxSizing: 'border-box'
        }}
      >
        
        {/* 1. LEFT LOGO */}
        <div style={{ flex: '1 1 0%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <a href="#" style={{ display: 'block', transform: 'scale(1.15)', transformOrigin: 'left center' }}>
            <Logo />
          </a>
        </div>

        {/* 2. MIDDLE FLOATING NAVIGATION CAPSULE (DESKTOP MODE) */}
        {/* ⚡ Only renders if isMobile is false */}
        {!isMobile && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: sticky ? '8px 20px' : '12px 28px',
                borderRadius: '9999px',
                boxSizing: 'border-box',
                backgroundColor: sticky ? 'rgba(15, 15, 16, 0.85)' : 'rgba(15, 15, 16, 0.45)',
                border: sticky ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: sticky ? '0 20px 40px -15px rgba(0,0,0,0.7)' : 'none',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: 'transform, padding, background-color'
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={link === "Work" ? "#work" :
                        link === "Services" ? "#services" :
                        link === "Pricing" ? "#pricing" :
                        link === "Process" ? "#process" :
                        link === "About us" ? "#about" :
                        link === "Contact" ? "/contact" :
                        `#${link.toLowerCase().replace(" ", "")}`
                  }
                  className="transition-all duration-300 ease-out hover:text-white hover:bg-white/10"
                  style={{
                    padding: '10px 20px',
                    fontSize: '14px',
                    fontWeight: 500,
                    borderRadius: '9999px',
                    color: '#a1a1aa',
                    whiteSpace: 'nowrap',
                    display: 'inline-block',
                    textDecoration: 'none'
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* 3. RIGHT CALL TO ACTION BUTTON (DESKTOP) & HAMBURGER (MOBILE) */}
        <div style={{ flex: '1 1 0%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
          
          {/* Your gorgeous action button hides dynamically on mobile views */}
          {!isMobile && (
            <Button 
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              className="hidden lg:inline-flex items-center justify-center relative rounded-full h-12 overflow-hidden bg-purple-950 text-black border border-white/10 hover:bg-white/90"
              style={{ 
                boxSizing: 'border-box',
                fontSize: '14.5px',
                fontWeight: 600,
                cursor: 'pointer',
                paddingLeft: btnHovered ? '54px' : '24px',
                paddingRight: btnHovered ? '24px' : '54px',
                transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)'
              }}
            >
              <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}> {/* <--- 2. Wrap it here */}
                <span style={{ 
                  position: 'relative', 
                  zIndex: 10, 
                  whiteSpace: 'nowrap', 
                  display: 'block', 
                  transform: btnHovered ? 'translateX(4px)' : 'translateX(0px)', 
                  transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)' 
                }}>
                  Let's Collaborate
                </span>
              </Link>
              <div style={{ position: 'absolute', top: '5px', left: btnHovered ? '6px' : 'calc(100% - 43px)', width: '38px', height: '38px', backgroundColor: '#000000', color: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)', transform: btnHovered ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                <ArrowUpRight size={18} />
              </div>
            </Button>
          )}

          {/* ⚡ HAMBURGER TRIGGER BUTTON */}
          {/* Only rendered if the screen engine detects a true mobile size width layout */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                backgroundColor: 'rgba(15, 15, 16, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          )}
        </div>
      </div>

      {/* ⚡ MOBILE DROPDOWN LINKS PANEL */}
      {isMobile && mobileOpen && (
        <div 
          style={{
            position: 'absolute',
            top: '84px',
            left: '16px',
            right: '16px',
            backgroundColor: 'rgba(10, 10, 11, 0.98)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            padding: '16px',
            boxSizing: 'border-box',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.8)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={link === "Work" ? "#work" :
                    link === "Services" ? "#services" :
                    link === "Pricing" ? "#pricing" :
                    link === "Process" ? "#process" :
                    link === "About us" ? "#about" :
                    link === "Contact" ? "/contact" :
                    `#${link.toLowerCase().replace(" ", "")}`
              }
              onClick={() => setMobileOpen(false)}
              style={{
                color: '#e4e4e7',
                fontSize: '15px',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '12px 16px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255,255,255,0.01)',
                display: 'block'
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
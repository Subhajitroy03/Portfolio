"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function NextPageArrow({ href, label }: { href: string, label: string }) {
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!arrowRef.current) return;
    
    // Continuous subtle bounce on the arrow to catch attention
    gsap.to(arrowRef.current, {
      x: 10,
      duration: 0.8,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", padding: "8rem 5vw 6rem", width: "100%", maxWidth: "1600px", margin: "0 auto" }}>
      <Link 
        href={href} 
        prefetch={true}
        style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "2rem", 
          textDecoration: "none", 
          color: "var(--fg)", 
          opacity: 0.8,
          transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0.8";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", cursor: "pointer" }}>
          <span style={{ fontSize: "1rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--mute)", marginBottom: "0.5rem", fontWeight: 600 }}>Next Page</span>
          <span style={{ fontSize: "3.5rem", fontWeight: 600, lineHeight: 1, letterSpacing: "-0.02em" }}>{label}</span>
        </div>
        <svg 
          ref={arrowRef} 
          width="80" 
          height="80" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{
            background: "var(--fg)",
            color: "var(--bg)",
            borderRadius: "50%",
            padding: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
          }}
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </Link>
    </div>
  );
}

'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import type { projects } from "@/lib/data";

export default function Project({ p, full = false }: { p: (typeof projects)[number]; full?: boolean }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2.5rem",
        marginBottom: "5rem",
        background: "var(--paper)",
        padding: "clamp(2rem, 5vw, 4rem)",
        borderRadius: "32px",
        border: "1px solid var(--line)",
        boxShadow: "0 20px 40px -15px rgba(27,23,7,0.08)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Subtle top gradient accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "6px", background: "linear-gradient(90deg, var(--y2), transparent)" }} />
      
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "2rem" }}>
        <div style={{ flex: "1 1 500px" }}>
          <h3 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1.2rem", lineHeight: 1.1, letterSpacing: "-0.04em", fontWeight: 800 }}>
            {p.name}
          </h3>
          <p style={{ fontSize: "1.15rem", color: "var(--mute)", maxWidth: "55ch", lineHeight: 1.6 }}>
            {p.desc}
          </p>
        </div>
        
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", alignContent: "flex-start", flex: "1 1 200px", justifyContent: "flex-end" }}>
          {p.tags.map((t) => (
            <span key={t} style={{ 
              padding: "0.5rem 1.2rem", 
              borderRadius: "100px", 
              background: "var(--y)", 
              color: "var(--fg)",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.02em"
            }}>{t}</span>
          ))}
        </div>
      </div>

      {full ? (
        <>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
            gap: "2.5rem", 
            padding: "2.5rem", 
            background: "rgba(0,0,0,0.02)", 
            borderRadius: "24px",
            border: "1px dashed rgba(0,0,0,0.08)"
          }}>
            <div>
              <b style={{ display: "block", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--mute)", marginBottom: "0.8rem" }}>Role</b>
              <span style={{ fontWeight: 600, fontSize: "1.05rem" }}>{p.role}</span>
            </div>
            <div>
              <b style={{ display: "block", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--mute)", marginBottom: "0.8rem" }}>Tech Stack</b>
              <span style={{ fontWeight: 600, fontSize: "1.05rem" }}>{p.stack}</span>
            </div>
            <div>
              <b style={{ display: "block", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--mute)", marginBottom: "0.8rem" }}>Highlights</b>
              <span style={{ fontWeight: 600, fontSize: "1.05rem" }}>{p.note}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", alignItems: "flex-start" }}>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontWeight: 700, padding: "0.8rem 1.5rem", background: "var(--fg)", color: "var(--bg)", borderRadius: "12px", textDecoration: "none", transition: "all 0.2s cubic-bezier(0.25, 1, 0.5, 1)" }} onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'; }} onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  Visit Live <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontWeight: 700, padding: "0.8rem 1.5rem", border: "2px solid var(--fg)", color: "var(--fg)", borderRadius: "12px", textDecoration: "none", transition: "all 0.2s cubic-bezier(0.25, 1, 0.5, 1)" }} onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)'; e.currentTarget.style.background = 'rgba(0,0,0,0.03)'; }} onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = 'transparent'; }}>
                  View Source <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              )}
            </div>
          </div>
          
          {/* Project Video */}
          {'youtube' in p && typeof p.youtube === 'string' && (
            <div style={{ marginTop: "1rem" }}>
              <div style={{ 
                width: "100%", 
                maxWidth: "680px",
                aspectRatio: "16/9", 
                background: "#000", 
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
              }}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={p.youtube} 
                  title={`${p.name} Video`}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  style={{ border: "none" }}
                ></iframe>
              </div>
            </div>
          )}
        </>
      ) : (
        <Link href="/work" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 800, padding: "1rem 2rem", background: "var(--fg)", color: "var(--bg)", borderRadius: "100px", textDecoration: "none", width: "fit-content", transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)" }} onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)'; }} onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
          View Project Details <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </Link>
      )}
    </motion.article>
  );
}

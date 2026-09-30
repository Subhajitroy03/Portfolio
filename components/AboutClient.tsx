"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import TechStack from "@/components/TechStack";
import NextPageArrow from "@/components/NextPageArrow";
import Reveal, { Words } from "@/components/Reveal";

const BentoCard = ({ children, className, style, delay = 0 }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className={`bento-card ${className || ""}`}
      style={{
        background: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRadius: "24px",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.05)",
        overflow: "hidden",
        position: "relative",
        ...style
      }}
    >
      {children}
    </motion.div>
  );
};

const EducationCard = ({ title, degree, date, details, score, photos = [], delay = 0, link }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeout = useRef<any>(null);

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => setIsHovered(true), 1000);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02, y: -5, boxShadow: "0 15px 35px rgba(255, 214, 10, 0.2)" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => link && window.open(link, "_blank")}
      style={{
        background: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(24px)",
        borderRadius: "20px",
        border: "1px solid rgba(255, 214, 10, 0.3)",
        padding: "2rem",
        paddingBottom: isHovered ? "14rem" : "2rem",
        marginBottom: "2rem",
        position: "relative",
        overflow: "hidden",
        cursor: link ? "pointer" : "default",
        transition: "padding 1s cubic-bezier(0.25, 1, 0.5, 1)"
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, width: "4px", height: "100%", background: "var(--y2)", zIndex: 2 }} />

      {/* Foreground Text */}
      <div style={{ opacity: isHovered ? 0 : 1, transition: "opacity 0.8s ease", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.3rem", color: "var(--fg)" }}>{title}</h3>
            <p style={{ fontSize: "1rem", color: "var(--mute)", fontWeight: 500, letterSpacing: "0.02em" }}>{degree}</p>
          </div>
          <div style={{ 
            background: "var(--fg)", 
            color: "var(--bg)", 
            padding: "0.4rem 1rem", 
            borderRadius: "99px",
            fontSize: "0.85rem",
            fontWeight: 700
          }}>
            {date}
          </div>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <p style={{ fontSize: "1.1rem", color: "var(--fg)" }}>
            <strong style={{ color: "var(--y2)", filter: "brightness(0.6)" }}>Score / CGPA:</strong> {score}
          </p>
          {details && (
            <p style={{ color: "var(--mute)", fontSize: "0.95rem", lineHeight: 1.6, marginTop: "0.8rem" }}>
              {details}
            </p>
          )}
        </div>
      </div>

      {/* Background Marquee for Photos */}
      {photos.length > 0 && (
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: isHovered ? 0.6 : 0, 
          transition: "opacity 1s ease 0.3s",
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 0,
        }}>
          <div style={{
            display: "flex",
            gap: "6px",
            width: "max-content",
            height: "100%",
            boxSizing: "border-box",
            animation: "scroll-edu 20s linear infinite",
            backgroundColor: "#0d0d0f",
            padding: "36px 8px",
            position: "relative"
          }}>
            {/* Top Film Holes */}
            <div style={{ position: "absolute", top: "10px", left: 0, right: 0, height: "16px", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Crect x='4' y='2' width='16' height='12' rx='3' fill='rgba(255,255,255,0.4)'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat-x" }} />
            
            {[...photos, ...photos, ...photos].map((src: string, i: number) => (
              <img key={i} src={src} alt="Memory" style={{ height: "100%", width: "auto", borderRadius: "4px", objectFit: "cover" }} />
            ))}

            {/* Bottom Film Holes */}
            <div style={{ position: "absolute", bottom: "10px", left: 0, right: 0, height: "16px", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Crect x='4' y='2' width='16' height='12' rx='3' fill='rgba(255,255,255,0.4)'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat-x" }} />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default function AboutClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "15%"]);

  return (
    <Reveal>
      <div ref={containerRef}>
        {/* 1. Cinematic Hero Header */}
      <section style={{ 
        position: "relative", 
        minHeight: "70vh", 
        display: "flex", 
        alignItems: "center", 
        overflow: "hidden",
        paddingTop: "6rem"
      }}>
        <motion.div 
          style={{ position: "absolute", right: "-10%", top: 0, y: yParallax, zIndex: 0, opacity: 0.3, width: "60vw", height: "80vh" }}
        >
          <Image src="/about/photo.webp" alt="Background Texture" fill style={{ objectFit: "cover", filter: "blur(20px) grayscale(50%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--bg) 20%, transparent 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, var(--bg) 0%, transparent 50%, var(--bg) 100%)" }} />
        </motion.div>
        
        <div className="w" style={{ position: "relative", zIndex: 10 }}>
          <motion.h1 
            style={{ 
              fontSize: "clamp(3.5rem, 10vw, 9rem)", 
              lineHeight: 0.9, 
              fontWeight: 900, 
              letterSpacing: "-0.05em",
              margin: 0
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          >
            <span style={{ display: "block", color: "var(--fg)" }}>It started</span>
            <span style={{ display: "block", color: "var(--mute)", WebkitTextStroke: "1px rgba(0,0,0,0.1)", textShadow: "4px 4px 0px var(--y2)" }}>with curiosity.</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. Bento Box Bio */}
      <section className="w" style={{ marginTop: "2rem", marginBottom: "8rem" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "1.2rem",
          alignItems: "stretch"
        }}>
          {/* Main Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1.25 }}
            transition={{ duration: 0.8, delay: 0, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true, margin: "100px" }}
            style={{ 
              position: "relative", 
              gridColumn: "span 1",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end", // Align to bottom
              transformOrigin: "bottom center", // Grow upwards
              zIndex: 20
            }}
          >
            <Image 
              src="/about/photo.webp" 
              alt="Subhajit Roy" 
              fill 
              sizes="(max-width:860px) 100vw, 40vw" 
              style={{ objectFit: "contain", objectPosition: "bottom center" }} 
              priority
            />
          </motion.div>

          {/* Intro Text Card */}
          <BentoCard delay={0.2} style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", gridColumn: "span 2", background: "var(--y)" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "1rem", letterSpacing: "-0.03em" }}>Who am I?</h2>
            <div style={{ fontSize: "1.05rem", lineHeight: 1.6, fontWeight: 500, color: "var(--fg)" }}>
              <Words text="I'm a Computer Science student who enjoys understanding how things work beneath the surface. From first programs to full-stack applications, I became fascinated by backend systems, databases and the engineering behind products people use." />
            </div>
          </BentoCard>
        </div>
      </section>

      {/* 3. Interactive Education Timeline */}
      <section className="w" style={{ marginBottom: "8rem" }}>
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "4rem" }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, letterSpacing: "-0.04em", margin: 0 }}
          >
            Education & Milestones
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "var(--fg)",
              marginRight: "5%",
              marginTop: "2rem"
            }}
          >
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap');
            `}</style>
            <span style={{ 
              fontFamily: "'Caveat', 'Comic Sans MS', cursive", 
              fontSize: "1.8rem", 
              fontWeight: 600, 
              transform: "rotate(-10deg) translateX(10px)",
              marginBottom: "5px"
            }}>
              please hover
            </span>
            <motion.div
              animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible", transform: "rotate(10deg)" }}>
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: [0, 1, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.6, 1], ease: "easeInOut" }}
                  viewport={{ once: true }}
                  d="M 50 10 a 20 12 0 0 1 0 24 a 20 4 0 0 1 0 -8 a 20 12 0 0 1 0 24 a 20 4 0 0 1 0 -8 a 20 12 0 0 1 0 24 a 20 4 0 0 1 0 -8 a 20 12 0 0 1 0 24 C 10 82, 10 82, 10 110" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  fill="none" 
                />
                <motion.path 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 0, 1, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.55, 0.6, 1] }}
                  viewport={{ once: true }}
                  d="M 2 100 L 10 110 L 18 100" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  fill="none" 
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
        
        <div style={{ position: "relative", paddingLeft: "1.5rem" }}>
          {/* Timeline Line */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "2px", background: "linear-gradient(to bottom, var(--y2) 0%, rgba(0,0,0,0.1) 100%)" }} />
          
          <EducationCard 
            delay={0.1}
            title="Academy of Technology, Adisaptagram"
            degree="B.Tech in Computer Science and Engineering"
            date="Aug 2023 – Jun 2027"
            score="8.8"
            link="https://aot.edu.in"
            details="Relevant Coursework: Data Structures, Algorithms, OOP, DBMS, Computer Networks, Software Engineering"
            photos={[
              "/about/AOT/WhatsApp Image 2026-09-30 at 2.42.19 AM.jpeg",
              "/about/AOT/WhatsApp Image 2026-09-30 at 2.42.34 AM.jpeg",
              "/about/AOT/WhatsApp Image 2026-09-30 at 2.43.22 AM.jpeg"
            ]}
          />
          <EducationCard 
            delay={0.2}
            title="Satish Chandra Memorial School"
            degree="Higher Secondary (CBSE)"
            date="2020 – 2022"
            score="92.6%"
            link="https://www.scmemorial.org"
            photos={[
              "/about/class12/HS1.webp",
              "/about/class12/HS2.webp",
              "/about/class12/HS3.webp",
              "/about/class12/HS4.webp",
              "/about/class12/HS5.webp",
              "/about/class12/HS6.webp"
            ]}
          />
          <EducationCard 
            delay={0.3}
            title="Satish Chandra Memorial School"
            degree="Secondary (CBSE)"
            date="2007 – 2020"
            score="97%"
            link="https://www.scmemorial.org"
            photos={[
              "/about/class10/school_1.webp",
              "/about/class10/school_2.webp",
              "/about/class10/school_3.webp",
              "/about/class10/school_4.webp",
              "/about/class10/school_5.webp",
              "/about/class10/school_6.webp"
            ]}
          />
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-edu {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}} />
      </section>

      {/* 4. Tech Stack */}
      <section style={{ marginBottom: "4rem", overflow: "hidden" }}>
        <div className="w">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: "2rem" }}
          >
            Technical Arsenal
          </motion.h2>
        </div>
        <TechStack />
      </section>

      <NextPageArrow href="/work" label="Work" />
      </div>
    </Reveal>
  );
}

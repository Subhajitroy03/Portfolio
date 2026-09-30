"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";

const track1 = ["/slideshow/s9.webp", "/slideshow/s10.webp", "/slideshow/s11.webp", "/slideshow/s12.webp", "/slideshow/s13.webp"];
const track2 = [
  { src: "/slideshow/s1.webp", desc: "Backend Session by SCCSE" },
  { src: "/slideshow/s2.webp", desc: "Tech Team with Me as Tech Lead" },
  { src: "/slideshow/s3.webp", desc: "SCCSE Core Team" },
  { src: "/slideshow/s4.webp", desc: "Smart Attendance Monitoring Presentation" },
  { src: "/slideshow/s5.webp", desc: "First Prize Winner, BINARY, KGEC" },
  { src: "/slideshow/s6.webp", desc: "First Prize Winner, BINARY, KGEC" },
  { src: "/slideshow/s7.webp", desc: "Volunteer, TCS Technology Day" },
  { src: "/slideshow/s8.webp", desc: "Top 10 Finalist, FrostHacks" },
  { src: "/slideshow/s9.webp", desc: "Farewell Programme Organizer" },
  { src: "/slideshow/s10.webp", desc: "Session at Xerox-Lexmark" },
  { src: "/slideshow/s11.webp", desc: "FrostHacks Finals Participant" },
  { src: "/slideshow/s12.webp", desc: "Top 0.01% Scorer, Class 10" },
  { src: "/slideshow/s13.webp", desc: "Successfully Led and Conducted an Event" },
  { src: "/slideshow/s14.webp", desc: "Aperture 2.0 Open-Source Participant" },
  { src: "/slideshow/s15.webp", desc: "AOT Techfest Participant" },
  { src: "/slideshow/s16.webp", desc: "Most Innovative Project at Hack Technique" },
  { src: "/slideshow/s17.webp", desc: "Admisison in AOT" },
  { src: "/slideshow/s18.webp", desc: "Photography in TechFest,AOT" },
  { src: "/slideshow/s19.webp", desc: "Presenting Alumni Portal, AOT" },
  { src: "/slideshow/s20.webp", desc: "SCCSE Event with my seniors" }
];
const track3 = ["/slideshow/s16.webp", "/slideshow/s14.webp", "/slideshow/s15.webp", "/slideshow/s8.webp", "/slideshow/s7.webp", "/slideshow/s5.webp"];

function FilmCard({ src, desc, blur, priority, interactive = false }: { src: string, desc?: string, blur: boolean, priority: boolean, interactive?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Use the color version of the image as the base, apply CSS grayscale to it
  const actualSrc = src.replace('.webp', '_color.webp');

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { damping: 20, stiffness: 300, mass: 0.5 });
  const mouseY = useSpring(y, { damping: 20, stiffness: 300, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  // Determine CSS filters
  let filterStr = blur ? "blur(2px) " : "";
  if (!(interactive && isHovered)) {
    filterStr += "grayscale(100%)";
  }
  if (!filterStr.trim()) filterStr = "none";

  return (
    <div
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        flexShrink: 0,
        width: "clamp(260px, 35vw, 500px)",
        height: "clamp(180px, 25vw, 340px)",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.05)",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6)",
        backgroundColor: "#18181b",
        pointerEvents: interactive ? "auto" : "none",
        cursor: interactive ? "pointer" : "default",
        transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
        transform: isHovered ? "scale(1.03)" : "scale(1)",
      }}
    >
      <Image
        src={actualSrc}
        alt={desc || "Cinematic photo"}
        fill
        style={{
          objectFit: "cover",
          filter: filterStr,
          transition: "filter 0.5s ease",
        }}
        sizes="(max-width: 768px) 260px, (max-width: 1024px) 380px, 500px"
        priority={priority}
      />

      {/* Cinematic grading overlays */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.85))", pointerEvents: "none", opacity: isHovered ? 0 : 1, transition: "opacity 0.5s ease" }} />
      {interactive && desc && (
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            x: mouseX,
            y: mouseY,
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
            pointerEvents: "none",
            zIndex: 30,
          }}
        >
          <div
            style={{
              transform: "translate(-50%, -150%)",
              backgroundColor: "rgba(15, 15, 15, 0.7)",
              color: "#fff",
              padding: "6px 12px",
              borderRadius: "8px",
              fontSize: "0.75rem",
              fontWeight: 500,
              whiteSpace: "nowrap",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
              fontFamily: "var(--font-b), system-ui, sans-serif"
            }}
          >
            {desc}
          </div>
        </motion.div>
      )}
    </div>
  );
}

function FilmTrack({ images, duration, reverse, scale, top, opacity, blur = false, zIndex = 0, interactive = false }: any) {
  const shouldReduceMotion = useReducedMotion();
  const loopImages = [...images, ...images];

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top,
        transform: `scale(${scale})`,
        opacity,
        zIndex,
        pointerEvents: interactive ? "auto" : "none",
        display: "flex",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          gap: "1.5rem",
          paddingRight: "1.5rem",
          width: "max-content",
          willChange: "transform"
        }}
        animate={{ x: shouldReduceMotion ? "0%" : (reverse ? ["-50%", "0%"] : ["0%", "-50%"]) }}
        transition={{ repeat: Infinity, ease: "linear", duration }}
      >
        {loopImages.map((item, i) => {
          const src = typeof item === 'string' ? item : item.src;
          const desc = typeof item === 'string' ? undefined : item.desc;

          return (
            <FilmCard key={i} src={src} desc={desc} blur={blur} priority={i < 4} interactive={interactive} />
          );
        })}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Parallax: video scrolls up as user scrolls down
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: videoSectionRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const shouldReduceMotion = useReducedMotion();
  const videoParallaxY = useTransform(heroScrollProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "-25%"]);
  const yPortrait = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "20%"]);

  return (
    <div>
      {/* 1. Cover Video — full bleed, no overlay, parallax on scroll */}
      <section
        ref={videoSectionRef}
        style={{ height: "100vh", position: "relative", overflow: "hidden", backgroundColor: "#000" }}
      >
        <motion.video
          ref={videoRef}
          src="/cover_video.mp4"
          poster="/cover_image.png"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "115%", // extra height so parallax doesn't show gap at bottom
            objectFit: "cover",
            objectPosition: "top",
            y: videoParallaxY,
            // GPU compositing — own layer, no repaint
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            imageRendering: "high-quality" as any,
            opacity: 1,
            filter: "none",
          }}
        />

        {/* Film grain overlay for cinematic continuity */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", opacity: 0.04, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px" }} />

        {/* Subtle bottom vignette */}
        <div style={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none", background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)" }} />

        {/* Hero identity text */}
        <div style={{
          position: "absolute",
          bottom: "clamp(5rem, 12vh, 8rem)",
          left: 0,
          right: 0,
          zIndex: 10,
          padding: "0 clamp(1.25rem, 4.5vw, 4rem)",
          pointerEvents: "none"
        }}>
          <motion.h1
            style={{
              fontFamily: "var(--font-d), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 7.5vw, 7rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              color: "#fff",
              margin: 0,
              textShadow: "0 4px 40px rgba(0,0,0,0.35)"
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.8, ease: [0.25, 1, 0.5, 1] }}
          >
            Subhajit Roy
          </motion.h1>
          <motion.p
            style={{
              fontFamily: "var(--font-b), system-ui, sans-serif",
              fontSize: "clamp(0.85rem, 1.5vw, 1.15rem)",
              color: "rgba(255,255,255,0.6)",
              marginTop: "0.8rem",
              marginLeft: "0.4rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 500,
              textShadow: "0 2px 20px rgba(0,0,0,0.3)"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.1, ease: [0.25, 1, 0.5, 1] }}
          >
            Full Stack Backend Developer
          </motion.p>
        </div>

        {/* Scroll down indicator */}
        <div style={{ position: "absolute", bottom: "1.5rem", left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 10, pointerEvents: "none" }}>
          <motion.div
            style={{
              color: "rgba(255,255,255,0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.3rem",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 6, 0] }}
            transition={{ opacity: { delay: 3.5, duration: 0.8 }, y: { delay: 3.5, duration: 1.5, repeat: Infinity, ease: "easeInOut" } }}
          >
            <div style={{ width: "1px", height: "28px", background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))" }} />
          </motion.div>
        </div>
      </section>

      {/* 2. The Text View (Its own section before the cinematic photo hero) */}
      <section style={{ height: "100vh", position: "relative", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div className="w" style={{ zIndex: 10, width: "100%" }}>
          <motion.h2
            className="xl"
            style={{ margin: 0, textAlign: "left" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <span style={{ display: "block" }}>The backend</span>
            <span style={{ display: "block", color: "var(--mute)" }}>you never see.</span>
            <span style={{ display: "block" }}>The product</span>
            <span style={{ display: "block", color: "var(--mute)" }}>you feel.</span>
          </motion.h2>
        </div>
      </section>

      {/* 3. Cinematic Photo Section */}
      <section
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100svh",
          overflow: "hidden",
          backgroundColor: "#09090b",
          display: "flex",
          alignItems: "center"
        }}
      >
        {/* Background Ambience */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, #18181b 0%, #000 100%)", zIndex: 0 }} />

        {/* Film Tracks Container */}
        <div style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transform: "rotate(-2deg) scale(1.05)",
          transformOrigin: "center"
        }}>

          {/* Top Track (Slow, Far background) */}
          <FilmTrack
            images={track1}
            duration={30}
            reverse={false}
            scale={0.85}
            top="-5%"
            opacity={0.35}
            blur={true}
            zIndex={1}
          />

          {/* Middle Track (Central, prominent, passes behind head) */}
          <FilmTrack
            images={track2}
            duration={55}
            reverse={true}
            scale={1}
            top="35%"
            opacity={0.9}
            blur={false}
            zIndex={2}
            interactive={true}
          />

          {/* Bottom Track (Fastest, slightly blurred, foreground-ish) */}
          <FilmTrack
            images={track3}
            duration={15}
            reverse={false}
            scale={1.15}
            top="70%"
            opacity={0.5}
            blur={true}
            zIndex={3}
          />
        </div>

        {/* Vignette & Depth overlays */}
        <div style={{ position: "absolute", inset: 0, zIndex: 15, background: "radial-gradient(ellipse at center, transparent 30%, rgba(9,9,11,0.85) 100%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 15, background: "linear-gradient(to top, rgba(9,9,11,1) 0%, transparent 20%)", pointerEvents: "none" }} />

        {/* Large Grayscale Portrait Cutout */}
        <motion.div
          style={{
            position: "absolute",
            left: "clamp(2%, 5vw, 8%)",
            bottom: 0,
            width: "clamp(200px, 35vw, 550px)",
            height: "80vh",
            zIndex: 20,
            pointerEvents: "none",
            transformOrigin: "bottom left",
            y: yPortrait
          }}
        >
          <Image
            src="/slideshow/me_B_2.webp"
            alt="Subhajit Roy Cinematic Portrait"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "left bottom",
              filter: "drop-shadow(25px 0 40px rgba(0,0,0,0.85))"
            }}
            priority
          />
        </motion.div>

        {/* Subtle overlay for ground depth on portrait */}
        <div style={{ position: "absolute", inset: 0, zIndex: 25, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 15%)", pointerEvents: "none" }} />
      </section>
    </div>
  );
}

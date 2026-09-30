"use client";
import React, { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

const Lanyard = dynamic(() => import("./Lanyard"), { ssr: false });

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "white", textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "rgba(255,0,0,0.2)", padding: "2rem", borderRadius: "16px", border: "1px solid rgba(255,0,0,0.4)" }}>
          <h2 style={{ margin: "0 0 1rem 0" }}>Missing 3D Assets!</h2>
          <p style={{ margin: 0, fontSize: "1.1rem" }}>Could not load <code>/card.glb</code> or <code>/lanyard.png</code>.</p>
          <p style={{ margin: "0.5rem 0 0 0" }}>Please download them and place them in your <code>public/</code> folder.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function IDCardOverlay({ onClose }: { onClose?: () => void }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        pointerEvents: "auto",
        background: "rgba(0,0,0,0.65)", // Darker background to focus on the card
        backdropFilter: "blur(8px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {/* Top Right Close Button */}
      <button 
        onClick={onClose}
        style={{
          position: "absolute",
          top: "2rem",
          right: "2rem",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 10000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          fontFamily: "var(--font-manrope), sans-serif",
          fontWeight: 400,
          transition: "all 0.2s"
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.2)";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.1)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        ✕
      </button>

      {/* Stylish DRAG indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end", // Align text and bar to the right
          gap: "0.5rem",
          zIndex: 10000,
        }}
      >
        <span style={{
          fontFamily: "var(--font-manrope), sans-serif",
          color: "rgba(255,255,255,0.8)",
          fontSize: "14px",
          letterSpacing: "0.24em",
          fontWeight: 600,
          textTransform: "uppercase"
        }}>
          Drag to Spin
        </span>
        <motion.div 
          animate={{ x: [-10, 10, -10] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ width: "40px", height: "2px", background: "rgba(255,255,255,0.5)", borderRadius: "2px" }}
        />
      </motion.div>

      {/* Background Text about Tech Lead Journey */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: "-50%" }}
        animate={{ opacity: 1, x: 0, y: "-50%" }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          position: "absolute",
          top: "50%",
          right: "4rem",
          maxWidth: "450px",
          width: "90%",
          textAlign: "left",
          zIndex: 1, 
          pointerEvents: "none",
        }}
      >
        <h3 style={{ margin: "0 0 0.5rem 0", fontFamily: "var(--font-manrope), sans-serif", fontSize: "48px", fontWeight: 700, color: "#fff", letterSpacing: "-0.035em", lineHeight: 1.05 }}>
          Tech Lead, IEI<br/>Student Chapter<br/>CSE
        </h3>
        <p style={{ margin: "0 0 0.5rem 0", fontFamily: "var(--font-manrope), sans-serif", color: "var(--y2)", fontWeight: 600, fontSize: "21px", letterSpacing: "-0.01em", lineHeight: 1.3 }}>
          Academy of Technology
        </p>
        <p style={{ margin: "0 0 3rem 0", fontFamily: "var(--font-manrope), sans-serif", color: "rgba(255,255,255,0.5)", fontWeight: 500, fontSize: "16px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          OCT 2025 - PRESENT
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <h4 style={{ margin: "0 0 1rem 0", fontFamily: "var(--font-manrope), sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700 }}>
              RESPONSIBILITIES
            </h4>
            <div style={{ borderLeft: "2px solid rgba(255,255,255,0.1)", paddingLeft: "1.5rem", marginLeft: "0.25rem" }}>
              <p style={{ fontFamily: "var(--font-manrope), sans-serif", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, fontSize: "16.5px", margin: "0 0 1.2rem 0", fontWeight: 300 }}>
                Designed and deployed a Task Manager platform with automated email reminders and task management functionality.
              </p>
              <p style={{ fontFamily: "var(--font-manrope), sans-serif", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, fontSize: "16.5px", margin: 0, fontWeight: 300 }}>
                Leading development of the official SC-CSE AOT website: <span style={{ pointerEvents: "auto" }}><a href="https://www.sccseaot.in" target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "underline", fontWeight: 500 }}>www.sccseaot.in</a></span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div style={{ width: "100%", height: "100%", position: "relative", zIndex: 10 }}>
        <ErrorBoundary>
          <Suspense fallback={<div style={{ color: "var(--bg)", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontWeight: 600 }}>Loading ID Card...</div>}>
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} frontImage="/id_front.png" backImage="/id_back.jpeg" />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

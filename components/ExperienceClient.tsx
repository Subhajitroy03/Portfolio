"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/lib/data";

import IDCardOverlay from "@/components/IDCardOverlay";
import FlowingMenu from "@/components/FlowingMenu";
import PaperCrumple from "@/components/PaperCrumple";

const defaultImages = [
  'https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=600&h=400&fit=crop&sat=-100&auto=format',
  'https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format',
  'https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=600&h=400&fit=crop&sat=-100&auto=format',
  'https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format'
];

const ExperienceClient = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const expandedExp = expandedId !== null ? experience[expandedId] : null;
  const isTechLead = expandedExp?.role.includes("Tech Lead");
  const isIndomitech = expandedExp?.org === "Indomitech Group";

  const menuItems = experience.map((exp, idx) => ({
    link: '#',
    text: exp.role,
    image: defaultImages[idx % defaultImages.length],
    onClick: () => setExpandedId(expandedId === idx ? null : idx)
  }));

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {expandedId !== null && isTechLead && <IDCardOverlay key={expandedId} onClose={() => setExpandedId(null)} />}
      {expandedId !== null && !isTechLead && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999, background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "auto" }}>
          <button onClick={() => setExpandedId(null)} style={{ position: "absolute", top: "2rem", right: "2rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", width: "50px", height: "50px", borderRadius: "50%", cursor: "pointer", zIndex: 10000, fontSize: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }} onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; e.currentTarget.style.transform = "scale(1.1)"; }} onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "scale(1)"; }}>✕</button>
          
          <AnimatePresence mode="wait">
            {isIndomitech && (
              <motion.div 
                key="indomitech"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
                style={{ display: "flex", flexWrap: "wrap", gap: "4rem", maxWidth: "1100px", width: "90%", maxHeight: "90vh", overflowY: "auto", alignItems: "center" }}
              >
                <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <PaperCrumple
                    src="/experiences/indomitech-offer-letter.webp"
                    alt="Indomitech Offer Letter"
                    width={600}
                    height={400}
                    sceneHeight={400}
                    imageFit="contain"
                    releaseBehavior="restore"
                    draggable={true}
                    style={{ width: "100%" }}
                  />
                  <div style={{ marginTop: "1rem", fontFamily: "var(--font-manrope), sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "14px", letterSpacing: "0.24em", fontWeight: 600, textTransform: "uppercase", pointerEvents: "none" }}>
                    Click and hold to crumple
                  </div>
                </div>
                <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "2rem" }}>
                  <h3 style={{ margin: "0 0 0.5rem 0", fontFamily: "var(--font-manrope), sans-serif", fontSize: "48px", fontWeight: 700, color: "#fff", letterSpacing: "-0.035em", lineHeight: 1.05 }}>
                    {expandedExp.role}
                  </h3>
                  <p style={{ margin: "0 0 0.5rem 0", fontFamily: "var(--font-manrope), sans-serif", color: "var(--y2)", fontWeight: 600, fontSize: "21px", letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                    {expandedExp.org}
                  </p>
                  <p style={{ margin: "0 0 3rem 0", fontFamily: "var(--font-manrope), sans-serif", color: "rgba(255,255,255,0.5)", fontWeight: 500, fontSize: "16px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Feb 2026 - Apr 2026
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div>
                      <h4 style={{ margin: "0 0 1rem 0", fontFamily: "var(--font-manrope), sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700 }}>
                        Responsibilities
                      </h4>
                      <div style={{ borderLeft: "2px solid rgba(255,255,255,0.1)", paddingLeft: "1.5rem", marginLeft: "0.25rem" }}>
                        <p style={{ fontFamily: "var(--font-manrope), sans-serif", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, fontSize: "16.5px", margin: "0 0 1.2rem 0", fontWeight: 300 }}>
                          Developed REST APIs and full-stack features for client projects, translating business requirements into functional software.
                        </p>
                        <p style={{ fontFamily: "var(--font-manrope), sans-serif", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, fontSize: "16.5px", margin: 0, fontWeight: 300 }}>
                          Contributed to backend integration, application development, testing, and delivery across the software development lifecycle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {expandedExp?.org?.includes("Resourcio") && (
              <motion.div 
                key="resourcio"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
                style={{ display: "flex", flexWrap: "wrap", gap: "2rem", maxWidth: "1400px", width: "95%", maxHeight: "90vh", overflowY: "auto", alignItems: "center", justifyContent: "center" }}
              >
                {/* Left Column: Offer Letter */}
                <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <div style={{ width: "100%", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))", transform: "rotate(-2deg)" }}>
                    <PaperCrumple src="/experiences/resourcio-offer-letter.webp" alt="Offer Letter" width={600} height={400} sceneHeight={400} imageFit="contain" releaseBehavior="restore" draggable={true} style={{ width: "100%" }} />
                  </div>
                  <div style={{ marginTop: "1rem", fontFamily: "var(--font-manrope), sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "14px", letterSpacing: "0.24em", fontWeight: 600, textTransform: "uppercase", pointerEvents: "none" }}>
                    Click and hold to crumple
                  </div>
                </div>

                {/* Middle Column: Text Content */}
                <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 1rem" }}>
                  <h3 style={{ margin: "0 0 0.5rem 0", fontFamily: "var(--font-manrope), sans-serif", fontSize: "48px", fontWeight: 700, color: "#fff", letterSpacing: "-0.035em", lineHeight: 1.05 }}>
                    {expandedExp.role}
                  </h3>
                  <p style={{ margin: "0 0 0.5rem 0", fontFamily: "var(--font-manrope), sans-serif", color: "var(--y2)", fontWeight: 600, fontSize: "21px", letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                    {expandedExp.org}
                  </p>
                  <p style={{ margin: "0 0 3rem 0", fontFamily: "var(--font-manrope), sans-serif", color: "rgba(255,255,255,0.5)", fontWeight: 500, fontSize: "16px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Jun 2025 - Sep 2025
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div>
                      <h4 style={{ margin: "0 0 1rem 0", fontFamily: "var(--font-manrope), sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700 }}>
                        Responsibilities
                      </h4>
                      <div style={{ borderLeft: "2px solid rgba(255,255,255,0.1)", paddingLeft: "1.5rem", marginLeft: "0.25rem" }}>
                        <p style={{ fontFamily: "var(--font-manrope), sans-serif", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, fontSize: "16.5px", margin: "0 0 1.2rem 0", fontWeight: 300 }}>
                          Developed backend functionality using Strapi, including content models, REST APIs, and content management workflows.
                        </p>
                        <p style={{ fontFamily: "var(--font-manrope), sans-serif", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, fontSize: "16.5px", margin: 0, fontWeight: 300 }}>
                          Integrated backend APIs with frontend systems to support reliable data exchange and application functionality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Certificate */}
                <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <div style={{ width: "100%", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))", transform: "rotate(2deg)" }}>
                    <PaperCrumple src="/experiences/resourcio-cert.webp" alt="Certificate" width={600} height={400} sceneHeight={400} imageFit="contain" releaseBehavior="restore" draggable={true} style={{ width: "100%" }} />
                  </div>
                  <div style={{ marginTop: "1rem", fontFamily: "var(--font-manrope), sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "14px", letterSpacing: "0.24em", fontWeight: 600, textTransform: "uppercase", pointerEvents: "none" }}>
                    Click and hold to crumple
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
      
      <div style={{ marginBottom: "3rem" }}>
        <p style={{ color: "var(--mute)", marginBottom: "1.5rem", textAlign: "left", fontSize: "1.1rem" }}>Hover and click on a role to see details</p>
        <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--line)", background: "rgba(255,255,255,0.4)", backdropFilter: "blur(20px)" }}>
          <FlowingMenu items={menuItems} />
        </div>
      </div>


    </div>
  );
};

export default ExperienceClient;

import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import NextPageArrow from "@/components/NextPageArrow";

export const metadata: Metadata = { title: "Achievements" };

export default function Achievements() {
  return (
    <Reveal>
      <section className="w" style={{ paddingTop: "9rem", paddingBottom: "8rem", minHeight: "100vh" }}>
        <h1 className="xl" style={{ marginBottom: "4rem" }}><span className="ln"><span>Achievements</span></span></h1>
        
        <div className="row" data-r>
          <h3><div>Best Innovative Project, 2026</div><small>Hack-Technique</small></h3>
          <div>
            <p>Hack-Technique, for GLOF Risk Intelligence: an ML-powered flood risk platform with secure REST APIs, Flask and XGBoost inference.</p>
          </div>
        </div>
        {/* Add more achievement rows here */}

        {/* Space for Certificates */}
        <h2 className="lg" style={{ marginTop: "8rem", marginBottom: "3rem" }}><span className="ln"><span>Certificates</span></span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem" }} data-r>
          {/* Dummy placeholders for certificates */}
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ 
              aspectRatio: "4/3", 
              background: "rgba(255,255,255,0.05)", 
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px dashed rgba(255,255,255,0.2)"
            }}>
              <span style={{ color: "var(--mute)" }}>[ Certificate {i} Space: Insert your image here ]</span>
            </div>
          ))}
        </div>
      </section>
      <NextPageArrow href="/contact" label="Contact" />
    </Reveal>
  );
}

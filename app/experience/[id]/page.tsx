import { experience } from "@/lib/data";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import NextPageArrow from "@/components/NextPageArrow";
import Link from "next/link";
import IDCardOverlay from "@/components/IDCardOverlay";

export function generateStaticParams() {
  return experience.map((_, idx) => ({
    id: idx.toString(),
  }));
}

export default async function ExperienceDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const idx = parseInt(resolvedParams.id, 10);
  
  if (isNaN(idx) || idx < 0 || idx >= experience.length) {
    notFound();
  }

  const exp = experience[idx];
  const isTechLead = exp.role.includes("Tech Lead");

  return (
    <Reveal>
      {isTechLead && <IDCardOverlay />}

      <section className="w" style={{ paddingTop: "9rem", paddingBottom: "8rem", minHeight: "100vh", position: "relative" }}>
        
        <Link href="/experience" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--mute)", textDecoration: "none", marginBottom: "2rem", fontWeight: 600, transition: "color 0.2s", position: "relative", zIndex: 10 }}>
          <span>← Back to Timeline</span>
        </Link>

        <div style={{
          background: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(0,0,0,0.05)",
          borderRadius: "24px",
          padding: "3rem",
          boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
          position: "relative",
          zIndex: 5
        }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
            <div>
              <h1 style={{ margin: 0, fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--fg)", letterSpacing: "-0.02em" }}>
                {exp.role}
              </h1>
              <p style={{ margin: "0.5rem 0 0 0", color: "var(--mute)", fontSize: "1.2rem", fontWeight: 500 }}>
                {exp.org}
              </p>
            </div>
            <div style={{ 
              background: "var(--fg)", 
              color: "var(--bg)", 
              padding: "0.5rem 1.2rem", 
              borderRadius: "99px",
              fontSize: "1rem",
              fontWeight: 700
            }}>
              {exp.when}
            </div>
          </div>

          <div style={{ width: "100%", height: "1px", background: "rgba(0,0,0,0.1)", marginBottom: "2rem" }} />

          <div style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--fg)" }}>
            <p style={{ marginBottom: "2rem" }}>{exp.text}</p>
            
            <div style={{ background: "rgba(255, 214, 10, 0.1)", borderRadius: "16px", padding: "2rem", border: "1px solid rgba(255, 214, 10, 0.2)" }}>
              <h3 style={{ margin: "0 0 1rem 0", color: "var(--y2)", fontSize: "1.2rem", fontWeight: 700 }}>Project Details & Impact</h3>
              <ul style={{ margin: 0, paddingLeft: "1.5rem", color: "var(--fg)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                <li>Replace this placeholder with specific outcomes in <code style={{background: "rgba(0,0,0,0.1)", padding: "2px 6px", borderRadius: "4px"}}>lib/data.ts</code>.</li>
                <li>Add a <code style={{background: "rgba(0,0,0,0.1)", padding: "2px 6px", borderRadius: "4px"}}>details</code> array to your experience objects.</li>
                <li>Example: "Architected a scalable REST API using Node.js and Express."</li>
                <li>Example: "Optimized database queries reducing latency by 40%."</li>
              </ul>
            </div>
          </div>

        </div>

      </section>
      <NextPageArrow href="/blogs" label="Blogs" />
    </Reveal>
  );
}

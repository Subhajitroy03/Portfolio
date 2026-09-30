import Link from "next/link";
import Scene from "./Scenes";
import type { projects } from "@/lib/data";

export default function Project({ p, full = false }: { p: (typeof projects)[number]; full?: boolean }) {
  return (
    <article className="pr">
      <div className="tg" data-r>{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
      <div className="ph" data-ph><div className="pv" data-pv><Scene kind={p.kind} /></div></div>
      <div className="hd" data-r><h3>{p.name}</h3><p>{p.desc}</p></div>
      {full ? (
        <div className="det" data-r>
          <div><b>Role</b>{p.role}</div>
          <div><b>Stack</b>{p.stack}</div>
          <div><b>Highlights</b>{p.note}</div>
          <div className="lk">{p.live && <a href={p.live}>Live</a>}{p.github && <a href={p.github}>GitHub</a>}</div>
          
          {/* Space reserved for video */}
          <div style={{ gridColumn: "1 / -1", marginTop: "2rem" }}>
            <h4 style={{ marginBottom: "1rem" }}>Project Video</h4>
            <div style={{ 
              width: "100%", 
              aspectRatio: "16/9", 
              background: "rgba(255,255,255,0.05)", 
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px dashed rgba(255,255,255,0.2)"
            }}>
              <span style={{ color: "var(--mute)" }}>[ Video Space: Insert your &lt;video&gt; tag here ]</span>
            </div>
          </div>
        </div>
      ) : <Link className="cta" href="/work" data-r>View project</Link>}
    </article>
  );
}

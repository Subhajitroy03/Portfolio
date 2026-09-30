import Link from "next/link";
import Reveal, { Words } from "@/components/Reveal";
import Hero from "@/components/Hero";
import { marquee } from "@/lib/data";
import NextPageArrow from "@/components/NextPageArrow";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <div className="mq" aria-hidden>
          {/* Animated background layers */}
          <div className="mq-glow" aria-hidden />
          <div className="mq-grain" aria-hidden />
          <div>{[...marquee, ...marquee].map((m, i) => <span key={i}>{m}</span>)}</div>
        </div>
        <section className="sec w">
          <Words text="I build the systems underneath products: REST APIs, databases, caching, search and AI integrations. The engineering people never see but always feel." />
        </section>
        {/* Minimal home page, sections moved to separate routes */}
        <section className="sec w" style={{ paddingBottom: "2rem" }}>
          <div className="cta2" style={{ margin: 0 }}>
            {/* Rich decorative SVG layer */}
            <svg aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} xmlns="http://www.w3.org/2000/svg">
              {/* Concentric quarter-circle arcs — top right */}
              <circle cx="100%" cy="0" r="280" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" />
              <circle cx="100%" cy="0" r="210" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
              <circle cx="100%" cy="0" r="140" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
              {/* Small filled arc segment accent — bottom right */}
              <path d="M 100% 100% m -90 0 a 90 90 0 0 0 90 -90" fill="rgba(0,0,0,0.04)" />
              {/* Grid of tiny dots — bottom center */}
              {[0, 1, 2, 3, 4].map(col => [0, 1, 2].map(row => (
                <circle key={`${col}-${row}`} cx={`${42 + col * 3}%`} cy={`${72 + row * 10}%`} r="2" fill="rgba(0,0,0,0.07)" />
              )))}
              {/* Diagonal lines — right side */}
              <line x1="58%" y1="-5%" x2="82%" y2="110%" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
              <line x1="65%" y1="-5%" x2="89%" y2="110%" stroke="rgba(0,0,0,0.035)" strokeWidth="0.75" />
              <line x1="72%" y1="-5%" x2="96%" y2="110%" stroke="rgba(0,0,0,0.025)" strokeWidth="0.5" />
              {/* Single large subtle ring — bottom left */}
              <circle cx="-2%" cy="115%" r="130" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
              {/* Star / asterisk decorations */}
              <text x="91%" y="30%" fontSize="22" fill="rgba(0,0,0,0.1)" fontWeight="700" textAnchor="middle" fontFamily="system-ui">✳</text>
              <text x="36%" y="85%" fontSize="13" fill="rgba(0,0,0,0.07)" fontWeight="700" textAnchor="middle" fontFamily="system-ui">✳</text>
            </svg>
            {/* Animated shine sweep */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden", borderRadius: "inherit" }}>
              <div className="cta2-shine" />
            </div>
            {/* Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: "clamp(.8rem, 1.2vw, 1rem)", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.55, marginBottom: "1rem" }}>Ready to collaborate?</p>
              <h2 className="lg"><span className="ln"><span>Let&apos;s build</span></span><span className="ln"><span>something useful.</span></span></h2>
            </div>
          </div>
        </section>
        <NextPageArrow href="/about" label="About Me" />
      </Reveal>
    </>
  );
}


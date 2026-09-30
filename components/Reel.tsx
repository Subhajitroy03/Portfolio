"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Scene from "./Scenes";
import { projects } from "@/lib/data";

// A short "video reel": frames wipe over each other with a slow zoom. Frame 0 is your photo.
const labels = ["Subhajit Roy", ...projects.map((p) => p.name)];
export default function Reel() {
  const frames = useRef<(HTMLDivElement | null)[]>([]);
  const [cap, setCap] = useState(labels[0]);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0, z = 1;
    const call = (): gsap.core.Tween =>
      gsap.delayedCall(2.8, () => {
        const b = frames.current[(i + 1) % labels.length]!;
        b.style.zIndex = String(++z);
        gsap.fromTo(b, { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: 0.8, ease: "power3.inOut" });
        gsap.fromTo(b.firstElementChild, { scale: 1.25 }, { scale: 1, duration: 3, ease: "none" });
        i++;
        setCap(labels[i % labels.length]);
        t = call();
      });
    let t = call();
    return () => { t.kill(); };
  }, []);
  return (
    <div className="ph reel" data-ph role="img" aria-label="Reel of Subhajit and his projects">
      {labels.map((l, n) => (
        <div key={l} className="frame" ref={(el) => { frames.current[n] = el; }} style={{ zIndex: n ? 0 : 1 }}>
          <div style={{ position: "absolute", inset: 0 }}>
            {n === 0 ? <Image src="/images/subhajit.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "50% 22%" }} /> : <Scene kind={projects[n - 1].kind} />}
          </div>
        </div>
      ))}
      <span className="rec"><i />Reel</span>
      <span className="cap">{cap}</span>
    </div>
  );
}

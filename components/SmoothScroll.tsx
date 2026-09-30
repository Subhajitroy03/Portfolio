"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  const path = usePathname();
  const lenis = useRef<Lenis | null>(null);
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = gsap.to(bar.current, { scaleX: 1, ease: "none", scrollTrigger: { scrub: 0.3, start: 0, end: "max" } });
    if (reduce) return () => { t.scrollTrigger?.kill(); t.kill(); };
    const l = new Lenis({ lerp: 0.09 });
    lenis.current = l;
    l.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => l.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(tick); l.destroy(); t.scrollTrigger?.kill(); t.kill(); };
  }, []);
  useEffect(() => { lenis.current?.scrollTo(0, { immediate: true }); window.scrollTo(0, 0); }, [path]);
  return <div className="bar" ref={bar} aria-hidden />;
}

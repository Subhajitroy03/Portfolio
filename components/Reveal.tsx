"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Wrap a page in <Reveal>. It animates: .ln headlines, [data-r] fades, [data-ph] photos, [data-words], [data-rail].
export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(ref);
      const early = (el: Element) => el.getBoundingClientRect().top < innerHeight * 0.95;
      const st = (el: Element) => (early(el) ? undefined : { trigger: el, start: "top 92%" });
      const wait = (el: Element, i = 0) => (early(el) ? 0.95 + i * 0.08 : 0);
      q(".ln>span").forEach((el, i) => gsap.fromTo(el, { yPercent: 112 }, { yPercent: 0, duration: 1.2, ease: "power4.out", delay: wait(el, i), scrollTrigger: st(el) }));
      q("[data-r]").forEach((el) => gsap.fromTo(el, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: wait(el), scrollTrigger: st(el) }));
      q("[data-ph]").forEach((el) => {
        gsap.fromTo(el, { clipPath: "inset(14% 10% 14% 10% round 28px)" }, { clipPath: "inset(0% 0% 0% 0% round 28px)", duration: 1.4, ease: "power4.out", delay: wait(el), scrollTrigger: st(el) });
        const v = el.querySelector("[data-pv]");
        if (v) gsap.fromTo(v, { yPercent: -6, scale: 1.08 }, { yPercent: 6, scale: 1, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
      });
      q("[data-words]").forEach((el) => gsap.fromTo(el.querySelectorAll("span"), { opacity: 0.15 }, { opacity: 1, stagger: 0.6, ease: "none", scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true } }));
      q("[data-rail]").forEach((el) => gsap.fromTo(el.querySelector("i"), { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: el, start: "top 60%", end: "bottom 70%", scrub: true } }));
    }, ref);
    return () => ctx.revert();
  }, []);
  return <div ref={ref}>{children}</div>;
}

export function Words({ text, className = "stmt" }: { text: string; className?: string }) {
  return <p className={className} data-words>{text.split(" ").map((w, i) => <span key={i}>{w} </span>)}</p>;
}

"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// "Subhajit" written in various scripts / languages
const names = [
  { text: "শুভজিৎ",      lang: "Bengali"    },
  { text: "शुभजित",      lang: "Hindi"      },
  { text: "சுபஜித்",    lang: "Tamil"      },
  { text: "సుభజిత్",    lang: "Telugu"     },
  { text: "ಸುಭಜಿತ್",    lang: "Kannada"    },
  { text: "സുഭജിത്",    lang: "Malayalam"  },
  { text: "સુભજિત",     lang: "Gujarati"   },
  { text: "ਸ਼ੁਭਜਿਤ",    lang: "Punjabi"    },
  { text: "ශුභජිත්",    lang: "Sinhala"    },
  { text: "שובהג'יט",   lang: "Hebrew"     },
  { text: "Субхаджит",  lang: "Russian"    },
  { text: "シュバジット",  lang: "Japanese"   },
  { text: "수바지트",     lang: "Korean"     },
  { text: "苏巴吉特",     lang: "Chinese"    },
  { text: "Subhajit",   lang: "English"    }, // end in English
];

export default function Loader({ onComplete }: { onComplete?: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const nameRef   = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsDone(true);
      onComplete?.();
      return;
    }

    const el   = nameRef.current!;
    const prog = progressRef.current!;
    const counter = counterRef.current!;

    const ctx = gsap.context(() => {
      // Approximate total duration for progress bar sync
      const totalDuration = 1.1 + (names.length - 1) * 0.08 + 0.5;

      // Progress bar fills in sync with the whole sequence
      gsap.to(prog, { scaleX: 1, duration: totalDuration, ease: "power2.inOut" });

      // Counter ticks from 0 → 100
      gsap.to({ val: 0 }, {
        val: 100,
        duration: totalDuration,
        ease: "power2.inOut",
        onUpdate: function () { counter.textContent = Math.round(this.targets()[0].val) + "%"; }
      });

      const tl = gsap.timeline({
        onComplete: () => {
          // Outro: slide up and wipe away
          gsap.timeline({ onComplete: () => { setIsDone(true); onComplete?.(); } })
            .to(".loader-inner", { y: -50, opacity: 0, duration: 0.55, ease: "power3.inOut" })
            .to(".loader-progress-wrap", { opacity: 0, duration: 0.3 }, "-=0.4")
            .to(loaderRef.current, { yPercent: -100, duration: 0.75, ease: "power4.inOut" }, "-=0.25");
        }
      });

      // Phase 1 — show English name
      tl.set(el, { textContent: names[0].text });
      tl.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
      tl.to({}, { duration: 0.5 }); // hold

      // Phase 2 — rapid flash through all other languages
      names.slice(1).forEach((n) => {
        tl.call(() => { el.textContent = n.text; })
          .to({}, { duration: 0.08 }); // fast strobe
      });

      // Hold the last frame briefly
      tl.to({}, { duration: 0.5 });

    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div ref={loaderRef} className="loader-wrapper" style={{ flexDirection: "column", gap: "0.5rem" }}>
      <div className="loader-inner" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.8rem" }}>
        <div
          ref={nameRef}
          style={{
            fontFamily: "var(--font-d), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3.5rem, 12vw, 10rem)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: "var(--fg)",
            minWidth: "4ch",
            textAlign: "center",
            transition: "none",
            opacity: 0,
          }}
        >
          Subhajit
        </div>


      </div>

      {/* Progress bar + counter at bottom */}
      <div className="loader-progress-wrap" style={{
        position: "absolute",
        bottom: "clamp(2rem, 5vh, 4rem)",
        left: "clamp(1.25rem, 4.5vw, 4rem)",
        right: "clamp(1.25rem, 4.5vw, 4rem)",
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
        alignItems: "flex-end"
      }}>
        <span
          ref={counterRef}
          style={{
            fontFamily: "var(--font-d), system-ui, sans-serif",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            color: "var(--mute)",
          }}
        >
          0%
        </span>
        <div style={{
          width: "100%",
          height: "1.5px",
          background: "rgba(0,0,0,0.08)",
          borderRadius: "2px",
          overflow: "hidden"
        }}>
          <div
            ref={progressRef}
            style={{
              height: "100%",
              background: "var(--fg)",
              transformOrigin: "left",
              transform: "scaleX(0)",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

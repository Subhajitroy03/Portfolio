"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/about", "About"],
  ["/work", "Work"],
  ["/experience", "Experience"],
  ["/blogs", "Blogs"],
  ["/achievements", "Achievements"],
] as const;

export default function Nav() {
  const path = usePathname();

  return (
    <nav className="navbar-wrapper">
      <Link href="/" className="navbar-brand" aria-label="Subhajit Roy, home" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "32px", height: "32px", borderRadius: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255,255,255,0.05)", padding: "4px" }}>
          <img src="/logo.png" alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }} />
        </div>
        <span>Subhajit Roy®</span>
      </Link>
      <div className="navbar-links">
        {links.map(([h, l]) => (
          <Link
            key={h}
            href={h}
            aria-current={path.startsWith(h) ? "page" : undefined}
            className={path.startsWith(h) ? "on" : ""}
          >
            {l}
          </Link>
        ))}
        <Link href="/chat" className="navbar-cta">
          Let&apos;s talk
        </Link>
      </div>
    </nav>
  );
}

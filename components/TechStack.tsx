"use client";
import { SiJavascript, SiTypescript, SiPython, SiCplusplus, SiExpress, SiFastapi, SiSpring, SiNestjs, SiLangchain, SiLanggraph, SiPostgresql, SiMongodb, SiMysql, SiRedis, SiPrisma, SiDrizzle, SiNextdotjs, SiReact } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

const icons = [
  { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { Icon: SiPython, color: "#3776AB", name: "Python" },
  { Icon: FaJava, color: "#007396", name: "Java" },
  { Icon: SiCplusplus, color: "#00599C", name: "C/C++" },
  { Icon: SiExpress, color: "#000000", name: "Express.js" },
  { Icon: SiFastapi, color: "#009688", name: "FastAPI" },
  { Icon: SiSpring, color: "#6DB33F", name: "Spring" },
  { Icon: SiNestjs, color: "#E0234E", name: "NestJS" },
  { Icon: SiLangchain, color: "#1C3C3C", name: "LangChain" },
  { Icon: SiLanggraph, color: "#1C3C3C", name: "LangGraph" },
  { Icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: SiMysql, color: "#4479A1", name: "MySQL" },
  { Icon: SiRedis, color: "#DC382D", name: "Redis" },
  { Icon: SiPrisma, color: "#2D3748", name: "Prisma" },
  { Icon: SiDrizzle, color: "#C5F74F", name: "Drizzle ORM" },
  { Icon: SiNextdotjs, color: "#000000", name: "Next.js" },
  { Icon: SiReact, color: "#61DAFB", name: "React.js" },
  { Icon: TbBrandReactNative, color: "#61DAFB", name: "React Native" },
];

export default function TechStack() {
  return (
    <div style={{ 
      overflow: "hidden", 
      whiteSpace: "nowrap", 
      position: "relative",
      background: "radial-gradient(ellipse 80% 50% at center, rgba(255,255,255,0.03) 0%, transparent 100%)",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)"
    }}>
      {/* Premium Light Strike Animation */}
      <div style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "150px",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        transform: "skewX(-30deg)",
        animation: "light-strike 7s ease-in-out infinite",
        zIndex: 10,
        pointerEvents: "none",
      }} />

      {/* Edge Fade Mask */}
      <div style={{
        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        padding: "4rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        alignItems: "flex-start"
      }}>
        <div 
          className="tech-marquee"
          style={{ 
            display: "inline-block",
            animation: "scroll 35s linear infinite",
            willChange: "transform"
          }}
        >
          {[...icons.slice(0, Math.ceil(icons.length / 2)), ...icons.slice(0, Math.ceil(icons.length / 2))].map((item, i) => (
            <div key={i} style={{ 
              display: "inline-flex", 
              flexDirection: "column", 
              alignItems: "center", 
              justifyContent: "center",
              margin: "0 3rem",
              gap: "1.2rem",
              position: "relative"
            }}>
              <item.Icon size={55} style={{ 
                color: "var(--fg)", 
                transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                filter: "drop-shadow(0 0 0 transparent)"
              }} 
              className="hover-color"
              onMouseEnter={(e) => {
                (e.currentTarget as any).style.color = item.color;
                (e.currentTarget as any).style.transform = "scale(1.25) translateY(-8px)";
                (e.currentTarget as any).style.filter = `drop-shadow(0 10px 15px ${item.color}55)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as any).style.color = "var(--fg)";
                (e.currentTarget as any).style.transform = "scale(1) translateY(0)";
                (e.currentTarget as any).style.filter = "drop-shadow(0 0 0 transparent)";
              }}
              />
              <span style={{ 
                fontSize: "0.95rem", 
                color: "var(--mute)", 
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Row 2 (Reverse direction) */}
        <div 
          className="tech-marquee"
          style={{ 
            display: "inline-block",
            animation: "scroll 35s linear infinite reverse",
            willChange: "transform"
          }}
        >
          {[...icons.slice(Math.ceil(icons.length / 2)), ...icons.slice(Math.ceil(icons.length / 2))].map((item, i) => (
            <div key={i} style={{ 
              display: "inline-flex", 
              flexDirection: "column", 
              alignItems: "center", 
              justifyContent: "center",
              margin: "0 3rem",
              gap: "1.2rem",
              position: "relative"
            }}>
              <item.Icon size={55} style={{ 
                color: "var(--fg)", 
                transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                filter: "drop-shadow(0 0 0 transparent)"
              }} 
              className="hover-color"
              onMouseEnter={(e) => {
                (e.currentTarget as any).style.color = item.color;
                (e.currentTarget as any).style.transform = "scale(1.25) translateY(-8px)";
                (e.currentTarget as any).style.filter = `drop-shadow(0 10px 15px ${item.color}55)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as any).style.color = "var(--fg)";
                (e.currentTarget as any).style.transform = "scale(1) translateY(0)";
                (e.currentTarget as any).style.filter = "drop-shadow(0 0 0 transparent)";
              }}
              />
              <span style={{ 
                fontSize: "0.95rem", 
                color: "var(--mute)", 
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes light-strike {
          0% { left: -10%; opacity: 0; }
          15% { opacity: 1; }
          50% { left: 110%; opacity: 0; }
          100% { left: 110%; opacity: 0; }
        }
        .tech-marquee:hover {
          animation-play-state: paused !important;
        }
      `}} />
    </div>
  );
}

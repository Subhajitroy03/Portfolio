"use client";

import { useRef } from "react";
import VariableProximity from "./VariableProximity";
import { FiMail, FiFileText, FiLinkedin, FiArrowUp } from "react-icons/fi";
import { 
  SiGithub, 
  SiX, 
  SiInstagram, 
  SiYoutube, 
  SiDiscord, 
  SiReddit, 
  SiTelegram, 
  SiFacebook, 
  SiLeetcode 
} from "react-icons/si";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <footer className="footer-enhanced-wrapper">
      <div className="fe-container">
        {/* Main Content Area */}
        <div className="fe-main" ref={containerRef}>
          <div className="fe-content-grid">
            {/* Left Section */}
            <div className="fe-left">
              <h2 className="fe-title" style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                <VariableProximity
                  label="GET IN"
                  className="variable-proximity-demo"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef as any}
                  radius={100}
                  falloff="linear"
                />
                <VariableProximity
                  label="TOUCH."
                  className="variable-proximity-demo"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef as any}
                  radius={100}
                  falloff="linear"
                />
              </h2>
              <hr className="fe-divider" />
              <p className="fe-desc">
                Crafting digital experiences that convert. Building backend systems that scale. Putting your business first.
              </p>
              
              <div className="fe-socials-wrapper" style={{ marginTop: '3rem' }}>
                <span className="fe-socials-label">FIND ME ONLINE</span>
                <div className="fe-socials" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1rem', width: 'fit-content' }}>
                  <a href="https://github.com/Subhajitroy03" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><SiGithub /></a>
                  <a href="https://x.com/Subhaji90376624" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><SiX /></a>
                  <a href="https://www.linkedin.com/in/subhajit-roy-6b2673277/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                  <a href="https://leetcode.com/u/Subhajit_Roy03" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
                  <a href="https://www.instagram.com/subhajit_roy03/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><SiInstagram /></a>
                  <a href="https://www.youtube.com/@subhajitroy7683" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><SiYoutube /></a>
                  <a href="https://discord.com/users/bongcbseyans" target="_blank" rel="noopener noreferrer" aria-label="Discord"><SiDiscord /></a>
                  <a href="https://www.reddit.com/user/subhajitroy03/" target="_blank" rel="noopener noreferrer" aria-label="Reddit"><SiReddit /></a>
                  <a href="https://t.me/subha03aot" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><SiTelegram /></a>
                  <a href="https://www.facebook.com/profile.php?id=100048076568712" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><SiFacebook /></a>
                  <a href="mailto:roysubhajit2003@gmail.com" aria-label="Email"><FiMail /></a>
                  <a href="https://drive.google.com/file/d/17QbKySuJzXhMb4isjiEp5GVJu42prD1I/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Resume / CV"><FiFileText /></a>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="fe-right">
              <div style={{ background: 'rgba(255,255,255,0.15)', padding: '2.5rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', boxShadow: '0 20px 40px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.5)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <style>{`
                    .fe-input {
                      padding: 1.2rem;
                      border-radius: 12px;
                      border: 1px solid rgba(255, 255, 255, 0.4);
                      background: rgba(255, 255, 255, 0.4);
                      backdrop-filter: blur(8px);
                      -webkit-backdrop-filter: blur(8px);
                      font-size: 1rem;
                      outline: none;
                      color: var(--fg);
                      box-shadow: inset 0 2px 5px rgba(255,255,255,0.5), 0 4px 15px rgba(0,0,0,0.02);
                      transition: all 0.3s ease;
                    }
                    .fe-input::placeholder {
                      color: rgba(0, 0, 0, 0.45);
                    }
                    .fe-input:focus {
                      background: rgba(255, 255, 255, 0.6);
                      border-color: rgba(255, 255, 255, 0.7);
                      box-shadow: inset 0 2px 5px rgba(255,255,255,0.6), 0 8px 25px rgba(0,0,0,0.05);
                      transform: translateY(-2px);
                    }
                  `}</style>
                  <input type="text" placeholder="Your Name" className="fe-input" />
                  <input type="email" placeholder="Your Email" className="fe-input" />
                  <textarea placeholder="Your Message" rows={4} className="fe-input" style={{ resize: 'none' }}></textarea>
                  <button style={{ padding: '1.2rem', marginTop: '0.5rem', borderRadius: '12px', border: 'none', background: 'var(--fg)', color: 'var(--bg)', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)'; }}>Send Message</button>
                </div>
              </div>
            </div>
          </div>
          
          <hr className="fe-divider fe-divider-bottom" />

          {/* Bottom Bar */}
          <div className="fe-bottom">
            <a href="#" className="fe-back-to-top" aria-label="Back to top">
              <FiArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

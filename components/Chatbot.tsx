"use client";
import { useState, useRef } from "react";
import PromptBar from "./PromptBar";
import ThoughtLine from "./ThoughtLine";
import GradientWaves from "./GradientWaves";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: "Hi! I'm Subhajit's AI assistant. You can ask me about his experience, projects, or how to get in touch. What would you like to explore today?" }
  ]);
  const [busy, setBusy] = useState(false);
  const [thinkingSteps, setThinkingSteps] = useState<string[]>([]);
  const controller = useRef<AbortController | null>(null);

  const send = async (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setBusy(true);
    setThinkingSteps(["Reading your message"]);
    controller.current = new AbortController();

    // Simulate thinking process
    setTimeout(() => {
      if (controller.current?.signal.aborted) return;
      setThinkingSteps((prev) => [...prev, "Searching knowledge base"]);
    }, 1000);

    setTimeout(() => {
      if (controller.current?.signal.aborted) return;
      setThinkingSteps((prev) => [...prev, "Drafting an answer"]);
    }, 2500);

    setTimeout(() => {
      if (controller.current?.signal.aborted) return;
      setBusy(false);
      
      let botResponse = "Thanks for reaching out! Subhajit is always open to discussing new opportunities. You can email him directly at roysubhajit2003@gmail.com.";
      const lowerMsg = text.toLowerCase();
      if (lowerMsg.includes("resume") || lowerMsg.includes("cv")) {
         botResponse = "You can download his resume from the links in the footer, or check out the Experience page for a detailed breakdown of his background.";
      } else if (lowerMsg.includes("project") || lowerMsg.includes("work")) {
         botResponse = "He has built several scalable backend services and AI-powered platforms. Head over to the Work page to see his selected case studies.";
      } else if (lowerMsg.includes("tech") || lowerMsg.includes("stack") || lowerMsg.includes("skills")) {
         botResponse = "His core stack revolves around Node.js, Next.js, TypeScript, PostgreSQL, and various Cloud technologies. He excels at backend architecture.";
      } else if (lowerMsg.includes("hi") || lowerMsg.includes("hello")) {
         botResponse = "Hello there! How can I help you today?";
      }

      setMessages((prev) => [...prev, { role: "assistant", content: botResponse }]);
    }, 4000);
  };

  const handleStop = () => {
    controller.current?.abort();
    setBusy(false);
  };

  return (
    <div 
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        height: "min(800px, calc(100vh - 12rem))",
        minHeight: "500px",
        position: "relative",
        backgroundColor: "var(--paper)",
        border: "1px solid color-mix(in srgb, var(--fg) 15%, transparent)",
        borderRadius: "24px",
        boxShadow: "0 40px 80px -20px rgba(0,0,0,0.2), 0 0 0 8px color-mix(in srgb, var(--fg) 2%, transparent)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backdropFilter: "blur(20px)",
        animation: "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards"
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.8, pointerEvents: 'none' }}>
        <GradientWaves
          horizonColor="#1b1707"
          waveColor="#7b7440"
          crestColor="#FFD60A"
          speed={0.4}
          amplitude={2.5}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1.0}
          height={5.5}
          fogDepth={15}
          detail="medium"
          brightness={1.0}
          opacity={1.0}
          mouseInteraction={true}
          parallaxStrength={0.5}
          grain={true}
          grainIntensity={0.05}
        />
      </div>
      {/* Header */}
      <div style={{ background: "var(--fg)", color: "var(--bg)", padding: "1.2rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--y2)" }}></div>
        <span style={{ fontWeight: 600, fontFamily: "var(--font-d)", fontSize: "1.1rem" }}>Subhajit AI Assistant</span>
      </div>

      {/* Messages Area */}
      <div className="chat-messages-scroll" style={{ 
        flex: 1, 
        minHeight: 0, 
        padding: "2rem", 
        overflowY: "auto", 
        overscrollBehavior: "contain", 
        display: "flex", 
        flexDirection: "column", 
        gap: "1.5rem", 
        background: "transparent",
        scrollbarWidth: "thin",
        scrollbarColor: "color-mix(in srgb, var(--line) 80%, var(--fg)) transparent"
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ 
            background: msg.role === "assistant" ? "var(--paper)" : "var(--fg)", 
            color: msg.role === "assistant" ? "var(--fg)" : "var(--bg)",
            padding: "1.2rem", 
            borderRadius: "16px", 
            alignSelf: msg.role === "assistant" ? "flex-start" : "flex-end", 
            border: msg.role === "assistant" ? "1px solid var(--line)" : "none",
            maxWidth: "80%",
            boxShadow: msg.role === "assistant" ? "0 4px 15px rgba(0,0,0,0.02)" : "0 4px 15px rgba(0,0,0,0.08)"
          }}>
            <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.6 }}>{msg.content}</p>
          </div>
        ))}

        {/* ThoughtLine for when AI is busy */}
        {busy && (
          <div style={{ alignSelf: "flex-start", maxWidth: "85%", marginLeft: "0.5rem" }}>
             <ThoughtLine
              working={busy}
              steps={thinkingSteps}
              label="Thinking…"
              doneLabel="Done"
              glyph="sparkle"
              fontSize={14}
              color="var(--fg)"
              breathPeriod={1.6}
              breathDepth={0.45}
              settleDuration={350}
              settleBlur={2}
              collapsible
              collapseOnSettle
              showTimer
              {...({} as any)}
            />
          </div>
        )}
      </div>

      {/* Input Area using PromptBar */}
      <div style={{ padding: "1.5rem", borderTop: "1px solid color-mix(in srgb, var(--line) 50%, transparent)", background: "transparent" }}>
        <PromptBar
          placeholder="Ask anything about Subhajit..."
          busy={busy}
          onSend={(text: string) => send(text)}
          onStop={handleStop}
          background="var(--paper)"
          color="var(--fg)"
          menuBackground="var(--paper)"
          sparkColor="var(--y2)"
          sparkBoost={1}
          width={"100%" as any}
          radius={16}
          maxRows={10}
          tilt={8}
        />
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .chat-messages-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .chat-messages-scroll::-webkit-scrollbar-track {
          background: transparent;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .chat-messages-scroll::-webkit-scrollbar-thumb {
          background-color: color-mix(in srgb, var(--line) 80%, var(--fg));
          border-radius: 10px;
          border: 2px solid var(--paper);
        }
        .chat-messages-scroll::-webkit-scrollbar-thumb:hover {
          background-color: var(--fg);
        }
      `}</style>
    </div>
  );
}

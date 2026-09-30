"use client";
import { useState, useRef, useEffect } from "react";
import { FiSend, FiUser, FiMoreHorizontal } from "react-icons/fi";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatGPTInterface() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Subhajit's AI assistant. You can ask me about his experience, projects, or how to get in touch. What would you like to explore today?" }
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let botResponse = "Thanks for reaching out! Subhajit is always open to discussing new opportunities. You can email him directly at roysubhajit2003@gmail.com.";
      
      const lowerMsg = userMsg.toLowerCase();
      if (lowerMsg.includes("resume") || lowerMsg.includes("cv")) {
         botResponse = "You can download his resume from the links in the footer, or check out the Experience page for a detailed breakdown of his background.";
      } else if (lowerMsg.includes("project") || lowerMsg.includes("work")) {
         botResponse = "He has built several scalable backend services and AI-powered platforms. Head over to the Work page to see his selected case studies.";
      } else if (lowerMsg.includes("tech") || lowerMsg.includes("stack") || lowerMsg.includes("skills")) {
         botResponse = "His core stack revolves around Node.js, Next.js, TypeScript, PostgreSQL, and various Cloud technologies. He excels at backend architecture.";
      } else if (lowerMsg.includes("hi") || lowerMsg.includes("hello")) {
         botResponse = "Hello there! How can I help you today?";
      }
      
      setMessages(prev => [...prev, { role: "assistant", content: botResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-header-left">
          <div className="chat-ai-icon">
            <img src="/logo.png" alt="Subhajit AI" className="ai-logo-img" />
          </div>
          <div className="chat-header-title">
            <h2>Subhajit AI</h2>
            <span className="chat-status">Ready to help</span>
          </div>
        </div>
        <button className="chat-more-btn" aria-label="More options">
          <FiMoreHorizontal />
        </button>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.role}`}>
            <div className="chat-avatar">
              {msg.role === "assistant" ? <img src="/logo.png" alt="AI Avatar" className="ai-logo-img" /> : <FiUser />}
            </div>
            <div className="chat-content">
              {msg.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="chat-message assistant typing">
            <div className="chat-avatar"><img src="/logo.png" alt="AI Avatar" className="ai-logo-img" /></div>
            <div className="chat-content">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>
      
      <div className="chat-input-wrapper">
        <form onSubmit={handleSubmit} className="chat-form">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about Subhajit..." 
            className="chat-input"
          />
          <button type="submit" className="chat-submit" disabled={!input.trim()}>
            <FiSend />
          </button>
        </form>
        <div className="chat-disclaimer">
          AI assistant may produce inaccurate information about Subhajit's profile.
        </div>
      </div>
    </div>
  );
}

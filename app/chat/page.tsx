import type { Metadata } from "next";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = { title: "Chat" };

export default function Chat() {
  return (
    <div style={{ paddingTop: "10rem", paddingBottom: "2rem", minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)", paddingLeft: "1rem", paddingRight: "1rem" }}>
      <Chatbot />
    </div>
  );
}

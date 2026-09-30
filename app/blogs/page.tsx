import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import NextPageArrow from "@/components/NextPageArrow";
import ModalCards from "@/components/ModalCards";

export const metadata: Metadata = { title: "Blogs" };

const blogItems = [
  { 
    id: 'process-vs-thread',
    link: 'https://process-vs-threads.hashnode.dev/process-vs-thread-a-practical-comparison-using-c-programs', 
    title: 'Process vs Thread in C',
    subtitle: 'A Practical Comparison Using C Programs',
    description: 'Learn the core differences between processes and threads with C examples.',
    image: '/blogs/process-vs-thread.webp' 
  },
  { 
    id: 'cors-issue',
    link: 'https://corsissue.hashnode.dev/cors-issue-and-how-to-fix-it', 
    title: 'Fixing CORS Issues',
    subtitle: 'Understanding and resolving Cross-Origin Resource Sharing',
    description: 'A quick guide to understanding CORS and fixing common errors.',
    image: '/blogs/cors.webp' 
  }
];

export default function Blogs() {
  return (
    <Reveal>
      <section className="w" style={{ paddingTop: "9rem", paddingBottom: "8rem", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <h1 className="xl" style={{ marginBottom: "2rem" }}><span className="ln"><span>Blogs</span></span></h1>
        
        <div style={{ flex: 1, width: "100%", position: "relative" }}>
          <ModalCards items={blogItems} />
        </div>
      </section>
      <NextPageArrow href="/achievements" label="Achievements" />
    </Reveal>
  );
}

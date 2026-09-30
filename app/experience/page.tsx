import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ExperienceClient from "@/components/ExperienceClient";
import NextPageArrow from "@/components/NextPageArrow";

export const metadata: Metadata = { title: "Experience" };

export default function Experience() {
  return (
    <Reveal>
      <section className="w" style={{ paddingTop: "9rem", paddingBottom: "8rem", minHeight: "100vh" }}>
        <h1 className="xl" style={{ marginBottom: "4rem" }}><span className="ln"><span>Experience</span></span></h1>
        
        <ExperienceClient />
      </section>
      <NextPageArrow href="/blogs" label="Blogs" />
    </Reveal>
  );
}

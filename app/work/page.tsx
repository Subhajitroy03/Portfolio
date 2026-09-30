import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Project from "@/components/Project";
import { projects } from "@/lib/data";
import NextPageArrow from "@/components/NextPageArrow";
export const metadata: Metadata = { title: "Work" };

export default function Work() {
  return (
    <Reveal>
      <section className="w" style={{ paddingTop: "9rem" }}>
        <h1 className="xl" style={{ marginBottom: "5rem" }}><span className="ln"><span>Work</span></span></h1>
        {projects.map((p) => <Project key={p.name} p={p} full />)}
      </section>
      <NextPageArrow href="/experience" label="Experience" />
    </Reveal>
  );
}

import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return <AboutClient />;
}

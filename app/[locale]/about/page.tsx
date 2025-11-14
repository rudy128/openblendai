import { Metadata } from "next";
import MissionSection from "@/app/components/MissionSection";

export const metadata: Metadata = {
  title: "About Us | OpenBlend AI",
  description: "Learn about OpenBlend AI's mission, our international team of experts, and our specialization in blockchain development and web3 solutions.",
};

export default function AboutUsPage() {
  return (
    <>
      <MissionSection />
    </>
  );
}

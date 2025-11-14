import { Metadata } from "next";
import ContactFormSection from "@/app/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us | OpenBlend AI",
  description: "Get in touch with OpenBlend AI for your blockchain development needs. Submit your project details and we'll get back to you.",
};

export default function ContactPage() {
  return (
    <>
      <ContactFormSection />
    </>
  );
}

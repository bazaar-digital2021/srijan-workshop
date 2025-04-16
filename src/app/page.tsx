import Certificate from "@/section/certificate";
import Features from "@/section/Features";
import Footer from "@/section/Footer";
import Hero from "@/section/Hero";
import JoiningBenifit from "@/section/joining-benifit";
import OurWork from "@/section/our-work";
import Testimonial from "@/section/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Certificate />
      <JoiningBenifit />
      <Testimonial />
      <OurWork />
      <Footer />
    </>
  );
}

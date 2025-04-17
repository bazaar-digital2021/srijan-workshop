import Certificate from "@/section/workshop/certificate";
import Features from "@/section/workshop/Features";
import Hero from "@/section/workshop/Hero";
import JoiningBenifit from "@/section/workshop/joining-benifit";
import OurWork from "@/section/workshop/our-work";
import Testimonial from "@/section/workshop/Testimonial";

export default async function Home() {

  return (
    <>
      <Hero />
      <Features />
      <Certificate />
      <JoiningBenifit />
      <Testimonial />
      <OurWork />
    </>
  );
}

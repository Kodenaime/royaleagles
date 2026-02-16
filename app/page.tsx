import Image from "next/image";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ValuesSection from "@/components/home/ValuesSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import FaqsSection from "@/components/home/FaqsSection";
import CtaSection from "@/components/layout/CtaSection";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";

export default function Home() {
  return (
    <div className='bg-white'>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <ValuesSection />
      <TestimonialSection />
      <FaqsSection />
      <CtaSection 
        image="/home/cta.webp"
        title={<>Want Care That Feels Like <span className='text-primary'>Family?</span></>}
        description="Reach out today and let us care for your loved ones with respect and connection."
      />
    </div>
  );
}

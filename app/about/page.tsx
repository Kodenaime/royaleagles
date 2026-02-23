import PageHead from "@/components/layout/PageHead";
import AboutPageSection from "@/components/about/AboutPageSection";
import AboutSection from "@/components/about/AboutSection";
import FounderSection from "@/components/about/FounderSection";
import FaqsSection from "@/components/home/FaqsSection";
import CtaSection from "@/components/layout/CtaSection";
import CareerSection from "@/components/about/CareerSection";

export default function About() {
    return (
       <div>
        <PageHead 
            image="/about/about.webp" 
            title={<><span className='text-primary'>About</span> Us</>} 
        />
        <AboutPageSection />
        <AboutSection />
        <FounderSection />
        <CareerSection />
        <FaqsSection />
        <CtaSection 
            image="/about/cta.webp"
            title={<>Looking for Support You Can <span className='text-primary'>Rely On</span></>}
            description="Reach out today and let us care for your loved ones with respect and connection."
        />
    </div>
    )
}
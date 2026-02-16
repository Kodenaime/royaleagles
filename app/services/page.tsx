
import PageHead from "@/components/layout/PageHead";
import ServiceSection from "@/components/services/ServiceSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import FaqsSection from "@/components/home/FaqsSection";
import CtaSection from "@/components/layout/CtaSection";

export default function Services() {
    return (
        <div>
            <PageHead 
                image="/service/service.webp" 
                title={<><span className='text-primary'>Our</span> Services</>} 
            />
            <ServiceSection />
            <TestimonialSection />
            <FaqsSection />
            <CtaSection 
                image="/service/cta.webp"
                title={<><span className='text-primary'>Personalized Care</span>,Built Around You</>}
                description="Reach out today and let us care for your loved ones with respect and connection."
            />
        </div>
    )
}
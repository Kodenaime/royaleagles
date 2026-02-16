import PageHead from "@/components/layout/PageHead";
import ContactSection from "@/components/contact/ContactSection";
import FaqsSection from "@/components/home/FaqsSection";
import CtaSection from "@/components/layout/CtaSection";

export default function Contact() {
    return (
        <div>
            <PageHead 
                image="/contact/contact.webp" 
                title={<><span className='text-primary'>Contact</span> Us</>} 
            />
            <ContactSection />
            <FaqsSection />
            <CtaSection 
                image="/contact/cta.webp"
                title={<>Looking for Support You Can <span className='text-primary'>Rely On</span></>}
                description="Reach out today and let us care for your loved ones with respect and connection."
            />
        </div>
    )
}
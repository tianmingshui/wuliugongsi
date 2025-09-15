import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import ServicesSection from '@/components/home/ServicesSection'
import TrackingSection from '@/components/home/TrackingSection'
import CasesSection from '@/components/home/CasesSection'
import ContactSection from '@/components/home/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TrackingSection />
        <CasesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
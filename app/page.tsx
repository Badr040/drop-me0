import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/landing/hero-section"
import { ProgramsSection } from "@/components/landing/programs-section"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <section className="py-12 bg-background-alt">
          <div className="max-w-7xl mx-auto px-4 flex justify-center">
            <Link
              href="/signup"
              className="bg-primary text-white px-12 py-3 rounded-full text-xl font-bold hover:scale-105 transition-transform"
            >
              Join Us
            </Link>
          </div>
        </section>

        <ProgramsSection />
      </main>
      <Footer />
    </div>
  )
}

import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import CTAButton from '../components/CTAButton';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>LastAI – AI Landing Page Generator</title>
        <meta name="description" content="Build high-converting landing pages in 30 seconds using GPT-4o and LastAI automation." />
      </Head>

      <main className="bg-black text-white min-h-screen">
        <Navbar />
        <HeroSection />

        <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard title="AI-Powered Content" description="GPT-4o writes your copy based on 1 prompt." />
          <FeatureCard title="Modern Templates" description="Select from dark-mode optimized, mobile-ready designs." />
          <FeatureCard title="Export Anywhere" description="Download to HTML, Framer, or Webflow." />
        </section>

        <section className="text-center mt-10">
          <CTAButton text="Build Your Site Now" href="/wizard" />
        </section>

        <section className="py-20 px-6 max-w-4xl mx-auto">
          <Testimonials />
        </section>

        <Footer />
      </main>
    </>
  );
}

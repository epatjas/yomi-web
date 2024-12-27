import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import Benefits from '@/components/Benefits/Benefits';
import Learning from '@/components/Learning/Learning';
import Voice from '@/components/Voice/Voice';
import FAQ from '@/components/FAQ/FAQ';
import Download from '@/components/Download/Download';

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Learning />
        <Voice />
        <FAQ />
        <Download />
      </main>
    </>
  );
} 
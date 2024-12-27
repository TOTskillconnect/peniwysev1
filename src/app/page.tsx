import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import WhatToAchieve from '@/components/landing/WhatToAchieve';
import MoneyStress from '@/components/landing/MoneyStress';
import YourMoney from '@/components/landing/YourMoney';
import Footer from '@/components/shared/Footer';
import Faq from '@/components/landing/Faq';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <WhatToAchieve />
      <MoneyStress />
      <YourMoney />
      <Faq />
      <Footer />
    </>
  );
}

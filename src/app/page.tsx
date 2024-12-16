import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import WhatToAchieve from "./components/WhatToAchieve";
import MoneyStress from "./components/MoneyStress";
import YourMoney from "./components/YourMoney";
import Footer from "./components/Footer";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <WhatToAchieve />
      <MoneyStress />
      <YourMoney />
      <Faq />
      <Footer />
    </main>
  );
}

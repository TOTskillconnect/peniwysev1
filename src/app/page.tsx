import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import WhatToAchieve from '@/components/landing/WhatToAchieve';
import MoneyStress from '@/components/landing/MoneyStress';
import YourMoney from '@/components/landing/YourMoney';
import Footer from '@/components/shared/Footer';
import Faq from '@/components/landing/Faq';
import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/live';
import { SiteContent } from '../../sanity.types';

const contentQuery = defineQuery(`*[_type == "siteContent"]`);

export default async function Home() {
  const { data } = await sanityFetch({
    query: contentQuery,
  });

  return (
    <>
      <Hero data={data[0] as SiteContent} />
      <Features data={data[0] as SiteContent} />
      <HowItWorks data={data[0] as SiteContent} />
      <WhatToAchieve data={data[0] as SiteContent} />
      <MoneyStress data={data[0] as SiteContent} />
      <YourMoney data={data[0] as SiteContent} />
      <Faq data={data[0] as SiteContent} />
      <Footer />
    </>
  );
}

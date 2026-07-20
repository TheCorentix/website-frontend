import DepthReveal from '../components/DepthReveal';
import Hero from '../components/Hero';
import StatsStrip from '../components/StatsStrip';
import CompanyName from '../components/CompanyName';
import WhatWeDo from '../components/WhatWeDo';
import Projects from '../components/Projects';
import Innovation from '../components/Innovation';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import WhyUs from '../components/WhyUs';
import Contact from '../components/Contact';
import SectionDivider from '../components/SectionDivider';

export default function Home() {
  return (
    <>
      <DepthReveal initiallyVisible><Hero /></DepthReveal>
      <StatsStrip />
      <SectionDivider />
      <DepthReveal><CompanyName /></DepthReveal>
      <SectionDivider />
      <DepthReveal><WhatWeDo /></DepthReveal>
      <SectionDivider />
      <DepthReveal><Projects /></DepthReveal>
      <SectionDivider />
      <DepthReveal><Innovation /></DepthReveal>
      <SectionDivider />
      <DepthReveal><Process /></DepthReveal>
      <SectionDivider />
      <DepthReveal><Testimonials /></DepthReveal>
      <SectionDivider />
      <DepthReveal><WhyUs /></DepthReveal>
      <SectionDivider />
      <DepthReveal><Contact /></DepthReveal>
    </>
  );
}

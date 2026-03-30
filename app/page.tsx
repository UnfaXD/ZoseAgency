import {
  AboutSection,
  FooterSection,
  HeroSection,
  SolutionSection,
  TariffSections,
} from '@/features';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SolutionSection />
      <AboutSection />
      <TariffSections />
      <FooterSection />
    </main>
  );
}

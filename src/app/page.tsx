// src/app/page.tsx
import { SpotlightEffect } from '@/components/effects/SpotlightEffect';
import { Header } from '@/components/layout/Header';
import { Navigation, DesktopNavigation } from '@/components/layout/Navigation';
import { SocialLinks } from '@/components/layout/SocialLinks';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
// Gallery hidden until real photography replaces the stock images in ImageGallerySection
// import { ImageGallerySection } from '@/components/sections/ImageGallerySection';
import { GetInTouchSection } from '@/components/sections/GetInTouchSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-400 relative overflow-x-hidden">
      <SpotlightEffect />

      {/* Navigation - renders mobile navbar */}
      <Navigation />

      {/* Mobile Hero Section - Show only on mobile */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-screen-xl px-6 pt-20 py-12 font-sans md:px-12 md:py-20">
          <HeroSection />
        </div>
      </div>

      {/* Desktop-only fixed sidebar */}
      <div className="hidden lg:flex fixed top-0 left-0 h-screen w-[50%] max-w-2xl flex-col justify-between py-24 pl-24 pr-12 z-20">
        <div>
          <Header />
          <DesktopNavigation />
        </div>
        <SocialLinks />
      </div>

      {/* Content is rendered once (section ids must be unique for scroll links);
          on desktop it moves into the right half beside the sidebar */}
      <main className="mx-auto max-w-screen-xl px-6 pt-4 pb-12 font-sans md:px-12 md:pb-20 lg:ml-auto lg:mr-0 lg:w-[50%] lg:min-h-screen lg:max-w-none lg:py-24 lg:pl-12 lg:pr-24">
        <div className="lg:max-w-2xl">
          <AboutSection id="about" />
          <ExperienceSection id="experience" />
          <ProjectsSection id="projects" />
          <GetInTouchSection id="contact" />
          <Footer />
        </div>
      </main>
    </div>
  );
}
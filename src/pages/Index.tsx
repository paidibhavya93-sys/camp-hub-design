import HeroSection from '@/components/sections/HeroSection';
import TimingsSection from '@/components/sections/TimingsSection';
import ExamsSection from '@/components/sections/ExamsSection';
import FacilitiesSection from '@/components/sections/FacilitiesSection';
import EventsSection from '@/components/sections/EventsSection';
import FooterSection from '@/components/sections/FooterSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div id="content">
        <TimingsSection />
        <ExamsSection />
        <FacilitiesSection />
        <EventsSection />
      </div>
      <FooterSection />
    </main>
  );
};

export default Index;

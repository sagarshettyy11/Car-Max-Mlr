import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import Services from './components/Services';
import Modifications from './components/Modifications';
import FeaturedBuilds from './components/FeaturedBuilds';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import StatsCounter from './components/StatsCounter';
import WorkshopExperience from './components/WorkshopExperience';
import AccessoriesCatalog from './components/AccessoriesCatalog';
import Testimonials from './components/Testimonials';
import InstagramGrid from './components/InstagramGrid';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingActions from './components/FloatingActions';
import CinematicIntroSequence from './components/CinematicIntroSequence';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [replayCinematic, setReplayCinematic] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const triggerCinematicReplay = () => {
    setReplayCinematic(true);
  };

  return (
    <div className="min-h-screen bg-[#090a0d] text-gray-100 selection:bg-[#ff5500] selection:text-white">
      {/* Opening Fullscreen Cinematic Commercial Supercar Drift Intro */}
      <CinematicIntroSequence
        key={replayCinematic ? 'replay-intro' : 'first-intro'}
        forceReplay={replayCinematic}
        onComplete={() => setReplayCinematic(false)}
      />

      {/* Fixed Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenBooking={handleOpenBooking}
          onReplayCinematic={triggerCinematicReplay}
        />
        <BrandMarquee />
        <Services onOpenBooking={handleOpenBooking} />
        <Modifications onOpenBooking={handleOpenBooking} />
        <FeaturedBuilds />
        <BeforeAfterSlider />
        <StatsCounter />
        <WorkshopExperience />
        <AccessoriesCatalog onOpenBooking={handleOpenBooking} />
        <Testimonials />
        <InstagramGrid />
        <BookingSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Global Interactive Booking Popup Modal */}
      <BookingModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />

      {/* Floating Quick Action Controls */}
      <FloatingActions onOpenBooking={handleOpenBooking} />
    </div>
  );
}

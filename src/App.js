import React from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientStrip from './components/ClientStrip';
import AboutSection from './components/AboutSection';
import FeaturedWork from './components/FeaturedWork';
import ServicesSection from './components/ServicesSection';
import PioneersSection from './components/PioneersSection';
import Footer from './components/Footer';
import "./index.css";
import PageTransition from './components/PageTransition';
import BlogSection from './components/BlogSection';
import ReadyToRiseMarqueeSection from './components/ReadyToRiseMarqueeSection';

export default function App() {
  return (
    <div className='bg-[#f0efeb]'>
     <PageTransition color="#B2F6E3" holdDur={0.05} exitDur={1} />
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <ClientStrip />
        <AboutSection />
        <FeaturedWork />
        <ServicesSection />
        <PioneersSection />
        <BlogSection />
        <ReadyToRiseMarqueeSection />
      </main>
      <div className='m-[8px]'>
        <Footer />
      </div>
    </div>
  );
}
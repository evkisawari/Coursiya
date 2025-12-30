import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CurriculumSection } from './components/CurriculumSection';
import { MentorsSection } from './components/MentorsSection';
import { BonusesSection } from './components/BonusesSection';
import { FAQSection } from './components/FAQSection';
import { RegistrationSection } from './components/RegistrationSection';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <CurriculumSection />
      <MentorsSection />
      <BonusesSection />
      <RegistrationSection />
      <FAQSection />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
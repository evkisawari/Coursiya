import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Coursiya
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('mentors')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Mentors
            </button>
            <button
              onClick={() => scrollToSection('bonuses')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Bonuses
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection('register')}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Register Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-orange-600 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium py-2"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('mentors')}
              className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium py-2"
            >
              Mentors
            </button>
            <button
              onClick={() => scrollToSection('bonuses')}
              className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium py-2"
            >
              Bonuses
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium py-2"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection('register')}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-full shadow-lg"
            >
              Register Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
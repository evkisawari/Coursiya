import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const CurriculumSection = () => {
  const topics = [
    'Master Figma interface, tools, and workspace navigation',
    'Learn to design stunning UI elements with professional techniques',
    'Understand design principles: alignment, spacing, and hierarchy',
    'Create interactive prototypes with Figma\'s prototyping features',
    'Design complete food delivery app UI (Swiggy/Zomato style)',
    'Learn mobile app design patterns from Myntra and other top apps',
    'Build portfolio-worthy projects ready to showcase',
    'Master responsive design for different screen sizes'
  ];

  const outcomes = [
    'Design a complete food delivery app UI from scratch',
    'Create professional prototypes and interactive designs',
    'Build 3+ portfolio-ready projects',
    'Master Figma tools and best practices'
  ];

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What You'll{' '}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Learn
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive 2-hour intensive workshop covering everything from Figma basics to real-world app design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* What You'll Learn */}
          <Card className="border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-all">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Sparkles className="w-6 h-6" />
                <span>Workshop Curriculum</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8 bg-white">
              <ul className="space-y-4">
                {topics.map((topic, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">{topic}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Learning Outcomes */}
          <Card className="border-2 border-amber-200 shadow-xl hover:shadow-2xl transition-all">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Sparkles className="w-6 h-6" />
                <span>By the End, You Will</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8 bg-white">
              <ul className="space-y-6">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 leading-relaxed text-lg font-medium">{outcome}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border-2 border-orange-200">
                <p className="text-center text-gray-800 font-semibold text-lg">
                  Plus, get Premium Bonuses worth ₹21,000!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* App Design Preview */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-orange-100">
            <div className="p-6 md:p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Design Apps Like Industry Leaders
              </h3>
              <p className="text-gray-600 mb-6">
                Learn to design mobile apps inspired by Swiggy, Zomato, and Myntra
              </p>
              <img
                src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MHx8fHwxNzY3MDg3MjAwfDA&ixlib=rb-4.1.0&q=85"
                alt="Mobile App Design"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
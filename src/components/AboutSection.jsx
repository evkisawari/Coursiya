import React from 'react';
import { GraduationCap, Briefcase, RefreshCw, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const AboutSection = () => {
  const audiences = [
    {
      icon: <GraduationCap className="w-8 h-8 text-orange-600" />,
      title: 'Students',
      description: 'Build a strong foundation in UI/UX design and kickstart your design career with industry-standard tools'
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-amber-600" />,
      title: 'Career Switchers',
      description: 'Transition smoothly into UI/UX design with hands-on projects and expert guidance from industry professionals'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-orange-600" />,
      title: 'Working Professionals',
      description: 'Upskill yourself with modern design tools and techniques to stay relevant in the competitive market'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-amber-600" />,
      title: 'Aspiring Designers',
      description: 'Learn from scratch and create portfolio-worthy projects that showcase your design skills to employers'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Who is this{' '}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Workshop
            </span>
            {' '}for?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're starting fresh or looking to switch careers, this workshop is designed for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all hover-lift bg-gradient-to-br from-white to-orange-50/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 border border-orange-100">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              No Prior Experience Required!
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              This workshop is perfect for absolute beginners. We'll guide you step-by-step through Figma and help you design your first real-world mobile app interface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
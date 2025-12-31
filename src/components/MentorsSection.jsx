import React from 'react';
import { Award, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const MentorsSection = () => {
  const mentors = [
    {
      name: 'Dheeraj S.',
      role: 'Senior UI/UX Designer',
      experience: '10+ Years Experience',
      image: '/images/dheeraj.webp',
      description: 'Expert in mobile app design with a track record of designing apps used by millions. Specialized in creating intuitive user experiences for food delivery and e-commerce platforms.'
    },
    {
      name: 'Hemanshi P.',
      role: 'Lead Product Designer',
      experience: '7+ Years Experience',
      image: '/images/hemasnhi.webp',
      description: 'Passionate about user-centered design and Figma workflows. Has mentored 500+ aspiring designers and helped them land jobs at top tech companies.'
    }
  ];

  return (
    <section id="mentors" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Your{' '}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Expert Mentors
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from industry veterans with 17+ combined years of experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {mentors.map((mentor, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 hover:border-orange-200 shadow-xl hover:shadow-2xl transition-all hover-lift overflow-hidden"
            >
              <div className="h-64 overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {mentor.name}
                    </h3>
                    <p className="text-orange-600 font-semibold mb-2">{mentor.role}</p>
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-amber-600" />
                      <span className="text-sm text-gray-600 font-medium">{mentor.experience}</span>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {mentor.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mentor Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-100">
            <p className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">17+</p>
            <p className="text-gray-700 font-medium">Years Combined Experience</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-100">
            <p className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">500+</p>
            <p className="text-gray-700 font-medium">Students Mentored</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-100">
            <p className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">50+</p>
            <p className="text-gray-700 font-medium">Projects Delivered</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-100">
            <p className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">4.9/5</p>
            <p className="text-gray-700 font-medium">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};
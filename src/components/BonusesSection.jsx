import React from 'react';
import { Gift, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export const BonusesSection = () => {
  const bonuses = [
    {
      title: 'Figma Premium Themes',
      value: '₹4,000',
      description: 'Access to premium Figma design templates and themes'
    },
    {
      title: 'Premium Fonts File 1 GB',
      value: '₹300',
      description: 'Extensive collection of professional fonts for your designs'
    },
    {
      title: 'Figma Premium Themes',
      value: '₹4,000',
      description: 'Additional premium templates for various use cases'
    },
    {
      title: 'Best Figma Plugins',
      value: '₹1,000',
      description: 'Curated list of must-have Figma plugins to boost productivity'
    },
    {
      title: 'All Figma Shortcuts',
      value: '₹2,000',
      description: 'Complete guide to Figma keyboard shortcuts for faster workflow'
    },
    {
      title: 'Figma Premium Icons',
      value: '₹600',
      description: 'Premium icon packs for stunning UI designs'
    }
  ];

  return (
    <section id="bonuses" className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-orange-600 text-white hover:bg-orange-700 px-6 py-3 text-base font-bold">
            Limited Time Offer
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Premium{' '}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Bonuses
            </span>
            {' '}Worth ₹21,000
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Register today and unlock these exclusive bonuses absolutely FREE!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bonuses.map((bonus, index) => (
            <Card
              key={index}
              className="border-2 border-orange-200 hover:border-orange-400 shadow-lg hover:shadow-2xl transition-all hover-lift bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 font-bold">
                    Worth {bonus.value}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Bonus {index + 1}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="text-lg font-bold text-orange-600 mb-2">{bonus.title}</h4>
                <p className="text-gray-600 leading-relaxed">{bonus.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Total Value Card */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-4 border-orange-400 shadow-2xl bg-gradient-to-br from-white to-orange-50">
            <CardContent className="p-8 md:p-12 text-center">
              <Sparkles className="w-16 h-16 text-orange-600 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Total Bonuses Value
              </h3>
              <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
                ₹21,000
              </p>
              <p className="text-lg text-gray-700 mb-6">
                You pay just <span className="text-3xl font-bold text-orange-600">₹99</span> and get all these bonuses FREE!
              </p>
              <button
                onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover-scale"
              >
                Claim Your Bonuses Now
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
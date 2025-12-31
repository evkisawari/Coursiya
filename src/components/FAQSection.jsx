import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export const FAQSection = () => {
  const faqs = [
    {
      question: 'When does the workshop start and what are the timings?',
      answer: 'The workshop is scheduled for January 11, 2026. It is a 2-hour live session. Exact timings will be shared via email after registration.'
    },
    {
      question: 'Will this be live or pre-recorded?',
      answer: 'This is a completely LIVE workshop where you can interact with mentors, ask questions in real-time, and get instant feedback on your designs.'
    },
    {
      question: 'Do I need any prior experience in design?',
      answer: 'No prior experience required! This workshop is designed for complete beginners. We will start from the basics of Figma and guide you step-by-step.'
    },
    {
      question: 'What software do I need?',
      answer: 'You only need Figma, which is completely free to use. You can access it through your web browser or download the desktop app. We will guide you through the setup during the workshop.'
    },
    {
      question: 'Will I get recordings of the workshop?',
      answer: 'No, recordings will not be provided as this is a live, interactive workshop. We encourage all participants to attend live to get the most value and interact with mentors in real-time.'
    },
    {
      question: 'Can I get a refund?',
      answer: 'Due to the limited seats and exclusive nature of this workshop, we do not provide refunds. Please make an informed decision before registering. However, if you miss the live session, we can transfer you to the next batch (only once).'
    },
    {
      question: 'When will I receive the bonuses?',
      answer: 'All bonuses worth ₹21,000 will be delivered to your registered email within 48 hours after the workshop completion.'
    },
    {
      question: 'Will I get a certificate?',
      answer: 'Yes! Upon completing the workshop, you will receive a verified certificate of completion that you can add to your portfolio, LinkedIn, or resume.'
    },
    {
      question: 'I made payment but didn\'t receive confirmation. What should I do?',
      answer: 'If you don\'t receive a confirmation email within 10 minutes, please check your spam folder. If you still don\'t see it, contact our support team and we\'ll resolve it immediately.'
    },
    {
      question: 'Is this workshop suitable for working professionals?',
      answer: 'Absolutely! Many working professionals join our workshops to upskill or transition into UI/UX design. The 2-hour format is designed to be intensive yet time-efficient.'
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-gray-200 rounded-xl px-6 hover:border-orange-300 transition-colors bg-white shadow-sm hover:shadow-md"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-orange-600 py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-4">
              We're here to help! Reach out to our support team.
            </p>
            <a
              href="mailto:support@coursiya.com"
              className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
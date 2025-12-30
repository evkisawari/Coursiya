import React, { useState, useEffect } from 'react';
import { CheckCircle2, User, Mail, Phone, CreditCard } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!razorpayLoaded) {
      toast.error('Payment system is loading. Please try again.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Get Razorpay configuration
      const configResponse = await axios.get(`${API}/razorpay-config`);
      const { key_id } = configResponse.data;

      // Create order
      const orderResponse = await axios.post(`${API}/create-order`, {
        amount: 9900, // ₹99 in paise
        currency: 'INR',
        registration_data: formData
      });

      const { order_id, amount, currency } = orderResponse.data;

      // Razorpay options
      const options = {
        key: key_id,
        amount: amount,
        currency: currency,
        order_id: order_id,
        name: 'Coursiya',
        description: 'UI/UX Design Webinar Registration',
        image: 'https://via.placeholder.com/100x100.png?text=C',
        handler: async function (response) {
          try {
            // Verify payment
            const verifyResponse = await axios.post(`${API}/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              registration_data: formData
            });

            if (verifyResponse.data.success) {
              toast.success('Registration Successful! 🎉', {
                description: 'Check your email for workshop details and joining link.'
              });
              setFormData({ name: '', email: '', phone: '' });
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            toast.error('Payment verification failed. Please contact support.');
          } finally {
            setIsSubmitting(false);
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: '#F97316'
        },
        modal: {
          ondismiss: function() {
            setIsSubmitting(false);
            toast.info('Payment cancelled');
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment initiation error:', error);
      toast.error('Failed to initiate payment. Please try again.');
      setIsSubmitting(false);
    }
  };

  const features = [
    'Live 2-hour workshop with expert mentors',
    'Design complete food delivery app UI',
    'Premium bonuses worth ₹21,000',
    'Lifetime access to course materials',
    'Certificate of completion',
    'Direct mentor support during workshop'
  ];

  return (
    <section id="register" className="py-16 md:py-24 bg-gradient-to-br from-orange-600 via-amber-600 to-orange-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Secure Your Spot Now!
          </h2>
          <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto">
            Limited seats available. Register now and start your UI/UX design journey!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Registration Form */}
          <Card className="border-none shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                Register for ₹99 Only
              </CardTitle>
              <p className="text-gray-600 mt-2">
                <span className="text-2xl font-bold text-orange-600">₹99</span>{' '}
                <span className="line-through text-gray-500">₹1,999</span>{' '}
                <span className="text-green-600 font-semibold">(95% OFF)</span>
              </p>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-semibold flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Full Name</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-300 focus:border-orange-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-semibold flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Email Address</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-300 focus:border-orange-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-semibold flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Phone Number</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-300 focus:border-orange-500 transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-lg py-6 rounded-full shadow-xl hover:shadow-2xl transition-all"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <CreditCard className="w-5 h-5" />
                      <span>Register & Pay ₹99</span>
                    </span>
                  )}
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By registering, you agree to our Terms & Conditions
                </p>
              </form>
            </CardContent>
          </Card>

          {/* What You Get */}
          <div className="space-y-6">
            <Card className="border-none shadow-2xl bg-white">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  What You Get
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Urgency Card */}
            <Card className="border-4 border-white shadow-2xl bg-gradient-to-br from-amber-400 to-orange-400">
              <CardContent className="p-6 text-center text-white">
                <p className="text-xl font-bold mb-2">⏰ Limited Time Offer!</p>
                <p className="text-lg">
                  Only <span className="text-3xl font-bold">20 seats</span> remaining
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
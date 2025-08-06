'use client';

import { SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Guest = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 4000);
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(featureInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Insights',
      description: 'Smart expense analysis with personalized recommendations tailored to your spending habits.',
      gradient: 'from-blue-500 to-cyan-500',
      stats: '95% Accuracy'
    },
    {
      icon: '✨',
      title: 'Auto Categorization',
      description: 'Intelligent expense sorting that learns from your patterns and saves you hours of manual work.',
      gradient: 'from-purple-500 to-indigo-500',
      stats: '10x Faster'
    },
    {
      icon: '📊',
      title: 'Smart Analytics',
      description: 'Beautiful visualizations and predictive insights to help you make better financial decisions.',
      gradient: 'from-green-500 to-emerald-500',
      stats: 'Real-time Data'
    },
    {
      icon: '🎯',
      title: 'Budget Optimization',
      description: 'AI-driven budget suggestions based on your income, goals, and spending patterns.',
      gradient: 'from-orange-500 to-red-500',
      stats: '30% Savings'
    },
    {
      icon: '🔍',
      title: 'Expense Detection',
      description: 'Automatically detect and capture expenses from receipts, emails, and bank transactions.',
      gradient: 'from-pink-500 to-purple-500',
      stats: 'Zero Manual Entry'
    },
    {
      icon: '💡',
      title: 'Smart Suggestions',
      description: 'Receive personalized money-saving tips and financial optimization recommendations.',
      gradient: 'from-yellow-500 to-orange-500',
      stats: 'Personalized Tips'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Martinez',
      role: 'Small Business Owner',
      avatar: '👩‍💼',
      quote: 'Expenser\'s AI insights helped me reduce business expenses by 35% in just 3 months. The automatic categorization is a game-changer!',
      rating: 5,
      savings: '$2,400'
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      avatar: '👨‍💻',
      quote: 'The predictive analytics feature warned me about overspending before it happened. This app literally saved my budget!',
      rating: 5,
      savings: '$1,800'
    },
    {
      name: 'Emma Thompson',
      role: 'Marketing Director',
      avatar: '👩‍🎨',
      quote: 'I love how the AI learns my patterns. It now suggests optimizations I would never have thought of myself.',
      rating: 5,
      savings: '$3,200'
    }
  ];

  const faqs = [
    {
      question: 'How does Expenser\'s AI work?',
      answer: 'Our AI uses advanced machine learning to analyze your spending patterns, automatically categorize expenses, and provide personalized insights. It continuously learns from your behavior to offer increasingly accurate recommendations.',
      icon: '🤖'
    },
    {
      question: 'Is my financial data secure?',
      answer: 'Absolutely. We use bank-level 256-bit encryption, are SOC 2 Type II compliant, and never share your data with third parties. Your privacy and security are our top priorities.',
      icon: '🔒'
    },
    {
      question: 'Can I try Expenser for free?',
      answer: 'Yes! We offer a 14-day free trial with full access to all AI features. No credit card required. Experience the power of intelligent expense management risk-free.',
      icon: '💎'
    },
    {
      question: 'How accurate is the expense categorization?',
      answer: 'Our AI achieves 95% accuracy in expense categorization and gets better over time as it learns your specific patterns. You can always review and adjust categories as needed.',
      icon: '🎯'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Users', icon: '👥' },
    { number: '$5M+', label: 'Money Saved', icon: '💰' },
    { number: '95%', label: 'AI Accuracy', icon: '🤖' },
    { number: '4.9★', label: 'User Rating', icon: '⭐' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-800 dark:text-slate-200">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-24 lg:pb-20">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600" style={{
            maskImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full text-sm font-bold text-blue-700 dark:text-blue-300 mb-8 border border-blue-200/50 dark:border-blue-700/50 shadow-lg backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-2xl">🤖</span>
              <span>AI-Powered Financial Intelligence</span>
            </div>

            {/* Main Hero Content */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="block mb-2">Transform Your</span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Financial Future
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience the power of <span className="font-bold text-blue-600 dark:text-blue-400">AI-driven expense tracking</span> with 
              intelligent categorization, predictive insights, and personalized recommendations that grow smarter every day.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <SignInButton>
                <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 active:scale-95 border border-white/20">
                  <div className="relative z-10 flex items-center gap-3">
                    <span>Start Free Trial</span>
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </SignInButton>

              <Link
                href="/demo"
                className="group flex items-center gap-3 px-8 py-4 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 rounded-2xl backdrop-blur-sm"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Watch Demo</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-semibold text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-6">
              <span className="text-lg">✨</span>
              <span>Intelligent Features</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              AI That Works For You
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Experience cutting-edge artificial intelligence that transforms how you manage money
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 hover:scale-105 ${
                  activeFeature === index ? 'ring-2 ring-blue-500/50 scale-105 shadow-blue-500/20' : ''
                }`}
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-2xl`}>
                  {feature.icon}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black text-slate-800 dark:text-white">
                    {feature.title}
                  </h3>
                  <span className="text-xs font-bold px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                    {feature.stats}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base mb-6">
                  {feature.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Learn More →
                  </span>
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-r ${feature.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient.replace('to-', 'to-transparent opacity-0 group-hover:opacity-5')} rounded-3xl transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full text-sm font-semibold text-green-700 dark:text-green-300 mb-6">
              <span className="text-lg">💬</span>
              <span>Success Stories</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Real Results, Real People
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Discover how our AI-powered platform has transformed financial lives
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-8 py-12 bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-3xl shadow-2xl">
                        {testimonial.avatar}
                      </div>
                      
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                        ))}
                      </div>

                      <blockquote className="text-2xl font-medium text-slate-700 dark:text-slate-300 mb-8 leading-relaxed italic max-w-3xl mx-auto">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="flex items-center justify-center gap-6 mb-6">
                        <div>
                          <div className="font-black text-xl text-slate-800 dark:text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-slate-600 dark:text-slate-400 font-medium">
                            {testimonial.role}
                          </div>
                        </div>
                        <div className="w-px h-12 bg-slate-300 dark:bg-slate-600"></div>
                        <div className="text-center">
                          <div className="text-2xl font-black text-green-600 dark:text-green-400">
                            {testimonial.savings}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            Saved
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full text-sm font-semibold text-purple-700 dark:text-purple-300 mb-6">
              <span className="text-lg">❓</span>
              <span>FAQ</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Got Questions?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Everything you need to know about Expenser's AI-powered features
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:scale-[1.02]">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {faq.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white animate-pulse"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of users who are already saving money and making smarter financial decisions with AI-powered insights.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <SignInButton>
              <button className="group relative overflow-hidden bg-white hover:bg-slate-50 text-blue-600 hover:text-blue-700 px-12 py-5 rounded-2xl text-2xl font-black shadow-2xl hover:shadow-white/25 transition-all duration-500 transform hover:scale-105 active:scale-95">
                <div className="relative z-10 flex items-center gap-3">
                  <span>Start Free Trial</span>
                  <svg className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </button>
            </SignInButton>

            <Link
              href="/contact"
              className="group flex items-center gap-3 px-8 py-4 text-white hover:text-blue-100 font-bold text-xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/30 hover:border-white/50 rounded-2xl"
            >
              <span>Contact Sales</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span className="font-semibold">Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold">Instant AI Insights</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="font-semibold">14-Day Free Trial</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guest;
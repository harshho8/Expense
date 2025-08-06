'use client';

const AboutPage = () => {
  return (
    <div className='font-sans bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20 text-slate-800 dark:text-slate-200 transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-orange-500/10 dark:from-blue-900/30 dark:via-indigo-900/20 dark:to-orange-900/30'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse'></span>
            Our Story
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-slate-100 leading-tight'>
            About{' '}
            <span className='bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-500 bg-clip-text text-transparent'>
              ExpenseWise
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0'>
            Revolutionizing personal finance management with intelligent tracking, 
            insightful analytics, and seamless user experience.
          </p>
          <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0'>
            <button className='group relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-500 hover:from-blue-700 hover:via-indigo-600 hover:to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'>
              <span className='relative z-10 flex items-center justify-center gap-2'>
                Start Your Journey
                <span className='text-lg'>💳</span>
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </button>
            <button className='group border-2 border-blue-500/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2'>
              Learn More
              <span className='text-lg'>📈</span>
            </button>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-orange-500'></div>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <span className='w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full'></span>
              Our Mission
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-slate-100 px-2 sm:px-0'>
              Empowering{' '}
              <span className='text-blue-600 dark:text-blue-400'>
                Financial Freedom
              </span>
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed'>
              At ExpenseWise, we believe that everyone deserves access to powerful financial tools. 
              Our mission is to democratize expense tracking and financial insights through 
              intuitive design and cutting-edge technology.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            <div className='group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 text-center'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-4 sm:mb-6 mx-auto'>
                  <span className='text-white text-lg sm:text-xl'>🎯</span>
                </div>
                <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100'>
                  Smart Tracking
                </h3>
                <p className='text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 leading-relaxed'>
                  Automatically categorize and track your expenses with intelligent 
                  algorithms that learn from your spending patterns.
                </p>
              </div>
            </div>

            <div className='group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 text-center'>
              <div className='absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-orange-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 via-orange-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-4 sm:mb-6 mx-auto'>
                  <span className='text-white text-lg sm:text-xl'>📊</span>
                </div>
                <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100'>
                  Rich Analytics
                </h3>
                <p className='text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 leading-relaxed'>
                  Get detailed insights into your spending habits with beautiful 
                  visualizations and actionable recommendations.
                </p>
              </div>
            </div>

            <div className='group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 text-center md:col-span-2 lg:col-span-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 via-blue-500 to-indigo-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-4 sm:mb-6 mx-auto'>
                  <span className='text-white text-lg sm:text-xl'>🔒</span>
                </div>
                <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100'>
                  Bank-Level Security
                </h3>
                <p className='text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 leading-relaxed'>
                  Your financial data is protected with enterprise-grade encryption 
                  and security measures you can trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <span className='w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full'></span>
              Our Impact
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-slate-100 px-2 sm:px-0'>
              Trusted by{' '}
              <span className='text-blue-600 dark:text-blue-400'>
                Thousands
              </span>
            </h2>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
            <div className='text-center p-4 sm:p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-slate-100/50 dark:border-slate-700/50'>
              <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2'>50K+</div>
              <div className='text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium'>Active Users</div>
            </div>
            <div className='text-center p-4 sm:p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-slate-100/50 dark:border-slate-700/50'>
              <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2'>1M+</div>
              <div className='text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium'>Expenses Tracked</div>
            </div>
            <div className='text-center p-4 sm:p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-slate-100/50 dark:border-slate-700/50'>
              <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2'>98%</div>
              <div className='text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium'>Satisfaction Rate</div>
            </div>
            <div className='text-center p-4 sm:p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-slate-100/50 dark:border-slate-700/50'>
              <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2'>24/7</div>
              <div className='text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium'>Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm relative overflow-hidden'>
        <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-orange-500'></div>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <span className='w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full'></span>
              Our Values
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-slate-100 px-2 sm:px-0'>
              What Drives{' '}
              <span className='text-blue-600 dark:text-blue-400'>
                Us Forward
              </span>
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100/50 dark:border-slate-700/50'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg'>
                  <span className='text-white text-xs sm:text-sm'>🚀</span>
                </div>
                <h3 className='text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100'>
                  Innovation First
                </h3>
              </div>
              <p className='text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed'>
                We constantly push the boundaries of what's possible in personal finance management, 
                leveraging the latest technologies to create breakthrough solutions for our users.
              </p>
            </div>

            <div className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100/50 dark:border-slate-700/50'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-indigo-500 via-orange-500 to-blue-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg'>
                  <span className='text-white text-xs sm:text-sm'>❤️</span>
                </div>
                <h3 className='text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100'>
                  User-Centered Design
                </h3>
              </div>
              <p className='text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed'>
                Every feature we build starts with understanding our users' needs. We believe that 
                powerful financial tools should be accessible and delightful to use for everyone.
              </p>
            </div>

            <div className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100/50 dark:border-slate-700/50'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 via-blue-500 to-indigo-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg'>
                  <span className='text-white text-xs sm:text-sm'>🛡️</span>
                </div>
                <h3 className='text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100'>
                  Privacy & Security
                </h3>
              </div>
              <p className='text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed'>
                We understand that financial data is deeply personal. That's why we've built our 
                platform with privacy by design and industry-leading security measures.
              </p>
            </div>

            <div className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100/50 dark:border-slate-700/50'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 via-orange-500 to-indigo-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg'>
                  <span className='text-white text-xs sm:text-sm'>🌍</span>
                </div>
                <h3 className='text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100'>
                  Global Accessibility
                </h3>
              </div>
              <p className='text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed'>
                Financial wellness shouldn't be limited by geography. We're committed to making 
                ExpenseWise available and relevant to users around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
            <span className='w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse'></span>
            Join Our Community
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-slate-100 px-2 sm:px-0'>
            Ready to Transform Your{' '}
            <span className='text-blue-600 dark:text-blue-400'>
              Financial Life?
            </span>
          </h2>
          <p className='text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-2 sm:px-0 mb-6 sm:mb-8 leading-relaxed'>
            Join thousands of users who have already taken control of their finances with ExpenseWise. 
            Start your journey towards financial freedom today.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0'>
            <button className='group relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-500 hover:from-blue-700 hover:via-indigo-600 hover:to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'>
              <span className='relative z-10 flex items-center justify-center gap-2'>
                Get Started Free
                <span className='text-lg'>✨</span>
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </button>
            <button className='group border-2 border-blue-500/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2'>
              View Features
              <span className='text-lg'>🔍</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

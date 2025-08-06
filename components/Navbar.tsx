'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useState } from 'react';
import { checkUser } from '@/lib/checkUser';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };


  return (
    <nav className='sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border-b border-slate-200/20 dark:border-slate-700/20 shadow-xl shadow-slate-900/5 dark:shadow-black/40 transition-all duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 sm:h-18 lg:h-20'>
          {/* Logo Section */}
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex items-center gap-3 sm:gap-4 flex-shrink-0 group transition-all duration-500 hover:scale-105 active:scale-95'
              onClick={closeMobileMenu}
            >
              <div className='relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110'>
                <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-80'></div>
                <span className='text-white text-lg sm:text-xl md:text-2xl font-bold relative z-10 drop-shadow-sm'>
                  💳
                </span>
              </div>
              <div className='flex flex-col'>
                <span className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-none'>
                  Expenser
                </span>
                <span className='text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide'>
                  Smart Finance
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className='hidden md:flex items-center space-x-2 lg:space-x-4'>
            {[
              { href: '/', label: 'Home', icon: '🏠' },
              { href: '/about', label: 'About', icon: 'ℹ️' },
              { href: '/contact', label: 'Contact', icon: '📞' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='group relative overflow-hidden text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 lg:px-6 py-3 rounded-2xl text-sm lg:text-base font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-indigo-50/80 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 hover:shadow-lg hover:scale-105 active:scale-95'
              >
                <span className='relative z-10 flex items-center gap-2'>
                  <span className='text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300'>
                    {item.icon}
                  </span>
                  {item.label}
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100'></div>
                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-3/4 transition-all duration-300'></div>
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className='flex items-center space-x-2 sm:space-x-3'>
            {/* Authentication - Desktop */}
            <div className='hidden sm:block'>
              <SignedOut>
                <SignInButton>
                  <button className='group relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-6 lg:px-8 py-3 lg:py-3.5 rounded-2xl text-sm lg:text-base font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 active:scale-95 border border-white/20'>
                    <div className='relative z-10 flex items-center gap-2 lg:gap-3'>
                      <span>Sign In</span>
                      <svg
                        className='w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2.5}
                          d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                        />
                      </svg>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/20 animate-pulse'></div>
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className='p-1 rounded-2xl bg-gradient-to-r from-blue-100/80 to-indigo-100/80 dark:from-blue-900/40 dark:to-indigo-900/40 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          'w-9 h-9 lg:w-10 lg:h-10 hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white/50',
                        userButtonBox: 'flex items-center justify-center',
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className='md:hidden p-2.5 rounded-2xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-indigo-50/80 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 transition-all duration-300 active:scale-90 shadow-lg hover:shadow-xl border border-slate-200/50 dark:border-slate-700/50'
              aria-label='Toggle mobile menu'
            >
              <svg
                className={`w-6 h-6 transition-all duration-500 ${
                  isMobileMenuOpen ? 'rotate-180 scale-110' : ''
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen
              ? 'max-h-[32rem] opacity-100 pb-6 transform translate-y-0'
              : 'max-h-0 opacity-0 overflow-hidden transform -translate-y-4'
          }`}
        >
          <div className='px-4 pt-4 pb-6 space-y-3 bg-gradient-to-br from-white/95 via-slate-50/95 to-blue-50/95 dark:from-slate-800/95 dark:via-slate-900/95 dark:to-blue-900/95 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-600/50 mt-4 shadow-2xl shadow-slate-900/10 dark:shadow-black/40'>
            {/* Mobile Navigation Links */}
            {[
              { href: '/', label: 'Home', icon: '🏠', desc: 'Dashboard & Overview' },
              { href: '/about', label: 'About', icon: 'ℹ️', desc: 'Learn more about us' },
              { href: '/contact', label: 'Contact', icon: '📞', desc: 'Get in touch' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='group flex items-center gap-4 px-4 py-4 rounded-2xl text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-indigo-50/80 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 text-sm font-semibold transition-all duration-300 active:scale-95 hover:shadow-lg border border-transparent hover:border-blue-200/50 dark:hover:border-blue-700/50'
                onClick={closeMobileMenu}
              >
                <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                  {item.icon}
                </div>
                <div className='flex-1'>
                  <div className='font-bold text-base'>{item.label}</div>
                  <div className='text-xs text-slate-500 dark:text-slate-400 mt-0.5'>
                    {item.desc}
                  </div>
                </div>
                <svg
                  className='w-5 h-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            ))}

            {/* Mobile Authentication */}
            <div className='pt-4 border-t border-slate-200/50 dark:border-slate-600/50'>
              <SignedOut>
                <SignInButton>
                  <button
                    type="button"
                    className='group w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-6 py-4 rounded-2xl text-base font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 flex items-center justify-center gap-3 active:scale-95 border border-white/20 relative overflow-hidden'
                    onClick={closeMobileMenu}
                  >
                    <div className='relative z-10 flex items-center gap-3'>
                      <span>Sign In to Continue</span>
                      <svg
                        className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2.5}
                          d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                        />
                      </svg>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className='flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-blue-100/80 to-indigo-100/80 dark:from-blue-900/40 dark:to-indigo-900/40 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 shadow-lg'>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          'w-12 h-12 hover:scale-110 transition-transform duration-300 shadow-xl border-3 border-white/70',
                        userButtonBox: 'flex items-center justify-center',
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
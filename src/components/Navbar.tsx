"use client";

import React, { useState, useEffect } from 'react';
import QuoteDialog from '@/components/landing/Quote';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Logo } from './Logo';
import { usePathname } from 'next/navigation';
import { Mail, MapPin } from 'lucide-react';
const navigationItems = [
  { name: 'Home', href: '/' },
  // { name: 'About', href: '#about' },
  // { name: 'Products', href: '#products' },
  { name: 'Services', href: '/services' },
  { name: 'Quality', href: '/quality' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-amber-200/70",
        isScrolled
          ? "bg-[rgba(248,239,223,0.96)] shadow-[0_10px_26px_-18px_rgba(74,44,15,0.35)]"
          : "bg-[rgba(248,239,223,0.88)]"
      )}
    >
      <div
        className={cn(
          "bg-[#4b2f17] text-amber-100 text-sm py-2 transition-all duration-300 z-10 border-b border-amber-800/40",
          isScrolled ? "block" : "block"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center md:justify-between">
            <div className="hidden md:block"></div>
            <div className="flex items-center space-x-5">
              <span className="md:hidden text-[11px] tracking-[0.16em] uppercase text-amber-100">Green Agri Corp</span>
              <div className="hidden md:flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-300" />
                <span >greenagricorp@gmail.com</span>
              </div>

              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amber-300" />
                <span>Delhi (HO) • Raipur (Manufacturing)</span>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo Section */}
          <Logo isScrolled={false} menuOpen={isMobileMenuOpen} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 rounded-full border border-amber-300/70 bg-[rgba(255,248,233,0.9)] px-2 py-1 shadow-[0_8px_24px_-18px_rgba(74,44,15,0.35)]">
            {navigationItems.map((item) => (
              <NavItem
                key={item.name}
                href={item.href}
                label={item.name}
                active={pathname === item.href}
                isScrolled={isScrolled}
              />
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <QuoteDialog />
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className={cn(
              "lg:hidden p-2 rounded-lg border border-amber-200/80 bg-[#fff8ea] transition-colors",
              isScrolled ? "text-[#4a2c0f] hover:bg-amber-100/80" : "text-[#4a2c0f] hover:bg-amber-100/70"
            )}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 relative z-10",
            isMobileMenuOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="mb-3 rounded-2xl border border-amber-200 bg-[#fffaf1] shadow-[0_10px_28px_-18px_rgba(74,44,15,0.35)]">
            <div className="px-4 py-5 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-300",
                    pathname === item.href
                      ? "bg-[#6b3f21] text-amber-50"
                      : "text-[#5a2f12] hover:bg-amber-50 hover:text-[#4a2c0f]"
                  )}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-amber-200">
                <div className="mb-4">
                  <div className="font-semibold text-slate-900 mb-1">
                    Export Inquiry
                  </div>
                  <div className="text-slate-600 text-sm">
                    export@greenagricorp.com
                  </div>
                  <div className="text-slate-600 text-sm">+91-XXX-XXXX-XXX</div>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-[#6b3f21] hover:bg-[#53301a] text-amber-50 text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Bar with Additional Info */}
    </nav>
  );
}

function NavItem({
  href,
  label,
  active,
  isScrolled,
}: {
  href: string;
  label: string;
  active: boolean;
  isScrolled: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full border border-transparent",
        active
          ? "bg-[#6b3f21] text-amber-50 shadow-sm"
          : isScrolled
            ? "text-[#5a2f12] hover:bg-amber-50 hover:text-[#4a2c0f]"
            : "text-[#5a2f12] hover:bg-amber-50 hover:text-[#4a2c0f]"
      )}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

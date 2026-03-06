"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Platform', href: '#platform' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Why DHG', href: '#why-dhg' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Link href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-slate-900 flex items-center justify-center">
              <span className="text-white font-bold tracking-tighter">DHG</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">
              Management Services
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:gap-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex md:items-center">
          <Button variant="primary">Book a Demo</Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Button variant="primary" className="w-full justify-center">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

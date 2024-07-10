'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Try It Out', href: '/try-it-out' },
  { label: 'Meet Our Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${isScrolled ? 'bg-base-100 shadow-md' : 'bg-transparent'}`}
    >
      <div className="navbar-start">
        <Link href="/" className="flex items-center">
          <Image
            src="/company-logo.png"
            alt="EmotiPaw Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span
            className={`text-3xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}
          >
            EmotiPaw
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`px-4 ${
                  pathname === item.href
                    ? 'text-accent font-semibold'
                    : isScrolled
                      ? 'text-base-content'
                      : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end"></div>
    </header>
  );
}

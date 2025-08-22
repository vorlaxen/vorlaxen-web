import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/images/logos/Vorlaxen.png';

type FooterNavItem = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterNavSection = {
  title: string;
  items: FooterNavItem[];
};

export const FooterNavSections: FooterNavSection[] = [
  {
    title: 'Products',
    items: [
      { label: 'App', href: '/app' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Features', href: '/features' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Contact', href: '/contact' },
      { label: 'Help Center', href: '/help' },
      { label: 'Terms', href: '/terms' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Security', href: '/security' },
    ],
  },
];
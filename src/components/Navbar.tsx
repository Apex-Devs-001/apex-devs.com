'use client';

import Link from 'next/link';
import CTAButton from './CTAButton';

export default function Navbar() {
  return (
    <nav>
      <Link href="/" className="logo">APEXDEVS</Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <Link href="/blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.1em', fontWeight: 500, transition: 'color 0.3s' }}>BLOG</Link>
        <CTAButton className="nav-cta" />
      </div>
    </nav>
  );
}

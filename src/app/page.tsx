'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = id ? document.getElementById(id) : null;
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
      (section as HTMLElement).style.opacity = '0';
      (section as HTMLElement).style.transform = 'translateY(30px)';
      (section as HTMLElement).style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(section);
    });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div className={`loading-screen ${!loading ? 'hidden' : ''}`}>
        <div className="loading-text">INITIALIZING...</div>
      </div>

      {/* Navigation */}
      <nav>
        <div className="logo">APEXDEVS</div>
        <a href="#contact" className="nav-cta">SCHEDULE AUDIT</a>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/videos/09162a18-0c22dd3e.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in-up">
          <div className="hero-label">APX | APEXDEVS 001</div>
          <h1>A New Class of<br /><strong>Engineering</strong></h1>
          <p className="hero-subtitle">
            Global senior teams delivering end-to-end product success — AI-native development, 99.99% reliability, enterprise-grade security, and 40–65% cost reduction. Distributed excellence across continents.
          </p>
        </div>
        <div className="scroll-indicator">
          <span>EXPLORE</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="section section-dark">
        <div className="invitation">
          <div className="section-number">002 / INVITATION ONLY</div>
          <h2 className="section-title">Unmatched Access to<br />Elite Engineering</h2>
          <p className="section-description">
            Where others build with what&apos;s available, we forge what&apos;s exceptional. This is a gateway to senior-only teams, AI-accelerated development, and institutional-grade protection. Not every company is meant to work with us.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <video className="video-bg" autoPlay muted loop playsInline>
          <source src="/videos/8760caa0-582a50ce.mp4" type="video/mp4" />
        </video>
        <div className="video-content">
          <h2 className="section-title">Elite Development.<br />Tokenized Protection.</h2>
          <p className="section-description">
            One-of-a-kind access to senior engineering teams with 9+ years average experience. From AI-native builds to self-healing infrastructure — all secured through institutional-grade DevOps and continuous SecOps monitoring.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-darker">
        <div className="invitation">
          <div className="section-number">003 / CAPABILITIES</div>
          <h2 className="section-title">Building the Products That<br />Redefine Industries</h2>
        </div>

        <div className="services-grid">
          <div className="service-item">
            <h3 className="service-name">AI-Native Products</h3>
            <ul className="service-features">
              <li>Full-stack with AI agents from day one</li>
              <li>60–70% faster time-to-market</li>
              <li>Modular, maintainable codebases</li>
            </ul>
          </div>

          <div className="service-item">
            <h3 className="service-name">24/7 Global Scale</h3>
            <ul className="service-features">
              <li>Multi-timezone SRE/DevOps coverage</li>
              <li>99.99% uptime + chaos engineering</li>
              <li>Proactive monitoring & auto-scaling</li>
            </ul>
          </div>

          <div className="service-item">
            <h3 className="service-name">Enterprise SecOps</h3>
            <ul className="service-features">
              <li>Continuous threat hunting</li>
              <li>Zero-trust + automated WAF</li>
              <li>Weekly penetration testing</li>
            </ul>
          </div>

          <div className="service-item">
            <h3 className="service-name">AI Cost Optimization</h3>
            <ul className="service-features">
              <li>40–65% cloud spend reduction</li>
              <li>AI pair programming acceleration</li>
              <li>Self-healing pipelines</li>
            </ul>
          </div>

          <div className="service-item">
            <h3 className="service-name">Growth Engineering</h3>
            <ul className="service-features">
              <li>3×+ user acquisition</li>
              <li>Data-driven campaigns</li>
              <li>Localized SEO & PPC</li>
            </ul>
          </div>

          <div className="service-item">
            <h3 className="service-name">Distributed Excellence</h3>
            <ul className="service-features">
              <li>20+ senior engineers globally</li>
              <li>Average 9+ years experience</li>
              <li>Zero juniors, only experts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack / Industries */}
      <section className="section section-dark">
        <div className="invitation">
          <div className="section-number">004 / TECHNOLOGY FOCUS</div>
          <h2 className="section-title">Specializing in Technology<br />That Shapes the Future</h2>
        </div>

        <div className="logo-grid">
          <div className="logo-item">Artificial Intelligence</div>
          <div className="logo-item">Financial Technology</div>
          <div className="logo-item">Healthcare Tech</div>
          <div className="logo-item">Enterprise SaaS</div>
          <div className="logo-item">Cybersecurity</div>
          <div className="logo-item">Cloud Infrastructure</div>
          <div className="logo-item">E-Commerce Platforms</div>
          <div className="logo-item">Blockchain & Web3</div>
          <div className="logo-item">IoT Solutions</div>
          <div className="logo-item">Data Analytics</div>
          <div className="logo-item">Mobile Applications</div>
          <div className="logo-item">DevOps & SRE</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-darker">
        <div className="invitation">
          <div className="section-number">005 / PROVEN RESULTS</div>
          <h2 className="section-title">Performance That<br />Speaks for Itself</h2>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">67%</div>
            <div className="stat-label">Faster deployments across international markets</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">48%</div>
            <div className="stat-label">Average cloud cost reduction in first 90 days</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">3.4×</div>
            <div className="stat-label">User growth via integrated, region-aware marketing</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">Zero</div>
            <div className="stat-label">Security incidents or breaches since inception</div>
          </div>
        </div>

        <div className="trust-grid">
          <div className="trust-item">
            <div className="trust-check">✓</div>
            <div className="trust-label">100% Client Retention</div>
          </div>
          <div className="trust-item">
            <div className="trust-check">✓</div>
            <div className="trust-label">ISO 27001 Pathway</div>
          </div>
          <div className="trust-item">
            <div className="trust-check">✓</div>
            <div className="trust-label">Weekly Pen Testing</div>
          </div>
          <div className="trust-item">
            <div className="trust-check">✓</div>
            <div className="trust-label">SOC2 Type II Progress</div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-dark">
        <div className="invitation">
          <div className="section-number">006 / ENGAGEMENT</div>
          <h2 className="section-title">From Selection<br />to Legacy</h2>
        </div>

        <div className="process-grid">
          <div className="process-step">
            <div className="step-number">01</div>
            <h3 className="step-title">Selection</h3>
            <p className="step-description">We analyze your stack, security posture, and growth potential. Only serious builds proceed.</p>
          </div>

          <div className="process-step">
            <div className="step-number">02</div>
            <h3 className="step-title">Alignment</h3>
            <p className="step-description">Onboarding process to align architecture, vision, and delivery timeline with precision.</p>
          </div>

          <div className="process-step">
            <div className="step-number">03</div>
            <h3 className="step-title">Execution</h3>
            <p className="step-description">AI-accelerated development with 24/7 global teams. SecOps monitoring from day one.</p>
          </div>

          <div className="process-step">
            <div className="step-number">04</div>
            <h3 className="step-title">Compounding</h3>
            <p className="step-description">Your product scales seamlessly while we handle infrastructure, security, and optimization.</p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section section-darker">
        <div className="invitation">
          <div className="section-number">007 / DIFFERENTIATION</div>
          <h2 className="section-title">Execution vs<br />Empty Promises</h2>
        </div>

        <div className="comparison-container">
          <div className="comparison-item">
            <div className="comparison-side new">
              <div className="comparison-label">ApexDevs Standard</div>
              <h3 className="comparison-title highlight">Smart Contract Enforcement</h3>
              <p className="comparison-description">AI-powered pipelines auto-deploy, self-heal, and enforce SLAs. If metrics drop, alerts trigger instantly.</p>
            </div>
            <div className="comparison-side">
              <div className="comparison-label">Traditional Model</div>
              <h3 className="comparison-title">Manual Promises</h3>
              <p className="comparison-description">Deals vanish, timelines slip, teams ghost. No accountability, no automation.</p>
            </div>
          </div>

          <div className="comparison-item">
            <div className="comparison-side new">
              <div className="comparison-label">ApexDevs Standard</div>
              <h3 className="comparison-title highlight">White-Glove Stewardship</h3>
              <p className="comparison-description">Every client is sovereign. Direct Slack access, weekly syncs, dedicated account management.</p>
            </div>
            <div className="comparison-side">
              <div className="comparison-label">Traditional Model</div>
              <h3 className="comparison-title">Disposable Support</h3>
              <p className="comparison-description">Ghosted by support, tickets ignored, capital treated as disposable.</p>
            </div>
          </div>

          <div className="comparison-item">
            <div className="comparison-side new">
              <div className="comparison-label">ApexDevs Standard</div>
              <h3 className="comparison-title highlight">Bespoke Flexibility</h3>
              <p className="comparison-description">Custom team compositions, timezone-aligned squads, architecture tailored to your exact needs.</p>
            </div>
            <div className="comparison-side">
              <div className="comparison-label">Traditional Model</div>
              <h3 className="comparison-title">One-Size-Fits-All</h3>
              <p className="comparison-description">You take what&apos;s given. No customization, no choice, no strategy.</p>
            </div>
          </div>

          <div className="comparison-item">
            <div className="comparison-side new">
              <div className="comparison-label">ApexDevs Standard</div>
              <h3 className="comparison-title highlight">Engineered Liquidity</h3>
              <p className="comparison-description">Modular architecture, documented APIs, seamless team transitions. Your codebase, your control.</p>
            </div>
            <div className="comparison-side">
              <div className="comparison-label">Traditional Model</div>
              <h3 className="comparison-title">Vendor Lock-In</h3>
              <p className="comparison-description">Trapped in proprietary systems. Years locked waiting for refactors that never come.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section section-dark">
        <div className="invitation">
          <div className="section-number">008 / INVESTMENT</div>
          <h2 className="section-title">Transparent Pricing<br />for Global Scale</h2>
        </div>

        <div className="pricing-container">
          <div className="pricing-row header">
            <div className="pricing-cell">Model</div>
            <div className="pricing-cell">Description</div>
            <div className="pricing-cell">Starting From</div>
            <div className="pricing-cell">Best For</div>
          </div>

          <div className="pricing-row">
            <div className="pricing-cell" data-label="Model">
              <div className="model-name">Blended Team Rate</div>
            </div>
            <div className="pricing-cell" data-label="Description">
              Full access to our global senior team
            </div>
            <div className="pricing-cell" data-label="Starting From">
              <div className="price">$50–65/hr</div>
            </div>
            <div className="pricing-cell" data-label="Best For">
              Ongoing builds & support
            </div>
          </div>

          <div className="pricing-row">
            <div className="pricing-cell" data-label="Model">
              <div className="model-name">Fixed-Price Launch</div>
            </div>
            <div className="pricing-cell" data-label="Description">
              Scoped MVP or full product delivery
            </div>
            <div className="pricing-cell" data-label="Starting From">
              <div className="price">$25k+</div>
            </div>
            <div className="pricing-cell" data-label="Best For">
              Time-bound launches
            </div>
          </div>

          <div className="pricing-row">
            <div className="pricing-cell" data-label="Model">
              <div className="model-name">Dedicated Squad</div>
            </div>
            <div className="pricing-cell" data-label="Description">
              5–15 person custom team (your timezone priority)
            </div>
            <div className="pricing-cell" data-label="Starting From">
              <div className="price">$38k/month</div>
            </div>
            <div className="pricing-cell" data-label="Best For">
              Long-term product ownership
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px', color: 'var(--text-secondary)' }}>
          <p>No hidden fees · Unlimited revisions in scope · Cancel anytime</p>
          <p style={{ marginTop: '10px' }}>Outcome-focused: Pay for results, not just hours</p>
        </div>
      </section>

      {/* About Section */}
      <section className="section section-darker">
        <div className="invitation">
          <div className="section-number">009 / FOUNDATION</div>
          <h2 className="section-title">Built by Engineers,<br />for Companies That Win</h2>
          <p className="section-description" style={{ marginTop: '40px' }}>
            Founded by veteran engineering leaders with 10+ years of full-stack experience and expert partners in SRE, SecOps, and growth. We saw too many companies overpay for fragmented teams. So we built one unified, senior-only, AI-accelerated powerhouse — distributed across continents to deliver timezone-perfect execution, unbreakable security, and massive cost efficiency.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta" id="contact">
        <div className="section-number">010 / ACCESS</div>
        <h2 className="cta-title">Ready to Build Smarter,<br />Scale Safer, Save Globally?</h2>
        <p className="cta-description">
          Get your free 15-minute global audit. We&apos;ll analyze your current stack, security posture, cloud spend, and growth opportunities — with concrete savings estimates tailored to your region and industry.
        </p>
        <a href="https://calendly.com/apexdevs" className="cta-button">SCHEDULE AUDIT</a>
        <div className="contact-info">
          <p>or contact us: <strong><a href="mailto:hello@apex-devs.com">hello@apex-devs.com</a></strong></p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>©2026 ApexDevs. All Rights Reserved.</p>
        <p style={{ marginTop: '10px', opacity: 0.5 }}>Building the future, globally.</p>
      </footer>
    </>
  );
}

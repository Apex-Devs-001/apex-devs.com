'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const SCRAMBLE_CHARS = 'QWERTZUIOPASDFGHJKLYXCVBNM0123456789';

const ScrambleText = ({ text, delay = 0, duration = 1.2 }: { text: string; delay?: number; duration?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [isResolved, setIsResolved] = useState(false);

  useEffect(() => {
    let frameId: number;
    let startTime: number;
    
    const startTimeout = setTimeout(() => {
      startTime = Date.now();
      
      const update = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        
        if (progress < 1) {
          const scrambled = text
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' ';
              // Use a bit of randomness to decide if we show the real char
              if (i / text.length < progress * 0.8) return char;
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            })
            .join('');
          setDisplayText(scrambled);
          frameId = requestAnimationFrame(update);
        } else {
          setDisplayText(text);
          setIsResolved(true);
        }
      };
      
      frameId = requestAnimationFrame(update);
    }, delay * 1000);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(frameId);
    };
  }, [text, delay, duration]);

  if (!isResolved) {
    return (
      <span className="scrambling">
        {displayText.split('').map((char, i) => (
          <span key={i} className="scrambling-char">
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  }

  return <span className="resolved">{displayText}</span>;
};

export default function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Logo entrance
    if (logoRef.current) {
      gsap.fromTo(logoRef.current, 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out', delay: 0.5 }
      );
    }

    const timer = setTimeout(() => {
      const tl = gsap.timeline({
        onComplete: onFinished
      });

      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut'
      });
    }, 4500); // Total display time

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div ref={containerRef} className="loader-container">
      <div className="loader-grid">
        {/* Column 1 */}
        <div className="loader-column side">
          <div className="loader-text-item dim">
            <ScrambleText text="APEXDEVS | ENGINEERING" delay={0.2} />
          </div>
        </div>

        {/* Column 2 */}
        <div className="loader-column side">
          <div className="loader-text-item">
            <div className="initializing">
              <ScrambleText text="INITIALIZING" delay={0.4} />
              <span className="dots-container">
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
              </span>
            </div>
          </div>
        </div>

        {/* Column 3 - Logo */}
        <div className="loader-column center">
          <div ref={logoRef} className="loader-logo">
            <svg viewBox="0 0 100 100" className="logo-svg">
               <path d="M20 80 V20 H80 V80 M35 80 V40 H65 V80 M50 20 V40" stroke="white" strokeWidth="1.5" fill="none" />
               <path d="M25 50 H75" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </svg>
            <div className="logo-label">APX</div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="loader-column side">
          <div className="v-stack">
            <div className="loader-text-item">
              <ScrambleText text="APX | APEXDEVS 001" delay={0.6} />
            </div>
            <div className="loader-divider-horizontal"></div>
            <div className="loader-text-item">
              <ScrambleText text="A NEW CLASS" delay={0.8} />
            </div>
          </div>
        </div>

        {/* Column 5 */}
        <div className="loader-column side">
          <div className="loader-text-item dim">
            <ScrambleText text="A NEW CLASS OF ENGINEERING" delay={1.0} />
          </div>
        </div>
      </div>
    </div>
  );
}

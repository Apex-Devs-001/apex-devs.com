'use client';

import Script from 'next/script';

declare global {
  interface Window {
    Calendly: any;
  }
}

interface CTAButtonProps {
  className?: string;
  text?: string;
  style?: React.CSSProperties;
}

export default function CTAButton({ 
  className = 'cta-button', 
  text = 'SCHEDULE AUDIT',
  style 
}: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/apexdevs001/30min?background_color=1a1a1a&text_color=ffffff&primary_color=ffffff'
      });
    } else {
      // Fallback if Calendly hasn't loaded yet
      window.open('https://calendly.com/apexdevs001/30min', '_blank');
    }
  };

  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <a 
        href="#" 
        onClick={handleClick} 
        className={className}
        style={style}
      >
        {text}
      </a>
    </>
  );
}

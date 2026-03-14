'use client';

import React from 'react';
import CTAButton from './CTAButton';

interface BlogCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function BlogCTA({
  title = "Ready to build <strong>excellence</strong>?",
  description = "Experience the senior-only difference. Let's discuss how we can accelerate your 2026 roadmap.",
  buttonText = "Book a Strategic Review"
}: BlogCTAProps) {
  return (
    <div className="final-cta" style={{ marginTop: '60px', padding: '80px 0' }}>
      <h2 
        className="cta-title" 
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="cta-description">
        {description}
      </p>
      <CTAButton text={buttonText} />
    </div>
  );
}

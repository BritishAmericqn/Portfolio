'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Disabled smooth scroll - using native browser scroll instead
    // This provides better performance and feels more natural
    return;
  }, []);

  return null; // This component doesn't render anything and doesn't initialize smooth scroll
} 
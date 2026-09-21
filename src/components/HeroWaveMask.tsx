import React from 'react';

interface HeroWaveMaskProps {
  fill?: string;
}

export const HeroWaveMask: React.FC<HeroWaveMaskProps> = ({ fill = '#f8faf9' }) => (
  <div className="hidden md:block absolute top-0 right-0 h-full w-[20vw] translate-x-[98%] z-10 pointer-events-none overflow-visible">
    <svg className="w-full h-full relative z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
      {/* Outer animated translucent layer (Flux effect) */}
      <path 
        d="M0,0 Q100,50 0,100 Z" 
        fill={fill} 
        className="opacity-30"
        style={{ transform: 'scaleX(1.4)', transformOrigin: 'left center', animation: 'waveFlow 6s ease-in-out infinite alternate' }}
      />
      
      {/* Middle translucent layer */}
      <path 
        d="M0,0 Q100,50 0,100 Z" 
        fill={fill} 
        className="opacity-60"
        style={{ transform: 'scaleX(1.15)', transformOrigin: 'left center', animation: 'waveFlow 4s ease-in-out infinite alternate-reverse' }}
      />

      {/* Main opaque base mask */}
      <path 
        d="M0,0 Q100,50 0,100 Z" 
        fill={fill} 
      />
    </svg>

    {/* Glowing transparent colors overlapping the curve */}
    <div 
      className="absolute top-[20%] -right-[10%] w-[25vw] h-[25vw] bg-[#a8e6cf]/30 rounded-full mix-blend-overlay blur-3xl z-20 pointer-events-none"
      style={{ animation: 'blobFloat 8s infinite' }}
    />
    <div 
      className="absolute bottom-[20%] left-[10%] w-[20vw] h-[20vw] bg-[#2a554a]/20 rounded-full mix-blend-multiply blur-3xl z-20 pointer-events-none"
      style={{ animation: 'blobFloat 10s infinite reverse' }}
    />

    {/* Inline styles for custom animations to keep it simple and portable */}
    <style>{`
      @keyframes waveFlow {
        0% { transform: scaleX(1.3); opacity: 0.2; }
        100% { transform: scaleX(1.45); opacity: 0.4; }
      }
      @keyframes blobFloat {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
    `}</style>
  </div>
);

import React from 'react';

interface WaveDividerProps {
  position: 'top' | 'bottom';
  fill?: string;
  className?: string;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({ position, fill = '#15332c', className = '' }) => {
  return (
    <div className={`absolute left-0 w-full overflow-hidden leading-none z-10 pointer-events-none ${position === 'top' ? 'top-0 -translate-y-[99%] rotate-180' : 'bottom-0 translate-y-[99%]'} ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[80px]">
        {/* Layer 1 - Animated Flow */}
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          fill={fill}
          className="opacity-40"
          style={{ animation: 'waveHorizontal 5s ease-in-out infinite alternate', transformOrigin: 'center' }}
        ></path>
        
        {/* Layer 2 - Secondary Flow */}
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          fill={fill}
          className="opacity-70"
          style={{ animation: 'waveHorizontal 7s ease-in-out infinite alternate-reverse', transformOrigin: 'center' }}
        ></path>

        {/* Solid Base */}
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          fill={fill}
        ></path>
      </svg>
      <style>{`
        @keyframes waveHorizontal {
          0% { transform: scaleY(1) translateY(0); }
          100% { transform: scaleY(1.3) translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

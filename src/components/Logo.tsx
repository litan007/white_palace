import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  showSubtitle = false,
  className = '',
  onClick,
}) => {
  const isDark = variant === 'dark'; // dark text on light background
  const strokeColor = isDark ? '#14312b' : '#ffffff';
  const textColor = isDark ? 'text-[#14312b]' : 'text-white';
  const subColor = isDark ? 'text-[#3e5f56]' : 'text-emerald-100';

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 cursor-pointer select-none ${className}`}
    >
      {/* Geometric Lotus Emblem */}
      <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer diamond outline */}
          <path
            d="M24 2L46 24L24 46L2 24L24 2Z"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* Inner lotus crown shapes */}
          <path
            d="M24 10V38"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16 20C16 28 24 34 24 34C24 34 32 28 32 20C32 15 28 13 24 13C20 13 16 15 16 20Z"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M11 26C14 30 20 34 24 34C28 34 34 30 37 26"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Little architectural base */}
          <line
            x1="18"
            y1="38"
            x2="30"
            y2="38"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-[0.14em] font-bold text-sm sm:text-base leading-tight uppercase ${textColor}`}
        >
          WHITE PALACE
        </span>
        <span
          className={`font-serif italic text-xs tracking-wider leading-none ${subColor}`}
        >
          Hôtel
        </span>
        {showSubtitle && (
          <span className="text-[10px] text-emerald-200/80 tracking-wide mt-0.5 hidden sm:block">
            Un séjour d'exception à Antananarivo
          </span>
        )}
      </div>
    </div>
  );
};

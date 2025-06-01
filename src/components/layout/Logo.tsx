import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'dark' ? 'text-gray-800' : 'text-white';
  
  return (
    <a href="#" className="flex items-center">
      <div className="flex items-center">
        <span className={`text-2xl font-bold ${textColor}`}>
          <span className="text-[#FF0000]">Abhi</span>
          <span className="text-[#0066FF]">Sri</span>
        </span>
        {variant === 'dark' && (
          <span className="ml-2 text-sm text-gray-600">
            Financial Services
          </span>
        )}
      </div>
    </a>
  );
};

export default Logo;
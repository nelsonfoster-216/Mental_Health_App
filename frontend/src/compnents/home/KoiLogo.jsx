import React from 'react';

const KoiLogo = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <img 
        src="/images/koi-logo.jpeg" 
        alt="KOI Logo" 
        className="w-36 h-36 object-cover rounded-full border-4 border-gray-300 shadow-lg"
      />
    </div>
  );
};

export default KoiLogo; 
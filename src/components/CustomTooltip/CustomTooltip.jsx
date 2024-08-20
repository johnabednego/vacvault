import React from 'react';

const CustomTooltip = ({ text, children }) => {
  return (
    <div className="relative group ml-6">
      {children}
      <div className="absolute bottom-full left-[60px] xm:left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-[220px] bg-white text-black text-center rounded-[20px] shadow-customTooltip p-2">
      {text.length > 150
          ? text.slice(0, 150) + "..."
          : text}
        <div className="absolute top-full left-[60px] xm:left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-8 border-t-white border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
      </div>
    </div>
  );
};

export default CustomTooltip;

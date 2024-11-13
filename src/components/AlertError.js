import React from 'react';

// Custom Alert Component
const CustomAlert = ({ variant = 'error', message }) => {
    const bgColor = variant === 'success' ? 'bg-green-100' : 'bg-red-100';
    const textColor = variant === 'success' ? 'text-green-700' : 'text-red-700';
    const borderColor = variant === 'success' ? 'border-green-200' : 'border-red-200';
  
    return (
      <div className={`${bgColor} ${textColor} ${borderColor} border p-3 rounded-md mb-4`}>
        {message}
      </div>
    );
};

export default CustomAlert;
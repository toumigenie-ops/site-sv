import React, { useState } from 'react';

const ImageWithFallback = ({ 
  src, 
  alt, 
  width = 400,
  height = 300,
  ...props 
}: { 
  src: string; 
  alt: string; 
  width?: number;
  height?: number;
  [key: string]: any 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Optimize image URL for smaller size
  const optimizedSrc = src.includes('unsplash') 
    ? `${src.split('?')[0]}?w=${width}&q=80&fm=auto` 
    : src;

  if (error) {
    return (
      <div 
        style={{ width: '100%', height: '100%', backgroundColor: '#f3f4f6' }}
        className="flex items-center justify-center text-gray-400"
      >
        <span>Image non disponible</span>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width: '100%', height: '100%' }}
        />
      )}
      <img 
        src={optimizedSrc} 
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
        {...props}
      />
    </>
  );
};

export default ImageWithFallback;

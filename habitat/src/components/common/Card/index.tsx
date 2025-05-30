import React from 'react';

interface CardProps {
  imageSrc: string;
  alt?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  alt = "Gallery image",
  onClick,
}) => {
  return (
    <div 
      className="rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      <img 
        src={imageSrc} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Card;
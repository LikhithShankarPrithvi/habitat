import React from 'react';
import Card from '../../../components/common/Card';
import { GalleryItem as GalleryItemType } from '../../../types/gallery';

interface GalleryItemProps {
  item: GalleryItemType;
  onClick?: (item: GalleryItemType) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(item);
    }
  };

  return (
    <Card 
      imageSrc={item.imageSrc} 
      alt={item.alt} 
      onClick={handleClick}
    />
  );
};

export default GalleryItem;
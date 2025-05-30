import React from 'react';
import GalleryItem from './GalleryItem';
import { GalleryItem as GalleryItemType } from '../../../types/gallery';

interface GalleryGridProps {
  items: GalleryItemType[];
  onItemClick?: (item: GalleryItemType) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ 
  items,
  onItemClick
}) => {
  return (
    <div className="grid grid-cols-4 gap-3 px-44 py-9">
      {items.map((item) => (
        <GalleryItem 
          key={item.id} 
          item={item} 
          onClick={onItemClick}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
import React, { useState } from 'react';
import Header from '../../components/common/Header';
import GalleryGrid from './components/GalleryGrid';
import { GalleryItem } from '../../types/gallery';

const HabitatDesignGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  // Gallery items data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      imageSrc: "/images/img_depth_6_frame_0.png",
      alt: "Wooden organic shapes",
      title: "Organic Wood Forms",
      description: "Natural wooden shapes with smooth curves and organic design."
    },
    {
      id: 2,
      imageSrc: "/images/img_depth_6_frame_1.png",
      alt: "Wood slice with plant",
      title: "Wood & Nature",
      description: "Wood slice with natural green elements creating harmony."
    },
    {
      id: 3,
      imageSrc: "/images/img_depth_6_frame_2.png",
      alt: "Framed artwork with plant",
      title: "Framed Minimalism",
      description: "Minimalist framed wooden artwork paired with natural greenery."
    },
    {
      id: 4,
      imageSrc: "/images/img_depth_6_frame_3.png",
      alt: "Abstract wooden element",
      title: "Abstract Wood",
      description: "Abstract wooden design element with natural tones and textures."
    }
  ];

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNotificationsClick = () => {
    console.log("Notifications clicked");
    // Implementation for notifications functionality
  };

  const handleAboutClick = () => {
    console.log("About clicked");
    // Implementation for about page navigation
  };

  const handleContactClick = () => {
    console.log("Contact clicked");
    // Implementation for contact page navigation
  };

  return (
    <div className="min-h-screen bg-[#111416]">
      <Header 
        onNotificationsClick={handleNotificationsClick}
        onAboutClick={handleAboutClick}
        onContactClick={handleContactClick}
      />
      
      <GalleryGrid 
        items={galleryItems} 
        onItemClick={handleItemClick}
      />
      
      {/* Modal for displaying selected item details */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{selectedItem.title}</h2>
              <button 
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-4">
              <img 
                src={selectedItem.imageSrc} 
                alt={selectedItem.alt} 
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <p className="text-gray-700">{selectedItem.description}</p>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HabitatDesignGallery;
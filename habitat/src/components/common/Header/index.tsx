import React from 'react';


interface HeaderProps {
  onNotificationsClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onNotificationsClick = () => {},
  onAboutClick = () => {},
  onContactClick = () => {},
}) => {
  return (
    <header className="w-full h-12 bg-[#111416] border-b border-[#e5e8ea] flex items-center px-10">
      <div className="flex items-center">
        <img src="/images/img_vector_0.svg" alt="Habitat Logo" className="w-4 h-4" />
        <h1 className="text-white text-lg font-bold ml-4 font-['Spline_Sans']">habitat</h1>
      </div>
      <div className="flex ml-auto">
        <button 
          onClick={onNotificationsClick}
          className="text-white text-sm font-medium mr-9 font-['Spline_Sans'] hover:text-gray-300 transition-colors"
        >
          notifications
        </button>
        <button 
          onClick={onAboutClick}
          className="text-white text-sm font-medium mr-9 font-['Spline_Sans'] hover:text-gray-300 transition-colors"
        >
          about
        </button>
        <button 
          onClick={onContactClick}
          className="text-white text-sm font-medium font-['Spline_Sans'] hover:text-gray-300 transition-colors"
        >
          contact
        </button>
      </div>
    </header>
  );
};

export default Header;
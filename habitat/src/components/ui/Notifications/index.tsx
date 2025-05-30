import React, { useState } from 'react';

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  read: boolean;
  timestamp: string;
}

interface NotificationsProps {
  notifications?: NotificationItem[];
  onNotificationClick?: (id: string) => void;
  onClearAll?: () => void;
}

const Notifications: React.FC<NotificationsProps> = ({
  notifications = [],
  onNotificationClick = () => {},
  onClearAll = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };
  
  const handleNotificationClick = (id: string) => {
    onNotificationClick(id);
    setIsOpen(false);
  };
  
  const unreadCount = notifications.filter(notification => !notification.read).length;
  
  return (
    <div className="relative">
      <button 
        onClick={toggleNotifications}
        className="relative text-white hover:text-gray-300 transition-colors"
      >
        Notifications
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-10 max-h-96 overflow-y-auto">
          <div className="p-3 border-b flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Notifications</h3>
            {notifications.length > 0 && (
              <button 
                onClick={onClearAll}
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                Clear all
              </button>
            )}
          </div>
          
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              No notifications
            </div>
          ) : (
            <div>
              {notifications.map((notification) => (
                <div 
                  key={notification.id}
                  onClick={() => handleNotificationClick(notification.id)}
                  className={`p-3 border-b cursor-pointer hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
                >
                  <div className="flex justify-between">
                    <h4 className="font-medium text-sm text-gray-800">{notification.title}</h4>
                    <span className="text-xs text-gray-500">{notification.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Notifications;
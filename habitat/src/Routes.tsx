import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HabitatDesignGallery from './pages/HabitatDesignGallery';
import Login from './pages/HabitatDesignGallery/Login';
import Welcome from './pages/HabitatDesignGallery/Welcome';
import Landing from './pages/HabitatDesignGallery/Landing';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HabitatDesignGallery />} />
        <Route path="login" element={<Login />} />
        <Route path="Welcome" element={<Welcome />} />
        <Route path="landing" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

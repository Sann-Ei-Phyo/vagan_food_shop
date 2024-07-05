import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import Home from './Pages/Home';
import Shop from './Pages/Shop';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

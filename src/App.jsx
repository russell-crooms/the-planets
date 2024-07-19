import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Earth from './pages/Earth';
import Jupiter from './pages/Jupiter';
import Mars from './pages/Mars';
import Mercury from './pages/Mercury';
import Neptune from './pages/Neptune';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import Venus from './pages/Venus';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Earth />}/>
        <Route path="/:earth" element={<Earth />}/>
        <Route path="/:mercury" element={<Mercury />}/>
        <Route path="/:venus" element={<Venus />}/>
        <Route path="/:mars" element={<Mars />}/>
        <Route path="/:jupiter" element={<Jupiter />}/>
        <Route path="/:saturn" element={<Saturn />}/>
        <Route path="/:uranus" element={<Uranus />}/>
        <Route path="/:neptune" element={<Neptune />}/>
      </Routes>
    </div>
  );
};

export default App
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Earth from './components/Earth';
import Jupiter from './components/Jupiter';
import Mars from './components/Mars';
import Mercury from './components/Mercury';
import Neptune from './components/Neptune';
import Saturn from './components/Saturn';
import Uranus from './components/Uranus';
import Venus from './components/Venus';


const App = () => {
  return (
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
  );
};

export default App
// import { Scene } from 'three';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import Navigation from './screen/navigation';
import Home from './screen/home';
import Three from './screen/three';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="" element={<Home />} />
        <Route path="three" element={<Three />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;

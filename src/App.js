import { Scene } from 'three';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import React, { Suspense, lazy, useEffect, useState } from 'react';

import Navigation from './screen/navigation';
import Home from './screen/home';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;

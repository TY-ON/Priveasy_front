import React from 'react';
import { MemoryRouter, Route, Routes} from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;

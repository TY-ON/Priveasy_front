import React from 'react';
import { MemoryRouter, Route, Routes} from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Search from './pages/Search';
import Result from './pages/Result'

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;

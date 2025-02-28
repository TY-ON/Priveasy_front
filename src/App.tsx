import React from 'react';
import { MemoryRouter, Route, Routes} from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Search from './pages/Search';
import Result from './pages/Result';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/error" element={<ErrorPage/>} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;

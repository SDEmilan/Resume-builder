import React from 'react';
import logo from './logo.svg';
import './App.css';
import Meme from './Component/meme.jsx';
import Header from './resume/headerPage';
import MainPage from './resume/mainPage';
import FinalPgae from './resume/finalPgae1';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FinalPgae2 from './resume/finalPage2';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path="oneresume" element={<FinalPgae />} />
          <Route path="oneresume2" element={<FinalPgae2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

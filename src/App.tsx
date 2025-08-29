import React from 'react';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import ContactUs from './ContactUs';
import { Route, Routes } from 'react-router-dom';
import Collaborate from './Collaborate';

function App() {
  return (
    <>
      <Routes>
        <Route index element ={<MainSection />} />
        <Route path="contactus" element ={<ContactUs />} />
        <Route path="collaborate" element ={<Collaborate />} />
      </Routes>
    </>
  );
}

export default App;

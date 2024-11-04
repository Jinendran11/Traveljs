import React from 'react';

import AboutUs from "./components/AboutUs";
import BookingForm from "./components/BookingForm";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Home from "./components/Home";
import Service from "./components/Service";
import StaysList from "./components/Stayslist";
import VehicleList from "./components/Vehiclelist";
import Footer from './components/Footer';
import AuthPage from './components/Authpage';
import Authpage from './components/Authpage';

const App: React.FC = () => {
  return (
    <>
    <Header/>
    <Home/>
    <BookingForm/>
    <VehicleList/>
    <StaysList/>
    <AboutUs/>
    <Service/>
    <ContactUs/>
    <Footer/>
    <Authpage/>
  </>
  );
};

export default App;
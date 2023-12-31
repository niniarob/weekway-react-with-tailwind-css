import React from "react";
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Activities from "./components/Activities";
import Booking  from "./components/Booking";
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoBg from'./video/video.mp4';

function App() {
  const VideoUrl = VideoBg
  return (
    <>
    <TopBar/>
    <NavBar/>
    <Hero videoUrl={VideoUrl} />
    <Activities/>
    <Booking/>
    <Gallery/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;

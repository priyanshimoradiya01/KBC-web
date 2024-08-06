import React from 'react'
import AboutSection1 from '../pages/about/AboutSection1'
import AboutSection2 from '../pages/about/AboutSection2';
import AboutSection3 from '../pages/about/AboutSection3';
import MainAbout from '../pages/about/MainAbout';
import Header from './global/Header';
import Footer from './global/Footer';

function About() {
  return (
    <div>
    <Header/>
        <MainAbout/>
        <AboutSection1 />
        <AboutSection2/>
        <AboutSection3/>
        <Footer/>
    </div>
  )
}

export default About;
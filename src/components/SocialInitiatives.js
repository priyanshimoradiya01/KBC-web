import React from 'react'
import SocialSection2 from '../pages/socialInitiatives/SocialSection2'
import SocialSection3 from '../pages/socialInitiatives/SocialSection3';
import SocialSection1 from '../pages/socialInitiatives/SocialSection1'
import Header from './global/Header';
import Footer from './global/Footer';


function SocialInitiatives() {
  return (
    <div>
    <Header/>
      <SocialSection1/>
      <SocialSection2/>
      <SocialSection3/>
      <Footer/>
    </div>
  )
}

export default SocialInitiatives;

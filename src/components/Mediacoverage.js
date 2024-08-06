import React from 'react'
import MediaMain from '../pages/mediacoverage/MediaMain'
import MediaSection1 from '../pages/mediacoverage/MediaSection1'
import Header from './global/Header'
import Footer from './global/Footer'

function Mediacoverage() {
  return (
    <>
    <Header/>
        <MediaMain/>
        <MediaSection1/>
        <Footer/>
    </>
  )
}

export default Mediacoverage

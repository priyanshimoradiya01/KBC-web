import React from 'react'
import Residentialsec1 from '../pages/Residential/Residentialsec1'
import Residentailsec2 from '../pages/Residential/Residentailsec2'
import Residentialsec3 from '../pages/Residential/Residentialsec3'
import Header from './global/Header'
import Footer from './global/Footer'

function Residential() {
  return (
    <div>
        <Header/>
        <Residentialsec1/>
        <Residentailsec2/>
        <Residentialsec3/>
        <Footer/>
    </div>
  )
}

export default Residential;
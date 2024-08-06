import React from 'react'
import Header from './global/Header'
import Residenthome from '../pages/residentialpage/Residenthome'
import Residentialproperty from '../pages/residentialpage/Residentialproperty'
import Footer from './global/Footer'

function Commercial() {
  return (
    <div>
        <Header/>
        <Residenthome/>
        <Residentialproperty/>
        <Footer/>
    </div>
  )
}

export default Commercial;
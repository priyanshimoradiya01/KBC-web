import React from 'react'
import Completesec1 from '../pages/Completeproject/Completesec1'
import Completesec2 from '../pages/Completeproject/Completesec2'
import Completesec3 from '../pages/Completeproject/Completesec3'
import Header from './global/Header'
import Footer from './global/Footer'

function Completeproject() {
  return (
    <div>
    <Header/>
        <Completesec1/>
        <Completesec2/>
        <Completesec3/>
        <Footer/>
    </div>
  )
}

export default Completeproject;
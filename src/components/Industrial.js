import React from 'react'
import Industrialhome from '../pages/industrial/Industrialhome'
import Industrialproperty from '../pages/industrial/Industrialproperty'
import Header from './global/Header'
import Footer from './global/Footer'

function Industrial() {
  return (
    <div>
    <Header/>
       <Industrialhome />
       <Industrialproperty />
       <Footer/>
    </div>
  )
}

export default Industrial

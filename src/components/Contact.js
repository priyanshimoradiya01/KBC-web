import React from 'react'
import Contacthome from '../pages/contactus/Contacthome'
import Inquirycontact from '../pages/contactus/Inquirycontact'
import Header from './global/Header'
import Footer from './global/Footer'

function Contact() {
  return (
    <div>
    <Header/>
         <Contacthome />
         <Inquirycontact />
         <Footer/>
    </div>
  )
}

export default Contact

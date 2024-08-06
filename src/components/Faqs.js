import React from 'react'
import FaqMain from '../pages/faq/FaqMain'
import FaqSection1 from '../pages/faq/FaqSection1'
import Header from './global/Header'
import Footer from './global/Footer'

function Faqs() {
  return (
    <>
    <Header/>
        <FaqMain/>
        <FaqSection1/>
        <Footer/>
    </>
  )
}

export default Faqs

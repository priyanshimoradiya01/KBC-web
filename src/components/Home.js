import React from 'react'
import Homesection1 from '../pages/home/Homesection1'
import Header from '../components/global/Header'
import Homesection3 from '../pages/home/Homesection3'
import Homesection2 from '../pages/home/Homesection2'
import Homesection6 from '../pages/home/Homesection6'
import Footer from '../components/global/Footer'
import Homesection4 from '../pages/home/Homesection4'
import Homesection5 from '../pages/home/Homesection5'



function Home() {
  return (
    <div>
      <Header />
      <Homesection1 />
      <Homesection2 />
      <Homesection3 />
      <Homesection4 />
      <Homesection5 />
      <Homesection6 />
      <Footer />
    </div>
  )
}

export default Home;

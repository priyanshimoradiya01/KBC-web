import React from 'react'
import NewsSection1 from '../pages/news/NewsSection1';
import MainNews from '../pages/news/MainNews';
import Header from './global/Header';
import Footer from './global/Footer';

function News() {
  return (
    <div>
    <Header/>
        <MainNews/>
        <NewsSection1/>
        <Footer/>
    </div>
  )
}

export default News;
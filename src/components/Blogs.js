import React from 'react'
import BlogSection1 from '../pages/blogs/BlogSection1'
import MainBlog from '../pages/blogs/MainBlog';
import Header from './global/Header';
import Footer from './global/Footer';

function Blogs() {
  return (
    <div>
    <Header/>
        <MainBlog />
        <BlogSection1 />
        <Footer/>
    </div>
  )
}

export default Blogs;
import React from 'react'
import About from './components/About';
import Register from './components/Register';
import Blogs from './components/Blogs';
import News from './components/News';
// import Leadership from './components/Leadership';
import Contact from './components/Contact'
import Industrial from './components/Industrial'
import Sustainability from './components/Sustainability'
import Faqs from './components/Faqs'
import Mediacoverage from './components/Mediacoverage'
import Mediaassets from './components/Mediaassets'
import Award from './components/Award'
import Leadership from './components/Leadership'
import SocialInitiatives from './components/SocialInitiatives'
import Completeproject from './components/Completeproject';
import Residential from './components/Residential';
import Home from '../src/components/Home'
import { Route, Routes } from 'react-router-dom';
import ProjectView from './components/ProjectView';
import Commercial from './components/Commercial';



function App() {
  return (
    <div>



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/industrial' element={<Industrial />} />
        <Route path='/commercial' element={<Commercial />} />
        <Route path='/sustainability' element={<Sustainability />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/mediacoverage' element={<Mediacoverage />} />
        <Route path='/mediaassets' element={<Mediaassets />} />
        <Route path='/award' element={<Award />} />
        <Route path='/leadership' element={<Leadership />} />
        <Route path='/socialInitiatives' element={<SocialInitiatives />} />
        <Route path='/residential' element={<Residential />} />
        <Route path='/completeproject' element={<Completeproject />} />
        <Route path='/projectview' element={<ProjectView />} />
      </Routes>
    </div>
  )
}

export default App;
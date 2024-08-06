import React from 'react'
import RegisterForVendor from '../pages/register/RegisterForVendor';
import MainRegister from '../pages/register/MainRegister';
import Header from './global/Header';
import Footer from './global/Footer';

function Register() {
  return (
    <div>
    <Header/>
        <MainRegister/>
        <RegisterForVendor />
        <Footer/>
    </div>
  )
}

export default Register;
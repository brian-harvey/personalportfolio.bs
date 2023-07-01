import React from 'react'
import Navbar from './sections/Navbar/Navbar';
import Header from './sections/Header/Header';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Portfolio from './sections/Portfolio/Portfolio';
import Testimonials from './sections/Testimonials/Testimonials';
import Faqs from './sections/Faqs/Faqs';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

const app = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Faqs/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default app
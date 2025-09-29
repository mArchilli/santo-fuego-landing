import React from 'react'
// import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Menu from '../components/Menu'
import Testimonials from '../components/Testimonials'
import ReservationForm from '../components/ReservationForm'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function LandingPage(){
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <ReservationForm />
      <Contact />
      <Footer />
    </div>
  )
}
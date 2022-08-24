import React from 'react'
import './css/Homepage.css'
import Navbar from './components/Navbar'
import About from './components/About.jsx'
import { Services } from './components/Services'
import Form from './components/Form.jsx'
import Footer from './components/Footer'
import Header from './components/Header'
import Clients from './components/Clients'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <About />
      <Clients />
      <Form />
      <Footer />
    </div>
  )
}

export default Homepage;
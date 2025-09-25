import React from 'react'
import Navbar from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
// import Departments from '../components/Departments'
import EmergencyBanner from '../components/EmergencyBanner'
// import Statistics from '../components/Statistics'
// import ContactInfo from '../components/ContactInfo'
// import Footer from '../components/Footer'
// import Chatbot from '../components/chatbot'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <EmergencyBanner />
      <Services />
      {/* <Departments /> */}
      {/* <Statistics /> */}
      {/* <ContactInfo /> */}
      {/* <Footer /> */}
      <Chatbot />
    </div>
  )
}

export default LandingPage
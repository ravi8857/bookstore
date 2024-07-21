import React from 'react'
import Navbar from '../components/Navbar'
import Contactus from '../components/Contactus'


function Contact() {
  return (
    <div>
        <Navbar />
        <div className='min-h-screen'>
      <Contactus />
      </div>
    </div>
  )
}

export default Contact

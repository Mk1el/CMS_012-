import React from 'react'
import Navbar from '../Components/Navbar'
import '../assets/Css/home.css'
const Home = () => {
  return (
    <>
    <Navbar />
    <div className='home'>
        <h1 className='home-title'>
            CONTACT MANAGEMENT SYSTEM
        </h1>
        <p className='home-description'>
            Start collecting your contact in a smart way
            We provide ways to manage your contacts
        </p>
    </div>
    </>
  )
}

export default Home
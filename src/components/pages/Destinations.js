import React from 'react'
import './Destinations.css'
import Cards from '../Cards'
import Footer from '../Footer'

function Destinations() {
  return (
    <div className='destinations-container'>
        {/* <video src='/videos/plane_landing.mp4' autoPlay loop muted /> */}
        <Cards />
        <Footer />
    </div>
  )
}

export default Destinations
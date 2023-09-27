import React from 'react'
import './Header.css'
import VideoCarousel from '../VideoCarousel/VideoCarousel'
import Video from '../VideoCarousel/Video'

function Header() {
  const videos = [
    { url: '/assets/neha_mute.mp4' },
    { url: '/assets/gehlot_mute.mp4' },
    { url: '/assets/aqueel_khan_mute.mp4' }
  ]
  return (
    <div className='header'>
      <div className='header-upper-content'>
        <h1 className='header-heading'  >Unlock the Future of Content: GenAI's Text-to-Video Platform</h1>
        <p className='header-paragraph' >Convert your text into realistic, personalized videos in minutes. Experience cutting-edge technology that tailors content for your audience.</p>
        <div className='header-button-container'>
          <button className='header-button'>Join waitlist!</button>
          <a href='https://calendly.com/seiseiai/30min?back=1&month=2023-09' target="_blank"><button className='header-button'>Get our Demo!</button></a>
        </div>
      </div>
      {/* <VideoCarousel videos={videos} /> */}
      <Video/>
      <div className='header-images'>
        <p className='header-image-paragraph '>Trusted by multiple organisations across the globe</p>
        <div className='header-image-container'>
          <img src='/assets/images1.png' alt='img' />
          <img src='/assets/images2.png' alt='img' />
          <img src='/assets/images3.png' alt='img' />
          <img src='/assets/headerimages4.png' alt='img' />
        </div>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import './Video.css'

function Video() {
    return (
        <div className='video-container'>
            <div className='video-container-box'>
                <video
                    width="480"
                    height="360"
                    controls={false}
                    src={'/assets/neha_mute.mp4'}
                    autoPlay={true}
                    muted
                    loop
                >
                </video>
            </div>
            <div className='video-container-box'>
                <video
                    width="480"
                    height="360"
                    controls={false}
                    src={'/assets/aqueel_khan_mute.mp4'}
                    autoPlay={true}
                    muted
                    loop
                >
                </video>
            </div>
        </div>
    )
}

export default Video

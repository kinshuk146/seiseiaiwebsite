import React from 'react'
import '../App.css'
import {IoLanguageOutline} from 'react-icons/io5'
import { Button } from 'antd'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-logo font2'>
                <img src="/assets/logo.png" width={28} height={28}></img>
                <div className='cup' style={{}}>SeiSei.ai</div>
            </div>
            <div className='navbar-section font2'>
                <h1 className='cup'>Use Case</h1>
                <h1 className='cup'>Resources</h1>
            </div>
            <div className='navbar-section font2'>
            <div className='language-logo cup'><IoLanguageOutline/></div>
                <Button className='navbar-button'>Login</Button>
            </div>
        </nav>
    )
}

export default Navbar

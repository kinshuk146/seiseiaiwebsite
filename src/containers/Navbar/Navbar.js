import React from 'react'
import './Navbar.css'
import { IoLanguageOutline } from 'react-icons/io5'
import { Button, Tooltip } from 'antd';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-logo font2'>
                <img src="/assets/logo.png" width={28} height={28}></img>
                <div className='cup'><a href='/'>SeiSei.ai</a></div>
            </div>
            <div className='navbar-section font2'>
                    <Tooltip placement="bottom" title={
                    <div className='usecase-tooltip'>
                        <a href='/usecase/event'>Events</a>
                        <a href='/usecase/marketing'>Marketing</a>
                        <a href='/usecase/reengage'>Re-Engage</a>
                    </div>}
                    color='white' arrow={false}>
                    <h1 className='cup'>Use Case</h1>
                    </Tooltip>
                <h1 className='cup'>Resources</h1>
            </div>
            <div className='navbar-section font2'>
                <div className='language-logo cup'><IoLanguageOutline style={{ width: '32px', height: '32px', color: '#357E5E', fontWeight: '700' }} /></div>
                <Button className='navbar-button'>Log In</Button>
            </div>
        </nav>
    )
}

export default Navbar

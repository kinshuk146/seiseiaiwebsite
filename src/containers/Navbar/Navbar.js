import React from 'react'
import './Navbar.css'
import { IoLanguageOutline } from 'react-icons/io5'
import { Button, Tooltip } from 'antd';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate= useNavigate();
    return (
        <nav className='navbar'>
            <div className='navbar-logo '>
                <img src="/assets/logo.png" width={28} height={28}></img>
                <div className='cup navbar-heading' onClick={()=>{navigate('/')}}>SeiSei.ai</div>
            </div>
            <div className='navbar-section font2'>
                    <Tooltip placement="bottom" title={
                    <div className='usecase-tooltip'>
                        <p className='cup' onClick={()=>{navigate('/usecase/marketing')}}>Marketing Campaigns</p>
                        <p className='cup' onClick={()=>{navigate('/usecase/d2c')}}>D2C eCommerce</p>
                        <p className='cup' onClick={()=>{navigate('/usecase/stakeholder')}}>Stakeholder Communication</p>
                    </div>}
                    color='white' arrow={false}>
                    <h1 className='cup'>Use Case</h1>
                    </Tooltip>
                <h1 className='cup'>Resources</h1>
            </div>
            <div className='navbar-section font2'>
                <div className='language-logo cup'><IoLanguageOutline style={{ width: '32px', height: '32px', color: '#357E5E', fontWeight: '700' }} /></div>
                <button className='navbar-button'>Log In</button>
            </div>
        </nav>
    )
}

export default Navbar

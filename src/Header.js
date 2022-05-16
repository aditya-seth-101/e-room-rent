import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className='Header'>
            <span className="logo"><img src="logo.png" alt="" /></span>
            <span className="headerMenu">
                <span value="Home">Home</span>
                <span value="About Us">About Us</span>
                <span value="Owner">Owner</span>
                <span value="Broker">Broker</span>
                <span value="Rent">Rent</span>
                <span value="Contact US">Contact US</span>
                <span value="FAQ">FAQ</span>
            </span>
            <div className="middleHeader">
                <button> List Your Property</button>
            </div>
            

        </div>
    )
}

export default Header
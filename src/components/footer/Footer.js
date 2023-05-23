import React from 'react'
import "./Footer.css"
import { HiOutlineLocationMarker } from 'react-icons/hi'
import {AiOutlineMail} from 'react-icons/ai';
import {BsTelephone} from 'react-icons/bs';
import { navLinks, socialLinks } from '../../data';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-main'>
                <h2>Street Store</h2>
                <p>
                    <span><HiOutlineLocationMarker /></span> 184 Main Rd E, XYZ Road, Australia
                </p>
                <p>
                    <span><AiOutlineMail /></span> contact@company.com
                </p>
                <p>
                    <span><BsTelephone/></span> +001 2233 456
                </p>
                <ul>
                    {
                        socialLinks.map((link)=>{
                            return <li key={link.id}><a href={link.url} target='blank'>{link.icon}</a></li>
                        })
                    }
                </ul>
            </div>

            <div className='footer-links'>
                <h3>Site</h3>
                <ul>
                    {
                        navLinks.map((link)=>{
                            return <li key={link.id}><Link to={link.link}>{link.name}</Link></li>
                        })
                    }
                </ul>
            </div>
            <div className='footer-links'>
                <h3>Information</h3>
                <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-links'>
                <h3>Useful Links</h3>
                <ul>
                    <li>Store Location</li>
                    <li>Size Guide</li>
                    <li>Portfolio</li>
                    <li>FAQs</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer

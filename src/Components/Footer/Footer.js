import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../images/footerLogo.png';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css'

function Footer() {
  return (
    <section className='text-center justify-content-center footer'>
        <div className='btns py-5'>
            <Link to='' className='btn btn-md eventBtn'>Event Organizer</Link>
            <Link to='' className='btn btn-md eventBtn eventBtn1'>Speaker</Link>
        </div>
        <form action="#" method="POST" className="d-flex justify-content-around bg-white mx-auto mb-5 px-2 p-3 footerForm">
            <h5 className="news my-auto">Subscribe to our newsletter</h5>
            <input type="text" placeholder="Enter your email" className="footerInput" name="email" />
            <button type="submit" className="btn footBtn my-auto">Submit</button>
        </form>

        <div className='row footerNav'>
            <div className='col-md-4 text-start'>
                <h6 className='fw-bold text-white'>NAVIGATION</h6>
                <ul className='list-unstyled'>
                    <li className='mb-1'><a href={"/"} className='text-decoration-none text-white'>Home</a></li>
                    <li className='mb-1'><a href={"/"} className='text-decoration-none text-white'>About</a></li>
                    <li className='mb-1'><a href={"/"} className='text-decoration-none text-white'>Explore</a></li>
                    <li className='mb-1'><a href={"/"} className='text-decoration-none text-white'>Blog</a></li>
                    <li className='mb-1'><a href={"/"} className='text-decoration-none text-white'>Contact</a></li>
                    <li><a href={"/"} className='text-decoration-none text-white'>Login</a></li>
                </ul>
            </div>
            <div className='col-md-4 text-start'>
                <h6 className='fw-bold text-white'>LEGAL</h6>
                <ul className='list-unstyled'>
                    <li className='mb-1'><a href={"/"} className='text-decoration-none text-white'>Privacy & Policy</a></li>
                    <li><a href={"/"} className='text-decoration-none text-white'>Terms of service</a></li>
                </ul>
            </div>
            <div className='col-md-4 text-start'>
                <h6 className='fw-bold text-white'>TALK TO US</h6>
                <ul className='list-unstyled'>
                    <li className='mb-1'><a href={"/"} className='text-decoration-none text-white'>support@spefind.com </a></li>
                    <li className='mb-1'><a href={"/"} className='text-decoration-none text-white'>+234 1234567891 </a></li>
                    <li className='mb-1'><a href={"/"} className='text-decoration-none text-white'>Contact Us</a></li>
                    <li className='mb-1'><a href={"/"} className='text-decoration-none text-white'>Facebook </a></li>
                    <li className='mb-1'><a href={"/"} className='text-decoration-none text-white'> Linkedin</a></li>
                    <li className='mb-1'><a href={"/"} className='text-decoration-none text-white'>Twitter </a></li>
                </ul>
            </div>
        </div>
        <div className=' justify-content-between copySection'>
            <img src={footerLogo} alt='logo' className='footerLogo'/>
            <div className='mt-md-5'>
                <p className="text-white copyRight">
                &copy; {new Date().getFullYear()} Spefind. All right reserved.
                </p>
            </div>
            <div className='socialMedia mt-4'>
                <div className='icon'>
                    <FaFacebookF className='social'/>
                </div>
                <div className='icon'>
                    <FaLinkedinIn className='social'/>
                </div>
                <div className='icon'>
                    <FaTwitter className='social'/>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Footer
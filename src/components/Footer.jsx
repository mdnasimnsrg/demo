import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const Footerlogo = process.env.PUBLIC_URL + '/images/footerlogo.svg';
  const email = process.env.PUBLIC_URL + '/images/icons/email.svg';
  const facebook = process.env.PUBLIC_URL + '/images/icons/facebook.svg';
  const instagram = process.env.PUBLIC_URL + '/images/icons/instagram.svg';
  const pin = process.env.PUBLIC_URL + '/images/icons/pin.svg';
  const twitter = process.env.PUBLIC_URL + '/images/icons/twitter.svg';
  const telephone = process.env.PUBLIC_URL + '/images/icons/telephone.svg';
  const youtube = process.env.PUBLIC_URL + '/images/icons/youtube.svg';
  return(
    <div className = 'bg-gradient-primary py-10 lg:py-12'>
      <div className = 'container mx-auto px-5 lg:px-10'>
        <div className = 'flex flex-wrap justify-between'>
          <div className = 'w-full md:w-2/4 lg:w-auto'>
            <h3 className = 'pb-6 lg:pb-12 font-base font-semibold text-white'>CONTACT US</h3>
            <ul className = 'm-0 p-0 list-none'>
              <li>
                <div className = 'flex'>
                  <div className = 'relative'>
                    <div className = 'bg-white w-8 h-8 rounded-full opacity-10 mr-2.5'></div>
                    <img className = 'absolute top-2 left-2' src = { pin } alt = "pin" />
                  </div>
                  <p className = 'text-xs lg:text-sm self-center text-white opacity-60 font-light'>Ethica InvestS1, Azim Green Homes, <br></br>
                    New SS NagarAligarh, U.P. 202001</p>
                </div>
              </li>
              <li className = 'pt-6 lg:pt-8'>
                <div className = 'flex'>
                  <div className = 'relative'>
                    <div className = 'bg-white w-8 h-8 rounded-full opacity-10 mr-2.5'></div>
                    <img className = 'absolute top-2 left-2' src = { email } alt = "email" />
                  </div>
                  <p className = 'text-xs lg:text-sm self-center text-white opacity-60 font-light'>info@ethica.app</p>
                </div>
              </li>
              <li className = 'pt-6 lg:pt-8'>
                <div className = 'flex'>
                  <div className = 'relative'>
                    <div className = 'bg-white w-8 h-8 rounded-full opacity-10 mr-2.5'></div>
                    <img className = 'absolute top-2 left-2' src = { telephone } alt = "telephone" />
                  </div>
                  <p className = 'text-xs lg:text-sm self-center text-white opacity-60 font-light'>+91 78958 70084</p>
                </div>
              </li>
            </ul>
          </div>
          <div className = 'w-full md:w-2/4 lg:w-auto'>
            <h3 className = 'pt-10 lg:pt-0 pb-6 lg:pb-12 font-base font-semibold text-white'>ABOUT US</h3>
            <ul className = 'm-0 p-0 list-none'>
              <li><Link to = "#" className = 'hover:opacity-100 text-sm text-white opacity-60 font-light'>Company</Link></li>
              <li className = 'pt-3 lg:pt-7'><Link to = "#" className = 'hover:opacity-100 text-sm text-white opacity-60 font-light'>Team Members</Link></li>
            </ul>
          </div>
          <div className = 'w-full md:w-2/4 lg:w-auto'>
            <h3 className = 'pt-10 lg:pt-0 pb-6 lg:pb-12 font-base font-semibold text-white'>LEGAL</h3>
            <ul className = 'm-0 p-0 list-none'>
              <li><Link to = "/terms-and-conditions" className = 'hover:opacity-100 text-sm text-white opacity-60 font-light'>Terms & Conditions</Link></li>
              <li className = 'pt-3 lg:pt-7'><Link to = "/privacy-policy" className = 'hover:opacity-100 text-sm text-white opacity-60 font-light'>Privacy Policy</Link></li>
              <li className = 'pt-3 lg:pt-7'><a href = "/terms-and-conditions/#refund" className = 'hover:opacity-100 text-sm text-white opacity-60 font-light'>Payment & Refund Policy</a></li>
              <li className = 'pt-3 lg:pt-7'><Link to = "#" className = 'hover:opacity-100 text-sm text-white opacity-60 font-light'>Disclaimer</Link></li>
              
            </ul>
          </div>
          <div className = 'w-full md:w-2/4 lg:w-auto'>
            <h3 className = 'pt-10 lg:pt-0 pb-6 lg:pb-12 font-base font-semibold text-white'>FOLLOW US</h3>
            <ul className = 'm-0 p-0 list-none flex'>
              <li><a href = '#' className = 'block duration-500 hover:-translate-y-1'><img src = { instagram } alt = 'instagram' /></a></li>
              <li className = 'ml-6'><a href = '#' className = 'block duration-500 hover:-translate-y-1'><img src = { facebook } alt = 'facebook' /></a></li>
              <li className = 'ml-6'><a href = '#' className = 'block duration-500 hover:-translate-y-1'><img src = { twitter } alt = 'twitter' /></a></li>
              <li className = 'ml-6'><a href = '#' className = 'block duration-500 hover:-translate-y-1'><img src = { youtube } alt = 'youtube' /></a></li>
            </ul>
            <Link to = "/" className = 'block w-52 mt-16 lg:mt-24'>
              <img src = { Footerlogo } alt = 'Footerlogo' />
            </Link>
          </div>
        </div>
        <p className = 'text-center pt-12 text-sm text-white'>“Ethica Invest” is a brand owned by Abdullah Zaman (SEBI: INH000013244)</p>
      </div>
    </div>
  );
};

export default Footer;

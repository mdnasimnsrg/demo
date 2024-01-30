import { googleLogout } from '@react-oauth/google';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { API } from '../config/index';

const Header = () => {
  let localdata = localStorage.getItem('token');
  const auth = localdata;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const logo = process.env.PUBLIC_URL + '/images/Logohome.svg';
  const menu = process.env.PUBLIC_URL + '/images/icons/menu.svg';
  const crossmenu = process.env.PUBLIC_URL + '/images/icons/crossmenu.svg';
  const profile = process.env.PUBLIC_URL + '/images/profile.svg';
  const editor = process.env.PUBLIC_URL + '/images/icons/editor.svg';
  const navigate = useNavigate();


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };



  const handleLogout = async () => {
    try {
     
      const response = await axios.post(`${API}users/logout`);
      if (response.status === 200) {
        toast.success(response?.data.message);
        googleLogout(); 
        localStorage.clear();
        setMenuOpen(false);
        const redirectTimer = setTimeout(() => {
          navigate('/');
        }, 2000);

        return () => clearTimeout(redirectTimer);
      }
      
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <>
      <Toaster
        position = "top-right"
        reverseOrder = { false }
      />
      <div className = 'border-b border-boderColor-300 bg-transparent'>
        <div className = 'container mx-auto px-5 lg:px-10 py-3 flex justify-between text-black'>
          <div className = 'self-center'>
            <Link className = 'block w-48' to = '/' ><img src = { logo } alt = 'logo' /></Link>
          </div> 
          <div className = 'self-center block lg:hidden w-10 h-10 rounded-full bg-primary-50'>
            <img className = 'text-center mx-auto mt-3' onClick = { toggleMenu } src = { menu } alt = 'menu' />
          </div>
          <div className = 'self-center hidden lg:block'>
            <ul className = 'm-0 p-0 list-none flex gap-x-4'>
              {
                auth?<>
                  <li><Link className = { `text-sm hover:border-primary border border-transparent hover:text-primary duration-300 hover:duration-300 px-4 py-2 rounded-full block ${
                    location?.pathname === '/dashboard' ? 'text-blacklight font-bold' : 'text-grey-600'
                  }` } to = "/dashboard">Dashboard                  </Link>
                  { location?.pathname === '/dashboard' && <div className = 'w-3/5 bg-blacklight h-0.5 mx-auto relative top-3.5'></div> }
                  </li>
                </>: null
              }
              <li><Link className = { `text-sm hover:border-primary border border-transparent hover:text-primary duration-300 hover:duration-300 px-4 py-2 rounded-full block ${
                location?.pathname === '/about' ? 'text-blacklight font-bold' : 'text-grey-600'
              }` } to = "/about">About Us</Link>
              { location?.pathname === '/about' && <div className = 'w-3/5 bg-blacklight h-0.5 mx-auto relative top-3.5'></div> }
              </li>
              <li>
                <Link className = 'text-sm text-grey-600 hover:border-primary border border-transparent hover:text-primary duration-300 hover:duration-300 px-4 py-2 rounded-full block' to = "#">Contact Us</Link>
              </li>
              <li><Link className = { `text-sm hover:border-primary border border-transparent hover:text-primary duration-300 hover:duration-300 px-4 py-2 rounded-full block ${
                location?.pathname === '/faq' ? 'text-blacklight font-bold' : 'text-grey-600'
              }` } to = "/faq">FAQ</Link>
              { location?.pathname === '/faq' && <div className = 'w-3/5 bg-blacklight h-0.5 mx-auto relative top-3.5'></div> }
              </li>
              <li><Link className = { `text-sm hover:border-primary border border-transparent hover:text-primary duration-300 hover:duration-300 px-4 py-2 rounded-full block ${
                location?.pathname === '/pricing' ? 'text-blacklight font-bold' : 'text-grey-600'
              }` } to = "/pricing">Pricing</Link>
              { location?.pathname === '/pricing' && <div className = 'w-3/5 bg-blacklight h-0.5 mx-auto relative top-3.5'></div> }
              </li>
            </ul>
          </div>
          {
            !auth? <div className = 'self-center hidden lg:block'> <ul className = 'flex m-0 p-0 list-none gap-x-4 text-black text-sm'>
              <li>
                <Link className = 'hover:bg-gradient-primary hover:text-white hover:duration-300 duration-300 text-sm border border-primary rounded-full block text-primary px-6 py-2' to = "/login">Login</Link>
              </li>
              <li>
                <Link className = 'hover:bg-gradient-primary hover:text-white hover:duration-300 duration-300 text-sm border border-primary rounded-full block text-primary px-6 py-2' to = "/signup">Sign Up</Link>
              </li>
            </ul></div>: null
          }
        </div>
      </div>
      <div className = { `mobile-menu ${
        isMenuOpen ? 'slide-in' : 'slide-out'
      } transition-transform duration-300 drop-shadow-lg` } ref = { menuRef }>
        <div>
          <p className = 'flex justify-end'><img src = { crossmenu } onClick = { toggleMenu } alt = 'crossmenu' /></p>
          {
            auth?<>
              <div className = 'border border-primary w-32 h-32 rounded-full p-2 mx-auto mt-5'>
                <img src = { profile } className = 'rounded-full' alt = 'profile' />
              </div>
              <p className = 'text-center text-lg text-blacklight mt-3'>John Doe</p>
              <div className = 'text-center mt-4'>
                <Link className = 'inline-block text-primary text-sm border border-primary rounded-3xl py-1.5 px-4'>Edit Profile <img src = { editor } className = 'inline-block ml-2' alt = 'editor' /></Link>
              </div>
            </>: ''
          }
          <ul>
            {
              auth?<li className = 'mt-12'><Link className = 'text-blacklight text-base' to = "/dashboard">Dashboard</Link> </li>: null
            }
            <li className = { auth?'mt-5' : 'mt-12' }><Link className = 'text-blacklight text-base' to = "/about">About</Link> </li>
            <li className = 'mt-5'><Link className = 'text-blacklight text-base' to = "#">Contact Us</Link> </li>
            <li className = 'mt-5'><Link className = 'text-blacklight text-base' to = "/faq" >FAQ</Link> </li>
            <li className = 'mt-5'><Link className = 'text-blacklight text-base' to = "/pricing">Pricing</Link> </li>
            {
              !auth?<>
                <li className = 'mt-5'><Link className = 'text-blacklight text-base' to = "/login" >Login</Link> </li>
                <li className = 'mt-5'><Link className = 'text-blacklight text-base' to = "/signup" >Sign Up</Link> </li>
              </>: null
            }
            {
              auth?<li className = 'mt-5'><Link className = 'text-blacklight text-base' onClick = { handleLogout }>Sign Out</Link></li>: null
            }
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

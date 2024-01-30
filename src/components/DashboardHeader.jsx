import { googleLogout } from '@react-oauth/google';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { API } from '../config/index';

const DashboardHeader = () => {
  const logo = process.env.PUBLIC_URL + '/images/Logohome.svg';
  const arrowdown = process.env.PUBLIC_URL + '/images/icons/arrowdown.png';
  const user = process.env.PUBLIC_URL + '/images/icons/user.png';
  const menu = process.env.PUBLIC_URL + '/images/icons/menu.svg';
  const crossmenu = process.env.PUBLIC_URL + '/images/icons/crossmenu.svg';
  const profile = process.env.PUBLIC_URL + '/images/profile.svg';
  const editor = process.env.PUBLIC_URL + '/images/icons/editor.svg';
  let localdata = localStorage.getItem('user');
  const profiledetails = JSON.parse(localdata);

  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

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


  const handleDropdown = () => {

    setShowDropdown(!showDropdown);
  };
  
  return (
    <>
      <Toaster
        position = "top-right"
        reverseOrder = { false }
      />
      <div className = 'border-b border-boderColor-300 bg-transparent'>
        <div className = 'container mx-auto  px-5 lg:px-10'>
          <div className = 'py-3 flex justify-between text-black'>
            <div className = 'self-center'>
              <Link className = 'block w-36 lg:w-48' to = '/'><img src = { logo } alt = 'logo' /></Link>
            </div> 
            <div className = 'self-center block lg:hidden w-10 h-10 rounded-full bg-primary-50'>
              <img className = 'text-center mx-auto mt-3' onClick = { toggleMenu } src = { menu } alt = 'menu' />
            </div>
            <div className = 'self-center hidden lg:block'>
              <ul className = 'm-0 p-0 list-none flex gap-x-4'>
                <li>
                  <Link
                    className = { `text-sm hover:border-primary border border-transparent hover:text-primary hover:duration-300 duration-300 px-2.5 py-2 rounded-full block ${
                      location?.pathname === '/dashboard' ? 'text-blacklight font-bold' : 'text-grey-600'
                    }` }
                    to = '/dashboard'
                  >
                  Dashboard
                  </Link>
                  { location?.pathname === '/dashboard' && <div className = 'w-3/5 bg-blacklight h-0.5 mx-auto relative top-3.5'></div> }
                </li>
                <li>
                  <Link className = { `text-sm hover:border-primary border border-transparent hover:text-primary hover:duration-300 duration-300 px-2.5 py-2 rounded-full block ${
                    location?.pathname === '/model-portfolio' ? 'text-blacklight font-bold' : 'text-grey-600'
                  }` } to = '/model-portfolio'>
                   Model Portfolio
                  </Link>
                  { location?.pathname === '/model-portfolio' && <div className = 'w-3/5 bg-blacklight h-0.5 mx-auto relative top-3.5'></div> }
                </li>
                <li><Link className = { `text-sm hover:border-primary border border-transparent hover:text-primary hover:duration-300 duration-300 px-2.5 py-2 rounded-full block ${
                  location?.pathname === '/rebalance-timeline' ? 'text-blacklight font-bold' : 'text-grey-600'
                }` } to = "/rebalance-timeline">Rebalance Timeline</Link>
                { location?.pathname === '/rebalance-timeline' && <div className = 'w-3/5 bg-blacklight h-0.5 mx-auto relative top-3.5'></div> }
                </li>
                <li>
                  <Link className = { `text-sm hover:border-primary border border-transparent hover:text-primary hover:duration-300 duration-300 px-2.5 py-2 rounded-full block ${
                    location?.pathname === '/data-room' ? 'text-blacklight font-bold' : 'text-grey-600'
                  }` } to = '/data-room'>
                  Data Room
                  </Link>
                  { location?.pathname === '/data-room' && <div className = 'w-3/5 bg-blacklight h-0.5 mx-auto relative top-3.5'></div> }
                </li>   
                <li><Link className = 'text-sm hover:border-primary border border-transparent hover:text-primary hover:duration-300 duration-300 px-2.5 py-2 rounded-full block text-grey-600' to = "#">My Portfolio</Link></li>
              </ul>
            </div>
            <div className = 'self-center hidden lg:block'>
              <ul className = 'flex m-0 p-0 list-none gap-x-4 text-black text-sm'>
                <li>
                  <div className = 'relative flex'>
                    <img className = 'w-9 cursor-pointer rounded-full' onClick = { handleDropdown } src = { profiledetails?profiledetails?.picture: user } alt = 'user' />
                    <div className = 'self-center w-2.5 mx-2.5 cursor-pointer'><img onClick = { handleDropdown } src = { arrowdown } alt = 'arrowdown' /></div>
                    {
                      showDropdown && 
                    <div className = "absolute right-0 z-10 mt-2 w-56 top-11 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className = "py-1">
                        <a href = "#" className = "hover:text-grey-800 text-grey-600 block px-4 py-2 text-sm border-b border-grey-300">Account settings</a>
                        <a href = "#" className = "hover:text-grey-800 text-grey-600 block px-4 py-2 text-sm border-b border-grey-300">Support</a>
                        <button  className = "hover:text-grey-800 text-grey-600 block w-full px-4 py-2 text-left text-sm" onClick = { handleLogout }>Sign out</button>
                      </div>
                    </div>
                    }
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className = { `mobile-menu ${
        isMenuOpen ? 'slide-in' : 'slide-out'
      } transition-transform duration-300 drop-shadow-lg` } ref = { menuRef }>
        <div>
          <p className = 'flex justify-end'><img src = { crossmenu } onClick = { toggleMenu } alt = 'crossmenu' /></p>
          <div className = 'w-32 h-32 rounded-full mx-auto mt-5'>
            <img src = { profiledetails?profiledetails?.picture: profile } className = 'w-32 h-32 rounded-full' alt = 'profile' />
          </div>
          <p className = 'text-center text-lg text-blacklight mt-3'>{ profiledetails?profiledetails?.name: 'No name' }</p>
          <div className = 'text-center mt-4'>
            <Link className = 'inline-block text-primary text-sm border border-primary rounded-3xl py-1.5 px-4'>Edit Profile <img src = { editor } className = 'inline-block ml-2' alt = 'editor' /></Link>
          </div>
          <ul>
            <li className = 'mt-12'><Link className = 'text-blacklight text-base' to = "/dashboard">Dashboard</Link> </li>
            <li className = 'mt-5'><Link className = 'text-blacklight text-base' to = "/model-portfolio">Model Portfolio</Link> </li>
            <li className = 'mt-5'><Link className = 'text-blacklight text-base' to = "/rebalance-timeline">Rebalance Timeline</Link> </li>
            <li className = 'mt-5'><Link className = 'text-blacklight text-base' to = "/data-room" >Data Room</Link> </li>
            <li className = 'mt-5'><Link className = 'text-blacklight text-base' to = "#">My Portfolio</Link> </li>
            <li className = 'mt-5'><span className = 'text-blacklight text-base cursor-pointer' onClick = { handleLogout }>Sign Out</span></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;

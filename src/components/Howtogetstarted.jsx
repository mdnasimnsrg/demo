import React from 'react';
import { Link } from 'react-router-dom';

const Howtogetstarted = () => {

  const register = process.env.PUBLIC_URL + '/images/register.svg';
  const access = process.env.PUBLIC_URL + '/images/access.svg';
  const automate = process.env.PUBLIC_URL + '/images/automate.svg';


  return(
    <div className = 'bg-sky_light50 pt-8 pb-10 lg:pt-16 lg:pb-20'>
      <div className = 'container mx-auto px-5 lg:px-10'>
        <div>
          <h3 className = 'text-blacklight text-center text-2xl lg:text-4xl font-bold pb-2'>How to Get Started</h3>
          <div className = 'hidden lg:block border-dotted border-b-2 border-primary-400 relative top-24 w-9/12 pb-10 mx-auto'></div>
          <div className = 'flex-none lg:flex justify-between'>
            <div className = 'text-center mt-8'>
              <img src = { register } alt = 'register' className = "mx-auto w-20 lg:w-24 relative"  />
              <h3 className = 'text-blacklight text-lg lg:text-xl font-bold mt-3'>Register</h3>
              <p className = 'text-black_p text-xs lg:text-sm mt-3'>Select a plan based on your <br></br> preferences and portfolio size.</p>
            </div>
            <div className = 'text-center mt-8'>
              <img src = { automate } alt = 'automate' className = "mx-auto w-20 lg:w-24 relative" />
              <h3 className = 'text-blacklight text-lg lg:text-xl font-bold mt-3'>Get Access</h3>
              <p className = 'text-black_p text-xs lg:text-sm mt-3'>Gain full access to our model portfolio,<br></br> watchlist, reports, and rebalance timeline.</p>
            </div>
            <div className = 'text-center mt-8'>
              <img src = { access } alt = 'access' className = "mx-auto w-20 lg:w-24 relative" />
              <h3 className = 'text-blacklight text-lg lg:text-xl font-bold mt-3'>Automate</h3>
              <p className = 'text-black_p text-xs lg:text-sm mt-3' >Set up your broker, and <br></br> get personalised updates for your portfolio.</p>
            </div>
          </div>
          <div className = 'text-center mt-10 lg:mt-16'>
            <Link className = 'rounded-lg text-sm py-3.5 px-16 bg-gradient-primary text-white inline-block duration-500 hover:-translate-y-1' to = "/signup">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howtogetstarted;
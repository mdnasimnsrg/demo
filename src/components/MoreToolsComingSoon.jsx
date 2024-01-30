import React from 'react';
import { Link } from 'react-router-dom';

const MoreToolsComingSoon = () => {
  const three = process.env.PUBLIC_URL + '/images/icons/03.png';
  const comming = process.env.PUBLIC_URL + '/images/comming.png';
  return(
    <>
      <div className = 'flex justify-between pt-10 lg:pt-20 pb-12 lg:pb-16'>
        <div className = 'w-1/2'>
          <div className = 'block lg:flex mt-0 lg:mt-5'>
            <div className = 'w-10 lg:w-20'>
              <img src = { three } alt = 'one' />
            </div>
            <div className = 'mt-3 ml-0 lg:ml-8'>
              <h3 className = 'text-base lg:text-4xl font-bold text-blacklight'>More Tools Coming Soon</h3>
              <p className = 'portfoli_p text-xs lg:text-base xl:text-xl text-black_p mt-6'>We are constantly improving and developing<br></br> new tools to empower your investments.</p>
              <div className = 'mt-6 lg:mt-24'>
                <Link className = 'rounded-lg text-xs lg:text-sm py-2.5 lg:py-3.5 px-10 lg:px-16 bg-gradient-primary text-white inline-block duration-500 hover:-translate-y-1' to = "#">Explore</Link>
              </div>
            </div>
          </div>
        </div>
        <div className = 'w-28 lg:w-72'>
          <img src = { comming } alt = "porfolio" />
        </div>
      </div>
    </>
  );
};

export default MoreToolsComingSoon;
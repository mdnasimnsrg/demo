import React from 'react';
import { Link } from 'react-router-dom';

const StockScreener = () => {
  const two = process.env.PUBLIC_URL + '/images/icons/02.png';
  const porfolio = process.env.PUBLIC_URL + '/images/porfolio.png';
  return(
    <>
      <div className = 'flex justify-between pt-10 lg:pt-20'>
        <div className = 'w-28 lg:w-72'>
          <img src = { porfolio } alt = "porfolio" />
        </div>
        <div className = 'w-2/3 lg:w-1/2 ml-4'>
          <div className = 'block lg:flex mt-0 lg:mt-5'>
            <div className = 'block lg:hidden w-10 lg:w-20'>
              <img src = { two } alt = 'two' />
            </div>
            <div className = 'mt-3'>
              <h3 className = 'text-base lg:text-4xl font-bold text-blacklight'>Stock Screener</h3>
              <p className = 'text-xs portfoli_p lg:text-base xl:text-xl text-black_p mt-3 lg:mt-6'>Research on your own terms with our stock <br></br> screener. Get state-of-the-art ethical compliance information for the Indian markets.</p>
              <div className = 'mt-6 lg:mt-24'>
                <Link className = 'rounded-lg text-xs lg:text-sm py-2.5 lg:py-3.5 px-10 lg:px-16 bg-gradient-primary text-white inline-block duration-500 hover:-translate-y-1' to = "#">Explore</Link>
              </div>
            </div>
            <div className = 'hidden lg:block w-32'>
              <img src = { two } alt = 'two' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockScreener;
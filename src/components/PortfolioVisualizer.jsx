import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioVisualizer = () => {
  const ones = process.env.PUBLIC_URL + '/images/icons/ones.png';
  const porfolio = process.env.PUBLIC_URL + '/images/porfolio.png';
  return(
    <>
      <div className = 'flex justify-between'>
        <div className = 'w-2/3 lg:w-1/2'>
          <div className = 'block lg:flex mt-0 lg:mt-5'>
            <div className = 'w-10 lg:w-20'>
              <img src = { ones } alt = 'one' />
            </div>
            <div className = 'mt-3 ml-0 lg:ml-8'>
              <h3 className = 'text-base lg:text-4xl font-bold text-blacklight'>Portfolio Visualizer</h3>
              <p className = 'portfoli_p text-xs lg:text-base xl:text-xl text-black_p mt-3 lg:mt-6'>Understand your investments better with <br></br>our analysis and visualizations.</p>
              <div className = 'mt-6 lg:mt-24'>
                <Link className = 'rounded-lg text-xs lg:text-sm py-2.5 lg:py-3.5 px-10 lg:px-16 bg-gradient-primary text-white inline-block duration-500 hover:-translate-y-1' to = "#">Explore</Link>
              </div>
            </div>
          </div>
        </div>
        <div className = 'w-28 lg:w-72'>
          <img src = { porfolio } alt = "porfolio" />
        </div>
      </div>
    </>
  );
};

export default PortfolioVisualizer;
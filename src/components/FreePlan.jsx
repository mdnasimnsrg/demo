import React from 'react';
const FreePlan = () => {
  const freelogo = process.env.PUBLIC_URL + '/images/icons/freelogo.svg';
  const check = process.env.PUBLIC_URL + '/images/icons/check.svg';
  const cross = process.env.PUBLIC_URL + '/images/icons/cross.svg';
  return(
    <>
      <div className = 'bg-white border border-primary rounded-3xl relative overflow-hidden mt-0 lg:mt-10'>
        <div className = 'ribbon rotate-45 w-40 h-9 font-sm text-center text-white font-medium bg-green absolute pt-1.5 top-5'>Free</div>
        <div className = 'mt-20'>
          <img src = { freelogo } className = 'mx-auto' alt = 'logo' />
          <ul className = 'm-0 p-5 list-none'>
            <li className = 'mt-4'>
              <div className = 'flex'>
                <div>
                  <img src = { check } alt = 'check' />
                </div>
                <p className = 'text-sm text-blacklight ml-3'>3 -system generated stock <br></br> picks accessible lifetime <br></br> (NSE+BSE)</p>
              </div>
            </li>
            <li className = 'mt-4'>
              <div className = 'flex'>
                <div>
                  <img src = { cross } alt = 'check' />
                </div>
                <p className = 'text-sm text-blacklight ml-3'>No SME Stock Picks</p>
              </div>
            </li>
            <li className = 'mt-4'>
              <div className = 'flex'>
                <div>
                  <img src = { cross } alt = 'check' />
                </div>
                <p className = 'text-sm text-blacklight ml-3'>No Whatsapp & Email Updates</p>
              </div>
            </li>
          </ul>
          <div className = 'text-center'>
            <a className = "rounded-lg text-base mt-12 mb-8 py-3.5 px-12 bg-gradient-primary text-white font-semibold inline-block duration-500 hover:-translate-y-1" href = "#">Stocks to Buy</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreePlan;
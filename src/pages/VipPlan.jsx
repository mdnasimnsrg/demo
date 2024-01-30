import React from 'react';
const VipPlan = () => {
  const whitelogo = process.env.PUBLIC_URL + '/images/whitelogo.svg';
  const check = process.env.PUBLIC_URL + '/images/icons/whitecheck.svg';
  return(
    <>
      <div className = 'bg-primary rounded-3xl relative overflow-hidden mt-10 lg:mt-0'>
        <div className = 'ribbon rotate-45 w-40 h-9 font-sm text-center text-white font-medium bg-[#E0CA56] absolute pt-1.5 top-5'>VIP</div>
        <div className = 'mt-20'>
          <img src = { whitelogo } className = 'mx-auto' alt = 'logo' />
          <ul className = 'm-0 p-5 list-none'>
            <li className = 'mt-4'>
              <div className = 'flex'>
                <div>
                  <img src = { check } alt = 'check' />
                </div>
                <p className = 'text-sm text-white ml-3'>2-4 individual stockpicks <br /> every month</p>
              </div>
            </li>
            <li className = 'mt-4'>
              <div className = 'flex'>
                <div>
                  <img src = { check } alt = 'check' />
                </div>
                <p className = 'text-sm text-white ml-3'>NSE +BSE +SME stock <br></br> picks</p>
              </div>
            </li>
            <li className = 'mt-4'>
              <div className = 'flex'>
                <div>
                  <img src = { check } alt = 'check' />
                </div>
                <p className = 'text-sm text-white ml-3'>Whatsapp & Email Updates</p>
              </div>
            </li>
          </ul>
          <p className = 'text-white text-base pl-5 pt-8'>for Rs <b className = 'text-2xl'>15,000</b> /year</p>
          <p className = 'text-white text-sm pl-5 pt-2'>inclusive of taxes</p>
          <div className = 'text-center'>
            <a className = "rounded-lg text-base mt-12 mb-8 py-3.5 px-12 bg-white text-primary font-semibold inline-block duration-500 hover:-translate-y-1" href = "/">Subscribe Now</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default VipPlan;
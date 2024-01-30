import React from 'react';
const SmallcasePlan = () => {
  const smallcase = process.env.PUBLIC_URL + '/images/smallcase.svg';
  const check = process.env.PUBLIC_URL + '/images/icons/check.svg';
  return(
    <>
      <div className = 'bg-white border border-primary rounded-3xl relative overflow-hidden mt-10'>
        <div className = 'mt-12'>
          <img src = { smallcase } className = 'mx-auto' alt = 'logo' />
          <ul className = 'm-0 p-5 pt-2 list-none'>
            <li>
              <div className = 'flex'>
                <div>
                  <img src = { check } alt = 'check' />
                </div>
                <p className = 'text-sm text-blacklight ml-3'>2-4 individual stockpicks <br /> every month</p>
              </div>
            </li>
            <li className = 'mt-4'>
              <div className = 'flex'>
                <div>
                  <img src = { check } alt = 'check' />
                </div>
                <p className = 'text-sm text-blacklight ml-3'>2-4 individual stockpicks <br></br> every month</p>
              </div>
            </li>
            <li className = 'mt-4'>
              <div className = 'flex'>
                <div>
                  <img src = { check } alt = 'check' />
                </div>
                <p className = 'text-sm text-blacklight ml-3'>2-4 individual stockpicks <br></br> every month</p>
              </div>
            </li>
          </ul>
          <p className = 'text-blacklight text-base pl-5'>for Rs <b className = 'text-2xl'>15,000</b> /year</p>
          <p className = 'text-blacklight text-sm pl-5 pt-1'>inclusive of taxes</p>
          <div className = 'text-center'>
            <a className = "rounded-lg text-base mt-6 mb-8 py-3.5 px-12 bg-gradient-primary text-white font-semibold inline-block duration-500 hover:-translate-y-1" href = "#">Subscribe Now</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallcasePlan;
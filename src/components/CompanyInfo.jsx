import React from 'react';

const CompanyInfo = () => {
  const pins = process.env.PUBLIC_URL + '/images/icons/pina.svg';
  const gmailabout = process.env.PUBLIC_URL + '/images/icons/gmailabout.svg';
  const phoneabout = process.env.PUBLIC_URL + '/images/icons/phoneabout.svg';
  return(
    <>
      <div className = 'bg-grey_sky py-8 lg:py-16'>
        <div className = 'container mx-auto px-5 lg:px-10'>
          <h3 className = 'text-blacklight text-center text-2xl lg:text-4xl font-bold pb-6 lg:pb-12'>Company Info</h3>
          <div className = 'block lg:flex justify-between'>
            <div className = 'bg-white w-full lg:w-width32% rounded-2xl shadow-cardsadow py-10 px-5'>
              <div className = 'flex'>
                <div className = 'lg:w-width20%'>
                  <div className = 'w-16 h-16 bg-[#f2f4fe] rounded-full self-center'>
                    <img src = { pins } alt = 'pins' className = 'mx-auto pt-4' />
                  </div>
                </div>
                <div className = 'ml-4 w-width80% self-center'>
                  <h4 className = 'text-grey-500 text-base font-medium'>Address</h4>
                  <p className = 'text-lightblack text-sm mt-1'>Ethica InvestS1, Azim Green Homes,<br /> New SS NagarAligarh, U.P. 202001</p>
                </div>
              </div>
            </div>
            <div className = 'bg-white w-full lg:w-width32% rounded-2xl mt-5 lg:mt-0 shadow-cardsadow py-10 px-5'>
              <div className = 'flex'>
                <div className = 'lg:w-width20%'>
                  <div className = 'w-16 h-16 bg-[#f2f4fe] rounded-full self-center'>
                    <img src = { gmailabout } alt = 'gmail' className = 'mx-auto pt-4' />
                  </div>
                </div>
                <div className = 'ml-4 w-width80% self-center'>
                  <h4 className = 'text-grey-500 text-base font-medium'>Email</h4>
                  <p className = 'text-lightblack text-sm mt-1'>info@ethica.app</p>
                </div>
              </div>
            </div>
            <div className = 'bg-white w-full lg:w-width32% rounded-2xl mt-5 lg:mt-0 shadow-cardsadow py-10 px-5'>
              <div className = 'flex'>
                <div className = 'lg:w-width20%'>
                  <div className = 'w-16 h-16 bg-[#f2f4fe] rounded-full self-center'>
                    <img src = { phoneabout } alt = 'phone' className = 'mx-auto pt-4' />
                  </div>
                </div>
                <div className = 'w-width80% ml-4 self-center'>
                  <h4 className = 'text-grey-500 text-base font-medium'>Phone Number</h4>
                  <p className = 'text-lightblack text-sm mt-1'>+91 78958 70084</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;
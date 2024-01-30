import React from 'react';


const SuperchargePortfolio = () => {
  const nse = process.env.PUBLIC_URL + '/images/icons/nse.svg';
  const bag = process.env.PUBLIC_URL + '/images/icons/bag.svg';
  const data = process.env.PUBLIC_URL + '/images/icons/data.svg';

  return (
    <div className = 'bg-sky_light25 py-8 lg:py-16'>
      <div className = 'container mx-auto px-5 lg:px-10'>
        <div className = 'w-full lg:w-8/12 mx-auto'>
          <h3 className = 'text-blacklight text-center text-2xl lg:text-4xl font-bold px-10 lg:px-0 pb-2'>Supercharge your Portfolio</h3>
          <p className = 'text-black_p text-sm lg:text-xl text-center mt-4'>Invest in diversified, fundamentally sound, long-term strategies.</p>
          <ul className = 'm-0 p-0 list-none'>
            <li className = 'mt-8 lg:mt-12'>
              <div className = 'block justify-center lg:justify-start lg:flex'>
                <div className = 'w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-yellow_light mx-auto lg:mx-0 self-center'><img className = 'w-8 lg:w-10 relative top-3.5 mx-auto' src = { nse } alt = 'nse' /></div>
                <div className = 'self-center ml-0 lg:ml-4'>
                  <h3 className = 'text-sm mt-4 lg:mt-0 text-center lg:text-left lg:text-xl text-blacklight font-bold'>Curated Basket of Stocks: NSE & BSE</h3>
                  <p className = 'text-center lg:text-left text-xs text-black_p mt-1'>Model portfolios designed and actively tracked by experts.</p>
                </div>
              </div>
            </li>
            <li className = 'mt-8 lg:mt-12'>
              <div className = 'block justify-center lg:justify-start lg:flex-nowrap lg:flex'>
                <div className = 'w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-blue_light_sky self-center mx-auto lg:mx-0'><img className = 'w-8 lg:w-9 relative top-3.5 mx-auto' src = { bag } alt = 'nse' /></div>
                <div className = 'self-center ml-0 lg:ml-4'>
                  <h3 className = 'text-sm mt-4 lg:mt-0 text-center lg:text-left lg:text-xl text-blacklight font-bold'>All Buy & Sell Updates</h3>
                  <p className = 'text-center lg:text-left text-xs text-black_p mt-1'>Updates delivered via WhatsApp, E-mail and Mobile App.</p>
                </div>
              </div>
            </li>
            <li className = 'mt-8 lg:mt-12'>
              <div className = 'block justify-center lg:justify-start lg:flex-nowrap lg:flex'>
                <div className = 'w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-redlight self-center mx-auto lg:mx-0'><img className = 'w-7 lg:w-8 relative top-3.5 mx-auto' src = { data } alt = 'nse' /></div>
                <div className = 'self-center ml-0 lg:ml-4'>
                  <h3 className = 'text-sm mt-4 lg:mt-0 text-center lg:text-left lg:text-xl text-blacklight font-bold'>Access to Data Room and Community</h3>
                  <p className = 'text-center lg:text-left text-xs text-black_p mt-1'>Get access to proprietary research reports, and exclusive investor community.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SuperchargePortfolio;
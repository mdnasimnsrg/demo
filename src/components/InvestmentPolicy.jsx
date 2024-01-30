import React from 'react';

const InvestmentPolicy = () => {

  const policywithlabel = process.env.PUBLIC_URL + '/images/policywithlabel.svg';
  const investmentmobile = process.env.PUBLIC_URL + '/images/investmentmobile.svg';

  return(
    <div className = 'sky_light25 py-8 lg:py-16'>
      <div className = 'container mx-auto px-5 lg:px-10'>
        <div className = 'relative'>
          <h3 className = 'text-blacklight text-center text-2xl lg:text-4xl font-bold pb-3'>Our Investment Policy</h3>
          <p className = 'text-black text-sm lg:text-lg text-center mt-3 lg:mt-5'>Investment Research Methodology by Ethica Invest</p>
          <div className = 'hidden lg:flex justify-center pt-10'><img className = 'investmentpolicyCustom' src = { policywithlabel } alt = 'policy'  /></div>
          <div className = 'flex lg:hidden justify-center pt-10'><img className = 'investmentpolicyCustom' src = { investmentmobile } alt = 'policy'  /></div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPolicy;
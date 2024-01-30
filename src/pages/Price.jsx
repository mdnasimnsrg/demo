import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import FreePlan from '../components/FreePlan';
import Header from '../components/Header';
import SmallcasePlan from './SmallcasePlan';
import VipPlan from './VipPlan';

const Price = () => {

  return(
    <>
      <Helmet>
        <meta charset = "utf-8" />
        <title>Pricing</title>
        <meta name = "description" content = "Pricing & Plans - Ethica Invest" />
        <meta name = "keywords" content = "Ethica Invest, Ethica, Invest, Investing, Pricing, Pricing for Ethica Invest, Pricing for Ethica, Pricing for Ethica Invest, How Much Does Ethica Charge, How Much Does Ethica Invest Charge, How Much Does Ethica Invest Cost, How Much Does Ethica Cost" />
        <meta name = "author" content = "Ethica Invest" />
        <link rel = "canonical" href = "https://ethica.app/pricing" />
      </Helmet>
      <Header />
      <div className = 'bg-grey_sky min-h-screen py-16'>
        <div className = 'container mx-auto px-5 lg:px-10'>
          <div>
            <h3 className = 'text-blacklight text-center text-2xl lg:text-4xl font-bold'>Subscription Plan</h3>
            <p className = 'text-center text-sm lg:text-base text-blacklight mt-3 pb-8 lg:pb-14'>Elevate your wealth journey  with Ethica Invest</p>
          </div>
          <div className = 'subscriptioncardwrp mx-auto flex-wrap justify-center lg:flex-nowrap flex lg:justify-between'>
            <div className = 'w-full md:w-3/5 lg:w-width31%'>
              <FreePlan />
            </div>
            <div className = 'w-full md:w-3/5 lg:w-width31%'>
              <VipPlan />
            </div>
            <div className = 'w-full md:w-3/5 lg:w-width31%'>
              <SmallcasePlan />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Price;
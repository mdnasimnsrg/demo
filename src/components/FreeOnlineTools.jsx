import React from 'react';
import MoreToolsComingSoon from './MoreToolsComingSoon';
import PortfolioVisualizer from './PortfolioVisualizer';
import StockScreener from './StockScreener';

const FreeOnlineTools = () => {

  return(
    <div className = 'bg-sky_light25 pt-10 lg:pt-16'>
      <div className = 'container mx-auto px-5 lg:px-10'>
        <h3 className = 'text-blacklight text-center text-2xl lg:text-4xl font-bold'>Free Online Tools</h3>
        <p className = 'text-black_p text-center text-sm lg:text-lg font-medium pb-14 pt-3'>Check out our collection of investor tools for free.</p>
        <PortfolioVisualizer />
        <div className = 'border-dotted border-b-2 border-primary-400 pt-10 lg:pt-12'></div>
        <StockScreener />
        <div className = 'border-dotted border-b-2 border-primary-400 pt-10 lg:pt-12'></div>
        <MoreToolsComingSoon />
      </div>
    </div>
  );
};

export default FreeOnlineTools;
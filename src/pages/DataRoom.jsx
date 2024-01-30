import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';
import LatestStockIdeas from '../components/LatestStockIdeas';
import MfgIndustrial from '../components/MfgIndustrial';
import NotRated from '../components/NotRated';
import TopBuyIdeas from '../components/TopBuyIdeas';

const DataRoom = () => {
  const mobileserach = process.env.PUBLIC_URL + '/images/icons/mobileserach.svg';

  return(
    <>
      <Helmet>
        <meta charset = "utf-8" />
        <title>Data Room</title>
        <meta name = "description" content = "Data Room - Ethica Invest" />
        <meta name = "keywords" content = "Ethica Invest, Ethica, Invest, Investing, Data Room, Data, Room, Data Room from Ethica Invest, Data Room from Ethica" />
        <meta name = "author" content = "Ethica Invest" />
        <link rel = "canonical" href = "https://ethica.app/data-room" />
      </Helmet>
      <DashboardHeader />
      <div className = 'bg-grey_sky min-h-screen py-8 lg:py-16'>
        <div className = 'container mx-auto px-5 lg:px-10'>
          <div>
            <h3 className = 'text-blacklight text-center text-2xl lg:text-4xl font-bold'>Data Room</h3>
          </div>
          <div className = 'flex justify-center ml-0 lg:ml-20 mt-14'>
            <input placeholder = 'Search for company' className = 'bg-primary-25 block w-full lg:w-10/12 xl:w-8/12 py-5 rounded-lg px-5 text-sm outline-primary-600' />
            <button className = 'block bg-primary relative serachboxdataroom py-3 px-7 lg:px-5 rounded-lg'><img src = { mobileserach } alt = 'searchnormal' /></button>
          </div>
          <div className = 'bg-[#E7FFF1] flex flex-wrap justify-center lg:justify-between rounded-3xl border border-green py-3 px-4 lg:px-7 mt-16'>
            <p className = 'text-sm text-center lg:text-left text-blacklight self-center'>1 Dec 2023: New Stock idea from Etical Sudarshan Chemical Industries Ltd. (Reco. Price: 479)</p>
            <Link href = '#' className = 'bg-green mt-5 lg:mt-0 rounded-full text-white py-2 px-6 text-base self-center'>View All</Link>
          </div>
          <LatestStockIdeas />
          <TopBuyIdeas />
          <NotRated />
          <MfgIndustrial />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DataRoom;
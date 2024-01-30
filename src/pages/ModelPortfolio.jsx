import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Buy from '../components/Buy';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';
import Hold from '../components/Hold';
import Sell from '../components/Sell';

const ModelPortfolio = () => {

  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Buy', 'Hold', 'Sell'];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return(
    <>
      <Helmet>
        <meta charset = "utf-8" />
        <title>Model Portfolio</title>
        <meta name = "description" content = "Model Portfolio - Ethica Invest" />
        <meta name = "keywords" content = "Ethica Invest, Ethica, Invest, Investing, Model Portfolio, Model, Portfolio, Model Portfolio from Ethica Invest, Model Portfolio from Ethica" />
        <meta name = "author" content = "Ethica Invest" />
        <link rel = "canonical" href = "https://ethica.app/model-portfolio" />
      </Helmet>
      <DashboardHeader />
      <div className = 'min-h-screen bg-grey_sky'>
        <div className = 'container mx-auto px-5 lg:px-10 mt-0.5'>
          <h3 className = 'py-8 text-2xl font-bold'>Model Portfolio</h3>
          <div className = 'inline-flex bg-white shadow-lg rounded-full mb-5'>
            { tabs.map((tab, index) => (
              <div className = { `py-2 px-8 lg:px-10 rounded-full text-base text-blacklight cursor-pointer ${index === activeTab? 'text-white bg-gradient-primary': 'bg-white'}` }
                key = { index }
                onClick = { () => handleTabClick(index) }
              >
                { tab }
              </div>
            )) }
          </div>
          <div>
            { tabs[activeTab] === 'Buy' ? <Buy /> : tabs[activeTab] === 'Hold' ? <Hold /> : tabs[activeTab] === 'Sell' ? <Sell /> : null }
          </div>
          <div className = 'mt-5 bg-white rounded-lg px-6 py-8'>
            <h3 className = 'text-xl lg:text-2xl font-bold'>Your Portfolio</h3>
            <div className = 'block lg:flex justify-between pt-10'>
              <div>
                <h3 className = 'text-grey-500 text-base lg:text-xl'>Invested</h3>
                <p className = 'text-2xl lg:text-3xl font-semibold pt-2'>27,742.30</p>
              </div>
              <div>
                <h3 className = 'text-grey-500 text-base lg:text-xl'>Current</h3>
                <p className = 'text-2xl lg:text-3xl font-semibold pt-2'>35,742.30</p>
              </div>
              <div>
                <h3 className = 'text-grey-500 text-base lg:text-xl'>P&L</h3>
                <p className = 'text-2xl lg:text-3xl font-semibold pt-2 text-green'>+7,731.70  (+50%)</p>
              </div>
            </div>
          </div>
          <div className = 'flex pt-8 pb-10'>
            <Link to = '/faq' className = 'block bg-gradient-primary rounded-lg w-56 px-4 py-3 text-white text-sm lg:text-base text-center'>Learn More</Link>
            <Link to = '/faq' className = 'block border border-primary-600 text-primary rounded-lg w-56 px-4 py-3 ml-4 text-sm lg:text-base text-center'>Learn More</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ModelPortfolio;
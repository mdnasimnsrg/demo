import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-scroll';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Generalfaq from './Generalfaq';

const Faq = () => {
  const OBJECTS = process.env.PUBLIC_URL + '/images/OBJECTS.svg';

  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['General', 'Ethical Compliance Methodology', 'Research Methodology'];
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  
  return(
    <>
      <Helmet>
        <meta charset = "utf-8" />
        <title>Frequently Asked Questions</title>
        <meta name = "description" content = "Frequently Asked Questions - Ethica Invest." />
        <meta name = "keywords" content = "Ethica Invest, Ethica, Invest, Investing, Frequently Asked Questions, FAQ, Frequently, Asked, Questions, How to Invest Money, How to Invest, How, Invest, Money, How to Invest in Stocks, How to Invest in Stock Market, How to Invest in Share Market, How to Invest in Share Market in India, How to Invest in Share Market Online, How to Invest in Share Market for Beginners, How to Invest in Share Market in Hindi, How to Invest in Share Market in India for Beginners, How to Invest in Share Market in India Online, How to Invest in Share Market in India for Beginners in Hindi, How to Invest in Share Market in India for Beginners in Tamil, How to Invest in Share Market in India for Beginners in Telugu, How to Invest in Share Market in India for Beginners in Malayalam, How to Invest in Share Market in India for Beginners in Kannada, How to Invest in Share Market in India for Beginners in Marathi, How to Invest in Share Market in India for Beginners in Bengali, How to Invest in Share Market in India for Beginners in Gujarati" />
        <meta name = "author" content = "Ethica Invest" />
        <link rel = "canonical" href = "https://ethica.app/faq" />
      </Helmet>
      <Header />
      <div className = 'bg-grey_sky py-8 lg:py-16'>
        <div className = 'container mx-auto px-5 lg:px-10'>
          <div className = 'block text-center lg:text-left lg:flex justify-between'>
            <div className = 'w-full lg:w-6/12 self-center'>
              <h3 className = 'text-blacklight text-2xl lg:text-4xl font-bold'>Ethica Invest FAQ</h3>
              <p className = 'text-blacklight text-sm mt-3 lg:mt-6'>If you’re new to Ethica Invest , this guide will help you learn more <br></br> about the platform and its features.</p>
            </div>
            <div className = 'self-center flex justify-center lg:justify-end'>
              <img src = { OBJECTS } alt = 'aboutimg' className = 'mt-12 lg:mt-0 w-11/12' />
            </div>
          </div>
          <div className = 'pt-20'>
            <div className = 'relative'>
              <div className = 'flex left-0 w-full md:w-1/4 lg:w-1/4 sticky-header'>
                <div className = 'w-1 bg-primary-25 h-64 mr-5'></div>
                <div>
                  { tabs.map((tab, index) => (
                    <Link
                      to = { index === 0 ? 'general' : index === 1 ? 'EthicalCompliancemethodology' : 'ResearchMethodoloy' }
                      spy = { true }
                      smooth = { true }
                      duration = { 500 }
                      className = { `py-8 ${index === activeTab ? 'custom-div font-bold' : ''} cursor-pointer block relative hover:text-primary` }
                      key = { index }
                      onClick = { () => handleTabClick(index) }
                    >
                      { tab }
                    </Link>
                  )) }
                </div>
              </div>
              <div className = 'flex justify-end faqrelative'>
                <div className = 'mt-12 md:mt-0 lg:mt-0 w-full md:w-9/12 lg:w-9/12'>
                  <Generalfaq />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import CaseStudies from '../components/CaseStudies';
import CreteriaSelectingCompany from '../components/CreteriaSelectingCompany';
import Footer from '../components/Footer';
import FreeOnlineTools from '../components/FreeOnlineTools';
import Header from '../components/Header';
import Howtogetstarted from '../components/Howtogetstarted';
import InvestmentPolicy from '../components/InvestmentPolicy';
import OurBeliefLearnings from '../components/OurBeliefLearnings';
import PremiumMembership from '../components/PremiumMembership';
import Services from '../components/Services';
import SuperchargePortfolio from '../components/SuperchargePortfolio';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charset = "utf-8" />
        <title>Ethica Invest - Create Wealth Investing in Big Ideas</title>
        <meta name = "description" content = "Ethica Invest: Get a research driven stock portfolio, focusing on high potential companies, geared to deliver returns year after year." />
        <meta name = "keywords" content = "Ethica Invest, Ethica, Invest, Investing, Stock, Portfolio, Research, High Potential, Returns, Wealth, Big Ideas, Big, Ideas, Big Ideas Investing" />
        <meta name = "author" content = "Ethica Invest" />
        <link rel = "canonical" href = "https://ethica.app" />
      </Helmet>
      <div className = 'bannerbgimg'>
        <Header />
        <div className = 'bannerheight lg:flex items-center'><Banner /></div>
      </div>
      <SuperchargePortfolio />
      <Howtogetstarted />
      <Testimonial />
      <CaseStudies />
      <InvestmentPolicy />
      <CreteriaSelectingCompany />
      <Services />
      <OurBeliefLearnings />
      <FreeOnlineTools />
      <PremiumMembership />
      <Footer />
    </div>
  );
};

export default Home;

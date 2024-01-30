import React from 'react';
import { Helmet } from 'react-helmet';
import CompanyInfo from '../components/CompanyInfo';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TeamMember from '../components/TeamMember';

const About = () => {
  const aboutimg = process.env.PUBLIC_URL + '/images/aboutimg.svg';
  const mission = process.env.PUBLIC_URL + '/images/mission.svg';
  
  return(
    <>
      <Helmet>
        <meta charset = "utf-8" />
        <title>About Ethica Invest</title>
        <meta name = "description" content = "Ethica Invest is a brand owned by Abdullah Zaman (INH000013244) that provides a platform for people who look for ethical investments." />
        <meta name = "keywords" content = "Ethica Invest, Ethica, Invest, Investing, About, About Ethica Invest, Abdullah Zaman, INH000013244, Ethical, Investments, Ethical Investments" />
        <meta name = "author" content = "Ethica Invest" />
        <link rel = "canonical" href = "https://ethica.app/about" />
      </Helmet>
      <Header />
      <div className = 'bg-grey_sky py-8 lg:py-16'>
        <div className = 'container mx-auto px-5 lg:px-10'>
          <div className = 'block text-center lg:text-left lg:flex justify-between'>
            <div className = 'w-full lg:w-6/12 self-center'>
              <h3 className = 'text-blacklight text-2xl lg:text-4xl font-bold'>About Us</h3>
              <p className = 'text-blacklight text-sm mt-3 lg:mt-6'>Ethica Invest is a brand owned by Abdullah Zaman (INH000013244) that provides a platform for people who look for ethical investments. We are a team of experienced professionals with a passion for technology and finance. We are committed to bringing the gold-standard of ethical financial information to the people and making it as accessible and accurate as possible.</p>
            </div>
            <div className = 'self-center flex justify-center lg:justify-end'>
              <img src = { aboutimg } alt = 'aboutimg' className = 'w-11/12 mt-5 lg:mt-0' />
            </div>
          </div>
          <div className = 'text-center mt-12 lg:text-left flex-col-reverse lg:flex-row flex justify-between'>
            <div className = 'self-center flex justify-center lg:justify-start'>
              <img src = { mission } alt = 'aboutimg' className = 'w-11/12 mt-5 lg:mt-0' />
            </div>
            <div className = 'w-full lg:w-6/12 self-center mt-5 lg:mt-0'>
              <h3 className = 'text-blacklight text-2xl lg:text-4xl font-bold'>Our Mission</h3>
              <p className = 'text-blacklight text-sm mt-3 lg:mt-6'>Our mission is to democratize Islamic Finance education and help Muslim investors around the world pursue their financial goals through our trading and financial education platform.</p>
            </div>
          </div>
        </div>
      </div>
      <TeamMember />
      <CompanyInfo />
      <Footer />
    </>
  );
};

export default About;
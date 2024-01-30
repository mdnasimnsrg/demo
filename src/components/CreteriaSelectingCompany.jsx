import React from 'react';
import { Link } from 'react-router-dom';
import CreteriaSelectingCompanyCard from './CreteriaSelectingCompanyCard';


const CreteriaSelectingCompany = () => {

  const lines = process.env.PUBLIC_URL + '/images/lines.svg';

  return(
    <div className = 'bg-sky_light50 py-8 lg:py-16 relative'>
      <div className = 'container mx-auto px-5 lg:px-10'>
        <h3 className = 'text-blacklight text-center text-2xl lg:text-4xl font-bold pb-3'>Creteria for selecting a company?</h3>
        <div className = 'hidden lg:block stokes'>
          <img src = { lines } alt = 'line' />
        </div>
        <div className = 'block lg:flex justify-center flex-wrap'>
          <CreteriaSelectingCompanyCard />
        </div>
        <div className = 'text-center mt-12 lg:mt-20'>
          <Link className = 'rounded-lg text-sm py-3.5 px-16 bg-gradient-primary text-white inline-block duration-500 hover:-translate-y-1' to = "/faq">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default CreteriaSelectingCompany;
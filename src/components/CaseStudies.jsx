import React from 'react';
import CaseStudiesCard from './CaseStudiesCard';

const CaseStudies = () => {

  return(
    <div className = 'bg-sky_light50 py-8 lg:py-16'>
      <div className = 'container mx-auto px-5 lg:px-10'>
        <div>
          <h3 className = 'text-blacklight text-center text-2xl lg:text-4xl font-bold'>Case Studies</h3>
          <p className = 'text-black_p text-sm lg:text-lg text-center mt-2 lg:mt-5 pb-0 lg:pb-12'>The securities quoted below are only for illustrative purposes.</p>
          <CaseStudiesCard />
        </div>
      </div>
    </div>
  );
};


export default CaseStudies;


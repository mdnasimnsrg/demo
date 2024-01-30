import React from 'react';
import { Link } from 'react-router-dom';

const PremiumMembership = () => {
  const premiumright = process.env.PUBLIC_URL + '/images/premiumright.svg';
  const premiumleft = process.env.PUBLIC_URL + '/images/premiumleft.svg';
  const Vector = process.env.PUBLIC_URL + '/images/Vector.svg';
  
  return(
    <div className = 'bg-sky_light50 py-10 lgpy-16 relative'>
      <div className = 'absolute left-0 top-40 lg:top-16'>
        <img src = { premiumleft } className = "w-20 lg:w-56" alt = 'premiumleft img' />
      </div>
      <div className = 'absolute right-0 bottom-0'>
        <img src = { premiumright } className = 'w-16 lg:w-52' alt = 'premiumright img' />
      </div>
      <div className = 'container mx-auto px-10'>
        <h3 className = 'text-blacklight text-center text-2xl lg:text-4xl font-bold pb-1 lg:pb-2'>Premium Membership</h3>
        <div className = 'w-32 lg:w-44 mx-auto'><img className = 'relative w-32 lg:w-44 left-16 lg:left-20' src = { Vector }  alt = 'Vector' /></div>
        <p className = 'text-black_p portfoli_p text-center text-sm lg:text-lg font-medium pt-3'>Ethica Invest is your partner in creating wealth for serious investors who care about <br></br> where their money is deployed.</p>
        <div className = 'text-center mt-20'>
          <Link className = 'rounded-lg text-sm py-3.5 px-8 bg-gradient-primary text-white inline-block duration-500 hover:-translate-y-1' to = "/faq">Explore Our Services</Link>
        </div>
      </div>
    </div>
  );
};

export default PremiumMembership;
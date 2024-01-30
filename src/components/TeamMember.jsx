import React from 'react';

const TeamMember = () => {
  const man1 = process.env.PUBLIC_URL + '/images/man1.svg';
  const man2 = process.env.PUBLIC_URL + '/images/man2.svg';
  // const man3 = process.env.PUBLIC_URL + '/images/man3.svg';
    
  return(
    <>
      <div className = 'bg-white py-8 lg:py-16'>
        <div className = 'container mx-auto px-5 lg:px-10'>
          <h3 className = 'text-blacklight text-2xl lg:text-4xl font-bold text-center pb-6 lg:pb-12'>Team Members</h3>
          <div className = 'block lg:flex justify-center'>
            <div className = 'bg-white w-full lg:w-width31.8% mr-0 lg:mr-5 border border-primary-25 rounded-2xl p-5'>
              <div className = 'w-52 h-52 rounded-full mx-auto'>
                <img src = { man1 } className = 'rounded-full' alt = 'man' />
              </div>
              <h3 className = 'text-blacklight text-xl lg:text-2xl font-bold mt-5'>Abdullah Zaman</h3>
              <h4 className = 'text-blacklight text-base py-2'>CEO & Co-Founder</h4>
              <p className = 'text-sm'>Abdullah is the founder & CEO at Ethica Invest. He has an MBA in Banking and Finance and B. Sc. in Industrial Chemistry. He prioritises long-term investing while identifying industries benefiting from structural tailwinds synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.</p>
            </div>
            <div className = 'bg-white w-full lg:w-width31.8% mt-5 lg:mt-0 border border-primary-25 rounded-2xl p-5'>
              <div className = 'w-52 h-52 rounded-full mx-auto'>
                <img src = { man2 } className = 'rounded-full' alt = 'man' />
              </div>
              <h3 className = 'text-blacklight text-xl lg:text-2xl font-bold mt-5'>Anees Ahmad</h3>
              <h4 className = 'text-blacklight text-base py-2'>Head of Equity Research</h4>
              <p className = 'text-sm'>Anees is a SEBI registered Investment advisor (INA100016266) and serves as the head of equity research at Ethica Invest. He has previously been the Product Manager at ICICI Securities.</p>
            </div>
            { /* <div className = 'bg-white w-full lg:w-width31.8% mt-5 lg:mt-0 border border-primary-25 rounded-2xl p-5'>
              <div className = 'w-52 h-52 rounded-full mx-auto'>
                <img src = { man3 } className = 'rounded-full' alt = 'man' />
              </div>
              <h3 className = 'text-blacklight text-xl lg:text-2xl font-bold mt-5'>Isaar Ahmad</h3>
              <h4 className = 'text-blacklight text-base py-2'>Quantitative Expert</h4>
              <p className = 'text-sm'>Isaar Ahmad is our quantitative expert. He holds a Masters degree from IIT Delhi. He holds specialization in the area of applied AI/ML, optimization algorithms and computer hardware. He is applying his quants and computer science knowledge to optimize our portfolio management strategies.</p>
            </div> */ }
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
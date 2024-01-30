import React from 'react';
import { Link } from 'react-router-dom';
const Getstratedcard = () => {
  const right = process.env.PUBLIC_URL + '/images/icons/right.svg';
  const Vector = process.env.PUBLIC_URL + '/images/icons/Vector.svg';
  return(
    <div className = 'mt-8 lg:mt-0 bg-white_light border border-boderColor lg:w-6/12 xl:w-custom rounded-3xl px-5 lg:px-7 py-5 lg:py-11'>
      <ul className = 'm-0 p-0 list-none'>
        <li>
          <div className = 'flex'>
            <div className = 'w-7 self-center'><img src = { right } alt = 'righticon' /></div>
            <p className = 'text-sm balcklight ml-3 self-center'>Historically better returns than other asset classes.</p>
          </div>
        </li>
        <li className = 'pt-6'>
          <div className = 'flex'>
            <div className = 'w-7 self-center'><img src = { right } alt = 'righticon' /></div>
            <p className = 'text-sm balcklight ml-3 self-center'>Start with any amount, no minimum requirements.</p>
          </div>
        </li>
        <li className = 'pt-12'>
          <Link className = 'flex justify-center rounded-lg text-sm py-3.5 bg-gradient-primary text-white duration-500 hover:-translate-y-1' to = "/signup" >Get Started <span className = 'self-center ml-3'>< img src = { Vector } alt = 'arrow' /></span></Link>
        </li>
      </ul>
    </div>
  );
};

export default Getstratedcard;
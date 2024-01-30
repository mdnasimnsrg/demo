import axios from 'axios';
import React, { useState } from 'react';
import { API } from '../config/index';
import Getstratedcard from './Getstratedcard';
import SearchResultsHomepage from './SearchResultsHomepage';
import Strategies from './Strategies';
const Banner = () => {

  // const searchnormal = process.env.PUBLIC_URL + '/images/icons/search-normal.svg';
  const Vector = process.env.PUBLIC_URL + '/images/Vector.svg';
  const mobileserach = process.env.PUBLIC_URL + '/images/icons/mobileserach.svg';

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);


  const fetchSearchResults = async (term) => {
    try {
      const encodedTerm = encodeURIComponent(term);
      const endpoint = API + `securities/search?query=${encodedTerm}`;
      
      // Replace fetch with axios
      const response = await axios.get(endpoint);
      
      setSearchResults(response.data);
    } catch (error) {
      if (error.response && error.response.status === 500) {
        setSearchResults([]);
      } 
    }
  };



  // Handler for input change
  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    const timeoutId = setTimeout(() => {
      fetchSearchResults(value);
    }, 200);

    setTypingTimeout(timeoutId);
  };

  
  return(
    <>
      <div className = 'container mx-auto px-5 lg:px-10 box-border'>
        <div className = 'block lg:flex justify-between pt-8 lg:pt-16'>
          <div className = 'w-full lg:w-3/5 pt-3'>
            <h3 className = 'text-blacklight text-center lg:text-left text-2xl lg:text-4xl xl:text-5xl font-bold'>Create Wealth Investing <br></br> in Big Ideas</h3>
            <div className = 'w-48 mx-auto'><img className = 'relative w-28 left-28 lg:w-40 xl:w-48 lg:left-24 xl:left-20 top-topcustom' src = { Vector }  alt = 'Vector' /></div>
            <p className = 'hidden lg:block text-sm black_p mt-8 font-medium'>Get a research driven stock portfolio, focusing on high potential<br></br> companies, geared to deliver returns year after year.</p>
            <p className = 'block lg:hidden text-center text-sm text-black_p mt-6 font-medium'>Ethica Invest offers a research based stock portfolio, focusing on high potential companies, geared to deliver consistent returns year after year.</p>
            <div className = 'flex mt-6 relative items-center'>
              <input placeholder = 'Search for Stocks' value = { searchTerm }
                onChange = { handleInputChange } className = 'bg-white block w-full lg:w-10/12 xl:w-8/12 border border-grey-400 py-4 rounded-full px-12 text-sm outline-primary-600' />
              <button className = 'block bg-primary absolute serachbox w-8 h-8 rounded-full'><img src = { mobileserach } className = 'mx-auto' alt = 'searchnormal' /></button>
              <SearchResultsHomepage results = { searchResults } />
            </div>
          </div>
          <Getstratedcard />
        </div>
        <div className = 'hidden lg:block'><Strategies /></div>
      </div>
      <div className = 'block lg:hidden'><Strategies /></div>
    </>
  );
};

export default Banner;
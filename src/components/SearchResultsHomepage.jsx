/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';


const SearchResultsHomepage = ({results}) => {
  return(
    <>
      {
        results?.data?.length > 0 && <ul className = "h-72 overflow-y-auto m-0 pb-8 pt-3 px-8 bg-white w-full absolute top-14 z-50 lg:w-10/12 xl:w-8/12 rounded-lg shadow-searchcard custom-scroll">
          {
            results?.data?.map((item, index) => (
              <li key = { index } className = "mt-2">
                <Link className = "block" to = "#">
                  <div className = "flex justify-between border-b pb-2 border-grey-300">
                    <p className = "text-black text-sm self-center">{ item.name }</p>
                    <p className = "text-grey-600 text-sm self-center">{ item.exchange }</p>
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      }
    </>
  );
};


export default SearchResultsHomepage;
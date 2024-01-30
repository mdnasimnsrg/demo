import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';

const DataroomDetails = () => {
  const roomdetailsimg = process.env.PUBLIC_URL + '/images/roomdetailsimg.svg';
  return(
    <>
      <Helmet>
        <meta charset = "utf-8" />
        <title>Data Room Details</title>
        <meta name = "description" content = "Data Room Details - Ethica Invest" />
        <meta name = "keywords" content = "Ethica Invest, Ethica, Invest, Investing, Data Room, Data, Room, Data Room from Ethica Invest, Data Room from Ethica" />
        <meta name = "author" content = "Ethica Invest" />
      </Helmet>
      <DashboardHeader />
      <div className = 'bg-grey_sky lg:min-h-screen lg:flex items-center py-12'>
        <div className = 'container mx-auto px-5 lg:px-10'>
          <div className = 'lg:flex'>
            <div className = 'mr-12'>
              <Link className = 'block hover:bg-primary text-center pt-2 hover:text-white hover:duration-500 duration-500 bg-blue_light_sky w-11 h-11 rounded-full border border-primary' to = "/data-room"><ArrowBackIcon className = 'customarrow' /></Link>
            </div>
            <div className = 'w-full'>
              <div className = 'md:flex'>
                <div className = 'w-72 h-48 bg-white border border-[#B6C2FF] rounded-2xl flex items-center justify-center mt-5'>
                  <img src = { roomdetailsimg } className = 'w-48' alt = 'roomdetailsimg' />
                </div>
                <div className = 'ml-0 md:ml-8 self-center mt-5'>
                  <h4 className = 'text-grey-600 text-sm uppercase'>BUY IDEA</h4>
                  <h3 className = 'text-xl text-lightblack font-bold mt-1'>Sudarshan</h3>
                  <p className = 'mt-3 text-black_p text-sm'>Sudarshan recent figures indicate a strong growth potential in <br /> the short to mid term. View the report for details.</p>
                  <div className = 'mt-8'>
                    <Link className = "rounded-lg text-base py-1.5 w-36 text-center text-errors border border-errors inline-block mr-4 duration-500 hover:-translate-y-1" href = "#">Report</Link>
                    <Link className = "rounded-lg text-base py-1.5 w-36 text-center text-primary border border-primary inline-block duration-500 hover:-translate-y-1" href = "#">View More</Link>
                  </div>
                </div>
              </div>
              <div className = 'md:flex justify-between rounded-2xl bg-white shadow-roomcard p-6 mt-10'>
                <div>
                  <p className = 'text-grey-500 text-base'>Rating</p>
                  <h3 className = 'text-xl font-semibold text-green'>Positive</h3>
                </div>
                <div className = 'mt-3'>
                  <p className = 'text-grey-500 text-base'>Days Since Entry</p>
                  <h3 className = 'text-xl font-semibold text-green'>90 days</h3>
                </div>
                <div className = 'mt-3'>
                  <p className = 'text-grey-500 text-base'>Price change since entry</p>
                  <h3 className = 'text-xl font-semibold text-green'>4%</h3>
                </div>
                <div className = 'mt-3'>
                  <p className = 'text-grey-500 text-base'>Weightage</p>
                  <h3 className = 'text-xl font-semibold text-green'>4%</h3>
                </div>
              </div>
              <div className = 'mt-10'>
                <a className = "rounded-lg text-sm md:text-base py-3 w-36 md:w-52 bg-gradient-primary font-semibold text-white text-center inline-block buttonhightmobile md:h-buttonhight mr-5 duration-500 hover:-translate-y-1" href = '#'>View Report</a>
                <button className = "rounded-lg text-sm md:text-base py-3 w-36 md:w-52 bg-transparent font-semibold border border-primary text-center buttonhightmobile md:h-buttonhight text-primary inline-block duration-500 hover:-translate-y-1">Download Report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DataroomDetails;
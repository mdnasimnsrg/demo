
import axios from 'axios';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import DashboardHeader from '../components/DashboardHeader';
import { API } from '../config/index';
const Dashboard = () => {
  useEffect(() => {

    axios.get(API + 'model-portfolios/main')
      .then(response => {
      // Handle the response
        console.log('responsedata',response.data);
      })
      .catch(error => {
      // Handle the error
        console.error(error);
      });
  }, []);

  return (
    <>
      <Helmet>
        <meta charset = "utf-8" />
        <title>Dashboard</title>
        <meta name = "description" content = "Dashboard - Ethica Invest" />
        <meta name = "keywords" content = "Ethica Invest, Ethica, Invest, Investing, Dashboard, Dashboard for Ethica Invest, Dashboard for Ethica" />
        <meta name = "author" content = "Ethica Invest" />
        <link rel = "canonical" href = "https://ethica.app/dashboard" />
      </Helmet>
      <DashboardHeader />
      <div className = 'bg-grey_sky min-h-screen py-8 lg:py-16'>
        <div className = 'container mx-auto px-5 lg:px-10'>
          <div>
            <h3 className = 'text-blacklight text-center text-2xl lg:text-4xl font-bold'>Dashboard</h3>
            <iframe className = 'w-full h-96' src = "https://docs.google.com/spreadsheets/d/1Co5spnexQohfeAgaTuhYZ8VDTpMuN2dQH8l_g4fmeyk/edit#gid=0"></iframe>
          </div>
        </div>
      </div>

    </>
  );
};

export default Dashboard;
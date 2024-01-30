/* eslint-disable react/prop-types */
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import React from 'react';
import { Helmet } from 'react-helmet';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';


const AccordionItem = ({ header, ...rest }) => (
  <Item
    { ...rest }
    className = "accordianbtn"
    header = {
      <>
        { header }
        { /* <div>nasim</div> */ }
      </>
    }
    
  />
);

const RebalanceTimeline = () => {

  const groupcheck = process.env.PUBLIC_URL + '/images/icons/groupcheck.svg';
  const emptycircle = process.env.PUBLIC_URL + '/images/icons/emptycircle.svg';
  const up = process.env.PUBLIC_URL + '/images/icons/up.svg';
  const Polygon = process.env.PUBLIC_URL + '/images/icons/Polygon.svg';
  const downred = process.env.PUBLIC_URL + '/images/icons/downred.svg';
  const down = process.env.PUBLIC_URL + '/images/icons/down.svg';
  
  return(
    <>
      <Helmet>
        <meta charset = "utf-8" />
        <title>Rebalance Timeline</title>
        <meta name = "description" content = "Model Portfolio Rebalance Timeline - Ethica Invest" />
        <meta name = "keywords" content = "Ethica Invest, Ethica, Invest, Investing, Rebalance Timeline, Rebalance, Timeline, Rebalance Timeline from Ethica Invest, Rebalance Timeline from Ethica" />
        <meta name = "author" content = "Ethica Invest" />
        <link rel = "canonical" href = "https://ethica.app/rebalance-timeline" />
      </Helmet>
      <DashboardHeader />
      <div className = 'bg-grey_sky lg:min-h-screen py-8 lg:py-16'>
        <div className = 'container mx-auto px-5 lg:px-10'>
          <div className = 'md:flex lg:flex justify-between'>
            <h3 className = 'text-xl lg:text-4xl text-blacklight font-bold self-center'>Rebalance Timeline</h3>
            <button className = 'rounded-lg text-sm md:text-base mt-5 md:mt-0 lg:mt-0 py-2 lg:py-3 w-36 md:w-52 bg-transparent font-semibold border border-primary text-center buttonhightmobile md:h-buttonhight text-primary inline-block duration-500 hover:-translate-y-1 self-center'>Download</button>
          </div>
          <div className = 'bg-white rounded-xl p-4 lg:p-10 mt-5 relative'>
            <div className = 'flex'>
              <div>
                <div className = 'dotted-border' ></div>
              </div>
              <div className = 'w-full'>
                <Accordion>
                  <AccordionItem header = {
                    <>
                      <div className = 'flex justify-between'>
                        <div className = 'flex'>
                          <div className = 'self-center mr-3'><img className = 'relative' src = { emptycircle } /></div>
                          <p className = 'self-center text-xs lg:text-sm'>Dec 15, 2023</p>
                        </div>
                        <div className = 'self-center text-xs lg:text-sm'>Next Review</div>
                      </div>
                      <div className = 'w-width90% md:w-width96% lg:w-width96% bg-[#A9ACBB] h-px ml-ml10% md:ml-ml4% lg:ml-ml4% mt-5 opacity-30'></div>
                    </>
                  }>
                    <ul className = 'ml-8 lg:ml-32'>
                      <li className = 'mt-6'>
                        <div className = 'flex'>
                          <div className = 'self-center bg-green w-4 h-4 rounded-full mr-3'></div>
                          <p className = 'w-11/12 self-center text-blacklight text-xs md:text-sm lg:text-base'>Added TATASTEEL with an allocation of 50% Entry Price : Rs 1,000.00</p>
                        </div>
                      </li>
                      <li className = 'mt-6'>
                        <div className = 'flex'>
                          <div className = 'self-center bg-red w-4 h-4 rounded-full mr-3'></div>
                          <p className = 'w-11/12 self-center text-blacklight text-xs md:text-sm lg:text-base'>Added TATASTEEL with an allocation of 50% Entry Price : Rs 1,000.00</p>
                        </div>
                      </li>
                    </ul>
                  </AccordionItem>

                  <AccordionItem header = {
                    <>
                      <div className = 'flex justify-between mt-5'>
                        <div className = 'flex'>
                          <div className = 'self-center mr-3'><img className = 'relative' src = { groupcheck } /></div>
                          <p className = 'self-center text-xs lg:text-sm'>Sep 15, 2023</p>
                        </div>
                        <div className = 'self-center'><a href = '#' className = 'border border-grey rounded-lg py-2 md:py-3.5 lg:py-3.5 px-2 md:px-3 lg:px-3 text-xs lg:text-sm'>+1  | -0   Constituents <img src = { up } className = 'inline-block' alt = 'up img' /></a></div>
                      </div>
                      <div className = 'flex justify-between mt-2'>
                        <div className = 'flex ml-16'>
                          <img src = { Polygon } className = 'w-4 mr-2' alt = 'Polygon' />
                          <a href = '#' className = 'text-green text-xs lg:text-sm'> 9.50 %</a>
                        </div>
                        <div className = 'w-width86% bg-[#A9ACBB] h-px self-center opacity-30'></div>
                      </div>
                    </>
                  }>
                    <ul className = 'ml-8 lg:ml-32'>
                      <li className = 'mt-6'>
                        <div className = 'flex'>
                          <div className = 'self-center bg-green w-4 h-4 rounded-full mr-3'></div>
                          <p className = 'w-11/12 self-center text-blacklight text-xs md:text-sm lg:text-base'>Added TATASTEEL with an allocation of 50% Entry Price : Rs 1,000.00</p>
                        </div>
                      </li>
                      <li className = 'mt-6'>
                        <div className = 'flex'>
                          <div className = 'self-center bg-red w-4 h-4 rounded-full mr-3'></div>
                          <p className = 'w-11/12 self-center text-blacklight text-xs md:text-sm lg:text-base'>Added TATASTEEL with an allocation of 50% Entry Price : Rs 1,000.00</p>
                        </div>
                      </li>
                    </ul>
                  </AccordionItem>

                  <AccordionItem header = {
                    <>
                      <div className = 'flex justify-between mt-5'>
                        <div className = 'flex'>
                          <div className = 'self-center mr-3'><img className = 'relative' src = { groupcheck } /></div>
                          <p className = 'self-center text-xs lg:text-sm'>Sep 15, 2023</p>
                        </div>
                        <div className = 'self-center text-xs lg:text-sm'><p>No change</p></div>
                      </div>
                      <div className = 'flex justify-between mt-2'>
                        <div className = 'flex ml-16'>
                          <img src = { Polygon } className = 'w-4 mr-2' alt = 'Polygon' />
                          <a href = '#' className = 'text-green text-xs lg:text-sm'> 9.50 %</a>
                        </div>
                        <div className = 'w-width86% bg-[#A9ACBB] h-px self-center opacity-30'></div>
                      </div>
                    </>
                  }>
                    <ul className = 'ml-8 lg:ml-32'>
                      <li className = 'mt-8'>
                        <div className = 'flex'>
                          <div className = 'self-center bg-green w-4 h-4 rounded-full mr-3'></div>
                          <p className = 'w-11/12 self-center text-blacklight text-base'>Added TATASTEEL with an allocation of 50% Entry Price : Rs 1,000.00</p>
                        </div>
                      </li>
                      <li className = 'mt-8'>
                        <div className = 'flex'>
                          <div className = 'self-center bg-red w-4 h-4 rounded-full mr-3'></div>
                          <p className = 'w-11/12 self-center text-blacklight text-base'>Added TATASTEEL with an allocation of 50% Entry Price : Rs 1,000.00</p>
                        </div>
                      </li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem header = {
                    <>
                      <div className = 'flex justify-between mt-5'>
                        <div className = 'flex'>
                          <div className = 'self-center mr-3'><img className = 'relative' src = { groupcheck } /></div>
                          <p className = 'self-center text-xs lg:text-sm'>July 15, 2023</p>
                        </div>
                        <div className = 'self-center'><a href = '#' className = 'text-xs lg:text-sm border border-grey rounded-lg py-2 md:py-3.5 lg:py-3.5 px-2 md:px-3 lg:px-3'>+1  | -0   Constituents <img src = { down } className = 'inline-block' alt = 'down img' /></a></div>
                      </div>
                      <div className = 'flex justify-between mt-2'>
                        <div className = 'flex ml-16'>
                          <img src = { downred } className = 'w-4 mr-2' alt = 'Polygon' />
                          <a href = '#' className = 'text-green text-xs lg:text-sm'> 9.50 %</a>
                        </div>
                        <div className = 'w-width86% bg-[#A9ACBB] h-px self-center opacity-30'></div>
                      </div>
                    </>
                  }>
                    <ul className = 'ml-8 lg:ml-32'>
                      <li className = 'mt-8'>
                        <div className = 'flex'>
                          <div className = 'self-center bg-green w-4 h-4 rounded-full mr-3'></div>
                          <p className = 'w-11/12 self-center text-blacklight text-xs md:text-sm lg:text-base'>Added TATASTEEL with an allocation of 50% Entry Price : Rs 1,000.00</p>
                        </div>
                      </li>
                      <li className = 'mt-8'>
                        <div className = 'flex'>
                          <div className = 'self-center bg-red w-4 h-4 rounded-full mr-3'></div>
                          <p className = 'w-11/12 self-center text-blacklight text-xs md:text-sm lg:text-base'>Added TATASTEEL with an allocation of 50% Entry Price : Rs 1,000.00</p>
                        </div>
                      </li>
                    </ul>
                  </AccordionItem>
                  <div className = 'mt-5'>
                    <AccordionItem header = {
                      <>
                        <div className = 'flex justify-between'>
                          <div className = 'flex'>
                            <div className = 'self-center mr-3'><img className = 'relative' src = { groupcheck } /></div>
                            <p className = 'self-center text-xs lg:text-sm'>Dec 15, 2023</p>
                          </div>
                          <div className = 'self-center text-xs lg:text-sm'><p>+ 5 rebalances</p></div>
                        </div>
                        <div className = 'w-width90% md:w-width96% lg:w-width96% bg-[#A9ACBB] h-px ml-ml10% md:ml-ml4% lg:ml-ml4% mt-5 opacity-30'></div>
                      </>
                    }>
                      <ul className = 'ml-8 lg:ml-32'>
                        <li className = 'mt-6'>
                          <div className = 'flex'>
                            <div className = 'self-center bg-green w-4 h-4 rounded-full mr-3'></div>
                            <p className = 'w-11/12 self-center text-blacklight text-xs md:text-sm lg:text-base'>Added TATASTEEL with an allocation of 50% Entry Price : Rs 1,000.00</p>
                          </div>
                        </li>
                        <li className = 'mt-6'>
                          <div className = 'flex'>
                            <div className = 'self-center bg-red w-4 h-4 rounded-full mr-3'></div>
                            <p className = 'w-11/12 self-center text-blacklight text-xs md:text-sm lg:text-base'>Added TATASTEEL with an allocation of 50% Entry Price : Rs 1,000.00</p>
                          </div>
                        </li>
                      </ul>
                    </AccordionItem>
                  </div>
                  <div className = 'mt-5'>
                    <AccordionItem header = {
                      <>
                        <div className = 'flex justify-between'>
                          <div className = 'flex'>
                            <div className = 'self-center mr-3'><img className = 'relative' src = { groupcheck } /></div>
                            <p className = 'self-center text-xs lg:text-sm'>Dec 15, 2023</p>
                          </div>
                          <div className = 'self-center'><p className = 'text-xs lg:text-sm'>small case went <span className = 'text-red'>Live</span></p></div>
                        </div>
                      </>
                    }>
                      <ul className = 'ml-8 lg:ml-32'>
                        <li className = 'mt-6'>
                          <div className = 'flex'>
                            <div className = 'self-center bg-green w-4 h-4 rounded-full mr-3'></div>
                            <p className = 'w-11/12 self-center text-blacklight text-xs md:text-sm lg:text-base'>Added TATASTEEL with an allocation of 50% Entry Price : Rs 1,000.00</p>
                          </div>
                        </li>
                        <li className = 'mt-6'>
                          <div className = 'flex'>
                            <div className = 'self-center bg-red w-4 h-4 rounded-full mr-3'></div>
                            <p className = 'w-11/12 self-center text-blacklight text-xs md:text-sm lg:text-base'>Added TATASTEEL with an allocation of 50% Entry Price : Rs 1,000.00</p>
                          </div>
                        </li>
                      </ul>
                    </AccordionItem>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RebalanceTimeline;
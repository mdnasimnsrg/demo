/* eslint-disable react/prop-types */

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import leraningData from './OurBeliefLearningsCard';

const OurBeliefLearnings = () => {
  const right = process.env.PUBLIC_URL + '/images/right.png';
  const itemsToShowInitially = 3;

  const [visibleItems, setVisibleItems] = useState(itemsToShowInitially);

  const handleShowAllClick = () => {
    setVisibleItems(leraningData.length);
  };


  const MorecontentPopup = ({ morecontent }) => (
    <Popup trigger = { <div className = 'absolute right-5 bottom-2.5 cursor-pointer'><img src = { right } alt = 'right' className = 'w-6' /></div> } position = "left center">
      <div className = 'text-sm text-black_p py-2 px-2'>{ morecontent }</div>
    </Popup>
  );

  const CustomButtonGroup = ({ next, previous }) => {
   
    return (
      <div className = "hidden lg:block absolute top-0 right-5">
        <button onClick = { () => previous() } className = 'hover:bg-primary hover:text-white hover:duration-500 duration-500 bg-blue_light_sky lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full border border-primary mr-5'><ArrowBackIcon className = 'customarrow' /></button>
        <button onClick = { () => next() } className = 'hover:bg-primary hover:text-white hover:duration-500 duration-500 bg-blue_light_sky lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full border border-primary'><ArrowForwardIcon className = 'customarrow' /></button>
      </div>
    );
  };
  CustomButtonGroup.propTypes = {
    next: PropTypes.func,
    previous: PropTypes.func,
    goToSlide: PropTypes.func,
    carouselState: PropTypes.object
  };

  return (
    <>
      <div className = 'bg-sky_light50 pt-10 lg:pt-16 pb-10 lg:pb-20'>
        <div className = 'container mx-auto px-5 lg:px-10'>
          <h3 className = 'text-blacklight text-center text-2xl lg:text-4xl font-bold'>Our Beliefs & Learnings</h3>
          <div className = 'hidden lg:block'>
            <Carousel className = 'pt-24'
              customButtonGroup = { <CustomButtonGroup /> }
              additionalTransfrom = { 0 }
              arrows = { false }
              autoPlaySpeed = { 3000 }
              centerMode = { false }
              dotListClass = ""
              draggable = { true }
              focusOnSelect = { false }
              infinite
              itemClass = ""
              keyBoardControl
              minimumTouchDrag = { 80 }
              partialVisible
              pauseOnHover
              renderArrowsWhenDisabled = { false }
              renderButtonGroupOutside = { false }
              renderDotsOutside = { false }
              responsive = { {
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 3
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 60
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 2
                }
              } }
              rewind = { false }
              rewindWithAnimation = { false }
              rtl = { false }
              shouldResetAutoplay
              showDots = { false }
              sliderClass = ""
              slidesToSlide = { 1 }
              swipeable
            >
              { leraningData.map((item, index) => (
                <div key = { index } className = { item.linkClassName }>
                  <div className = { item.circleClassName }><span className = 'block relative text-center top-4 text-bold'>{ item.circleNumber }</span></div>
                  <h3 dangerouslySetInnerHTML = { { __html: item.title } }></h3>
                  <p className = 'text-black_p text-xs'>{ item.subtitle }</p>
                  <MorecontentPopup morecontent = { item.moresubtitle } />
                </div>
              )) }
            </Carousel>
          </div>
          <div className = 'block lg:hidden mt-12'>
            { leraningData.slice(0, visibleItems).map((item, index) => (
              <div key = { index } className = { item.linkClassName }>
                <div className = { item.circleClassName }><span className = 'block relative text-center top-4 text-bold'>{ item.circleNumber }</span></div>
                <h3 dangerouslySetInnerHTML = { { __html: item.title } }></h3>
                <p className = 'text-black_p text-xs'>{ item.subtitle }</p>
                <MorecontentPopup morecontent = { item.moresubtitle } />
              </div>
              
            )) }
            { leraningData.length > itemsToShowInitially && (
              <div className = 'text-center mt-8'><button className = 'rounded-lg text-sm py-3.5 px-16 text-primary border border-primary inline-block duration-500 hover:-translate-y-1 font-semibold' onClick = { handleShowAllClick }>See All</button></div>
            ) }
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBeliefLearnings;

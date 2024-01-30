/* eslint-disable react/prop-types */
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PropTypes from 'prop-types';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Popup from 'reactjs-popup';

const TopBuyIdeas = () => {

  const item = process.env.PUBLIC_URL + '/images/item.svg';
  const right = process.env.PUBLIC_URL + '/images/right.svg';
  const item2 = process.env.PUBLIC_URL + '/images/item2.svg';
  const item4 = process.env.PUBLIC_URL + '/images/item4.svg';

  const CaseStudiesArray = [
    {
      label: '<div class = \'stockitem bg-green w-24 lg:w-28 xl:w-32 text-white text-sm text-center py-1.5 absolute right-0 rounded-tr-lg\'>Buy</div>',
      img: item,
      heading: '01',
      moresubtitle: 'What not to buy is more important than what to buy in the stock markets. Do fewer mistakes and more content will come here'
    },
    {
      label: '<div class = \'stockitem bg-green w-24 lg:w-28 xl:w-32 text-white text-sm text-center py-1.5 absolute right-0 rounded-tr-lg\'>Buy</div>',
      img: item2,
      heading: '02',
      moresubtitle: 'What not to buy is more important than what to buy in the stock markets. Do fewer mistakes and more content will come here'
    },
    {
      label: '<div class = \'stockitem bg-green w-24 lg:w-28 xl:w-32 text-white text-sm text-center py-1.5 absolute right-0 rounded-tr-lg\'>Buy</div>',
      img: item,
      heading: '03',
      moresubtitle: 'What not to buy is more important than what to buy in the stock markets. Do fewer mistakes and more content will come here'
    },
    {
      label: '<div class = \'stockitem bg-green w-24 lg:w-28 xl:w-32 text-white text-sm text-center py-1.5 absolute right-0 rounded-tr-lg\'>Buy</div>',
      img: item4,
      heading: '04',
      moresubtitle: 'What not to buy is more important than what to buy in the stock markets. Do fewer mistakes and more content will come here'
    },
    {
      label: '<div class = \'stockitem bg-green w-24 lg:w-28 xl:w-32 text-white text-sm text-center py-1.5 absolute right-0 rounded-tr-lg\'>Buy</div>',
      img: item,
      heading: '05',
      moresubtitle: 'What not to buy is more important than what to buy in the stock markets. Do fewer mistakes and more content will come here'
    }

  ];

  const CustomButtonGroup = ({ next, previous }) => {
   
    return (
      <div className = "hidden lg:block absolute top-0 right-0">
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


  const MorecontentPopup = ({ morecontent }) => (
    <Popup trigger = { <div className = 'absolute right-5 bottom-2.5 cursor-pointer'><img src = { right } alt = 'right' className = 'w-7' /></div> } position = "left center">
      <div className = 'text-sm text-black_p py-2 px-2'>{ morecontent }</div>
    </Popup>
  );

  return(
    <>
      <div className = 'pt-10 relative'>
        <h3 className = 'text-blacklight text-xl lg:text-2xl font-bold pb-8 absolute top-12'>Top Buy Ideas</h3>
        <Carousel className = 'pt-16'
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
              items: 4,
              partialVisibilityGutter: 10
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 40
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 40
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
          {
            CaseStudiesArray.length > 0 && CaseStudiesArray.map((val, i) => (
              <div className = 'w-custom94 h-48 bg-white rounded-2xl relative px-4 lg:px-7 pb-7 border-t-2 border-green_dark  cursor-pointer duration-500 hover:-translate-y-1' key = { i }>
                <div dangerouslySetInnerHTML = { { __html: val.label } }></div>
                <h3 className = ' text-blue_sky text-5xl font-bold opacity-10 pt-5'>{ val.heading }</h3>
                <div className = 'w-44 mx-auto pt-4 pb-6'>
                  <img src = { val.img } className = 'w-44' alt = 'item' />
                </div>
                <MorecontentPopup morecontent = { val.moresubtitle } />
              </div>
            ))
          }
        </Carousel>
      </div>

    </>
  );
};

export default TopBuyIdeas;
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PropTypes from 'prop-types';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialArray from './Testimonialcard';

const Testimonial = () => {
  const CustomButtonGroup = ({ next, previous }) => {
   
    return (
      <div className = "hidden lg:block absolute top-0 right-4">
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
    <div className = "container mx-auto pl-5 lg:px-10">
      <div className = 'py-8 lg:py-16'>
        <h3 className = "text-blacklight text-center text-2xl lg:text-4xl font-bold">Testimonials</h3>
        <Carousel
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
          { TestimonialArray.length > 0 &&
            TestimonialArray.map((val, i) => (
              <div key = { i } className = "mt-5 lg:mt-20">
                <div className = 'bg-white h-72 lg:h-testionialheight drop-shadow-xl py-4 px-4 lg:py-6 lg:px-6 rounded-xl border-t-2 border-primary m-2 lg:m-4'>
                  <div className = 'h-44 lg:h-60'>
                    <h3 className = 'text-blacklight text-sm lg:text-xl xl:text-2xl font-bold' dangerouslySetInnerHTML = { { __html: val.heading } }></h3>
                    <p className = 'text-black_p text-xs lg:text-sm mt-4 lg:mt-4 xl:mt-8'>{ val.paragraph }</p>
                  </div>
                  <div className = 'flex'>
                    <div><img src = { val.img } alt = 'man' className = 'w-14 h-14 rounded-full mr-5 opacity-50' /></div>
                    <div className = 'self-center'>
                      <h3 className = 'blacklight text-sm font-bold'>{ val.subheading }</h3>
                      <p className = 'black_p text-xs'>{ val.subparagraph }</p>
                    </div>
                  </div>
                </div>
              </div>
            )) }
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;

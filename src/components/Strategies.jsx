import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Strategies =() => {
  const one = process.env.PUBLIC_URL + '/images/icons/one.svg';
  const term = process.env.PUBLIC_URL + '/images/icons/term.svg';
  const pie = process.env.PUBLIC_URL + '/images/icons/pie.svg';

  return(
    <>
      <div className = 'hidden lg:flex justify-center mt-20 mb-14'>
        <div className = 'flex justify-between w-8/12 border border-primary-300 py-3 px-4 rounded-2xl shadow-custom'>
          <div className = 'flex'>
            <div className = 'bg-light_sky rounded-2xl py-2 px-2 self-center'><img className = 'w-7' src = { one } alt = "arrow" /></div>
            <p className = 'text-sm text-blacklight self-center ml-3'>SEBI Registered RA</p>
          </div>
          <div className = 'flex'>
            <div className = 'bg-light_sky rounded-2xl py-2 px-2 self-center'><img className = 'w-7' src = { term } alt = "arrow" /></div>
            <p className = 'text-sm text-blacklight self-center ml-3'>Long-Term Strategies</p>
          </div>
          <div className = 'flex'>
            <div className = 'bg-light_sky rounded-2xl py-2 px-2 self-center'><img className = 'w-7' src = { pie } alt = "arrow" /></div>
            <p className = 'text-sm text-blacklight self-center ml-3'>Rebalacing Updates</p>
          </div>
        </div>
      </div>
      <div className = 'block lg:hidden'>
        <Carousel className = 'py-10 px-2'
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
              items: 3,
              partialVisibilityGutter: 40
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
          <div>
            <div className = 'w-custom94 mx-auto border border-primary-300 py-2 px-3 rounded-2xl shadow-custom'>
              <div className = 'flex'>
                <div className = 'bg-light_sky rounded-2xl py-2 px-2 self-center'><img className = 'w-6' src = { one } alt = "arrow" /></div>
                <p className = 'text-sm text-blacklight self-center ml-3'>SEBI Registered RA</p>
              </div>
            </div>
          </div>
          <div>
            <div className = 'w-custom94 mx-auto border border-primary-300 py-2 px-3 rounded-2xl shadow-custom'>
              <div className = 'flex'>
                <div className = 'bg-light_sky rounded-2xl py-2 px-2 self-center'><img className = 'w-6' src = { term } alt = "arrow" /></div>
                <p className = 'text-sm text-blacklight self-center ml-3'>Long- Term Strategies</p>
              </div>
            </div>
          </div>
          <div>
            <div className = 'w-custom94 mx-auto border border-primary-300 py-2 px-3 rounded-2xl shadow-custom'>
              <div className = 'flex'>
                <div className = 'bg-light_sky rounded-2xl py-2 px-2 self-center'><img className = 'w-6' src = { pie } alt = "arrow" /></div>
                <p className = 'text-sm text-blacklight self-center ml-3'>Auto-rebalancing</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );

};

export default Strategies;
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CaseStudiesCard = () => {

  const tata = process.env.PUBLIC_URL + '/images/icons/tata.svg';
  const BharatForge = process.env.PUBLIC_URL + '/images/icons/BharatForge.svg';
  const SKFIndiaLtd = process.env.PUBLIC_URL + '/images/icons/SKFIndiaLtd.svg';
  const GokaladasExports = process.env.PUBLIC_URL + '/images/icons/GokaladasExports.svg';
  const IonExchange = process.env.PUBLIC_URL + '/images/icons/IonExchange.svg';
  // const CraftsmanAutomation = process.env.PUBLIC_URL + '/images/icons/CraftsmanAutomation.svg';
  // const SanseraEngineering = process.env.PUBLIC_URL + '/images/icons/SanseraEngineering.svg';
  // const KPIT = process.env.PUBLIC_URL + '/images/icons/KPIT.svg';
  const ShyamMetalicsandEnergy = process.env.PUBLIC_URL + '/images/icons/ShyamMetalicsandEnergy.svg';

  const CaseStudiesArray = [
    {
      label: '<div class = \'bg-green w-24 lg:w-28 xl:w-32 text-white text-sm text-center py-1.5 absolute right-0 rounded-tr-lg\'>Holding</div>',
      img: tata,
      heading: 'Tata Motors DVR',
      paragraph: '(Reco Price Rs. 211/share; Status- holding)'
    },
    {
      label: '<div class = \'bg-green w-24 lg:w-28 xl:w-32 text-white text-sm text-center py-1.5 absolute right-0 rounded-tr-lg\'>Holding</div>',
      img: BharatForge,
      heading: 'Bharat Forge',
      paragraph: '(Reco Price Rs. 211/share; Status- holding)'
    },
    {
      label: '<div class = \'bg-green w-24 lg:w-28 xl:w-32 text-white text-sm text-center py-1.5 absolute right-0 rounded-tr-lg\'>Holding</div>',
      img: SKFIndiaLtd,
      heading: 'SKF India Ltd',
      paragraph: '(Reco Price Rs. 211/share; Status- holding)'
    },
    {
      label: '<div class = \'bg-errors w-24 lg:w-28 xl:w-32 text-white text-sm text-center py-1.5 absolute right-0 rounded-tr-lg\'>Exited</div>',
      img: GokaladasExports,
      heading: 'Gokaladas Exports',
      paragraph: '(Reco Price Rs. 211/share; Status- holding)'
    },
    {
      label: '<div class = \'bg-green w-24 lg:w-28 xl:w-32 text-white text-sm text-center py-1.5 absolute right-0 rounded-tr-lg\'>Holding</div>',
      img: ShyamMetalicsandEnergy,
      heading: 'Shyam Metalics and Energy',
      paragraph: '(Reco Price Rs. 211/share; Status- holding)'
    },
    {
      label: '<div class = \'bg-errors w-24 lg:w-28 xl:w-32 text-white text-sm text-center py-1.5 absolute right-0 rounded-tr-lg\'>Holding</div>',
      img: IonExchange,
      heading: 'Ion Exchange',
      paragraph: '(Reco Price Rs. 211/share; Status- holding)'
    }

  ];

  return(
    <>
      <div className = 'flex justify-between flex-wrap'>
        {
          CaseStudiesArray.length > 0 ? CaseStudiesArray.map((val, i) => (
            <div className = 'hidden lg:block bg-white w-casestudiesCustom rounded-2xl shadow-customcard relative px-7 pb-7 mt-7 cursor-pointer duration-500 hover:-translate-y-1' key = { i }>
              <div dangerouslySetInnerHTML = { { __html: val.label } }></div>
              <div className = 'lg:w-24 xl:w-28 mx-auto pt-4'>
                <img src = { val.img } alt = 'tata' />
              </div>
              <h3 className = 'text-center text-blacklight text-base lg:text-lg xl:text-xl font-bold'>{ val.heading }</h3>
              <p className = 'text-center text-xs text-black_p mt-1'>{ val.paragraph }</p>
            </div>
          )): <p>No Case Studies Available</p>
        }
      </div>
      <div className = 'block lg:hidden'>
        <Carousel
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
              <div className = 'w-custom94 bg-white rounded-2xl shadow-customcard relative px-4 lg:px-7 pb-7 mt-7 cursor-pointer duration-500 hover:-translate-y-1' key = { i }>
                <div dangerouslySetInnerHTML = { { __html: val.label } }></div>
                <div className = 'w-28 mx-auto pt-4'>
                  <img src = { val.img } alt = 'tata' />
                </div>
                <h3 className = 'text-center text-blacklight lg:text-lg xl:text-xl font-bold'>{ val.heading }</h3>
                <p className = 'text-center text-xs text-black_p mt-1'>{ val.paragraph }</p>
              </div>
            ))
          }
        </Carousel>
      </div>

    </>
  );
};

export default CaseStudiesCard;
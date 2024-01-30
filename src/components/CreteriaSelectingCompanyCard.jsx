import React from 'react';
const CreteriaSelectingCompanyCard = () => {
  const arrow = process.env.PUBLIC_URL + '/images/icons/arrow.png';

  const CreteriaSelectingCompanyArray = [
    {
      id: 1,
      paragraph: 'Ethical compliance - remove morally hazardous players that offers alcohol, tobacco, gambling, etc'
    },
    {
      id: 2,
      paragraph: 'Consistent revenue growth of more than 15% annualized'
    },
    {
      id: 3,
      paragraph: 'Clean book of accounts'
    },
    {
      id: 5,
      paragraph: 'Has strong pricing power/ near monopoly & leadership in its industry'
    },
    {
      id: 6,
      paragraph: 'Ethical compliance - remove morally hazardous players that offers alcohol, tobacco, gambling, etc'
    },
    {
      id: 7,
      paragraph: 'Ethical compliance - remove morally hazardous players that offers alcohol, tobacco, gambling, etc'
    },
    {
      id: 8,
      paragraph: 'Ethical compliance - remove morally hazardous players that offers alcohol, tobacco, gambling, etc'
    }
  ];

  return(
    <>
      {
        CreteriaSelectingCompanyArray.length > 0 ? CreteriaSelectingCompanyArray.map((val, i) => (
          <React.Fragment key = { val.id }>
            <div className = 'bg-white w-full lg:w-creteriaCustom h-32 flex flex-col items-center text-center justify-center rounded-2xl shadow-customcard border-r-2 border-primary py-6 px-6 mt-6 lg:mt-12 mr-0 lg:mr-5 relative duration-500 hover:-translate-y-1'>
              <p className = 'text-blacklight text-sm font-semibold lg:font-normal'>
                { val.paragraph }
              </p>
            </div>
            { i !== CreteriaSelectingCompanyArray.length - 1 && (
              <div className = 'block lg:hidden w-4 mx-auto mt-2'><img src = { arrow } alt = 'arrow' /></div>
            ) }
          </React.Fragment>
        )) : <p>No data found</p>
      }
    </>
  );
};

export default CreteriaSelectingCompanyCard;
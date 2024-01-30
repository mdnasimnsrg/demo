import React from 'react';


const Generalfaq = () => {

  
  return(
    <>
      <div>
        <div id = 'general'>
          <h3 className = 'text-lg font-bold pb-5'>General</h3>
          <ul className = 'list-none p-0 m-0'>
            <li>
              <div className = 'bg-white rounded-lg p-7'>
                <h3 className = 'text-base text-blacklight font-bold'>What does Ethica Invest offer ? how do i sign up on Ethica Invest? </h3>
                <p className = 'text-sm mt-4 text-black_p'>- Ethica Invest Offers a model stock portfolio, and regular Buy & Sell updates on each holding. Investing directly in stocks can be difficult if you are new to the stock market, we are here to make it easy for you. 
                 - To sign-up, you may select the plan that most suits you, and after completing the payment, you will get access to our portfolio stocks, watchlist and exclusive member only communities.
                </p>
              </div>
            </li>
            <li>
              <div className = 'bg-white rounded-lg p-7 mt-5'>
                <h3 className = 'text-base text-blacklight font-bold'>Where can i see the most up-to-date list of stocks ? </h3>
                <p className = 'text-sm mt-4 text-black_p'>
                  { '- Once you sign-in and purchase a subscription, you will be able to see all of our recommended stocks in the "Model Portfolio" section. You will also be able to additional stocks in our "watchlist" section.' } 
                </p>
              </div>
            </li>
            <li>
              <div className = 'bg-white rounded-lg p-7 mt-5'>
                <h3 className = 'text-base text-blacklight font-bold'>I am new to investing. how do i set up a demat account ? </h3>
                <p className = 'text-sm mt-4 text-black_p'>- Our team will help you setup a demat account, step-by-step.</p>
              </div>
            </li>
            <li>
              <div className = 'bg-white rounded-lg p-7 mt-5'>
                <h3 className = 'text-base text-blacklight font-bold'>{ 'Why should i choose Ethica Invest\'s advisory service over a mutual fund ?' }</h3>
                <p className = 'text-sm mt-4 text-black_p'>- Investing directly in stocks can give potentially higher returns. Plus investing in stocks over mutual funds offers you greater control and transparency over your portfolio. Most importantly, your assets remain directly under your own custody.
                </p>
              </div>
            </li>
            <li>
              <div className = 'bg-white rounded-lg p-7 mt-5'>
                <h3 className = 'text-base text-blacklight font-bold'>I want to report a bug or a missing feature, how can I send my suggestions? </h3>
                <p className = 'text-sm mt-4 text-black_p'>- We love feedback and advice, please feel free to mail us at developers@ethica.app with any bugs or missing features you might encounter. If you want, we will get back to you for further details and ideas.
                </p>
              </div>
            </li>
            <li>
              <div className = 'bg-white rounded-lg p-7 mt-5'>
                <h3 className = 'text-base text-blacklight font-bold'>How can I permanently delete my Ethica Invest account?</h3>
                <p className = 'text-sm mt-4 text-black_p'>
                  {
                    '- Ethica Invest allows you to delete all your personal data and your account. Just send us an email at developers@ethica.app from your registered email address. Please use the subject "Account Deletion Request" in your email. Note that we will send you a confirmation email before processing your deletion request.'
                  }
                </p>
              </div>
            </li>
          
          </ul>
        </div>
        <div className = 'mt-8' id = 'EthicalCompliancemethodology'>
          <h3 className = 'text-lg font-bold pb-5'>Ethical Compliance Methodology</h3>
          <ul className = 'list-none p-0 m-0'>
            <li>
              <div className = 'bg-white rounded-lg p-7'>
                <h3 className = 'text-base text-blacklight font-bold'> What is your screening criteria for compliant and non-compliant stocks ? how often are stocks  screened ?</h3>
                <p className = 'text-sm mt-4 text-black_p'>- Currently the stocks are screened manually once a year. We account for four main filters: (a) Business type (b) Revenue sources (c) Interest bearing debt as a percentage of total assets (d) Liquid assets versus Total assets. To read more, click here.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className = 'mt-8' id = 'ResearchMethodoloy'>
          <h3 className = 'text-lg font-bold pb-5'>Research Methodoloy</h3>
          <ul className = 'list-none p-0 m-0'>
            <li>
              <div className = 'bg-white rounded-lg p-7'>
                <h3 className = 'text-base text-blacklight font-bold'>Does Ethica Invest use trading strategies? For how long do you hold a stock / security? </h3>
                <p className = 'text-sm mt-4 text-black_p'>- Ethica Invest does not use any trading stategies. We are long-term value investors and we recommend our clients similarly. Our typical holding period is between 3 to 18 months.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Generalfaq;
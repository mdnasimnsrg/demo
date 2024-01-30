import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Header from '../components/Header';
export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <meta charset = "utf-8" />
        <title>Privacy Policy</title>
        <meta name = "description" content = "Data Room - Ethica Invest" />
        <meta name = "keywords" content = "Ethica Invest, Ethica, Invest, Investing, Data Room, Data, Room, Data Room from Ethica Invest, Data Room from Ethica" />
        <meta name = "author" content = "Ethica Invest" />
        <link rel = "canonical" href = "https://ethica.app/privacy-policy" />
      </Helmet>
      <Header />
      <div className = 'bg-grey_sky py-8'>
        <div className = 'container mx-auto px-5 lg:px-10 box-border'>
          <main className = ' max-w-[1440px] text-black mb-8 mt-5 space-y-8 text-sm'>
            <h1 className = 'text-3xl font-bold'>Privacy Policy</h1>
            <p className = 'bg-white/25 rounded-lg border px-5 py-2'>Last Updated: 24<sup>th</sup> January, 2024.</p>

            <section>
              <h2 className = 'text-xl font-bold  mb-2'>Introduction</h2>
              <p className = 'text-justify'>This privacy policy describes how Ethica Invest  collects, uses, and shares your data when you use our app and website, Ethica Invest.</p>
            </section>

            <section>
              <h2 className = 'text-xl font-bold  mb-2'>We collect the following types of data:</h2>
              <ul className = 'list-disc list-inside space-y-2'>
                <li>
                  <h3 className = 'inline font-bold'>Personal Information: </h3>
                  <span>This includes your name, email address, phone number, and other information that you provide to us when you create an account or use our app.</span>
                </li>
                <li>
                  <h3 className = 'inline font-bold'>Device Information: </h3>
                  <span>This includes your IP address, device type, browser type, operating system, and other information about your device.</span>
                </li>
                <li>
                  <h3 className = 'inline font-bold'>Usage Information: </h3>
                  <span>This includes information about how you use our app, such as the pages you visit, and the features you use.</span>
                </li>
                <li>
                  <h3 className = 'inline font-bold'>Applicable when you link your Zerodha account: </h3>
                  <span>Your holdings, positions and margins. This includes the securities that you have purchased, the price at which you bought these securites and the available balance in your Zerodha account.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className = 'text-xl font-bold  mb-2'>We use the data we collect to:</h2>
              <ul className = 'list-disc list-inside space-y-2'>
                <li>
                  <h3 className = 'inline font-bold'>Provide and improve our app: </h3>
                  <span>We use your personal information to create your account, to provide you with the features and functionality of our app, and to improve our app based on your feedback.</span>
                </li>
                <li>
                  <h3 className = 'inline font-bold'>Communicate with you: </h3>
                  <span>We use your contact information to send you marketing emails and updates about your portfolio and our app.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className = 'text-xl font-bold  mb-2'>We share your data with:</h2>
              <ul className = 'list-disc list-inside space-y-2'>
                <li>
                  <h3 className = 'inline font-bold'>Third-party service providers: </h3>
                  <span>We do not share any identifiable information about you to any third-parties.</span>
                </li>
                <li>
                  <h3 className = 'inline font-bold'>Law enforcement: </h3>
                  <span>We share your data with law enforcement if we are required to do so by law.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className = 'text-xl font-bold  mb-2'>We protect your data by:</h2>
              <ul className = 'list-disc list-inside space-y-2'>
                <li>
                  <h3 className = 'inline font-bold'>Using industry-standard security measures: </h3>
                  <span>We use industry-standard security measures to protect your data, such as encryption and firewalls.</span>
                </li>
                <li>
                  <h3 className = 'inline font-bold'>Restricting access to your data: </h3>
                  <span>Only authorized employees have access to your data.</span>
                </li>
                <li>
                  <h3 className = 'inline font-bold'>Keeping your data up to date: </h3>
                  <span>We keep your data up to date by asking you to update your contact information when it changes.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className = 'text-xl font-bold  mb-2'>You have the following rights with respect to your data: </h2>
              <ul className = 'list-disc list-inside space-y-2'>
                <li>
                  <h3 className = 'inline font-bold'>Access your data: </h3>
                  <span>You can request a copy of your data by contacting us.</span>
                </li>
                <li>
                  <h3 className = 'inline font-bold'>Correct your data: </h3>
                  <span>You can request that we correct any inaccurate or incomplete data about you. This can usually be done via the app&apos;s interface.</span>
                </li>
                <li>
                  <h3 className = 'inline font-bold'>Delete your data: </h3>
                  <span>You can request that we delete your data.</span>
                </li>
              </ul>
              <p className = 'text-justify mt-2'>You can exercise your rights by contacting us at contact@ethica.app.</p>
            </section>

            <section>
              <p className = 'text-justify mt-2'>We may update this privacy policy from time to time. If we make any material changes to the privacy policy, we will notify you by email or through a prominent notice on our app. If you have any questions about this privacy policy, please contact us at contact@ethica.app.</p>
            </section>

          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

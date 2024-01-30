import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function TermsAndConditions() {

  const refundSectionRef = useRef(null);

  useEffect(() => {
    const scrollToRefundSection = () => {
      if (refundSectionRef.current) {
        refundSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (window.location.hash === '#refund') {
      scrollToRefundSection();
    }
  }, []);
  return (
    <>
      <Helmet>
        <meta charset = "utf-8" />
        <title>Terms & Conditions</title>
        <meta name = "description" content = "Data Room - Ethica Invest" />
        <meta name = "keywords" content = "Ethica Invest, Ethica, Invest, Investing, Data Room, Data, Room, Data Room from Ethica Invest, Data Room from Ethica" />
        <meta name = "author" content = "Ethica Invest" />
        <link rel = "canonical" href = "https://ethica.app/terms-and-conditions" />
      </Helmet>
      <Header />
      <div className = 'bg-grey_sky py-8'>
        <div className = 'container mx-auto px-5 lg:px-10 box-border'>
          <main className = 'max-w-[1440px] text-black mb-8 mt-5 space-y-8 text-sm'>

            <h1 className = 'text-3xl font-bold '>Terms & Conditions</h1>

            <p className = 'bg-white/25 rounded-lg border px-5 py-2'>Last Updated: 24<sup>th</sup> January, 2024.</p>

            <section>
              <h2 className = 'text-xl font-bold  mb-2'>Introduction & Acceptance</h2>
              <p className = 'text-justify'>
                  Welcome to Ethica Invest! Ethica Invest is a platform that allows you to find shari&apos;ah compliant stocks and get access to our market research.
                  These Terms of Service govern your use of our app. They are applicable when you use our app, whether you are a visitor, a user, or a member.
                  By using our app, you agree to these Terms of Service. If you do not agree to these Terms of Service, you may not use our app.
              </p>
              <br />
              <p className = 'text-justify'>
                  We reserve the right to change this User Agreement from time to time without notice. You acknowledge and agree that it is your responsibility to review this User Agreement periodically to familiarize yourself with any modifications. Your continued use of this site after such modifications will constitute acknowledgment and agreement of the modified terms and conditions.
              </p>
            </section>

            <section>
              <h2 className = 'text-xl font-bold  mb-2'>Intellectual Property</h2>
              <p className = 'text-justify'>
                  All content and materials available on www.ethica.app and the Ethica Invest Android app, including but not limited to text, graphics, website name, code, images and logos
                  are the intellectual property of Ethica Invest . Any inappropriate use, including but not limited to the reproduction, distribution, display or
                  transmission of any content on this site is strictly prohibited, unless specifically authorized by Ethica Invest .
              </p>
              <br />
              <p className = 'text-justify'>
                  Our app, website, and its original content, features, and functionality are owned by Ethica Invest  and are protected by applicable copyright,
                  trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>

            <section>
              <h2 className = 'text-xl font-bold  mb-2'>Responsible Use and Conduct</h2>
              <p className = 'text-justify'>
                  By visiting our app and accessing the information, resources, services, products, and tools we provide for you, either directly or indirectly (hereafter referred to as &quot;Resources&quot;),
                  you agree to use these Resources only for the purposes intended as permitted by (a) the terms of this User Agreement, and (b) applicable laws, regulations, and generally accepted online practices or guidelines.
              </p>
              <br />
              <p className = 'text-justify'>
                  Wherein, you understand that:
              </p>
              <ul className = 'list-disc list-inside space-y-2'>
                <li>
                  <span>In order to access our Resources, you may be required to provide certain information about yourself (such as identification, contact details, etc.) as part of the registration process, or as part of your ability to use the Resources. You agree that any information you provide will always be accurate, correct, and up to date.</span>
                </li>
                <li>
                  <span>You are responsible for maintaining the confidentiality of any login information associated with any account you use to access our Resources. Accordingly, you are responsible for all activities that occur under your account/s.</span>
                </li>
                <li>
                  <span>Accessing (or attempting to access) any of our Resources by any means other than through the means we provide, is strictly prohibited. You specifically agree not to access (or attempt to access) any of our Resources through any automated, unethical, or unconventional means.</span>
                </li>
                <li>
                  <span>Engaging in any activity that disrupts or interferes with our Resources, including the servers and/or networks to which our Resources are located or connected, is strictly prohibited.</span>
                </li>
                <li>
                  <span>Attempting to copy, duplicate, reproduce, sell, trade, or resell our Resources is strictly prohibited.</span>
                </li>
                <li>
                  <span>You are solely responsible for any consequences, losses, or damages that we may directly or indirectly incur or suffer due to any unauthorized activities conducted by you, as explained above, and may incur criminal or civil liability.</span>
                </li>
                <li>
                  <span>We may provide various open communication tools on our app, such as blog comments, blog posts, public chat, forums, message boards, newsgroups, product ratings and reviews, various social media services, etc. You understand that generally we do not pre-screen or monitor the content posted by users of these various communication tools, which means that if you choose to use these tools to submit any type of content to our app, then it is your personal responsibility to use these tools in a responsible and ethical manner. By posting information or otherwise using any open communication tools as mentioned, you agree that you will not upload, post, share, or otherwise distribute any content that:</span>
                  <ul className = 'list-disc list-inside space-y-2 ml-4 mb-4 mt-2'>
                    <li>
                      <span>Is illegal, threatening, defamatory, abusive, harassing, degrading, intimidating, fraudulent, deceptive, invasive, racist, or contains any type of suggestive, inappropriate, or explicit language;</span>
                    </li>
                    <li>
                      <span>Infringes on any trademark, patent, trade secret, copyright, or other proprietary right of any party;</span>
                    </li>
                    <li>
                      <span>Contains any type of unauthorized or unsolicited advertising;</span>
                    </li>
                    <li>
                      <span>Impersonates any person or entity, including any Ethica Invest employees or representatives.</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>We have the right at our sole discretion to remove any content that, we feel in our judgment does not comply with this User Agreement, along with any content that we feel is otherwise offensive, harmful, objectionable, inaccurate, or violates any 3rd party copyrights
                          or trademarks. We are not responsible for any delay or failure in removing such content. If you post content that we choose to remove, you hereby consent to such removal, and consent to waive any claim against us.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className = 'text-xl font-bold  mb-2'>Limitation of Liability</h2>
              <p className = 'text-justify'>
                  You expressly understand and agree that any claim against us shall be limited to the amount you paid, if any, for use of products and/or services. Ethica Invest will not be liable for any direct, indirect, incidental, consequential or exemplary loss or damages which may be incurred by you as a result of using our Resources, or as a result of any changes, data loss or corruption, cancellation, loss of access, or downtime to the full extent that applicable limitation of liability laws apply.
              </p>
              <br />
              <p className = 'text-justify'>
                  We do not assume any liability for any content posted by you or any other 3rd party users of our app. However, any content posted by you using any open communication tools on our app, provided that it doesn&apos;t violate or infringe on any 3rd party
                  intellectual property rights, becomes the property of Ethica Invest, and as such, gives us a perpetual, irrevocable, worldwide, royalty-free, exclusive license to reproduce, modify, adapt, translate, publish, publicly display and/or distribute as we see fit. This only refers and applies to content posted via open communication tools as described, and does not refer to information that is provided as part of the registration process, necessary in order to use our Resources. All information provided as part of our registration process is covered by our Privacy Policy.
              </p>
              <br />
              <p className = 'text-justify'>
                  The information provided on our app is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access our app from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
              </p>
              <br />
              <p className = 'text-justify'>
                  We make no representations that the information on our app is appropriate or available for use in all countries or jurisdictions. Those who access our app from other locations do so at their own initiative and are responsible for compliance with local laws, if and to the extent local laws are applicable. You specifically agree to comply with all applicable laws concerning the transmission of technical data exported from India or the country you reside in.
              </p>
            </section>

            <section>
              <h2 className = 'text-xl font-bold  mb-2'>Indemnification</h2>
              <p className = 'text-justify'>
                  You agree to indemnify and hold harmless Ethica Invest and its affiliates, and their directors, officers, managers, employees, donors, agents, and licensors, from and against all losses, expenses, damages and costs, including reasonable attorneys&apos; fees, resulting from any violation of this User Agreement or the failure to fulfill any obligations relating to your account incurred by you or any other person using your account. We reserve the right to take over the exclusive defense of any claim for which we are entitled to indemnification under this User Agreement. In such event, you shall provide us with such cooperation as is reasonably requested by us.
              </p>
            </section>
          
            <section id = 'refund' ref = { refundSectionRef }>
              <h2 className = 'text-xl font-bold  mb-2'>Cancellation/Refund Policy</h2>
              <p className = 'text-justify'>
                  We do not offer refunds for any of our products or services except in the case of a duplicate payment, or in the event of non-performance of the services provided by Ethica Invest.
                  If you are unsatisfied with your purchase, please contact us at refunds@ethica.app.
                  
                  You are able to cancel your subscription at any time by contacting us at the provided email address. The cancellation will take effect at the end of the current billing period.
              </p>
            </section>

            <section>
              <h2 className = 'text-xl font-bold  mb-2'>Termination of Use</h2>
              <p className = 'text-justify'>
                  You agree that we may, at our sole discretion, suspend or terminate your access to all or part of our app and Resources with or without notice and for any reason, including, without limitation, breach of this User Agreement. Any suspected illegal, fraudulent or abusive activity may be grounds for terminating your relationship and may be referred to appropriate law enforcement authorities. Upon suspension or termination, your right to use the Resources we provide will immediately cease, and we reserve the right to remove or delete any information that you may have on file with us, including any account or login information.
              </p>
            </section>

            <section>
              <h2 className = 'text-xl font-bold  mb-2'>Governing Law</h2>
              <p className = 'text-justify'>
                  This app is controlled by Ethica Invest  from our offices in the state of Uttar Pradesh, India.
                  It can be accessed by most countries around the world.
                  By accessing our app, you agree that the statutes and laws of our state, without regard to the conflict of laws and the United Nations Convention on the International Sales of Goods, will apply to all matters relating to the use of this app and the purchase of any products or services through this website and app.
              </p>
              <br />
              <p className = 'text-justify'>
                  Furthermore, any action to enforce this User Agreement shall be brought in the federal or state courts located in India, You hereby agree to personal jurisdiction by such courts, and waive any jurisdictional, venue, or inconvenient forum objections to such courts.
              </p>
            </section>

          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

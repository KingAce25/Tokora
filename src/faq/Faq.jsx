import React from 'react';
import './faq.css'

const Faq = () => {
  return (
    <div className='faq' id='faqs'>
      <div className="faq__header">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="faq__body">
        <div className="faq__card">
            <h6>What is Tokora?</h6>
            <p>SolNest is a Web3-powered savings platform built on Solana, allowing users to save in stablecoins, earn high APY, and seamlessly convert fiat to crypto without the usual hassles</p>
        </div>
      </div>
    </div>
  );
}

export default Faq;

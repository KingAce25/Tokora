import React from 'react';
import './how.css'
import One from '../assets/1.png'
import Two from '../assets/2.png'
import Three from '../assets/3.png'
import Four from '../assets/4.png'

const How = () => {
  return (
    <div className='how' id='how'>
      <div className="how__header">
        <h3>How it Works</h3>
      </div>
      <div className="how__body">
        <div className="how__card">
            <img src={One} alt=""/>
            <h6>Sign Up</h6>
            <p>Join the waitlist to get early access</p>
        </div>
        <div className="how__card">
            <img src={Two} alt=""/>
            <h6>Explore Marketplace</h6>
            <p>Use Tokora to find local services and products</p>
        </div>
        <div className="how__card">
            <img src={Three} alt=""/>
            <h6>Secure Transaction</h6>
            <p>Pay with crypto or fiat, all transactions are encrypted</p>
        </div>
        <div className="how__card">
            <img src={Four} alt=""/>
            <h6>Earn Rewards</h6>
            <p>Receive NFTs as rewards for transactions</p>
        </div>
      </div>
    </div>
  );
}
import './how.css'

export default How;

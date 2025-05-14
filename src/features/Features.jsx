import React from 'react';
import './features.css'
import Privacy from '../assets/privacy_svgrepo.com.png'
import Bitcoin from '../assets/bitcoin_svgrepo.com.png'
import Scale from '../assets/balance-scale_svgrepo.com.png'
import Brain from '../assets/brain-brainstorm-creative_svgrepo.com.png'
import Diamond from '../assets/diamond_svgrepo.com.png'
import Maps from '../assets//map-pin_svgrepo.com.png'
import Hand from '../assets/handshake-deal_svgrepo.com.png'
import Puzzle from '../assets//puzzle-piece_svgrepo.com.png'

const Features = () => {
  return (
    <div className='features' id='features'>
      <div className="feature__header">
        <h3>Features</h3>
      </div>
      <div className="feature__cards">
        <div className="feauture__card">
          <img src={Privacy} alt=""/>
          <h6>Privacy-First Architecture</h6>
          <p>Tokora uses zero-knowledge proofs and end-to-end encryption to ensure that no personal or transactional data is ever exposed or sold. Unlike traditional marketplaces, Tokora doesn’t track, store, or sell user information</p>
        </div>
        <div className="feauture__card">
          <img src={Bitcoin} alt=""/>
          <h6>Crypto-to-Flat Payments</h6>
          <p>Tokora allows seamless crypto-to-fiat transactions, enabling buyers and vendors to trade without friction. Whether you're crypto-native or just curious, our off-ramp solution bridges the gap for everyone</p>
        </div>
        <div className="feauture__card">
          <img src={Scale} alt=""/>
          <h6>Decentralized and Transparent Marketplace</h6>
          <p>Transactions are verified via blockchain, ensuring full transparency and censorship resistance. Say goodbye to account freezes and hidden policies</p>
        </div>
        <div className="feauture__card">
          <img src={Brain} alt=""/>
          <h6>AI-Powered Risk Detection</h6>
          <p>Tokora integrates AI-driven fraud detection to safeguard users from malicious activity, scams, or fake listings</p>
        </div>
        <div className="feauture__card">
          <img src={Diamond} alt=""/>
          <h6>NFT Based Loyalty & Reputation</h6>
          <p>Get rewarded with NFTs that double as loyalty badges and reputation scores. Use them to unlock discounts, access special offers, or stake them for added perks</p>
        </div>
        <div className="feauture__card">
          <img src={Maps} alt=""/>
          <h6>Geo-Tagged Local Discovery</h6>
          <p>Whether it’s a barber, mechanic, or local vendor, Tokora’s geo-tagged discovery helps you find nearby service providers while preserving your privacy</p>
        </div>
        <div className="feauture__card">
          <img src={Hand} alt=""/>
          <h6>Decentralized Escrow Services</h6>
          <p>Our decentralized escrow ensures both parties are protected until the transaction is completed to everyone’s satisfaction</p>
        </div>
        <div className="feauture__card">
          <img src={Puzzle} alt=""/>
          <h6>For Crypto & Non-Crypto Users-Tagged Local Discovery</h6>
          <p>From blockchain veterans to everyday consumers, Tokora’s intuitive interface and smooth onboarding make it easy for anyone to join.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;

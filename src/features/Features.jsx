import React, { useEffect, useRef } from 'react';
import './features.css'
import Privacy from '../assets/privacy_svgrepo.com.png'
import Bitcoin from '../assets/bitcoin_svgrepo.com.png'
import Scale from '../assets/balance-scale_svgrepo.com.png'
import Brain from '../assets/brain-brainstorm-creative_svgrepo.com.png'
import Diamond from '../assets/diamond_svgrepo.com.png'
import Maps from '../assets/map-pin_svgrepo.com.png'
import Hand from '../assets/handshake-deal_svgrepo.com.png'
import Puzzle from '../assets/puzzle-piece_svgrepo.com.png'

const Features = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const featureData = [
    {
      img: Privacy,
      title: 'Privacy-First Architecture',
      text: 'Tokora uses zero-knowledge proofs and end-to-end encryption to ensure that no personal or transactional data is ever exposed or sold.',
    },
    {
      img: Bitcoin,
      title: 'Crypto-to-Flat Payments',
      text: 'Tokora allows seamless crypto-to-fiat transactions, enabling buyers and vendors to trade without friction.',
    },
    {
      img: Scale,
      title: 'Decentralized and Transparent Marketplace',
      text: 'Transactions are verified via blockchain, ensuring full transparency and censorship resistance.',
    },
    {
      img: Brain,
      title: 'AI-Powered Risk Detection',
      text: 'Tokora integrates AI-driven fraud detection to safeguard users from malicious activity.',
    },
    {
      img: Diamond,
      title: 'NFT Based Loyalty & Reputation',
      text: 'Get rewarded with NFTs that double as loyalty badges and reputation scores.',
    },
    {
      img: Maps,
      title: 'Geo-Tagged Local Discovery',
      text: 'Tokora’s geo-tagged discovery helps you find nearby service providers while preserving privacy.',
    },
    {
      img: Hand,
      title: 'Decentralized Escrow Services',
      text: 'Our decentralized escrow ensures both parties are protected until the transaction is completed.',
    },
    {
      img: Puzzle,
      title: 'For Crypto & Non-Crypto Users',
      text: 'Tokora’s intuitive interface makes it easy for anyone to join.',
    },
  ];

  return (
    <div className='features' id='features'>
      <div className="feature__header">
        <h3>Features</h3>
      </div>
      <div className="feature__cards">
        {featureData.map((feature, index) => (
          <div
            className="feauture__card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={feature.img} alt="" />
            <h6>{feature.title}</h6>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

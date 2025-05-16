import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useTheme } from '../theme/ThemeToggle';
import './faq.css';

const DropdownMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { darkMode } = useTheme();

  const menus = [
    { title: 'What is Tokora?', content: 'Tokora is a decentralized marketplace that connects buyers, sellers, and service providers, making it easier to transact on-chain. It integrates crypto payments, NFT loyalty rewards, on-chain reputation tracking, and instant fiat conversion, bridging traditional commerce with blockchain-powered benefits.' },
    { title: 'How does Tokora Work?', content: 'Tokora enables users to buy and sell products or services securely using Solana’s blockchain. Vendors receive payments instantly in SOL, USDC, or fiat, and customers enjoy trustless interactions, geo-tagged service discovery, and tradeable loyalty rewards.' },
    { title: 'How is Tokora different from existing marketplaces?', content: 'Unlike centralized marketplaces, Tokora does not collect or sell user data, offers instant crypto-to-fiat conversion so sellers receive payouts in their local currency, uses NFT-powered loyalty programs where customers can trade, sell, or stake their benefits, and provides decentralized reputation tracking to ensure trusted vendor interactions.' },
    { title: 'Is Tokora only for services, or can I sell products too?', content: 'Tokora supports both services and products. Whether you’re a barber, mechanic, retailer, or entrepreneur, you can list and transact seamlessly on-chain.' },
    { title: 'How does Tokora protect users from fraud?', content: 'Tokora integrates on-chain reputation tracking, smart contract escrow services, and AI-driven risk analysis to prevent fraudulent activities. Transactions are secured, transparent, and verified through blockchain mechanisms.' },
    { title: 'Will I need crypto to use Tokora?', content: 'Not necessarily. Tokora enables fiat-to-crypto off-ramping, meaning users can pay in SOL, USDC, or fiat while sellers receive payments in their preferred currency. This ensures seamless adoption for both crypto and non-crypto users.' },
    { title: 'What is Tokora’s loyalty program?', content: 'Instead of traditional reward points, Tokora offers NFT-powered loyalty rewards, allowing customers to trade, sell, or stake their benefits. This gives loyalty programs real value, empowering both businesses and users.' },
    { title: 'How do I sign up for Tokora?', content: "Simply join our waitlist, and you'll be notified when we launch. Early adopters will get access to exclusive benefits, including discounted fees, NFT perks, and governance participation." },
    { title: 'When will Tokora launch?', content: 'Tokora is currently in development, with early features rolling out soon. Stay connected by joining the waitlist and following our updates on X.' },
    { title: "What does 'packIT' mean?", content: 'PackIT is Tokora’s motto, representing efficiency, accessibility, and blockchain-powered commerce. It signifies our mission to simplify transactions, empower communities, and redefine marketplaces globally.' },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }} id='faqs'>
      {menus.map((menu, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} style={{ marginBottom: '12px' }}>
            <button
              onClick={() => handleToggle(index)}
              className={`dropdown-btn ${darkMode ? 'dark' : ''}`}
            >
              <span>{menu.title}</span>
              <FiChevronDown
                className={`dropdown-icon ${isOpen ? 'rotate' : ''}`}
              />
            </button>
            {isOpen && (
  <div className={`dropdown-content ${darkMode ? 'dark' : ''} ${isOpen ? 'show' : ''}`}>
  {menu.content}
</div>

)}

          </div>
        );
      })}
    </div>
  );
};

export default DropdownMenu;

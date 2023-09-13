import React, { createContext, useState } from 'react';
import './Home.css';
import Footer from '../components/Footer';
import SearchBox from '../components/SearchBox';
import UserMessageBox from '../components/UserMessageBox';
import BotMessageBox from '../components/BotMessageBox';
import { ReactComponent as OpenAI } from '../assests/icons/openai.svg';

export const ProductContext = createContext();

const Home = () => {
  const [message, setMessage] = useState([]);
  return (
    <ProductContext.Provider value={{ message, setMessage }}>
      <div className="home-wrapper">
        <div className="header-container p-5 bg-none text-white">
          <h1>Train an AI ChatBot</h1>
        </div>
        <div className="main-container input-group mb-3">
          <SearchBox />
        </div>
        <div className="chat-container container">
          {message.map((item, idx) =>
            item.user == 'User' ? (
              <div key={idx} className="user-message-container">
                <UserMessageBox message={item.text} />
              </div>
            ) : (
              <div key={idx} className="bot-message-container">
                <OpenAI />
                <BotMessageBox message={item.text} />
              </div>
            )
          )}
        </div>
        <div className="social-container">
          <Footer />
        </div>
      </div>
    </ProductContext.Provider>
  );
};

export default Home;

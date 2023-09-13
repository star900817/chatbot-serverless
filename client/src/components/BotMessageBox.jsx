import React from 'react';
import './BotMessageBox.css';
import TypingAnimation from './TypingAnimation';

const BotMessageBox = ({ message }) => {
  return (
    <div className="bot-msg">
      <TypingAnimation text={message} />
    </div>
  );
};

export default BotMessageBox;

import React, { useContext, useState, useRef } from 'react';
import { ProductContext } from '../commons/Home';
import { Ans } from './getMessage';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const { message, setMessage } = useContext(ProductContext);
  const data = { query };
  const clickButtonRef = useRef(null);

  const handleSendMessage = async () => {
    if (query.trim() != '') {
      setMessage((message) => [
        ...message,
        { user: 'User', text: query },
        // { user: 'Bot', text: 'Loading...' },
      ]);
      try {
        const res = await Ans({
          prompt: query,
          model: 'text-davinci-003',
        });
        if (res) {
          setQuery('');
          // setMessage(response.message)
          setMessage((message) => [
            ...message.filter((item) => item.text !== 'Loading...'),
            { user: 'BOT', text: res },
          ]);
        }
      } catch (error) {
        setQuery('');
        setMessage((message) => [
          ...message.filter((item) => item.text !== 'Loading...'),
          {
            user: 'BOT',
            text: error.message + '. Please ask again in more detail.',
          },
        ]);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      clickButtonRef.current.click();
    }
  };

  return (
    <>
      <input
        value={query}
        className="form-control"
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask any question:"
      />
      <button
        className="btn btn-success"
        onClick={handleSendMessage}
        ref={clickButtonRef}
      >
        Ask
      </button>
    </>
  );
};

export default SearchBox;

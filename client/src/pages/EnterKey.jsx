import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Key = () => {
  const navigate = useNavigate();
  const [openKey, setOpenKey] = useState('');
  const saveKey = (e) => {
    e.preventDefault();
    localStorage.setItem('openKey', openKey);
    navigate('chat');
  };
  return (
    <div className="keyInput">
      <input
        placeholder="plz input your openAI key"
        type="text"
        onChange={(e) => setOpenKey(e.target.value)}
      />
      <input type="button" value="send" onClick={saveKey} />
    </div>
  );
};

export default Key;

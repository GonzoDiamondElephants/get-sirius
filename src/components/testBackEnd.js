import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestBackEnd = () => {
  const [potion, setPotion] = useState({});

  useEffect(() => {
    axios.get('/potions').then((response) => {
      console.log('response potions', response);
    });
  });
  return <div></div>;
};

export default TestBackEnd;

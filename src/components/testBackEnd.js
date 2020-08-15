import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const TestBackEnd = () => {
  const [potion, setPotion] = useState([]);
  const { isAuthenticated } = useAuth0();
  useEffect(() => {
    axios.get('/potions').then((res) => {
      setPotion(res.data);
    });
  }, []);

  return (
    isAuthenticated && (
      <div>
        <ul>
          {potion.map((value) => (
            <li key={value.id}>{value.title}</li>
          ))}
        </ul>
      </div>
    )
  );
};

export default TestBackEnd;

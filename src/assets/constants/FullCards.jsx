import React from 'react';
import items from '../items.json';

const FullCards = () => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className='bg-white shadow-md rounded p-4 w-60'>
          <img src={item.image} alt={item.title} className='w-full h-32 object-cover rounded'/>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default FullCards;

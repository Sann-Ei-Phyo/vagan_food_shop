import React from 'react';
import items from '../items.json';

const Items = () => {
  // Take the first 5 items from the JSON data
  const displayedItems = items.slice(7, 10);

  return (
    <div className="p-4 sm:w-[50rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedItems.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded-t-lg " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;

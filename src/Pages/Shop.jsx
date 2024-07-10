import React, { useState } from 'react';
import items from '../assets/items.json';
import Order from "../assets/constants/Order";

const Shop = () => {
    const [searchFood, setSearchFood] = useState('');
    const [orderItem, setOrderItem] = useState([]);

    const filteredItems = items.filter(item => (
        item.title.toLowerCase().includes(searchFood.toLowerCase())
    ));

    const addItem = (item) => {
        setOrderItem([...orderItem, { title: item.title  ,image :item.image }]);
    };
     const price = 30;
    return (
        <div className='flex gap-5 w-full h-full'>
            <div className='flex-row ml-9 '>
                <div className='mt-9'>
                    <input
                        type='text'
                        placeholder='Search food ...'
                        value={searchFood}
                        onChange={e => setSearchFood(e.target.value)}
                        className='w-[25rem] px-5 py-1 rounded border'
                    />
                    <button
                        className='bg-red-500 text-white px-2 py-1 rounded ml-2'
                        onClick={() => setSearchFood('')}
                    >
                        Clear
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-lg px-3 pt-3 overflow-y-auto bg-gray-100 h-[30rem] mt-8 w-[48rem] gap-4">
                    {filteredItems.map(item => (
                        <div key={item.id} className="bg-white p-4 rounded-lg h-[19rem] shadow-md cursor-pointer" onClick={() => addItem(item)}>
                            <img src={item.image} alt={item.title} className="w-full h-[8rem] object-cover rounded-t-lg" />
                            <h2 className='text-gray-500 font-bold'>{item.title}</h2>
                            <p className='text-red-500'>${price}</p>
                            
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-gray-200 rounded-lg w-full'>
                <Order orderItem={orderItem} />
            </div>
        </div>
    );
}

export default Shop;

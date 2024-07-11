import React, { useMemo } from 'react';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useOrder } from '../../context/context'; 

const Order = () => {
  const { orderItem, removeItemFromOrder } = useOrder();

  const [count, setCount] = React.useState({});

  React.useEffect(() => {
    if (orderItem && orderItem.length > 0) {
      const initialCounts = {};
      orderItem.forEach((item, index) => {
        initialCounts[index] = count[index] || 1;
      });
      setCount(initialCounts);
    }
  }, [orderItem]);

  const price = 30;

  const subtotal = useMemo(() => {
    return Object.keys(count).reduce((acc, index) => {
      const itemIndex = parseInt(index);
      return acc + price * count[itemIndex];
    }, 0);
  }, [count, price]);

  const deliveryFee = 3;
  const total = subtotal + deliveryFee;

  const plus = (index) => {
    setCount(prevCount => ({
      ...prevCount,
      [index]: (prevCount[index] || 0) + 1,
    }));
  };

  const minus = (index) => {
    setCount(prevCount => {
      const newCount = { ...prevCount };
      if (newCount[index] > 0) {
        newCount[index] -= 1;
      }
      return newCount;
    });
  };

  const handleRemoveItem = (index) => {
    removeItemFromOrder(index);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className='overflow-y-auto h-[18rem] bg-gray-200  rounded pr-2'>
        {orderItem.map((item, index) => (
          <div key={index} className="flex-col shadow-md bg-white rounded-lg px-5 py-3 justify-between items-center mb-2">
            <div className='flex'>
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" />
              <p>{item.title}</p>
              <p className='text-red-600 cursor-pointer' onClick={() => handleRemoveItem(index)}>
                <FaTrash className='w-3' />
              </p>
            </div>

            <div className='flex mt-2'>
              <p className='text-red-500'>${price}</p>
              <button className='text-white bg-red-500 h-5 mx-2 rounded' onClick={() => minus(index)}>
                <FaMinus className='w-4 h-3 ' />
              </button>
              <p>{count[index] || 0}</p>
              <button className='text-white bg-red-500 mx-2 h-5 rounded' onClick={() => plus(index)}>
                <FaPlus className='w-4 h-3 ' />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white rounded-lg mt-8">
        <p className="mb-2">Subtotal: ${subtotal}</p>
        <p className="mb-2">Delivery fee: ${deliveryFee}</p>
        <p className="font-bold text-lg">Total: ${total}</p>

        <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">Checkout</button>
      </div>
    </div>
  );
};

export default Order;

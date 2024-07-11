// OrderContext.js
import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

export const OrderProvider = ({ children }) => {
  const [orderItem, setOrderItem] = useState([]);

  const addItemToOrder = (item) => {
    setOrderItem([...orderItem, item]);
  };

  const removeItemFromOrder = (index) => {
    setOrderItem(prevOrderItem => prevOrderItem.filter((item, idx) => idx !== index));
  };

  return (
    <OrderContext.Provider value={{ orderItem, addItemToOrder, removeItemFromOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

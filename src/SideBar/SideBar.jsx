import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineShop } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`bg-red-700 text-gray-200 z-50 fixed  h-[90rem] sm:h-[40rem] w-${isOpen ? '[15rem]' : '[4rem]'} transition-all duration-300`}>
      <div className='flex justify-between items-center p-4'>
        <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>VEGAN FOOD SHOP</h1>
        <button onClick={handleToggle}>
          <FaBars className="text-white" />
        </button>
      </div>
      <div className={`mt-7 ${!isOpen && 'hidden'}`}>
        <Link to="/">
          <div className="mb-2 flex items-center hover:bg-gray-50 hover:opacity-50 pl-14 rounded-l-2xl py-2">
            <AiOutlineHome className='mr-3 w-7 h-5'/>
            Home
          </div>
        </Link>
        <Link to="/shop">
          <div className="mb-2 flex items-center hover:bg-gray-50 hover:opacity-50 rounded-l-2xl px-14 py-2">
            <AiOutlineShop className='mr-3 w-7 h-5'/>
            Shop
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SideBar;

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';



const SideBar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className=' bg-red-700 rounded-tr-xl text-gray-200 h-[40rem] w-[15rem]'>

      <h1 className='ml-5 mt-5 font-bold text-lg'>VEGAN FOOD SHOP</h1>

      {isOpen && (
        <div className='mt-7'>
          <Link to="/">
            <div className="mb-2  hover:bg-gray-50 hover:opacity-50 rounded-l-2xl px-14 py-2">
              Home
            </div>

          </Link>

          <Link to="/shop">
            <div className="mb-2  hover:bg-gray-50 hover:opacity-50 rounded-l-2xl px-14 py-2">
              Shop
            </div>

          </Link>


        </div>
      )}

    </div>
  )
}

export default SideBar
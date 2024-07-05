import React from 'react'
import items from '../assets/items.json';

const Shop = () => {
  return (
    
    <div className='flex gap-5 w-full h-full'>
        {/**Menu Item */}
        <div className=' w-[45rem] flex '>
            {items.map(item =>(
                <div className='flex'>

                </div>
            ))}
        </div>
        {/**Order Item */}
        <div className='bg-red-500'>
            orderMEnu
        </div>
    </div>
  )
}

export default Shop
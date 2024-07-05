import React from 'react'
import Items from '../assets/constants/items'

const Home = () => {
  return (
    <div className='mx-5 mt-3 w-full '>
            <h1 className='text-red-500 text-4xl font-bold'>Hi there, Welcome To Vegan Land !!</h1>

        <div className='w-[60rem]'>
          <Items/>
        </div>

      <div className='flex gap-5 mt-8' >
        {/**About */}
      <div className='w-[28rem] border border-gray-300 px-5 py-2 rounded-lg ' >
           <h1 className='font-bold text-red-500 text-2xl'>
            About Us
          </h1>
          <p className=' mt-3 mb-3'>
             
          <span className='pl-5 '>
          We are dedicated to bringing you the finest vegan products, 
          crafted with love and the highest quality ingredients.
          </span>
           
             Whether you're a seasoned vegan or just starting your journey,
              our shop has something for everyone. From mouth-watering meals 
              to wholesome snacks,
           explore our range and taste the difference of truly nourishing food
          </p>
      </div>
       {/***benefit */}

       <div className='w-[28rem] border border-gray-300 px-5 py-2 rounded-lg ' >
       <h1 className='font-bold text-red-500 text-2xl'>
            Benefits of Vegan Food
          </h1>

          <p className='mt-3'>
         <span className='pl-5'>
         Switching to a vegan diet can have numerous benefits for your 
         health and the environment.
          </span> From improved digestion to a lower 
          risk of chronic diseases, discover how plant-based eating can
           transform your life. Plus,
           we'll share some of our favorite vegan recipes to get you started.
          </p>
       </div>
      </div>
     
    </div>
  )
}

export default Home
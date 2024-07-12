import React from 'react'
import Items from '../assets/constants/items'

const Home = () => {
  return (
    <div className='  mt-3 w-full ml-[5rem] sm:ml-[16rem]'>
            <h1 className='text-red-500 text-4xl sm:ml-[5rem] font-bold'>Hi there, Welcome To Vegan Land !!</h1>

        <div className= ' w-[23rem] mt-5 sm:ml-[2rem] sm:w-[50rem]'>
          <Items/>
        </div>

      <div className='sm:flex  sm:gap-5 mt-8' >
        {/**About */}
      <div className='w-[23rem] sm:w-[28rem] mb-3 border border-gray-300 px-5 py-2 rounded-lg ' >
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

       <div className='w-[23rem] sm:w-[28rem] border mb-3 border-gray-300 px-5 py-2 rounded-lg ' >
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
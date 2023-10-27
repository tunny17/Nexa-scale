import React from 'react';
import { SubscribePng } from '../assets';

const Subscribe = () => {
  return (
    <div
      className='flex justify-between items-center px-[20%] h-[70vh]'
      data-scroll-section>
      <img src={SubscribePng} alt='' className='w-[20%]' />
      <div className='px-[14%]'>
        <h1 className='text-2xl font-atyp-medium'>
          Subscribe to our newsletter
        </h1>
        <p className='font-atyp-guminertLight text-sm mt-8 mb-10'>
          Get all updates from nexascale community by subscribing to our
          newsletter
        </p>
        <div className='flex gap-5'>
          <input
            type='email'
            name=''
            id=''
            placeholder='yoremail.com'
            className='border py-2 px-3 rounded-md w-[60%] outline-none placeholder:text-sm'
          />
          <button className='font-atyp-guminertRegular px-6 py-2 bg-[#FFB930] text-white text-sm rounded-md hover:bg-white hover:border-[1px] hover:border-[#FFB930] hover:text-[#FFB930] transition-all'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

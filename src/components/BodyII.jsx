import React from 'react';
import { HowItWorks } from '../constants';
import { BlueVector, GreenVector, HowImage, OrangeVector } from '../assets';

const BodyII = () => {
  return (
    <div className='mt-14 h-[100vh]' data-scroll-section>
      <h1 className='text-2xl text-center font-atyp-bold' data-scroll>
        How it Works?
      </h1>
      <div className='flex items-center justify-between h-full mt-[3%]'>
        <div className='flex justify-center items-center w-2/4'>
          <img
            src={HowImage}
            alt=''
            className='w-[45%] h-full'
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='1'
          />
        </div>
        <div className='w-2/4 flex gap-y-10 flex-col justify-between relative pl-[8%]'>
          {HowItWorks.map((item, index) => (
            <div className='text-center flex items-center ml-5 flex-col justify-between w-[65%]'>
              <img src={item.icon} alt='' className='w-13' />
              <h1 className='my-3 font-atyp-guminertMedium text-lg'>
                {item.heading}
              </h1>
              <p className='text-xs font-atyp-guminertRegular'>{item.note}</p>
            </div>
          ))}
          <img
            src={GreenVector}
            alt=''
            className='absolute w-[11%] top-[40%] left-0'
          />
          <img
            src={BlueVector}
            alt=''
            className='absolute w-[20%] top-[17%] right-0'
          />
          <img
            src={OrangeVector}
            alt=''
            className='absolute w-[13%] bottom-[15%] right-[9%]'
          />
        </div>
      </div>
    </div>
  );
};

export default BodyII;

import React from 'react';
import { HowItWorks } from '../constants';
import { BlueVector, GreenVector, HowImage, OrangeVector } from '../assets';

const BodyII = () => {
  return (
    <div className='mt-14 h-[100vh]' data-scroll-section>
      <h1 className='text-3xl text-center font-atyp-bold' data-scroll>
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
        <div className='w-2/4 flex gap-y-20 flex-col justify-between relative'>
          {HowItWorks.map((item, index) => (
            <div className='text-center flex items-center ml-5 flex-col justify-between w-[58%]'>
              <img src={item.icon} alt='' className='w-13' />
              <h1 className='my-3 font-atyp-guminertMedium text-2xl'>
                {item.heading}
              </h1>
              <p className='text-base font-atyp-guminertRegular'>{item.note}</p>
            </div>
          ))}
          <img
            src={GreenVector}
            alt=''
            className='absolute w-18 top-[37%] left-[-10%]'
          />
          <img
            src={BlueVector}
            alt=''
            className='absolute top-[12%] right-[14%]'
          />
          <img
            src={OrangeVector}
            alt=''
            className='absolute bottom-[15%] right-[24%]'
          />
        </div>
      </div>
    </div>
  );
};

export default BodyII;

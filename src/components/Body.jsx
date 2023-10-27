import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { whyNexaScale } from '../constants';
import { LeftWhyBackground, RightWhyBackground } from '../assets';

const Body = ({ index }) => {
  return (
    <div className='relative z-20' data-scroll-section>
      <div className='mt-[20%] px-[6%]'>
        <h1 className='text-white text-3xl text-center z-20 absolute top-0 right-[45%]'>
          Why NexaScale
        </h1>
        <br />
        <br />
        <br />
        <div className='flex flex-row gap-[35%] items-center'>
          {whyNexaScale.map((item, index) => (
            <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
              <div className='flex flex-col items-center justify-between bg-white max-w-[340px] py-7 px-2 rounded-lg z-20 absolute'>
                <img src={item.icon} alt='' className='w-14 my-4' />
                <h3 className='leading-10 text-base font-atyp-guminertMedium'>
                  {item.heading}
                </h3>
                <p className='text-center text-xs font-atyp-guminertRegular leading-5 px-1'>
                  {item.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* <img
          src={LeftWhyBackground}
          alt=''
          className='absolute left-0 z-10'
          data-scroll
        /> */}
        {/* <img
          src={RightWhyBackground}
          alt=''
          className='absolute w-[70%] bottom-0 right-0 z-10 rounded-md'
        /> */}
      </div>
    </div>
  );
};

export default Body;

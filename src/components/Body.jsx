import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { whyNexaScale } from '../constants';
import { Tilt } from 'react-tilt';

const Body = ({ index }) => {
  return (
    <div className='h-[100vh]'>
      <div className='mt-[20%] px-[6%]'>
        <h1 className='text-white text-3xl text-center'>Why NexaScale</h1>
        <div className='flex justify-between items-center mt-10'>
          {whyNexaScale.map((item, index) => (
            <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className='flex flex-col items-center justify-between bg-white max-w-[400px] py-10 px-2 rounded-lg font-atyp-guminertMedium'>
                <img src={item.icon} alt='' className='w-14 my-4' />
                <h3 className='leading-10 text-lg'>{item.heading}</h3>
                <p className='text-center text-xs leading-5 px-1'>
                  {item.note}
                </p>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

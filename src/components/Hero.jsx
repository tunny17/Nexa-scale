import React from 'react';
import { motion } from 'framer-motion';
import { HeroBackground, HeroImage } from '../assets';
import { navVariants } from '../../utils/motion';

const Hero = () => {
  return (
    <div
      data-scroll-section
      className='h-[100vh] flex justify-center items-center relative z-20'>
      <img
        src={HeroBackground}
        alt='Hero Background'
        className='w-[75%] absolute top-10'
      />
      <motion.h1
        variants={navVariants}
        initial='hidden'
        whileInView='show'
        className='font-atyp-medium text-white text-4xl w-[55%] text-center leading-[1.2] tracking-wide absolute top-20 z-50'>
        Welcome to Nexascale, Your Perfect Place to Unlock Your Potential &
        Achieve Excellence in Your Tech Career.
      </motion.h1>
      <motion.h1
        variants={navVariants}
        initial='hidden'
        whileInView='show'
        className='font-atyp-light text-white text-xs w-[69%] text-center tracking-wide leading-4 absolute top-[45%] z-50'>
        Are you ready to take your skills to the next level? Do you want
        personalized guidance and feedback to help you excel in your tech career
        or professional growth? Look no further. Welcome to NexaScale, your
        one-stop platform for mentor-guided learning and skill assessment.
      </motion.h1>
      <img
        data-scroll
        src={HeroImage}
        alt=''
        className='float absolute bottom-[-39%] w-[63%] z-[50]'
        data-scroll
      />
    </div>
  );
};

export default Hero;

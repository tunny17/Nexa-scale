import React from 'react';
import { Logo } from '../assets';
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';

const Navbar = () => {
  return (
    <motion.div
      data-scroll-section
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className='w-[80%] mx-auto bg-white rounded-full px-2 py-2 flex justify-between items-center z-30'>
      <div>
        <img src={Logo} alt='A logo' className='w-24 ml-4' />
      </div>
      <div className='flex justify-between w-[38%]'>
        <ul className='font-atyp-regular flex justify-between items-center w-[73%] text-xs'>
          <li>About Us</li>
          <li>Service</li>
          <li>Reviews</li>
          <li>Contact Us</li>
          <li>Login</li>
        </ul>
        <button className='bg-[#FFB930] text-white text-xs font-normal py-1.5 px-3 rounded-full font-atyp-regular '>
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;

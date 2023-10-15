import React from 'react';
import { Logo } from '../assets';
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';

const Navbar = () => {
  return (
    <motion.div
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className='w-[90%] mx-auto bg-white rounded-full px-2 py-2 flex justify-between items-center'>
      <div>
        <img src={Logo} alt='A logo' className='w-24 ml-4' />
      </div>
      <div className='flex justify-between w-[34%]'>
        <ul className='flex justify-between items-center w-[73%] text-sm'>
          <li>About Us</li>
          <li>Service</li>
          <li>Reviews</li>
          <li>Contact Us</li>
          <li>Login</li>
        </ul>
        <button className='bg-[#FFB930] text-white text-sm font-semibold py-2 px-4 rounded-full'>
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
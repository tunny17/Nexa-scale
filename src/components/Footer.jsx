import React from 'react';
import { FooterBackground, Instagram, Logo, Meta, Twitter } from '../assets';

const Footer = () => {
  return (
    <div
      data-scroll-section
      className='bg-[#FFB930] flex gap-14 items-center h-[40vh] pl-[20%] relative'>
      <img
        src={FooterBackground}
        alt=''
        className='absolute w-[14%] top-[11%] left-[6%]'
      />
      <img
        src={Logo}
        alt=''
        className='absolute w-[15%] top-[20%] left-[15%]'
      />
      <div className='flex gap-[10%] w-[50%] text-white mx-auto'>
        <ul className='flex flex-col gap-5 text-xs font-atyp-guminertLight'>
          <li className='font-medium'>About</li>
          <li>Contact Us</li>
          <li>Terms & Condition</li>
          <li>Privacy policy</li>
        </ul>
        <ul className='flex flex-col gap-5 text-xs font-atyp-guminertLight'>
          <li className='font-medium'>Contact us</li>
          <li>09012345678</li>
          <li>support@sage.world</li>
          <li>N0 23 Adedoyin Street, V.I. Lagos</li>
        </ul>
        <ul className='flex flex-col gap-5 text-xs font-atyp-guminertLight'>
          <li>Connect with us</li>
          <li className='flex gap-6'>
            <img
              src={Instagram}
              alt=''
              className='transition-all hover:scale-75 cursor-pointer'
            />
            <img
              src={Twitter}
              alt=''
              className='transition-all hover:scale-75 cursor-pointer'
            />
            <img
              src={Meta}
              alt=''
              className='transition-all hover:scale-75 cursor-pointer'
            />
          </li>
        </ul>
        <img
          src={FooterBackground}
          alt=''
          className='absolute w-[14%] bottom-[11%] right-[10%]'
        />
      </div>
    </div>
  );
};

export default Footer;

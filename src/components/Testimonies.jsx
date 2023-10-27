import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  TestimoniesLeft,
  TestimoniesRight,
  Testimony,
  TestimonyBackground,
} from '../assets';

const Testimonies = () => {
  return (
    <div className='h-[100vh] text-white relative z-20'>
      <h1 className='text-center text-4xl font-atyp-medium absolute left-[43%] top-20 z-20'>
        Testimonies
      </h1>
      <img
        src={TestimonyBackground}
        alt=''
        className='absolute h-[100vh] z-10'
      />
      <img
        src={Testimony}
        alt=''
        className='absolute left-[19%] top-[17%] w-[9%] z-20'
      />
      <img
        src={TestimoniesLeft}
        alt=''
        className='absolute left-0 bottom-0 z-20'
        data-scroll
        data-scroll-direction='horizontal'
        data-scroll-speed='-1'
      />
      <img
        src={TestimoniesRight}
        alt=''
        className='absolute right-0 top-0 z-20 '
        data-scroll
        data-scroll-direction='horizontal'
        data-scroll-speed='1'
      />
      <div className='w-[24%] mx-auto absolute left-[39%] bottom-[20%] z-20'>
        <p className='leading-7 font-atyp-guminertRegular'>
          “it's been a game-changer for me. The ability to connect with
          experienced tutors who specialize in my subjects has been incredibly
          valuable. Not only have they helped me grasp complex concepts, but
          they've also given me study tips and resources that have improved my
          overall performance in college. Thanks to this platform, my grades
          have never been better!"
        </p>
        <p className='mt-7 mb-[20%] font-atyp-guminertRegular'>Kemi Adenuga</p>
        <div className='flex justify-between'>
          <img src={ArrowLeft} alt='' className='' />
          <img src={ArrowRight} alt='' className='' />
        </div>
      </div>
    </div>
  );
};

export default Testimonies;

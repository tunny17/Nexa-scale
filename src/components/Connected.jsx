import React from 'react';
import {
  ConnectedOne,
  ConnectedOneSvg,
  ConnectedThree,
  ConnectedThreeSvg,
  ConnectedTwo,
  OrangeConnected,
  YellowConnected,
} from '../assets';

const Connected = () => {
  return (
    <div
      className='h-[80vh] bg-[rgb(242,66,54)] mt-[10%] relative'
      data-scroll-section>
      <img src={YellowConnected} alt='' className='absolute left-0 top-0' />
      <img
        src={ConnectedOne}
        alt=''
        className='w-[18%] absolute left-0 top-[14%]'
        data-scroll
        data-scroll-direction='horizontal'
        data-scroll-speed='-4'
      />
      <img
        src={ConnectedOneSvg}
        alt=''
        className='absolute left-[18.5%] top-[30%]'
      />
      <img
        src={ConnectedTwo}
        alt=''
        className='w-[14%] absolute left-[40%] top-0'
      />
      <img
        src={ConnectedThree}
        alt=''
        className='w-[25%] absolute right-0 bottom-[25%] z-30'
        data-scroll
        data-scroll-direction='horizontal'
        data-scroll-speed='-4'
      />
      <img
        src={ConnectedThreeSvg}
        alt=''
        className='absolute right-20 bottom-[72%] z-30'
      />
      <img
        src={OrangeConnected}
        alt=''
        className='absolute right-0 bottom-[44.8%] z-20'
      />
      <div className='absolute bottom-20 left-[30%] w-[40%] text-white '>
        <h1 className='font-atyp-medium text-2xl'>
          Stay connected with NexaScale
        </h1>
        <p className='font-atyp-guminertLight font-thin text-sm my-3 w-[80%]'>
          Our user-friendly service is designed to provide you with a
          hassle-free experience, making it easier than ever to stay connected.
        </p>
        <button className='px-5 py-2 bg-[#FFB930] rounded-md text-sm font-atyp-guminertRegular'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Connected;

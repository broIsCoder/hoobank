import React from 'react'
import styles from '../style'
import GetStarted from './GetStarted';
import { discount, robot } from '../assets'

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph}`}>
          <span className='text-white'>20%</span>{" "}Discount For
          <span className='text-white'>{" "}1 Month</span>{" "}Account
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] text-white'>The Next
          <br className='sm:block hidden' />
          <span className='text-gradient'>{" "}Generation</span>{" "}
        </h1>

        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss;text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-[460px] mt-5`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In expedita quis recusandae magni! Earum natus voluptates laudantium cupiditate officiis, libero a! Praesentium odio reprehenderit deserunt mollitia?</p>
    </div>

    <div className={`flex-1 flex justify-end items-end md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" className='pt-2 relative z-[5] h-100 w-100' />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
      <div className='absolute z-[1] w-[80%] h-[85%] bottom-40 white__gradient rounded-full '></div>
      <div className='absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 blue__gradient'></div>
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div>
  </section>
)

export default Hero
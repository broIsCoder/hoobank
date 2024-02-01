import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`${styles} rounded-[10px] py-4 px-6 bg-blue-gradient font-poppins font-medium text-primary outline-none`}>
      Get Started
    </button>
  )
}

export default Button
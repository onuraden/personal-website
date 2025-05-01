import React from 'react'

function Footer() {
  return (
    <div className="absolute w-[47.375rem] h-[8.5625rem] left-[21.3125rem] top-[173.5625rem]">
      <div className='flex gap-10'>
        <p className="font-medium text-[2.625rem] leading-[1.5] tracking-[0.0105rem] text-right w-[33.846rem]">Let’s work together on your next product.</p>
        <div className="flex flex-col">
          <a className="font-medium text-[1.5rem] leading-[1.5] tracking-normal text-[#1769FF]" href="https://github.com/onuraden">Github</a>
          <a className="font-medium text-[1.5rem] leading-[1.5] tracking-normal text-[#0A0A14]" href="https://personal-website-sage-pi.vercel.app/">Personal Blog</a>
          <a className="font-medium text-[1.5rem] leading-[1.5] tracking-normal text-[#0077B5]" href="https://www.linkedin.com/in/onur-gurcay-732bba85/">LinkedIn</a>
          <a href="mailto:gurcayonur@outlook.com" className="font-medium text-[1.5rem] leading-[1.5] tracking-normal text-[#AF0C48]">Email</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
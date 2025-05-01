import React from 'react'
import { aboutEng } from '../data'

function About() {
  return (
    <div>
        <p className="font-playfair font-normal text-[1.5rem] leading-[1] tracking-[0.015rem] pb-3 pt-6">{aboutEng.title}</p>
        <div className="w-[29.75rem]">
            <p className="font-normal text-[0.9rem] leading-[1.5] tracking-[0.01125rem]">{aboutEng.text1}</p>
            <p className="font-normal text-[0.9rem] leading-[1.5] tracking-[0.01125rem]">{aboutEng.text2}</p>
        </div>
    </div>
  )
}

export default About
import React from 'react'
import {logos} from "../data.js";

function Skills() {
  return (
    <div className="absolute left-[16.188rem] top-[51.125rem] w-[58.875rem] h-[17.5rem]">
      <p className="font-medium text-[3rem] leading-[1] tracking-[0.03rem] text-center pb-10">Skills</p>
      <div className="flex gap-2.5 justify-center">
        {logos.map((logo) => <img key={logo.id} src={logo.src}/>)}
      </div>
    </div>
  )
}

export default Skills
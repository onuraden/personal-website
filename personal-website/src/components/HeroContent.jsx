import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Foto from "../assets/Foto.png";
 

function HeroContent() {
  return (
    <div className="absolute w-[69.1875rem] h-[30.8125rem] left-[10.125rem] top-[9.4375rem]">
        <div className="flex justify-between">
            <div className="flex flex-col gap-2 ">
                <p className="font-normal text-[1.875rem] leading-[1] tracking-[0.1875rem]">Hi! 👋</p>
                <p className="font-medium text-[2.625rem] leading-[4rem] tracking-[0.02625rem]">I’m Onur. I’m a front-end <br/> developer. 
                I can craft solid and <br/> scalable frontend products.<br/> Let’s meet!</p>
                <div className="flex gap-2">
                    <a href="https://www.linkedin.com/in/onur-gurcay-732bba85/"><FontAwesomeIcon icon={faLinkedinIn} size="xl" /></a>
                    <a href="https://github.com/onuraden"><FontAwesomeIcon icon={faGithub} size="xl"/></a>
                </div>
                <p className="font-normal text-[1.125rem] leading-[2rem] tracking-[0.05625rem]">Currently <span className="text-[#AF0C48]">Freelancing</span> for <span className="text-[#AF0C48]">UX, UI, & Web Design</span> Project. <br/>   
                Invite me to join your team: <a href="mailto:gurcayonur@outlook.com" className="text-[#AF0C48] underline">gurcayonur@outlook.com</a></p>
            </div>
            <div>
                <img className="w-[21.3125rem] h-[21.3125rem] rounded-[1.375rem]" src={Foto} />
            </div>
        </div>
    </div>

    
    
  )
}

export default HeroContent
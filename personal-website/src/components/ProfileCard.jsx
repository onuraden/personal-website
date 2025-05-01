import React from 'react'
import { infoEng } from '../data';

function ProfileCard() {
    return (
        <div className="w-[24rem] p-6 bg-white rounded-[1rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)]">
          <h2 className="font-playfair font-normal text-[1.5rem] leading-[1] tracking-[0.015rem] mb-4 text-[#EA2678]">{infoEng.title}</h2>
          <div className="space-y-3 text-sm text-black">
            <div className="flex justify-between">
              <span className="font-semibold">Date of Birth</span>
              <span>{infoEng.birthday}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Address</span>
              <span>{infoEng.address}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Education</span>
              <span className="text-right">
                {infoEng.education}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Preferred Role</span>
              <span>{infoEng.role}</span>
            </div>
          </div>
        </div>
      );
}

export default ProfileCard
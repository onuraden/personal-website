import React from 'react'
import ProfileCard from '../components/ProfileCard'
import About from '../components/About'

function Profile() {
  return (
    <div className="absolute left-0 top-[76.75rem] w-[90rem] h-[30rem] bg-[#F4F4F4]">
      <p className="font-medium text-[2.25rem] leading-[1] tracking-[0.03rem] text-center pt-10 pb-10">Profile</p>
      <div className="flex justify-center	gap-10">
        <ProfileCard />
        <About />
      </div>
    </div>
  )
}

export default Profile
import React from 'react'
import chefLogo from '../assets/chef-claude-icon.png'
const Header = () => {
  return (
    <header className='bg-white flex justify-center gap-3 shadow-gray-400 drop-shadow-lg h-[10vh]'>
        <img src={chefLogo} className='py-2' alt="" />
        <p className='font-inter text-center self-center font-medium text-5xl'>Chef Claude</p>
    </header>
  )
}

export default Header
import React from 'react'
import Logo1 from '../assets/logo3.png'
import Logo2 from '../assets/logo2.webp'



const Header = () => {
  return (
    <div>
      <header className=' flex items-center justify-between bg-blue-100 w-screen px-4 py-4'>
        <div className='w-16 '>
             <img src={Logo1} alt="image " className='w-full'/>
        </div>
        <div className='flex-1 text-center'  >
            <h1 className='text-lg md:text-4xl font-bold text-blue-900 '>ASSUMPTION CHURCH  PALLAPALAYAM </h1>
        </div>
        <div className='w-14 '>
         <img src={Logo2} alt="image " className='w-full' />
        </div>
      </header>
    </div>
  )
}

export default Header

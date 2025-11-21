import React, { useState } from 'react'
import { CgBell, CgGlobe, CgSearch } from 'react-icons/cg'
import logo from "../assets/Logo-Syrian-Platform.png"
import { FaEarthAsia } from 'react-icons/fa6'
import { AiOutlineMenu } from 'react-icons/ai'
import MobileNav from './MobileNav'


const Navbar = () => {
  const [open ,setOpen] = useState(false)
  return (
    <div className='bg-white w-full flex items-center justify-between py-4 px-12 2xl:px-24'>
      <div className="flex items-center gap-2 xl:gap-4">
         <img src={logo} alt="" className='w-48 '/> 
        <span className='text-4xl hidden'>|</span>
         <ul className='lg:flex gap-3 xl:gap-5 hidden'>
         <li>الرئيسية</li> 
        <li>الكورسات</li>
        <li>المنتدى</li>
        <li>المشاريع</li>
        <li>اتصل بنا</li>
      </ul>
      </div>
      <form>
       <div className="relative lg:flex items-center hidden"> 
        <CgSearch className='absolute left-3'/>
        <input type="text" placeholder='ادخل كلمة المرور' className=' bg-gray-100 rounded-full p-3 mt-2 mb-3 lg:w-[150px] xl:w-[250px] 2xl:w-[350px]'/>      
       </div> 
      </form>
      <div className="lg:flex items-center gap-4 hidden">
        <div className='flex items-center gap-3'>
        <CgBell className='bg-gray-100 w-8 h-8 p-1 rounded-lg'/>
        <FaEarthAsia className='bg-gray-100 w-8 h-8 p-1 rounded-lg'/>
      </div>
              <span className='text-4xl'>|</span>
<div className='flex items-center gap-3'>
    <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className='w-8 h-8 xl:w-12  xl:h-12 rounded-full'/>
    <span className='font-medium'>المدربة ريم فالح</span>
</div>
      </div>
<div onClick={() => setOpen(!open)}>
<AiOutlineMenu className='block lg:hidden'/>
      </div>
      {
        open && <MobileNav/>
      }
      
    </div>
  )
}

export default Navbar

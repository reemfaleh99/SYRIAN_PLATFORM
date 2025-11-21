import React from 'react'
import { CgBell, CgSearch } from 'react-icons/cg'
import { FaEarthAsia } from 'react-icons/fa6'

const MobileNav = () => {
  return (
    <div className='absolute top-[10%] left-0 w-full h-full z-50 bg-amber-50 p-12'>
         <div className="flex items-center gap-4 my-10">
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
                  <form>
             <div className="flex items-center "> 
            
              <input type="text" placeholder='ادخل كلمة المرور' className=' bg-gray-100 rounded-full p-3 mt-2 mb-3 w-full'/>    <CgSearch  className='w-10 h-10'/>    
             </div> 
            </form>   
           
            <ul className='my-10 text-2xl font-semibold flex flex-col gap-5 items-center'>
        <li>الرئيسية</li> 
        <li>الكورسات</li>
        <li>المنتدى</li>
        <li>المشاريع</li>
        <li>اتصل بنا</li>
      </ul>
     
          
    </div>
  )
}

export default MobileNav

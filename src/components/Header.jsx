import React from 'react'
import { CgCrown } from 'react-icons/cg'
import pic from "../assets/Screenshot (12).png"
import Button from './Button'

const Header = () => {
  return (
    <div className='flex w-full px-12 xl:px-24 h-[85vh] 2xl:h-[75vh] items-center justify-between'>
      <div className='w-full lg:w-1/2 flex flex-col gap-5'>
      <Button bg="babyBlue/9" text="babyBlue" title="ابدأ الان"/>
        <h2 className=' font-semibold text-3xl text-center lg:text-start lg:text-5xl my-5'>منصتك المناسبة للتعلم والتعليم</h2>
        <p className='text-md text-gray-400'>المنصة الوزارية هي بوابة رقمية شاملة تهدف الى التعليم في سوريا تجمع المنصة بين التقنيات الحديثة والمحتوى المحلي لتسهيل الوصول الى المعرفة في اي وقت ومكان</p>
        <div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-0  '>
        <Button bg="babyBlue" text="white" title="الكورسات"/>
            <span className='mx-2 xl:mx-5'>او</span>
                    <Button bg="gray-200" title="عرض المزيد"/>

        </div>
        <div className='text-babyBlue bg-babyBlue/9 p-5 font-medium text-center rounded-xl flex w-full xl:w-1/2 items-center justify-between'>
            <div>
                <h5 className='font-semibold text-2xl'>2.5+</h5>
                <span>طالب</span>
            </div>
            <div>
                <h5 className='font-semibold text-2xl'>2.5+</h5>
                <span>طالب</span>
            </div>
            <div>
                <h5 className='font-semibold text-2xl'>2.5+</h5>
                <span>طالب</span>
            </div>
        </div>
        <div className='flex items-center gap-12 font-medium text-gray-400'>
            <div className='flex relative'>
              <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className=' w-12 h-12 rounded-full'/>
              <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className='absolute right-5 w-12 h-12 rounded-full'/>
              <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className='absolute right-10 w-12 h-12 rounded-full'/>
            </div>
            <span>اكثر من 10000 طالب يتدرب في المنصة</span>
        </div>
      </div>
           <div className="relative h-screen w-[20%] hidden xl:block">
         <div className="absolute top-1/5 left-0 scale-y-[-1] rotate-180 w-[250px] h-[250px]">
  <svg
  width="200"
  height="120"
  viewBox="0 0 200 120"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="text-babyBlue"
>
  <path
    d="
      M 20 90 
      C 60 20, 140 20, 180 90
    "
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
  />

  <path
    d="
      M 180 60 
      L 180 90 
      L 160 105
    "
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
  />
</svg>

        </div>
        <div className="absolute top-[15%] left-1/2 scale-y-[-1] rotate-180 w-[250px] h-[250px]">
  <svg
  width="50"
  height="120"
  viewBox="0 0 150 120"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="text-babyBlue"
>
  <path
    d="
      M 20 90 
      C 60 20, 140 20, 180 90
    "
    stroke="currentColor"
    strokeWidth="7"
    strokeLinecap="round"
  />

  
</svg>

        </div>
     <img
            src={pic}
            className="absolute w-36 h-36 bottom-1/5 left-1/2 z-50"
          /></div>
      <div className='lg:block relative hidden' >
        <div className='w-96 h-96 bg-linear-to-b from-babyBlue to-white rounded-[150px] relative' >
          <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png" alt="" />
            <div className='flex absolute bg-white p-2 rounded-xl items-center gap-1 font-medium -left-12 top-12'>
                <CgCrown className='text-yellow-500 w-7 h-7'/>
                <span>مشاريع تطوعية</span>
            </div>
            <div className='flex absolute bg-gray-100 p-2 rounded-xl items-center gap-1 font-medium -right-12 bottom-24'>
                <CgCrown className='text-yellow-500 w-7 h-7'/>
                <span>كورسات تعليمية</span>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Header

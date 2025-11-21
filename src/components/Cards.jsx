import React from 'react'
import { BsCalendar, BsCalendar2, BsClock, BsStar, BsStarFill } from 'react-icons/bs'
import { CgCalendar } from 'react-icons/cg'
import Button from './Button'
import { BiCalendar } from 'react-icons/bi'
import CardButton from './CardButton'

const Cards = ({image,title, students,stars,date,imgs,vol,desc,comments,btn,hours,border,align ,w}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-18 gap-6 mb-10">
        <div className='bg-white rounded-2xl'>
      <div className='relative '>
        <img 
        className='w-full h-[150px] rounded-t-2xl'
        src={image} alt="" />
       {
        hours && <div className='flex items-center gap-2 absolute top-5 right-3 bg-white py-2 px-5 rounded-full '>
            <BsClock />
            <span>{hours} ساعة</span>
        </div>
       }
      </div>
      <div className="px-4 border border-gray-300 rounded-b-xl">
        <div className="flex items-center my-3 justify-between ">
       {
        date && (
        <div className='flex gap-2 items-center '>
          <BiCalendar className='w-6 h-6'/>
        <span>{date}</span>
        </div>
        )
      }
      {
        comments && <span className='text-md font-medium text-gray-400'>{comments} تعليق</span>
      }
   </div>
      <h4 className=' text-xl font-bold'>{title}</h4>
      {
        desc && <p className='text-gray-500  mt-3'>{desc}</p>
      }
      {
        vol && (
            <div className='flex items-center gap-8 font-medium text-gray-400 mt-5'>
            <div className='flex relative'>
              <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className=' w-5 h-5 rounded-full'/>
              <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className='absolute right-3 w-5 h-5 rounded-full'/>
              <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className='absolute right-6 w-5 h-5 rounded-full'/>
            </div>
            <span>{vol} متطوع في المشروع الحالي</span>
        </div>
        )
      }
     
      <div className='py-3 flex items-center justify-between text-babyBlue font-medium'>
        {students && <span>{students} طالب</span>}
        {stars && <div className='flex items-center gap-2 text-black'>
            <span>{stars}</span>
            <BsStarFill className='text-amber-400'/>
            
        </div>}
      </div> 
          <CardButton btn={btn} border={border} align={align} w={w} />
      </div>
   

        </div>
        <div className='bg-white rounded-2xl'>
      <div className='relative '>
        <img 
        className='w-full h-[150px] rounded-t-2xl'
        src={image} alt="" />
       {
        hours && <div className='flex items-center gap-2 absolute top-5 right-3 bg-white py-2 px-5 rounded-full '>
            <BsClock />
            <span>{hours} ساعة</span>
        </div>
       }
      </div>
      <div className="px-4 border border-gray-300 rounded-b-xl">
        <div className="flex items-center my-3 justify-between ">
       {
        date && (
        <div className='flex gap-2 items-center '>
          <BiCalendar className='w-6 h-6'/>
        <span>{date}</span>
        </div>
        )
      }
      {
        comments && <span className='text-md font-medium text-gray-400'>{comments} تعليق</span>
      }
   </div>
      <h4 className=' text-xl font-bold'>{title}</h4>
      {
        desc && <p className='text-gray-500  mt-3'>{desc}</p>
      }
      {
        vol && (
            <div className='flex items-center gap-8 font-medium text-gray-400 mt-5'>
            <div className='flex relative'>
              <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className=' w-5 h-5 rounded-full'/>
              <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className='absolute right-3 w-5 h-5 rounded-full'/>
              <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className='absolute right-6 w-5 h-5 rounded-full'/>
            </div>
            <span>{vol} متطوع في المشروع الحالي</span>
        </div>
        )
      }
     
      <div className='py-3 flex items-center justify-between text-babyBlue font-medium'>
        {students && <span>{students} طالب</span>}
        {stars && <div className='flex items-center gap-2 text-black'>
            <span>{stars}</span>
            <BsStarFill className='text-amber-400'/>
            
        </div>}
      </div> 
          <CardButton btn={btn} border={border} align={align} w={w} />
      </div>
   

        </div>
        <div className='bg-white rounded-2xl'>
      <div className='relative '>
        <img 
        className='w-full h-[150px] rounded-t-2xl'
        src={image} alt="" />
       {
        hours && <div className='flex items-center gap-2 absolute top-5 right-3 bg-white py-2 px-5 rounded-full '>
            <BsClock />
            <span>{hours} ساعة</span>
        </div>
       }
      </div>
      <div className="px-4 border border-gray-300 rounded-b-xl">
        <div className="flex items-center my-3 justify-between ">
       {
        date && (
        <div className='flex gap-2 items-center '>
          <BiCalendar className='w-6 h-6'/>
        <span>{date}</span>
        </div>
        )
      }
      {
        comments && <span className='text-md font-medium text-gray-400'>{comments} تعليق</span>
      }
   </div>
      <h4 className=' text-xl font-bold'>{title}</h4>
      {
        desc && <p className='text-gray-500  mt-3'>{desc}</p>
      }
      {
        vol && (
            <div className='flex items-center gap-8 font-medium text-gray-400 mt-5'>
            <div className='flex relative'>
              <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className=' w-5 h-5 rounded-full'/>
              <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className='absolute right-3 w-5 h-5 rounded-full'/>
              <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className='absolute right-6 w-5 h-5 rounded-full'/>
            </div>
            <span>{vol} متطوع في المشروع الحالي</span>
        </div>
        )
      }
     
      <div className='py-3 flex items-center justify-between text-babyBlue font-medium'>
        {students && <span>{students} طالب</span>}
        {stars && <div className='flex items-center gap-2 text-black'>
            <span>{stars}</span>
            <BsStarFill className='text-amber-400'/>
            
        </div>}
      </div> 
          <CardButton btn={btn} border={border} align={align} w={w} />
      </div>
   

        </div>
  
    </div>
  )
}

export default Cards



import React from 'react'
import { BsArrowLeft} from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa6'
import Title from './Title'

const WhyUs = () => {
  return (
    <div className='py-12 px-12 xl:px-24 flex gap-10'>
      <div className='w-1/2 h-[90vh] bg-linear-to-b from-babyBlue to-blue-100 rounded-4xl relative hidden lg:block'>
          
      
      <div className='w-48 h-48 border-48 border-gray-50/65 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
      <div className='w-2/3 h-2/3 border-48 border-gray-50/65 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
      <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png" alt="" className='z-9 absolute  left-[60%] bottom-0 transform -translate-x-1/2 '/>

     
      </div>
      <div className='w-full lg:w-1/2 h-fit lg:h-screen'>
        <Title title="لماذا نحن؟"  desc="نحن المنصة السورية التي تقدم كافة أنواع الدورات." align='start' />
        <span className='text-sm text-gray-500 font-medium'>المنصة الوزارية التعليمية هي بوابة رقمية شاملة تهدف الى دعم التعليم في سوريا تجمع المنصة بين التقنيات الحدثة والمحتوى المحلي لتسهيل الوصول الى المعرفة في اي وقت ومكان</span>
          <div className='grid grid-cols-1 md:grid-cols-2 my-10 gap-10 lg:gap-5'>
        <div className='border border-gray-300 p-4 rounded-2xl'>
            <div className='flex items-center justify-between '>
                <FaGraduationCap className='p-2 bg-gray-100 rounded-xl w-12 h-12'/>
                <BsArrowLeft className='w-12 h-12 rotate-45'/>
            </div>
            <h5 className='text-2xl text-black font-bold my-3'>الكورسات</h5>
             <span className='text-sm text-gray-500 font-medium'>نقدم افضل انولع الكورسات بميزات عالية جدا وبانظمة جميلة وفعالة وبنظام</span>
        </div>
        <div className='border border-gray-300 p-4 rounded-2xl'>
            <div className='flex items-center justify-between '>
                <FaGraduationCap className='p-2 bg-gray-100 rounded-xl w-12 h-12'/>
                <BsArrowLeft className='w-12 h-12 rotate-45'/>
            </div>
            <h5 className='text-2xl text-black font-bold my-3'>الكورسات</h5>
             <span className='text-sm text-gray-500 font-medium'>نقدم افضل انولع الكورسات بميزات عالية جدا وبانظمة جميلة وفعالة وبنظام</span>
        </div>
        <div className='border border-gray-300 p-4 rounded-2xl'>
            <div className='flex items-center justify-between '>
                <FaGraduationCap className='p-2 bg-gray-100 rounded-xl w-12 h-12'/>
                <BsArrowLeft className='w-12 h-12 rotate-45'/>
            </div>
            <h5 className='text-2xl text-black font-bold my-3'>الكورسات</h5>
             <span className='text-sm text-gray-500 font-medium'>نقدم افضل انولع الكورسات بميزات عالية جدا وبانظمة جميلة وفعالة وبنظام</span>
        </div>
        <div className='border border-gray-300 p-4 rounded-2xl'>
            <div className='flex items-center justify-between '>
                <FaGraduationCap className='p-2 bg-gray-100 rounded-xl w-12 h-12'/>
                <BsArrowLeft className='w-12 h-12 rotate-45'/>
            </div>
            <h5 className='text-2xl text-black font-bold my-3'>الكورسات</h5>
             <span className='text-sm text-gray-500 font-medium'>نقدم افضل انولع الكورسات بميزات عالية جدا وبانظمة جميلة وفعالة وبنظام</span>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default WhyUs

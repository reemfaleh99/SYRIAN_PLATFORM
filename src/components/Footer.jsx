import React from 'react'

import logo from "../assets/Logo-Syrian-Platform.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-blackBlue text-white px-12 xl:px-24 py-12'>
     <div className="flex justify-between flex-col lg:flex-row">
        <div className='w-full lg:w-1/3'>
        <img src={logo} alt="" className='w-1/2 h-24 my-8'/>
        <p className='font-medium'>
            المنصة الورازرية التعليمية هي بوابة رقمية شاملة تهدف لتجيمع بين التقنيات الحديثة والمحتوى المحلي لتسهيل الوصول الى المعرفة في اي وقت ومكان
        </p>
        </div>
        <div >
            <h5 className='font-medium text-2xl'>الرئيسية</h5>
            <span className='w-14 h-[3px] bg-linear-to-l from-babyBlue to-blackBlue rounded-full block my-3'></span>
            <ul className='text-xl flex flex-col gap-3'>
                <li>السياسة</li>
                <li>الشركاء</li>
                <li>المشاريع</li>
                <li>المساعدة</li>
                <li>الدعم</li>
            </ul>
        </div>
        <div >
            <h5 className='font-medium text-2xl'>التقنيات</h5>
            <span className='w-14 h-[3px] bg-linear-to-l from-babyBlue to-blackBlue rounded-full block my-3'></span>
            <ul className='text-xl flex flex-col gap-3'>
                <li>من نحن</li>
                <li>الدورات</li>
                <li>المشاريع</li>
             
            </ul>
        </div>
        <div >
            <h5 className='font-medium text-2xl'>اتصل بنا</h5>
            <span className='w-14 h-[3px] bg-linear-to-l from-babyBlue to-blackBlue rounded-full block my-3'></span>
            <ul className='text-xl flex flex-col gap-3'>
                <li>من نحن</li>
                <li>الدورات</li>
                <li>المشاريع</li>
                <li>المنتدى</li>
                <li>الاخبار</li>
            </ul>
        </div>
     </div>
     <span className='block w-full h-px bg-darkBlue my-10'></span>
     <div className="flex flex-col lg:flex-row justify-between">
        <p className='text-xl font-medium'>حميع الحقوق محفوظة للمنصة السورية 2025</p>
        <div className='flex items-center gap-2 text-blackBlue'>
            <FaFacebook className='w-10 h-10 bg-white p-2 rounded-full '/>
            <FaInstagram className='w-10 h-10 bg-white p-2 rounded-full '/>
            <FaLinkedin className='w-10 h-10 bg-white p-2 rounded-full '/>
            <FaTwitter className='w-10 h-10 bg-white p-2 rounded-full '/>
        </div>
     </div>
    </div>
  )
}

export default Footer

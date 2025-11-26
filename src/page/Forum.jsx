import React from 'react'

import Button from "../components/Button"
import Cards from '../components/Cards'
import LatestArticles from '../components/LatestArticles'
import ForumFilter from '../components/ForumFilter'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { CgAdd } from 'react-icons/cg'
import { Link, NavLink } from 'react-router-dom'

const newsCards = [
  {
    id:"0",
    img:"https://picsum.photos/300/200",
    title:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    date:"25/11/2025",
    comment:66,
    desc:"كورس تصميم UI UX للتطبيقات والمواقع كورس تصميم UI UX للتطبيقات والمواقع كورس تصميم UI UX للتطبيقات والمواقع كورس تصميم UI UX للتطبيقات والمواقع"

    },
  {
    id:"1",
    img:"https://picsum.photos/300/200",
    title:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    date:"25/11/2025",
    comment:66,
    desc:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية"

    },
  {
    id:"3",
    img:"https://picsum.photos/300/200",
    title:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    date:"25/11/2025",
    comment:66,
    desc:"كورس تصميم UI UX للتطبيقات والمواقع كورس تصميم UI UX للتطبيقات والمواقع كورس تصميم UI UX للتطبيقات والمواقع كورس تصميم UI UX للتطبيقات والمواقع"

    },
  {
    id:"4",
    img:"https://picsum.photos/300/200",
    title:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    date:"25/11/2025",
    comment:66,
    desc:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية"

    },
  {
    id:"5",
    img:"https://picsum.photos/300/200",
    title:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    date:"25/11/2025",
    comment:66,
    desc:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية"

    },
  {
    id:"6",
    img:"https://picsum.photos/300/200",
    title:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    date:"25/11/2025",
    comment:66,
    desc:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية"

    },
  {
    id:"7",
    img:"https://picsum.photos/300/200",
    title:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    date:"25/11/2025",
    comment:66,
    desc:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية"

    },
  {
    id:"8",
    img:"https://picsum.photos/300/200",
    title:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    date:"25/11/2025",
    comment:66,
    desc:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية"

    },
  {
    id:"9",
    img:"https://picsum.photos/300/200",
    title:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    date:"25/11/2025",
    comment:66,
    desc:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية"

    },
]


const Forum = () => {
  return (
    <div className='py-12'>
<div className="lg:relative w-full flex flex-col gap-10 items-center justify-center py-12 bg-multi-gradient">
  <h4 className="text-4xl font-semibold text-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
    المنتدى
  </h4>

  <Link to="add-post" className="lg:absolute lg:left-0 lg:-translate-x-1/2 w-1/2 flex items-center text-white">
  
    <Button title={`+ فتح موضوع`} bg="babyBlue" text="white" />
    
  </Link>
</div>      
<ul className='flex flex-col lg:flex-row items-center gap-8 justify-center py-6 bg-babyBlue/15 text-xl font-medium mb-12'>
        <li>الرئيسية</li>
        <li>اخبار</li>
        <li>مقالات</li>
        <li>قصص نجاح</li>
        <li>مقالات</li>
      </ul>
    <div className="lg:px-24 px-12">
  

    <div className="flex gap-12 justify-between flex-col lg:flex-row">   
      <div className='w-full lg:w-1/3'>
        <ForumFilter/>
        <LatestArticles/>
      </div>
      
 <div className="w-full lg:w-2/3">
  <div className="columns-1 md:columns-2  gap-6 space-y-6">
    {newsCards.map((item) => (
      <Link to="/post-details"  key={item.id} className="break-inside-avoid mb-6">
        <Cards
          date={item.date}
          comments={item.comment}
          title={item.title}
          desc={item.desc}
          image={item.img}
          btn="عرض المنشور"
          border="border border-gray-300"
        />
      </Link >
    ))}
  </div>
</div>

    </div>
        <div className='flex gap-2 text-4xl justify-center items-center'>
              <BsArrowRight className='p-2 border border-gray-300 rounded-lg'/>
              <p className='text-lg text-gray-400'>1 , 2 , 3 .... , 55</p>
              <BsArrowLeft className='p-2 border border-gray-300 rounded-lg'/>
            </div>
    </div>
    </div>
  )
}

export default Forum

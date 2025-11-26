import React from 'react'
import Cards from './Cards'
import Title from './Title'
import Button from './Button'

const newsCards = [
  {
    id:"0",
    img:"https://picsum.photos/300/200",
    title:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    date:"25/11/2025",
    comment:66,
    desc:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية"

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
    desc:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية"

    },

  
]

const News = () => {
  return (
     <div className='bg-gray-100 py-12 px-12  xl:px-24'>
      <Title title="المنتدى" desc="اخر الاخبار والمنشورات هذه الفترة"/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-18 gap-6 mb-10">
       {
      newsCards.map((item=>(
          <Cards
       date={item.date}
       comments={item.comment}
    title={item.title}
    desc={item.desc}
     image={item.img}
     btn="عرض المنشور"
     border="border border-gray-300"
      />
      )))
    }
    </div>
 
        <Button bg="darkBlue" text="white" mx="auto" title="عرض جميع المناشير" />
</div>
  )
}

export default News

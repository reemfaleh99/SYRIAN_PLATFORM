import React from 'react'
import Cards from './Cards'
import Title from './Title'
import Button from './Button'

const volCards = [
  {
    id:"0",
    img:"https://picsum.photos/300/200",
    title:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    date:"25/11/2025",
    vol:66

    },
  {
    id:"1",
    img:"https://picsum.photos/300/200",
    title:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    date:"25/11/2025",
    vol:66

    },
  {
    id:"2",
    img:"https://picsum.photos/300/200",
    title:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    date:"25/11/2025",
    vol:66

    },
  
]

const Volunteer = () => {
  return (
     <div className='bg-gray-100 py-12 px-12 xl:px-24  '>
    <Title title="المشاريع التطوعية" desc= "اكتشف افضل واشمل المشاريع التطوعية"/> 

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-18 gap-6 mb-10">
       {
      volCards.map((item=>(
        <Cards 
     image={item.img}
        title={item.title}
        date={item.date}
        vol={item.vol}
         btn="عرض المشروع"
     align="center"
     border="border-b border-babyBlue"
     w="1/2"
        />
      )))
    }
    </div>

    <Button bg="darkBlue" text="white" mx="auto" title="عرض جميع المشاريع"/>
    </div>
  )
}

export default Volunteer

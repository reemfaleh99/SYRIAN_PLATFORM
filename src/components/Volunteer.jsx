import React from 'react'
import Cards from './Cards'
import Title from './Title'
import Button from './Button'

const Volunteer = () => {
  return (
     <div className='bg-gray-100 py-12 px-12 xl:px-24  '>
    <Title title="المشاريع التطوعية" desc= "اكتشف افضل واشمل المشاريع التطوعية"/> 
    <Cards 
    date="25/11/2025"
    title="كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية"
    vol={22}
     image="https://picsum.photos/300/200"
     btn="عرض المشروع"
     align="center"
     border="border-b border-babyBlue"
     w="1/2"
    />
    <Button bg="darkBlue" text="white" mx="auto" title="عرض جميع المشاريع"/>
    </div>
  )
}

export default Volunteer

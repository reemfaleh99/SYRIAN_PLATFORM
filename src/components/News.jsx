import React from 'react'
import Cards from './Cards'
import Title from './Title'
import Button from './Button'

const News = () => {
  return (
     <div className='bg-gray-100 py-12 px-12  xl:px-24'>
      <Title title="المنتدى" desc="اخر الاخبار والمنشورات هذه الفترة"/>
      <Cards
       date="25/11/2025"
       comments={100}
    title="كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية"
    desc="كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية"
     image="https://picsum.photos/300/200"
     btn="عرض المنشور"
     border="border border-gray-300"
      />
        <Button bg="darkBlue" text="white" mx="auto" title="عرض جميع المناشير" />
</div>
  )
}

export default News

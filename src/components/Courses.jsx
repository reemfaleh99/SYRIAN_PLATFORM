import React from 'react'
import ChooseSection from './ChooseSection'
import OptionsList from './ChooseSection';
import Cards from './Cards';
import Title from './Title';
import Button from './Button';

const coursesCards = [
  {
    id:"0",
    img:"https://picsum.photos/300/200",
    title:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    student:1700,
    stars:4.5,
    hours:27,
    },
  {
    id:"1",
    img:"https://picsum.photos/300/200",
    title:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    student:1700,
    stars:4.5,
    hours:27,
    },
  {
    id:"2",
    img:"https://picsum.photos/300/200",
    title:"كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    student:1700,
    stars:4.5,
    hours:27,
    },
]

const Courses = () => {
      const categories = [
    { label: "اللغات", value: "lang" },
    { label: "الادارة والقيادة", value: "manage" },
    { label: "غرافيك ديزاين", value: "graph" },
    { label: "العربية", value: "ara" },
    { label: "البرمجة", value: "prog" },
    { label: "UI/UX", value: "ui" }
  ];
    const handleSelect = (option) => {
    console.log("Selected:", option.label);
  };

  return (
    <div className='bg-gray-100 py-12 px-12 xl:px-24'>
        <Title title="الكورسات الموصى بها " desc="اكتشف مجموعة واسعة من أكثر من 250 دورة "/>
         <div className=" pb-10">
      <OptionsList
        options={categories}
        onSelect={handleSelect}
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-18 gap-6 mb-10">
       {
      coursesCards.map((item=>(
        <Cards 
     image={item.img}
        title={item.title}
        students={item.student}
        stars={item.stars}
        btn="عرض الكورس"
        hours={item.hours}
        border="border border-babyBlue"
        />
      )))
    }
    </div>
   
    <Button bg="darkBlue" text="white" mx="auto" title="عرض جميع الكورسات"/>
    </div>
  )
}

export default Courses

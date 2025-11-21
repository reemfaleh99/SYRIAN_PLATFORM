import React from 'react'
import ChooseSection from './ChooseSection'
import OptionsList from './ChooseSection';
import Cards from './Cards';
import Title from './Title';
import Button from './Button';

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
    <Cards 
     image="https://picsum.photos/300/200"
        title="كورس تصميم UI UX للتطبيقات والمواقع الإلكترونية"
        students={1700}
        stars={4.5}
        btn="عرض الكورس"
        hours={27}
        border="border border-babyBlue"
        />
    <Button bg="darkBlue" text="white" mx="auto" title="عرض جميع الكورسات"/>
    </div>
  )
}

export default Courses

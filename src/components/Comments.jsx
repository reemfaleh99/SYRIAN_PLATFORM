import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { CiCalendarDate } from 'react-icons/ci'
import { RiStarSFill } from 'react-icons/ri'
import Title from './Title'

const Comments = () => {
  return (
    <div className='bg-gray-100 py-12 px-12 xl:px-24'>
      <div className="flex items-center justify-between">
        <Title title= "التعليقات" desc="فيما يلي بعض التعليقات حول منصتنا" align='start'/> 
        <div className='flex gap-2 text-4xl'>
          <BsArrowRight className='p-2 border border-gray-300 rounded-lg'/>
          <BsArrowLeft className='p-2 border border-gray-300 rounded-lg'/>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        
        <div className="flex gap-5 w-max">
          
          <div className='bg-gray-200 w-[450px] p-5 rounded-2xl '>
            <div className='flex items-center gap-5'>
              <img 
                src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png"
                className='w-18 h-18 bg-white rounded-full'
              />
              <div>
                <h5 className='font-medium text-xl my-1'>ريم فالح</h5>
                <span>طالب</span>
              </div>
            </div>

            <div className='flex items-center my-3 justify-between'>
              <div className='flex items-center gap-1 text-amber-500 text-xl'>
                <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill />
              </div>
              <div className='flex items-center gap-2 font-medium'>
                2025/8/18 <CiCalendarDate/>
              </div>
            </div>

            <p className='text-sm text-gray-500'>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat qui voluptate ratione quisquam, vero similique ad dolorem rem provident hic, suscipit laudantium facere accusamus! Porro atque ducimus eaque rerum unde!            </p>
          </div>

          <div className='bg-gray-200 w-[450px] p-5 rounded-2xl '>
            <div className='flex items-center gap-5'>
              <img 
                src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png"
                className='w-18 h-18 bg-white rounded-full'
              />
              <div>
                <h5 className='font-medium text-xl my-1'>ريم فالح</h5>
                <span>طالب</span>
              </div>
            </div>

            <div className='flex items-center my-3 justify-between'>
              <div className='flex items-center gap-1 text-amber-500 text-xl'>
                <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill />
              </div>
              <div className='flex items-center gap-2 font-medium'>
                2025/8/18 <CiCalendarDate/>
              </div>
            </div>

            <p className='text-sm text-gray-500'>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium a ullam accusantium laboriosam sequi nulla numquam vel sed repellendus reiciendis necessitatibus, totam facilis nesciunt nam iure odit porro cum odio.            </p>
          </div>

          <div className='bg-gray-200 w-[450px] p-5 rounded-2xl'>
            <div className='flex items-center gap-5'>
              <img 
                src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png"
                className='w-18 h-18 bg-white rounded-full'
              />
              <div>
                <h5 className='font-medium text-xl my-1'>ريم فالح</h5>
                <span>طالب</span>
              </div>
            </div>

            <div className='flex items-center my-3 justify-between'>
              <div className='flex items-center gap-1 text-amber-500 text-xl'>
                <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill />
              </div>
              <div className='flex items-center gap-2 font-medium'>
                2025/8/18 <CiCalendarDate/>
              </div>
            </div>

            <p className='text-sm text-gray-500 '>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt veniam incidunt adipisci dolore? Cum reiciendis porro ab, impedit aspernatur maiores mollitia non praesentium distinctio tempora in, unde sint alias. Exercitationem.
            </p>
          </div>

        </div>
      </div>
        
        <div className='w-full bg-linear-to-l from-babyBlue to-blue-100 py-16 px-5 flex flex-col items-center my-12 rounded-xl gap-10'>
  <p className='text-white text-2xl lg:text-4xl text-center font-semibold'>
    اكتشف اكثر من 260 دورة تعليمية مجانية وبافضل الخبرات على المنصة السورية
  </p>

  <form className='w-full relative bg-white px-3 rounded-full flex items-center gap-4'>
    <BiSearch className='w-8 h-8'/>

    <input
      type="text"
      placeholder='ابحث عن الدورة التي تحتاجها'
      className='w-3/4 py-5 focus:outline-none focus:ring-0'
    />

    <button
      className='bg-babyBlue absolute left-0 lg:left-3 py-2 px-4 rounded-full text-white lg:w-1/6 -bottom-12 w-full lg:bottom-3'
    >
      ابحث هنا
    </button>
  </form>
</div>

    </div>
  )
}

export default Comments

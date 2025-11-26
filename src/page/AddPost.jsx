import React from 'react'
import { CgAdd } from 'react-icons/cg'

const AddPost = () => {
  return (
    <div className='py-12 flex flex-col items-center'>
      <h5 className='text-3xl'>اضافة منشور جديد:</h5>
      <div className='my-10 shadow-xl rounded-xl p-5 border-r-8 border-babyBlue w-full md:w-1/2 '>
        <div>
            <label className='text-lg font-medium'>عنوان المنشور</label>
            <p className='text-gray-400 text-sm mb-2'>من فضلك يجب ان يكون الاسم معبرا ولا يتجاوز 30 حرفا</p>
            <input type="text" placeholder='دورة لغة انكليزية' className='p-3 border border-gray-300 w-full rounded-xl'/>
        </div>
        <div className='my-5 flex flex-col'>
            <label className='text-lg font-medium'>تصنيف المنشور</label>
            <select className='p-3 border border-gray-300 w-full rounded-xl mt-3 text-gray-500'>
                <option value="مقالة">مقالة</option>
                <option value="مقالة">مقالة</option>
                <option value="مقالة">مقالة</option>
            </select>
        </div>
        <div className='my-5'>
            <label className='text-lg font-medium'>صورة الغلاف</label>
            <p className='text-gray-400 text-sm mb-2'>من فضلك يجب ان تكون الصورة قصيرة ومناسبة مع الاسم</p>
            <div className='w-full flex justify-center items-center bg-babyBlue/10 py-5 rounded-xl'>
                <CgAdd className='w-14 h-14 bg-babyBlue/10 p-2 rounded-full text-babyBlue'/>
            </div>
        </div>
        <div className='my-5'>
            <label className='text-lg font-medium'>وصف قصير</label>
            <p className='text-gray-400 text-sm mb-2'>يجب الا يتجاوز 50 حرف</p>
            <input type="text"  className='p-3 border border-gray-300 w-full rounded-xl'/>
        </div>
        <div className='my-5'>
            <label className='text-lg font-medium'>ملحقات</label>
            <p className='text-gray-400 text-sm mb-2'>من فضلك يجب ان تكون الصورة قصيرة ومناسبة مع الاسم</p>
         <div className='w-full flex justify-center items-center bg-babyBlue/10 py-5 rounded-xl'>
                <CgAdd className='w-14 h-14 bg-babyBlue/10 p-2 rounded-full text-babyBlue'/>
            </div>
        </div>
        <div className='my-5'>
            <label className='text-lg font-medium'>وصف المنشور الكامل</label>
            <textarea name="" id="" className='p-3 border border-gray-300 w-full rounded-xl'></textarea>
        </div>
      </div>
    </div>
  )
}

export default AddPost

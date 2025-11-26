import React from 'react'

const filterItems = [
    {
        id:"0",
        name:"مقالات متنوعة",
        num:15
    },
    {
        id:"1",
        name:"مقالات متنوعة",
        num:18
    },
    {
        id:"2",
        name:"مقالات متنوعة",
        num:115
    },
    {
        id:"3",
        name:"مقالات متنوعة",
        num:4
    },
]

const ForumFilter = () => {
  return (
    <div className='mb-12 shadow-lg p-4 border border-gray-200 rounded-lg'>
        <h1 className='text-2xl font-semibold'>التصنيفات</h1>
        <span className='block w-full h-px bg-darkBlue my-7'></span>
        <div>
            {
                filterItems.map(item=>(
                    <div key={item.id} className='my-3 flex items-center justify-between text-gray-500'>
                        <div className="flex">
                            <input type="radio" className='radio-inp' id={`item-${item.id}`} name='filter'/>
                        <label className='radio-lbl pr-9' htmlFor={`item-${item.id}`}>{item.name}</label>
                        </div>
                        <span>{item.num}</span>
                    </div>
                ))
            }
        </div>
     
     </div>

  )
}

export default ForumFilter

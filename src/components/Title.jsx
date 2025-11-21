import React from 'react'

const Title = ({title,desc, align = "center"}) => {
  return (
     <div className={`flex flex-col  justify-center gap-3 ${align==="start"?"items-start":"items-center"}`}>
         <h3 className='text-2xl text-babyBlue font-medium'>{title}</h3>
        <p className={`text-3xl lg:text-4xl text-black font-bold ${align==="start"?"text-start":"text-center"}  pb-10`}>{desc}</p>
    </div>
  )
}

export default Title

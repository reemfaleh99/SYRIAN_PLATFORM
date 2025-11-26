import React from 'react'

const Button = ({bg,text,mx,title, rounded="full"}) => {
  return (
    <button className={`cursor-pointer text-${text} bg-${bg} py-2 px-4 rounded-${rounded} font-medium w-full lg:w-1/4 mx-${mx} block`} >{title}</button>
  )
}

export default Button

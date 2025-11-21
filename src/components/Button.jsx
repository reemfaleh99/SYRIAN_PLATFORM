import React from 'react'

const Button = ({bg,text,mx,title,}) => {
  return (
    <button className={`text-${text} bg-${bg} py-2 px-4 rounded-full font-medium w-full lg:w-1/4 mx-${mx} block`} >{title}</button>
  )
}

export default Button

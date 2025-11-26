import React from 'react'

const CardButton = ({btn, border, w="full", bg,color}) => {
  return (
    <div className={` ${border} py-2 mb-3 rounded-full text-center w-${w} font-medium bg-${bg} text-${color}`}>
      {btn}
    </div>
  )
}

export default CardButton

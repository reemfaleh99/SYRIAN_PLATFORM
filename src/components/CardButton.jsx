import React from 'react'

const CardButton = ({btn, border, w="full" }) => {
  return (
    <div className={` ${border} py-2 mb-3 rounded-full text-center w-${w} font-medium `}>
      {btn}
    </div>
  )
}

export default CardButton

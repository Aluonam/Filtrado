import React from 'react'
import StyleCSS from '@/components/CardProduct/CardProduct.module.css'

const CardProduct = ({title,imgUrl}) => {
  return (
    <div className={StyleCSS.cardBoxContainer}>
        <div className={StyleCSS.title}>{title}</div>
            <img className={StyleCSS.image} src={imgUrl}></img>
    </div>
  )
}

export default CardProduct
import React from 'react'
import Button from "../Button/Button";
import './style.scss'

export default ({featuredImg, featuredImgAlt, category, title, price, productLink})=>{
    return (
        <article className='box flex-column'>
            <img src={featuredImg} alt={featuredImgAlt}/>
            <div className='box__details'>
                <span className={`box__category spacing--xs font-tag--b ${category.toLowerCase()}`}>{category}</span>
                <h3 className='title--h6 spacing--xs'>{title}</h3>
                <div className='box__price flex-center-vertical spacing--s'>
                    <p className='font-p--b'>{price}$</p>
                </div>
                <Button link={productLink} text='Check out' variation='7'/>
            </div>
        </article>
    )
}
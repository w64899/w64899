import React from 'react'
import './style.scss'
import Button from "../Button/Button";

export default (props) => {
    return (
        <article className="blog flex-column">
            <div className="blog-wrapper">
                <img className="blog-img" src={require(`../../assets/images/${props.img}`)} alt="blog-image" aria-hidden/>
                <div className="blog-info flex-column bg--white">
                    <h3 className="blog-title title--h6">{props.title}</h3>
                    <article className="blog-description">{props.description}</article>
                    <time className="blog-date">{props.time}</time>
                    <Button link='/' text='Read the story' variation={5}/>
                </div>
            </div>
        </article>
    )
}
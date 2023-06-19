import React from "react";
import './style.scss';
import women from '../../../../assets/images/women.jpg'
import men from '../../../../assets/images/men.jpg'
import Button from "../../../../components/Button/Button";

export default ()=>{
    return(<section className={`boxes-with-buttons`}>
            <div>
                <article className="boxes-with-buttons__left-box boxes-with-buttons__box flex-between">
                    <div className="boxes-with-buttons__content">
                        <h2 className='title--h4 color-white'>Go find<span>Yourself a thing<span>WOMEN</span></span></h2>
                        <Button text="Go shopping" variation="6" link='/women'/>
                    </div>
                    <div className="boxes-with-buttons__image">
                        <img src={women} alt='Women'/>
                    </div>
                </article>
            </div>
            <div>
                <article className="boxes-with-buttons__right-box boxes-with-buttons__box flex-between">
                    <div className="boxes-with-buttons__content">
                        <h2 className='title--h4 color-white'>Go find<span>Yourself a thing<span>MEN</span></span></h2>
                        <Button text="Go shopping" variation="6" link='/men'/>
                    </div>
                    <div className="boxes-with-buttons__image">
                        <img src={men} alt='Men'/>
                    </div>
                </article>
            </div>
    </section>)
}
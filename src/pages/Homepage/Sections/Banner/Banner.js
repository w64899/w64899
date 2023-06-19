import React from 'react'
import './style.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper';
import ban1 from '../../../../assets/images/banner-1.jpg'
import ban2 from '../../../../assets/images/banner-2.jpg'
import ban3 from '../../../../assets/images/banner-3.jpg'
import Button from "../../../../components/Button/Button";

export default ()=>{
    return(
        <div className='main-banner'>
            <Swiper
                loop={true}
                autoplay={{delay: 4000}}
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className='main-banner__container'>
                        <img src={ban1} alt=''/>
                        <div className='main-banner__container-text color-white'>
                            <h1 className='title--h2 color-white'>The trendiest fashion trends!</h1>
                            <p className='color-white'>Discover a unique collection of clothing that will highlight your individual style.</p>
                            <Button link='/' text='See more &#10095;' variation='4'/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner-container'>
                        <img src={ban2} alt=''/>
                        <div className='main-banner__container-text color-white'>
                            <h1 className='title--h2 color-white'>Express your individuality!</h1>
                            <p className='color-white'>No matter the occasion, you will find suitable clothes with us that will provide you with both elegance and extraordinary comfort.</p>
                            <Button link='/' text='See more &#10095;' variation='4'/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner-container'>
                        <img src={ban3} alt=''/>
                        <div className='main-banner__container-text color-white'>
                            <h1 className='title--h2 color-white'>High-quality clothing at the best prices!</h1>
                            <p className='color-white'>Choose high-quality clothing at attractive prices and become a fashion icon today.</p>
                            <Button link='/' text='See more &#10095;' variation='4'/>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
import React from 'react'
import CarouselItem from "../../../../components/CarouselItem/CarouselItem";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from 'swiper';
import { addSlidesTabIndex } from '../../../../helpers/addSlidesTabIndex'
import './style.scss'
import {useNavigate} from "react-router-dom";

export default ()=>{
    const [product, setProduct] = React.useState([])
    const navigate = useNavigate()

    const toDetails = (id)=>{
        navigate(`/product/${id}`,{state:id})
    }

    React.useEffect(()=>{
        const getData = async ()=>{
            const url = 'https://fakestoreapi.com/products'
            const response = await fetch(url)
            const result = await response.json()
            setProduct(result)
        }
        getData()
    },[])


    return(
        <div className='carousel color--black'>
            <div className='carousel__wrapper'>
                <h2>Check our latest products!</h2>
                <div className='carousel__navigation'>
                    <button className='carousel__navigation-prev'></button>
                    <button className='carousel__navigation-next'></button>
                </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={40}
                    slidesPerView={3}
                    loop={true}
                    initialSlide={1}
                    watchOverflow={true}
                    centeredSlides={false}
                    watchSlidesProgress={true}
                    slidesPerGroup={1}
                    navigation={{
                        prevEl: '.carousel__navigation-prev',
                        nextEl: '.carousel__navigation-next',
                    }}
                    breakpoints={{
                        1200: {
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 2.7
                        },
                        768: {
                            slidesPerView: 2.3
                        },
                        0: {
                            slidesPerView: 1.2
                        }
                    }}
                    onInit={(swiper) => {
                        addSlidesTabIndex(swiper)
                    }}
                    onSlideChange={(swiper)=>{
                        addSlidesTabIndex(swiper)
                    }}
                >
                    {product.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <div onClick={()=>toDetails(item.id)}>
                                <CarouselItem
                                    featuredImg={item?.image}
                                    title={item?.title}
                                    category={item?.category}
                                    price={item?.price}
                                    productLink={`/product/${item.id}`}
                                /></div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    )
}
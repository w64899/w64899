import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../Homepage/Sections/Carousel/Carousel";
import './style.scss'

const ProductPage = ()=>{
    const [product, setProduct] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const location = useLocation()
    const dispatch = useDispatch()
    const idOfProductToDetails = location.state
    const fav = useSelector((state)=>state.favs)
    const isLogged = useSelector((state)=> state.logged)

    const likedStyleLike={
        color:"rgb(214, 33, 33)"
    }

    const likedStyleNonLike={
        color:"rgb(253, 173, 173)"
    }


    React.useEffect(()=>{
        const loadData = async ()=>{
            setIsLoading(true)
            const url = `https://fakestoreapi.com/products/${idOfProductToDetails}`
            const response = await fetch(url)
            const result = await response.json()
            setProduct(result)
            setIsLoading(false)
        }
        loadData()
    },[])
    return(
        <main className='product-page'>
            <section className="product">
            {!isLoading && <div className="product-wrapper flex-center-horizontal">
                <div className='product__image'>
                    <img src={product.image} alt=""/>
                </div>
                <div className="product__content">
                    <p className="product__title font-p-lrg--b">{product.title}</p>
                    <p className="product__price font-caveats">Price: {product.price} EUR</p>
                    <p className="product__rating font-p-lrg--b">Ratings</p>
                    <div className="product__rating-wrapper">
                        <p className="rate font-caveats">{product.rating?.rate}</p>
                        {isLogged && <p className="rate" onClick={()=>dispatch({type:"FAV",payload:product})}>{product.rating?.count}</p>}
                    </div>
                    <p className="product__description font-p-lrg--b">Description</p>
                    <div className="product__description font-caveats">
                        <p>
                            {product?.description}
                        </p>
                    </div>
                    <button className="product__button font-button color-white" onClick={()=>{
                        dispatch({type:"ADD",payload:product})
                        alert('You have added an item to cart')
                    }}>Add item</button>
                </div>
            </div>}
            <div className="desktop-wrapper">
                <Carousel/>
            </div>
        </section>
        </main>
    )

}

export default ProductPage
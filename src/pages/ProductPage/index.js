import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../Homepage/Sections/Carousel/Carousel";
import './style.scss'
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../db/firebase";

const ProductPage = ()=>{
    const [product, setProduct] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const location = useLocation()
    const dispatch = useDispatch()
    const idOfProductToDetails = location.state

    const [firebaseLoggedUser, setFirebaseLoggedUser] = React.useState({});

    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                const {email} = user
                setFirebaseLoggedUser(email);
            }
        });
    }, []);


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
                        {firebaseLoggedUser.length > 0 && <p className="favourite" onClick={()=>dispatch({type:"FAV",payload:product})}>Add to favourite</p>}
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
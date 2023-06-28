import React from 'react';
import './style.scss';
import svg from '../../assets/images/empty-cart.svg'
import {useDispatch, useSelector} from "react-redux";

const Cart = ()=>{
    const cart = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    const total = cart.reduce((previousValue, currentValue)=>{
        return previousValue+currentValue.price
    },0)

    return(
        <main className='cart-page'>
            { cart.length === 0 ? <h1 className='screen-reader-text'>Cart is empty</h1> : <h1 className='screen-reader-text'>Cart</h1>}
            { cart.length === 0 && <div className='flex-center'><img className='cart__empty' src={svg}/></div>}
            <div className='cart'>
                <div className="cart__products flex-column">
                    <div>
                    {cart.map((item)=>{
                        return (
                            <div className='cart__product flex-center-vertical' key={item.id} id={item.id}>
                                <img src={item.image} alt="" aria-hidden />
                                <div className="cart__product-info flex-center-vertical">
                                    <p className="cart__product-title font-p-lrg--b">{item.title}</p>
                                    <p className="cart__product-price">{item.price}EUR</p>
                                    <button className="cart__product-delete" onClick={()=>dispatch({type:"REM", payload: item})}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
                { cart.length > 0 && <div className="cart__checkout">
                    <p className='cart__checkout-total font-p--b color-grey'>Total</p>
                    <p className='font-stats-small color-primary-base'>{total} EUR</p>
                </div>}
            </div>
        </main>
    )
}

export default Cart
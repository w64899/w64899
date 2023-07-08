import React from "react";
import './style.scss';
import {useDispatch, useSelector} from "react-redux";
import svg from "../../assets/images/empty-cart.svg";

const FavouriteProducts = ()=>{
    const favourite = useSelector((state)=>state.fav)
    const dispatch = useDispatch()
    return(
        <main>
            { favourite.length === 0 ? <h1 className='screen-reader-text'>There is no product you would like</h1> : <h1 className='screen-reader-text'>Favourtive products</h1>}
            { favourite.length === 0 && <div className='flex-center'><img className='favourite__empty' src={svg}/></div>}
            <div className='favourite'>
                <div className="favourite__products flex-column">
                    <div>
                        {favourite.map((item)=>{
                            return (
                                <div className='favourite__product flex-center-vertical' key={item.id} id={item.id}>
                                    <img src={item.image} alt="" aria-hidden />
                                    <div className="favourite__product-info flex-center-vertical">
                                        <p className="favourite__product-title font-p-lrg--b">{item.title}</p>
                                        <p className="favourite__product-price">{item.price}EUR</p>
                                        <button className="favourite__product-delete" onClick={()=>dispatch({type:"UNFAV", payload: item})}>Remove from favourite</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default FavouriteProducts
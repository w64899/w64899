import React, {useEffect} from 'react'
import './style.scss'
import naviScript from "./src/main-navigation";
import externalScripts from "./src/index";
import Button from "../Button/Button";
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-no-background.png'
import {getAuth, signOut, onAuthStateChanged} from 'firebase/auth';
import { auth } from '../../db/firebase';
import {useSelector} from "react-redux";

export default () => {
    const [firebaseLoggedUser, setFirebaseLoggedUser] = React.useState({});

    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                const {email} = user
                setFirebaseLoggedUser(email);
            }
        });
    }, []);


    const authorisation = getAuth();

    const logout = ()=>{
        signOut(authorisation).then(() => {
            window.location.reload()
        }).catch((error) => {
            console.error(error)
        });
    }


    const cart = useSelector((state)=>state.cart)
    const fav = useSelector((state)=>state.fav)

    useEffect(()=>{
        externalScripts();
        naviScript();
    },[])

    return (
        <header className={`grid main-navigation`}>
            <div className='row'>
                <div className={`navigation at-the-top`}>
                    <div className='flex-center'>
                        <div className="bg--black navigation__aux">
                            <div className="cover">
                                <div className="cover__inner-container flex-center-vertical">
                                    <div className="block-navigation navigation__aux-menu block-navigation--initialized" data-mobile-toggle="off">

                                        <div className="block-navigation__container">
                                            <nav className="block-navigation__wrapper" data-menu-orientation="horizontal"
                                                 aria-label="Aux menu">
                                                <ul className='flex-center-vertical color-primary-base-light'>
                                                    {firebaseLoggedUser.length > 0 && <a className="block-navigation__item-content flex-center-vertical font-button-small" target="blank" href="/favourite">
                                                        <span className="block-navigation__item-label color-secondary-base-light">Favourite products ({fav.length})</span>
                                                    </a>}
                                                    {firebaseLoggedUser.length > 0 ? <button className='font-button color-secondary-base-light' onClick={logout}>Logout {firebaseLoggedUser}</button> :
                                                        <a className="block-navigation__item-content flex-center-vertical font-button-small" target="blank" href="/login">
                                                            <span className="block-navigation__item-label color-secondary-base-light">Login</span>
                                                        </a>
                                                    }
                                                    <li className="block-navigation__item block-navigation__item--mega-menu">
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-center'>
                        <div className="navigation__main sticky-navigation bg--white">
                            <div className="cover">
                                <div className="cover__inner-container flex-center-vertical">
                                    <div className="navigation__logo flex-center-vertical">
                                        <Link to="/">
                                            <img src={logo} alt='Sklep internetowy' className='navigation__logo-img'/>
                                        </Link>
                                    </div>
                                    <div className="navigation__drawer-logo flex-center-vertical "></div>

                                    <div className="navigation__wrapper">
                                        <div className="block-navigation navigation__main-menu has-text-color block-navigation--initialized" data-mobile-toggle="on">
                                            <button className="block-navigation__mobile-toggle" aria-label="Open Menu" aria-expanded="false">
                                                <span></span>
                                            </button>
                                            <div className="block-navigation__container flex-center">
                                                <div className="block-navigation__drawer">
                                                    <div className="block-navigation__drawer-inner-wrapper">
                                                        <div className="block-navigation__before-wrapper"></div>
                                                        <nav className="block-navigation__wrapper" data-menu-orientation="horizontal" aria-label="Main menu">
                                                            <ul className='spacing--none'>
                                                                <li className="block-navigation__item block-navigation__item--mega-menu" data-isopen='false'>
                                                                    <a className="block-navigation__item-content flex-center-vertical font-button" href='/men'>
                                                                        <span className="block-navigation__item-label">Men</span>
                                                                        <span className="screen-reader-text">show submenu for “Men”</span>
                                                                    </a>
                                                                    <button aria-expanded="false" className='block-navigation__main-button'></button>

                                                                    <div className='block-navigation__sub-menu' data-has-mega-menu='true'>
                                                                        <div className="block-navigation__sub-menu-back flex-center-horizontal">
                                                                            <button className="block-navigation__back-button uppercase font-small">Back</button>
                                                                            <p className='block-navigation__back-label font-p-lrg'>Men</p>
                                                                        </div>
                                                                        <ul className='spacing--none'>
                                                                            <li className='block-navigation__item block-navigation__sub-menu-item' data-isopen='false'>
                                                                                <a className="block-navigation__item-content flex-center-vertical font-button">
                                                                                    <span className="block-navigation__item-label">Products</span>
                                                                                    <span className="screen-reader-text">show submenu for “Products”</span>
                                                                                </a>
                                                                                <button aria-expanded="false"></button>

                                                                                <div className='block-navigation__sub-menu-2'>
                                                                                    <div className="block-navigation__sub-menu-back flex-center-horizontal">
                                                                                        <button className="block-navigation__back-button uppercase font-small">Back</button>
                                                                                        <p className='block-navigation__back-label font-p-lrg'>Products</p>
                                                                                    </div>
                                                                                    <ul>
                                                                                        <li className='block-navigation__item block-navigation__sub-menu-2-item'>
                                                                                            <a className="flex-center-vertical font-button" href='/'>
                                                                                                <span className="block-navigation__item-label">Placeholder</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className='block-navigation__item block-navigation__sub-menu-2-item'>
                                                                                            <a className="flex-center-vertical font-button" href='/'>
                                                                                                <span className="block-navigation__item-label">Placeholder</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className='block-navigation__item block-navigation__sub-menu-2-item'>
                                                                                            <a className="flex-center-vertical font-button" href='/'>
                                                                                                <span className="block-navigation__item-label">Placeholder</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className='block-navigation__item block-navigation__sub-menu-2-item'>
                                                                                            <a className="flex-center-vertical font-button" href='/'>
                                                                                                <span className="block-navigation__item-label">Placeholder</span>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <div className='block-navigation__webinar flex-column color-white'>
                                                                                        <span className='block-navigation__webinar-label font-tag--b spacing--xs'>Newsletter</span>
                                                                                        <p className='block-navigation__webinar-heading color-white title--h6 spacing--xxs'>Join now and become a part of our fashion community.</p>
                                                                                        <p className='block-navigation__webinar-description color-white font-p spacing--xs'>Don't miss the opportunity to discover new trends and emphasize your unique style. Sign up for our newsletter today and start your fashion journey!</p>
                                                                                        <Button link="/" text='Join now!' variation='3'/>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="487" height="288" viewBox="0 0 487 288" fill="none">
                                                                                            <path d="M-374 244.49C-634.5 496.99 -783 530.675 -783 530.675H753C576.5 347.176 413.897 146.152 269.5 67.6758C-6.5 -82.3241 -157.754 34.8857 -374 244.49Z" fill="url(#paint0_linear_3900_90106)"/>
                                                                                            <defs>
                                                                                                <linearGradient id="paint0_linear_3900_90106" x1="-248.5" y1="121.176" x2="124.5" y2="448.676" gradientUnits="userSpaceOnUse">
                                                                                                    <stop stopColor="#09B7BB"/>
                                                                                                    <stop offset="0.624083" stopColor="#219DE1" stopOpacity="0.13"/>
                                                                                                    <stop offset="1" stopColor="#3E8BE9" stopOpacity="0"/>
                                                                                                </linearGradient>
                                                                                            </defs>
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className='block-navigation__item block-navigation__sub-menu-item' data-isopen='false'>
                                                                                <a className="block-navigation__item-content flex-center-vertical font-button">
                                                                                    <span className="block-navigation__item-label" >Placeholder</span>
                                                                                    <span className="screen-reader-text">show submenu for “Placeholder”</span>
                                                                                </a>
                                                                                <button aria-expanded="false"></button>

                                                                                <div className='block-navigation__sub-menu-2'>
                                                                                    <div className="block-navigation__sub-menu-back flex-center-horizontal">
                                                                                        <button className="block-navigation__back-button uppercase font-small">Back</button>
                                                                                        <p className='block-navigation__back-label font-p-lrg'>Placeholder</p>
                                                                                    </div>
                                                                                    <ul>
                                                                                        <li className='block-navigation__item block-navigation__sub-menu-2-item'>
                                                                                            <a className="flex-center-vertical font-button" href='/'>
                                                                                                <span className="block-navigation__item-label">Placeholder</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className='block-navigation__item block-navigation__sub-menu-2-item'>
                                                                                            <a className="flex-center-vertical font-button" href='/'>
                                                                                                <span className="block-navigation__item-label">Placeholder</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className='block-navigation__item block-navigation__sub-menu-2-item'>
                                                                                            <a className="flex-center-vertical font-button" href='/'>
                                                                                                <span className="block-navigation__item-label">Placeholder</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className='block-navigation__item block-navigation__sub-menu-2-item'>
                                                                                            <a className="flex-center-vertical font-button" href='/'>
                                                                                                <span className="block-navigation__item-label">Placeholder</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className='block-navigation__item block-navigation__sub-menu-2-item'>
                                                                                            <a className="flex-center-vertical font-button" href='/'>
                                                                                                <span className="block-navigation__item-label">Placeholder</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className='block-navigation__item block-navigation__sub-menu-2-item'>
                                                                                            <a className="flex-center-vertical font-button" href='/'>
                                                                                                <span className="block-navigation__item-label">Placeholder</span>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <div className='block-navigation__webinar flex-column color-white'>
                                                                                        <span className='block-navigation__webinar-label font-tag--b spacing--xs'>Newsletter</span>
                                                                                        <p className='block-navigation__webinar-heading color-white title--h6 spacing--xxs'>Join now and become a part of our fashion community.</p>
                                                                                        <p className='block-navigation__webinar-description color-white font-p spacing--xs'>Don't miss the opportunity to discover new trends and emphasize your unique style. Sign up for our newsletter today and start your fashion journey!</p>
                                                                                        <Button link="/" text='Join now!' variation='3'/>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="487" height="288" viewBox="0 0 487 288" fill="none">
                                                                                            <path d="M-374 244.49C-634.5 496.99 -783 530.675 -783 530.675H753C576.5 347.176 413.897 146.152 269.5 67.6758C-6.5 -82.3241 -157.754 34.8857 -374 244.49Z" fill="url(#paint0_linear_3900_90106)"/>
                                                                                            <defs>
                                                                                                <linearGradient id="paint0_linear_3900_90106" x1="-248.5" y1="121.176" x2="124.5" y2="448.676" gradientUnits="userSpaceOnUse">
                                                                                                    <stop stopColor="#09B7BB"/>
                                                                                                    <stop offset="0.624083" stopColor="#219DE1" stopOpacity="0.13"/>
                                                                                                    <stop offset="1" stopColor="#3E8BE9" stopOpacity="0"/>
                                                                                                </linearGradient>
                                                                                            </defs>
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className='block-navigation__item block-navigation__sub-menu-item' data-isopen='false'>
                                                                                <a className="block-navigation__item-content flex-center-vertical font-button">
                                                                                    <span className="block-navigation__item-label">Placeholder</span>
                                                                                    <span className="screen-reader-text">show submenu for “Placeholder”</span>
                                                                                </a>
                                                                                <button aria-expanded="false">
                                                                                </button>

                                                                                <div className='block-navigation__sub-menu-2'>
                                                                                    <div className="block-navigation__sub-menu-back flex-center-horizontal">
                                                                                        <button className="block-navigation__back-button uppercase font-small">Back</button>
                                                                                        <p className='block-navigation__back-label font-p-lrg'>Placeholder</p>
                                                                                    </div>
                                                                                    <ul>
                                                                                        <li className='block-navigation__item block-navigation__sub-menu-2-item'>
                                                                                            <a className="block-navigation__item-content flex-center-vertical font-button" href='/'>
                                                                                                <span className="block-navigation__item-label">Placeholder</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className='block-navigation__item block-navigation__sub-menu-2-item'>
                                                                                            <a className="block-navigation__item-content flex-center-vertical font-button" href='/'>
                                                                                                <span className="block-navigation__item-label">Placeholder</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className='block-navigation__item block-navigation__sub-menu-2-item'>
                                                                                            <a className="block-navigation__item-content flex-center-vertical font-button" href='/'>
                                                                                                <span className="block-navigation__item-label">Placeholder</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className='block-navigation__item block-navigation__sub-menu-2-item'>
                                                                                            <a className="block-navigation__item-content flex-center-vertical font-button" href='/'>
                                                                                                <span className="block-navigation__item-label">Placeholder</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li className='block-navigation__item block-navigation__sub-menu-2-item'>
                                                                                            <a className="block-navigation__item-content flex-center-vertical font-button" href='/'>
                                                                                                <span className="block-navigation__item-label">Placeholder</span>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <div className='block-navigation__webinar flex-column color-white'>
                                                                                        <span className='block-navigation__webinar-label font-tag--b spacing--xs'>Newsletter</span>
                                                                                        <p className='block-navigation__webinar-heading color-white title--h6 spacing--xxs'>Join now and become a part of our fashion community.</p>
                                                                                        <p className='block-navigation__webinar-description color-white font-p spacing--xs'>Don't miss the opportunity to discover new trends and emphasize your unique style. Sign up for our newsletter today and start your fashion journey!</p>
                                                                                        <Button link="/" text='Join now!' variation='3'/>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="487" height="288" viewBox="0 0 487 288" fill="none">
                                                                                            <path d="M-374 244.49C-634.5 496.99 -783 530.675 -783 530.675H753C576.5 347.176 413.897 146.152 269.5 67.6758C-6.5 -82.3241 -157.754 34.8857 -374 244.49Z" fill="url(#paint0_linear_3900_90106)"/>
                                                                                            <defs>
                                                                                                <linearGradient id="paint0_linear_3900_90106" x1="-248.5" y1="121.176" x2="124.5" y2="448.676" gradientUnits="userSpaceOnUse">
                                                                                                    <stop stopColor="#09B7BB"/>
                                                                                                    <stop offset="0.624083" stopColor="#219DE1" stopOpacity="0.13"/>
                                                                                                    <stop offset="1" stopColor="#3E8BE9" stopOpacity="0"/>
                                                                                                </linearGradient>
                                                                                            </defs>
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                        <div className='block-navigation__webinar flex-column color-white'>
                                                                            <span className='block-navigation__webinar-label font-tag--b spacing--xs'>Newsletter</span>
                                                                            <p className='block-navigation__webinar-heading color-white title--h6 spacing--xxs'>Join now and become a part of our fashion community.</p>
                                                                            <p className='block-navigation__webinar-description color-white font-p spacing--xs'>Don't miss the opportunity to discover new trends and emphasize your unique style. Sign up for our newsletter today and start your fashion journey!</p>
                                                                            <Button link="/" text='Join now!' variation='3'/>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="487" height="288" viewBox="0 0 487 288" fill="none">
                                                                                <path d="M-374 244.49C-634.5 496.99 -783 530.675 -783 530.675H753C576.5 347.176 413.897 146.152 269.5 67.6758C-6.5 -82.3241 -157.754 34.8857 -374 244.49Z" fill="url(#paint0_linear_3900_90106)"/>
                                                                                <defs>
                                                                                    <linearGradient id="paint0_linear_3900_90106" x1="-248.5" y1="121.176" x2="124.5" y2="448.676" gradientUnits="userSpaceOnUse">
                                                                                        <stop stopColor="#09B7BB"/>
                                                                                        <stop offset="0.624083" stopColor="#219DE1" stopOpacity="0.13"/>
                                                                                        <stop offset="1" stopColor="#3E8BE9" stopOpacity="0"/>
                                                                                    </linearGradient>
                                                                                </defs>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li className="block-navigation__item block-navigation__item--mega-menu" data-isopen='false'>
                                                                    <a className="block-navigation__item-content flex-center-vertical font-button" href='/women'>
                                                                        <span className="block-navigation__item-label">Women</span>
                                                                        <span className="screen-reader-text">show submenu for “Women”</span>
                                                                    </a>
                                                                    <button aria-expanded="false" className='block-navigation__main-button'></button>

                                                                    <div className='block-navigation__sub-menu'>
                                                                        <div className="block-navigation__sub-menu-back flex-center-horizontal">
                                                                            <button className="block-navigation__back-button uppercase font-small">Back</button>
                                                                            <p className='block-navigation__back-label font-p-lrg'>Placeholder</p>
                                                                        </div>
                                                                        <ul className='spacing--none'>
                                                                            <li className='block-navigation__item'>
                                                                                <a className="block-navigation__item-content flex-center-vertical font-button" href='/'>
                                                                                    <span className="block-navigation__item-label">Placeholder</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className='block-navigation__item'>
                                                                                <a className="block-navigation__item-content flex-center-vertical font-button" href='/'>
                                                                                    <span className="block-navigation__item-label">Placeholder</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className='block-navigation__item'>
                                                                                <a className="block-navigation__item-content flex-center-vertical font-button" href='/'>
                                                                                    <span className="block-navigation__item-label">Placeholder</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className='block-navigation__item'>
                                                                                <a className="block-navigation__item-content flex-center-vertical font-button" href='/'>
                                                                                    <span className="block-navigation__item-label">Placeholder</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <div className='block-navigation__webinar flex-column color-white'>
                                                                            <span className='block-navigation__webinar-label font-tag--b spacing--xs'>Newsletter</span>
                                                                            <p className='block-navigation__webinar-heading color-white title--h6 spacing--xxs'>Join now and become a part of our fashion community.</p>
                                                                            <p className='block-navigation__webinar-description color-white font-p spacing--xs'>Don't miss the opportunity to discover new trends and emphasize your unique style. Sign up for our newsletter today and start your fashion journey!</p>
                                                                            <Button link="/" text='Join now!' variation='3'/>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="487" height="288" viewBox="0 0 487 288" fill="none">
                                                                                <path d="M-374 244.49C-634.5 496.99 -783 530.675 -783 530.675H753C576.5 347.176 413.897 146.152 269.5 67.6758C-6.5 -82.3241 -157.754 34.8857 -374 244.49Z" fill="url(#paint0_linear_3900_90106)"/>
                                                                                <defs>
                                                                                    <linearGradient id="paint0_linear_3900_90106" x1="-248.5" y1="121.176" x2="124.5" y2="448.676" gradientUnits="userSpaceOnUse">
                                                                                        <stop stopColor="#09B7BB"/>
                                                                                        <stop offset="0.624083" stopColor="#219DE1" stopOpacity="0.13"/>
                                                                                        <stop offset="1" stopColor="#3E8BE9" stopOpacity="0"/>
                                                                                    </linearGradient>
                                                                                </defs>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li className="block-navigation__item" >
                                                                    <a className='block-navigation__item-content flex-center-vertical' href="/electronics">
                                                                        <span className="block-navigation__item-label font-button">Electronics</span>
                                                                    </a>
                                                                </li>

                                                                <li className="block-navigation__item">
                                                                    <a className='block-navigation__item-content flex-center-vertical' href="/accessories">
                                                                        <span className="block-navigation__item-label font-button">Accessories</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                        <div className="block-navigation__after-wrapper">
                                                        </div>
                                                        <div className="aux-menu__mobile">
                                                            <a className="block-navigation__item-content flex-center-vertical font-small--b aux-menu-link" href="/login">
                                                                <span className="block-navigation__item-label">Login</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='navigation__primary-button'>
                                            <div className="block-button button-v1 ">
                                                <a href="/cart" className="block-button__link">Cart {cart.length}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-scroll-to-top" className="navigation__dom-replacement"></div>
            </div>
        </header>
    )
}
import React from "react";
import './style.scss';

export default ()=>{
    return(
        <footer className="gg-footer bg--black">
            <div className="gg-footer__menu flex-center-vertical">
                <nav className="gg-footer__menu-links">
                    <ul className="flex-wrap">
                        <li>
                            <a href="/"
                               className="gg-footer__link font-p--b" target="_blank">Terms of Use</a>
                        </li>
                        <li>
                            <a href="/"
                               className="gg-footer__link font-p--b" target="_blank">Privacy Notice</a>
                        </li>
                        <li>
                            <a href="/" target="_blank"
                               className="gg-footer__link font-p--b">Site Usage</a>
                        </li>
                        <li>
                            <a href="/"
                               className="gg-footer__link font-p--b" target="_blank">Accessibility</a>
                        </li>
                    </ul>
                </nav>
                <div className="gg-footer__copyright flex-center-vertical">
                    <p className="font-small color-white">Copyright &copy; 2023 w64899. All Rights
                        Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
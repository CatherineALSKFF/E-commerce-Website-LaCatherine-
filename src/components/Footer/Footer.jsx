import React from "react";
import './Footer.scss'

function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Clothes</span>
                    <span>Accessories</span>
                    <span>Elegances</span>
                    <span>News</span>
                </div>
                <div className="item">
                <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    
<h1>About</h1>
<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, facilis sint! Voluptatesitis aspernatur quam voluptates officia consectetur dolorum aperiam dolore maiores totam quae ipsum.</span>
                </div>
                <div className="item">
                    
<h1>Contact</h1>
<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, facilis sint! Voias debitis aspernatur quam voluptates officia consectetur dolorum aperiam dolore maiores totam quae ipsum.</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">LaCatherine</span>
                    <span className="copyright">copyright 2023. All rights reserved</span>

                </div>
                <div className="right">
                    <img src="\img\payment-method.jpeg"></img>
                </div>

            </div>
        </div>

    );
}

export default Footer;

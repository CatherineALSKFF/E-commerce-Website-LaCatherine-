import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import './Navbar.scss'
import Cart from '../Cart/Cart'
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import { useSelector } from "react-redux";

function Navbar() {

const [openCart, setOpenCart]=useState(false)
const [openToggle, setOpenToggle]= useState(false)
const products= useSelector(state=>state.cart.products)




    return (
        <div className="navbar">
        
    {openToggle && <ToggleMenu/>}
 
<div className="wrapper">
            <div className="left">
            <div className="toggleicon" onClick={()=>setOpenToggle(!openToggle)} >
                        <MenuIcon/>
                        </div>


               
                    <div className="item">
                        <LanguageIcon />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                     <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                    <Link className="link" to='/products/1'>Clothes</Link>
                    </div>
                    <div className="item">
                    <Link className="link" to='/products/2'>Accessories</Link>
                    </div>
                    <div className="item">
                    <Link className="link" to='/products/3'>Elegances</Link>
                    </div>
                </div>
            



            <div className="center">
                <Link className="link" to='/'>Ecom-web</Link>
            </div>

            <div className="right">
            <div className="item">
                    <Link className="link" to='/'>Home</Link>
                    </div>
                    <div className="item">
                    <Link className="link" to='/'>About</Link>
                    </div>
                    <div className="item">
                    <Link className="link" to='/'>Contact</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon/>
                        <PersonIcon/>
                        <FavoriteBorderIcon/>
                        <div className="cartIcon" onClick={()=>setOpenCart(!openCart)} >
                        <ShoppingCartIcon/>
                        <span>{products.length}</span>
                        </div>

                    </div>
            </div>
        </div>
        {openCart && <Cart/>}
                    </div>
                    

    );
}
  
  export default Navbar;
  
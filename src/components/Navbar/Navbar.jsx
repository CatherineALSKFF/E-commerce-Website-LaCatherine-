import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from "react-router-dom";
import './Navbar.scss'


function Navbar() {
    return (
        <div className="navbar">


<div className="wrapper">
            <div className="left">
               
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
                <Link className="link" to='/'>LaCatherine</Link>
            </div>

            <div className="right">
            <div className="item">
                    <Link className="link" to='/'>HomePage</Link>
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
                        <div className="cartIcon">
                        <ShoppingCartIcon/>
                        <span>0</span>
                        </div>

                    </div>
            </div>
        </div>
                    </div>


    );
}
  
  export default Navbar;
  
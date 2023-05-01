import React from "react";
import { Link } from "react-router-dom";

import './ToggleMenu.scss'

import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function ToggleMenu() {



    return (
        <div className="togglemenu">
         <h1>Menu</h1>
            <div className="item">
                <Link className="link" to='/products/1'>Clothes</Link>
            </div>
            <div className="item">
                <Link className="link" to='/products/2'>Accessories</Link>
            </div>
            <div className="item">
                <Link className="link" to='/products/3'>Elegances</Link>
            </div>
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

            <div className="item">
                <LanguageIcon />
                <KeyboardArrowDownIcon />
            </div>
            <div className="item">
                <span>USD</span>
                <KeyboardArrowDownIcon />
            </div>
            </div>

        </div>

  
    );
  }
  
  export default ToggleMenu;


import React from "react";
import './Product.scss';
import { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';


function Product() {
    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1);

    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9I9lj1aVlHl7SSYzp3PH84qKwD5XPUiITD0gCGuqkFcoHYqpzEbx1CQKXLBzWkSVPD-w&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxs163ae-bi40h1FDdSIfsWMTlguSDNPbsS6gEmz2if2rLL1omFXvJkSBFREl3L6sbigw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFU5Y8EQ5aar9MJpWBIXSylTKKUjnzMCYQQFhEYy1S_wL6U8ikcXXPzwBLQJ5R2L13Tw&usqp=CAU"
    ]



    return (
        <div className="product">
            <div className="left">
                <div className="images">

                    <img src={images[0]} onClick={e => setSelectedImg(0)} />
                    <img src={images[1]} onClick={e => setSelectedImg(1)} />
                    <img src={images[2]} onClick={e => setSelectedImg(2)} />
                </div>

                <div className="mainImg">
                    <img src={images[selectedImg]} />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price">$199</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi amet ab exercitationem dolores, praesentium cupiditate doloremque similique repellendus facere explicabo voluptate voluptatem? Porro provident ea molestiae temporibus beatae corrupti accusantium.</p>
                <div className="quantity">
                    <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button className="add"><AddShoppingCartIcon /> ADD TO CART</button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISHLIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>

                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-shirt</span>
                    <span>Tag: Women, T-shirt, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>




            </div>
        </div>

    );
  }
  
  export default Product;
  
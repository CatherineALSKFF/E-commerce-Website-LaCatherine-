import React from "react";
import { Link } from "react-router";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './Cart.scss'
function Cart() {
   const data= [{
        id: 1,
        title: "Product 1",
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero blanditiis autem officiis quas. Quam facilis tenetur eius iste atque voluptatibus in possimus suscipit quas a hic necessitatibus, veritatis exercitationem rem?',
        img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JUKjd7LKpXoZm6GcXUjMIQ_bluQ0OKe85zSGz6rz-DgLipu_Zy9ZNkVuO9WY9Y5PA4s&usqp=CAU",
        img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgzMju-1xSoss2uLRFPwxQZQcjV5qCiEOlUUElluztOhB3Cfir6Y_djgfqtkpNgEe7ztw&usqp=CAU",
        oldPrice: 49.99,
        price: 39.99
      },
      {
        id: 2,
        title: "Product 2",
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero blanditiis autem officiis quas. Quam facilis tenetur eius iste atque voluptatibus in possimus suscipit quas a hic necessitatibus, veritatis exercitationem rem?',
        img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4_0B88H1p5YAMaH6kOMkJh9DG1RI8SH7og&usqp=CAU",
        img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9I9lj1aVlHl7SSYzp3PH84qKwD5XPUiITD0gCGuqkFcoHYqpzEbx1CQKXLBzWkSVPD-w&usqp=CAU",
        oldPrice: 89.99,
        price: 74.99
      }];

    return (
    
        <div className="cart">
     <h1>Products in your cart</h1>
{data?.map(item=>(
    <div className="item" key={item.id}>
        <img src={item.img1}></img>
        <div className="details">
        <h1>{item.title}</h1>
        <p>{item.desc?.substring(0,100)}</p>
        <div className="price">1x ${item.price}</div>
        
        </div>


        <DeleteOutlineIcon className='delete'/>

    </div>  
))}
<div className="total">
    <span>SUBTOTAL</span>
    <span>$123</span>

</div>
<button>PROCEED TO CHECKOUT</button>
<span className="reset">Rest Cart</span>

 </div>
  
    );
  }
  
  export default Cart;
import React from "react";
import { Link } from "react-router";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSelector } from "react-redux";
import './Cart.scss'
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";


function Cart() {


  const totalPrice=()=>{
    let total=0;
    products.forEach((item) => (total+=item.quantity*item.price));
    return total.toFixed(2)
  }
const products= useSelector(state=>state.cart.products)
const dispatch= useDispatch()

    return (
    
        <div className="cart">
     <h1>Products in your cart</h1>
{products?.map(item=>(
    <div className="item" key={item.id}>
        <img src={process.env.REACT_APP_UPL_URL+ item.img}></img>
        <div className="details">
        <h1>{item.title}</h1>
        <p>{item.desc?.substring(0,100)}</p>
        <div className="price">{item.quantity+ 'x'} ${item.price}</div>
        
        </div>


        <DeleteOutlineIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>

    </div>  
))}
<div className="total">
    <span>SUBTOTAL</span>
    <span>${totalPrice()}</span>

</div>
<button>PROCEED TO CHECKOUT</button>
<span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>

 </div>
  
    );
  }
  
  export default Cart;
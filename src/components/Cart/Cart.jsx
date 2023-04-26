import React from "react";
import { Link } from "react-router";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSelector } from "react-redux";
import './Cart.scss'
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import {loadStripe} from '@stripe/stripe-js';

function Cart() {


  const totalPrice=()=>{
    let total=0;
    products.forEach((item) => (total+=item.quantity*item.price));
    return total.toFixed(2)
  }
const products= useSelector(state=>state.cart.products)
const dispatch= useDispatch()

  const stripePromise = loadStripe('pk_test_51N0P7SIskaHifZC8JuAA3M7jye4uW65HzRB0CUFgM99KK0QvyVu7B4FXPlLfaTC5F4qalCJ8RVYk2eyA2OzMVOmn008vqa814K');
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post(process.env.REACT_APP_API_URL + '/orders', {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err)
    }
  }


  return (

    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map(item => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPL_URL + item.img}></img>
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
<button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
<span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>

 </div>
  
    );
  }
  
  export default Cart;


import React, { useEffect } from "react";
import './Card.scss'
import { Link } from "react-router-dom";


function Card({item}) {

const uploadLink= process.env.REACT_APP_UPL_URL;




    return (
    <Link  className="link" to={`/product/${item.id}`}>
        <div className="card">
        <div className="image">
      {item?.attributes.isNew &&  <span>New Season</span>}
       <img src={uploadLink + item.attributes?.img?.data?.attributes?.url} className="mainImg"></img>
       <img src={uploadLink +  item.attributes?.img2?.data?.attributes?.url} className="secondImg"></img>

        </div>
        <h2>{item.attributes.title}</h2>
        <div className="prices">
            <h3>{item.oldPrice || item?.attributes.price +20}</h3>
            <h3>{item.attributes.price}</h3>

        </div>
        </div>
        </Link>
    );
  }
  
  export default Card;
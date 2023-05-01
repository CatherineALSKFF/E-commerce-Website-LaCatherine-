
import React from "react";
import './FeaturedProducts.scss'
import Card from "../Card/Card";

import useFetch from "../../hooks/useFetch";




const FeaturedProducts=({ type })=> {


  const{data, loading, error}= useFetch(
   process.env.REACT_APP_API_URL+ `/products?populate=*&[filters][type][$eq]=${type}`
    )
  return (

    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus voluptate quos? Libero maxime repudiandae repellendus nobis cumque, reiciendis dolore nam dolores, itaque perferendis autem fugit aliquam saepe, nostrum eum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum minima omnis, molestiae consequatur commodi repellendus in deserunt ipsum libero aspernatur facilis iste tempore sunt eum illo quia vitae? Ut, quam.</p>

      </div>
      <div className="bottom">
       {error ?'Something went wrong': 

       (loading? 'loading'
        : data?.map((item) => 
          <Card item={item} key={item.id} />
        ))}
        
      </div>
    </div>

  );
}

export default FeaturedProducts;
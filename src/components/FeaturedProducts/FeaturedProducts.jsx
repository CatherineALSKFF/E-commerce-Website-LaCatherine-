
import React from "react";
import './FeaturedProducts.scss'
import Card from "../Card/Card";

function FeaturedProducts({type}) {

const data= [
    {
      id: 1,
      title: "Product 1",
      img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Ti41p0k9phPT4i50qlyL2lOR51vOqYwrjQ&usqp=CAU",
      img2: "",
      oldPrice: 49.99,
      price: 39.99
    },
    {
      id: 2,
      title: "Product 2",
      img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Ti41p0k9phPT4i50qlyL2lOR51vOqYwrjQ&usqp=CAU",
      img2: "https://example.com/product2-img2.jpg",
      oldPrice: 89.99,
      price: 74.99
    },
    {
      id: 3,
      title: "Product 3",
      img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Ti41p0k9phPT4i50qlyL2lOR51vOqYwrjQ&usqp=CAU",
      img2: "https://example.com/product3-img2.jpg",
      oldPrice: 19.99,
      price: 14.99
    },
    {
      id: 4,
      title: "Product 4",
      img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Ti41p0k9phPT4i50qlyL2lOR51vOqYwrjQ&usqp=CAU",
      img2: "https://example.com/product4-img2.jpg",
      oldPrice: 129.99,
      price: 109.99
    }
  ];
  
  

    
    return (
    
        <div className="featuredProducts">
      <div className="top">
      <h1>{type} products</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus voluptate quos? Libero maxime repudiandae repellendus nobis cumque, reiciendis dolore nam dolores, itaque perferendis autem fugit aliquam saepe, nostrum eum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum minima omnis, molestiae consequatur commodi repellendus in deserunt ipsum libero aspernatur facilis iste tempore sunt eum illo quia vitae? Ut, quam.</p>

      </div>
      <div className="bottom">
{data.map(item=>(
    <Card item={item} key={item.id}/>
))}
       
      </div>

        
        </div>
  
    );
  }
  
  export default FeaturedProducts;
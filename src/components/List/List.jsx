
import React from "react";
import './List.scss'
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";


function List({type, subCats, maxPrice , sort, catId}) {



  const {data,loading, error}= useFetch(process.env.REACT_APP_API_URL 
    +`/products?populate=*&[filters][categories][id]=${catId}
    ${subCats.map(item=> `&[filters][sub_categories][id][$eq]=${item}`)}
    &[filters][price][$lte]=${maxPrice}&
    sort=price:${sort}`
  
        )


   
    
    return (
    
        <div className="list">
     
      <div className="wrapper">
{loading? 'loading' :data?.map((item)=>
    <Card item={item} key={item.id}/>
)}
       
      </div>

        
        </div>
  
    );
  }
  
  export default List;
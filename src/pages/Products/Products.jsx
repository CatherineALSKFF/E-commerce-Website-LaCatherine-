import React, { useState } from "react";
import './Products.scss';
import List from '../../components/List/List'
import {  useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";


function Products() {
    const catId= parseInt(useParams().id)

const [maxPrice, setMaxPrice]= useState(1000);
const [sort, setSort]=useState(null);
const [selectedSubCats, setSelectedSubCats]= useState([])


const {data,loading, error}=useFetch( process.env.REACT_APP_API_URL +`/sub-categories?[filters][categories][id][$eq]=${catId}`)

const handleChange= (e)=>{
    const value= e.target.value;
    const isChecked= e.target.checked;
    setSelectedSubCats(
        isChecked?
        [... selectedSubCats, value]:
        selectedSubCats.filter((item)=> item !== value)
    )
}




    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Categories</h2>

                    {data?.map((item) => (
                        <div className="inputItem" key={item.id}>
                            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                            <label htmlFor={item.id}>{item.attributes.title}</label>
                        </div>
                    ))}

                    {/* <div className="inputItem">
                    <input type="checkbox" id="2" value={2}/>
                    <label htmlFor="2">Accessories</label>
                    </div>
                    <div className="inputItem">
                    <input type="checkbox" id="3" value={3}/>
                    <label htmlFor="3">Elegance</label>
                    </div> */}
                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                    <span>0</span>
                    <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
                    <span>{maxPrice}</span>

                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                    <input type="radio" id="asc" value='asc'  name="price" onChange={(e)=>setSort('asc')}/>
                    <label htmlFor="asc">Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                    <input type="radio" id="desc" value='asc'  name="price"  onChange={(e)=>setSort('desc')} />
                    <label htmlFor="desc">Price(Highest first)</label>
                    </div>
                </div>
            </div>



            <div className="right">
            <img className="catImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZYvGiut2W8PrP05Bj1tpJcKv5KxeidWPDGA&usqp=CAU"/>
            <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
            </div>
        </div>

    );
}
  
  export default Products;
  
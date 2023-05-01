import React from "react";
import { Link } from "react-router-dom";
import './Categories.scss'
import useFetch from "../../hooks/useFetch";

function Categories() {

    const{data, loading, error}= useFetch(
        process.env.REACT_APP_API_URL+ `/products?populate=*`
         )

         console.log(data?.[2].attributes?.img2?.data?.attributes?.url)
// console.log(data[1].attributes.img.data.attributes.url)
const uploadLink= process.env.REACT_APP_UPL_URL;
// console.log(uploadLink)


    return (

        

        <div className="categories">


            <div className="col">
                <div className="row">
               <img src={uploadLink + data?.[0].attributes?.img?.data?.attributes?.url}/>
                    <button>
                        <Link  className='link' to='/products/1'>Sale</Link>
                    </button>
                </div>
                <div className="row">
                <img src={uploadLink + data?.[1].attributes?.img?.data?.attributes?.url}/>
                    <button>
                        <Link  className='link' to='/products/2'>Sale</Link>
                    </button>
                </div>
            </div>



            <div className="col">
                <div className="row"> 
                <img src={uploadLink + data?.[2].attributes?.img?.data?.attributes?.url}/>
                    <button>
                        <Link  className='link' to='/products/1'>Sale</Link>
                    </button>
                    </div>
            </div>


            <div className="col col-l">
                <div className="row"> 
                    <div className="col">
                        <div className="row"> 
                        <img src={uploadLink + data?.[3].attributes?.img?.data?.attributes?.url}/>
                    <button>
                        <Link  className='link' to='/products/3'>Sale</Link>
                    </button>
                    </div>
                    </div>
                    <div className="col"> 
                        <div className="row"> 
                        <img src={uploadLink + data?.[4].attributes?.img?.data?.attributes?.url}/>
                    <button>
                        <Link className='link' to='/products/2'>Sale</Link>
                    </button> 
                    </div>
                    </div>
                </div>
                <div className="row"> 
                <img src={uploadLink + data?.[7].attributes?.img?.data?.attributes?.url}/>
                    <button>
                        <Link  className='link' to='/products/3'>Sale</Link>
                    </button>
                    </div>

            </div>
        </div>


    );
}
  
  export default Categories;
  
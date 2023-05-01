import React from "react";
import './Slider.scss'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";
import useFetch from "../../hooks/useFetch";


function Slider() {


    
   
    const{data2, loading, error}= useFetch(
        process.env.REACT_APP_API_URL+ `/products?populate=*`
         )

         console.log(data2,  loading, error)
// console.log(data[1].attributes.img.data.attributes.url)
const uploadLink= process.env.REACT_APP_UPL_URL;
// console.log(uploadLink)



    const data= [
        'https://media.istockphoto.com/id/1353385456/sv/foto/beauty-fashion-woman-in-black-round-hat-and-leather-raincoat-near-lake-pond-portrait-girl-at.jpg?s=612x612&w=0&k=20&c=7uok57CM6FUm6A8aeq8L1j9ls6ltsUGqu9AKNmMbf3I=',
        'https://media.istockphoto.com/id/1333955586/sv/foto/beautiful-woman.jpg?s=612x612&w=0&k=20&c=y8Ly8Q_bHTKbpHkQx5nTfwl-t2p89KSY7VBE7-X6XxM=',
        'https://media.istockphoto.com/id/1366540849/sv/foto/sexy-fashion-model-in-red-silk-dress-and-gloves-glamour-woman-in-long-luxury-slit-gown-flying.jpg?s=612x612&w=0&k=20&c=1sQz8FmfPXGtWkzBfuzh1p8eVqxr9lDQuCq6TTVj3Yc='
    ];




const [currentSlide, setCurrentSlide]= useState(0)


const prevSlide=()=>{
setCurrentSlide(currentSlide=== 0?2: (prev)=>prev-1)
}

const nextSlide=()=>{
    setCurrentSlide(currentSlide=== 2?0: (prev)=>prev+1)

}



    return (
        <div className="slider">
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={uploadLink + '/uploads/mohamadreza_khashay_ziub_U_Dop_Hmc_unsplash_daf6a3a336.jpg'}></img>
                <img src={uploadLink + '/uploads/alexi_romano_C_Cx6_Fz_Cm_OI_unsplash_58a22a23c1.jpg'}></img>

                <img src={uploadLink + '/uploads/khaled_ghareeb_Ny_Pn9up_7o_unsplash_ad3900d7fa.jpg'}></img>
            </div>

            <div className="icons">
                <div className="icon" onClick={prevSlide}><KeyboardArrowLeftIcon /></div>
                <div className="icon" onClick={nextSlide}><KeyboardArrowRightIcon/></div>

</div>



       </div>
  
    );
  }
  
  export default Slider;
  
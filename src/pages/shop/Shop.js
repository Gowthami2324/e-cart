import React from 'react'
import { PRODUCTS } from '../../products';
import { Product } from './Product';
import './shop.css'
import {Text} from './text';
import { VIDEOS } from './video';

import { BestCafe} from './BestCafe';
import { PopularCafes } from './PopularCafes';
import { SliderImage } from './slider-images';
import { useState } from 'react';
import image1 from '../Images/cafe.png';
import image2 from '../Images/cafe.png';
import image3 from '../Images/cafe.png';
const CAFE =[
  {
    CafeImage:image1,
    CafeName:'The Dome Cafe',
    Address:'HSR Layout-4.2km',
    Id:'8 Packages Available',
    Rating:'4.2',
},
{
    CafeImage:image2,
    CafeName:'The Dome Cafe',
    Address:'HSR Layout-4.2km',
    Id:'8 Packages Available',
    Rating:'4.2',
},
{
    CafeImage:image3,
    CafeName:'The Dome Cafe',
    Address:'HSR Layout-4.2km',
    Id:'8 Packages Available',
    Rating:'4.2',
},
]
export const Shop = () =>{
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CAFE.length) % CAFE.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CAFE.length);
  };

  return(
    <>
    <div>
    <SliderImage/>
    </div>
    <div className='shop-container'>
        <div className='shop-title'>
            <h1>Hey, What's Your Occasion?</h1>
        </div>
        <div className='products'> {PRODUCTS.map((product) =>(
            <Product data={product}/>
        ))}</div>
        <div className='app-container'>
          <h1>Venues On a Budget!</h1>
      <div className='cafes'>
        <button className='arrow left-arrow' onClick={handlePrevClick}>
          &lt;
        </button>
        <BestCafe data={CAFE[currentIndex]} />
        <button className='arrow right-arrow' onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
        <div className='text'> <Text/></div>
      
       <div className='videos'> 
        <VIDEOS/>   
         </div>
         <div className='budget'>
            <h1>Venues On a Budget!</h1>
         <div className='popular-cafes'>
             {CAFE.map((cafe) => (
            <PopularCafes data={cafe}/>
         ))} </div>
         </div>
    </div>
    </>
  )
};


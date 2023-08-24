import React, { useState } from 'react';
import ReactImage from '../Images/slider-img1.png';
import ReactImage1 from '../Images/slider-img2.png';
import ReactImage2 from '../Images/slider-img3.png';
import ReactImage3 from '../Images/slider-img4.png';


export function SliderImage() {
  const sliderData = [
    {
      image: ReactImage,
      text: [
        <div className='slider-text vacation'>
          <p>Time To Travel</p>
          <p>The Best Vacations Packages</p>
          <p>OFFER</p>
          <button className='claim'>Book Here</button>
        </div>,
      ],
    },
    {
      image: ReactImage3,
      text: [
        <div className='slider-text shopping'>
          <p className='today'>TODAY'S</p>
          <p className='deal'>DEALS</p>
          <p className='save'>Great Savings</p>
          <button className='claim'>Shop Now</button>
        </div>,
      ],
    },
    {
      image: ReactImage1,
      text: [
        <div className='slider-text Zomato'>
          <p className='zomto'>Zomato</p>
          <p className='off'>Up To 50% Off</p>
          <p className='Resturant'>On Select Restaurants</p>
          <p className='Resturant'>+ Free Delivery</p>
          <button className='claim'>Order Now</button>
        </div>,
      ],
    },
    {
      image: ReactImage2,
      text: [
        <div className='slider-text info'>
          <p>Get</p>
          <p>50% Off</p>
          <p>On Your First Celebration</p>
          <button className='claim'>Claim Now</button>
        </div>,
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className='slider-container'>
        <div
          className='slider-track'
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {sliderData.map((item, index) => (
            <div key={index} className='slider'>
              {item.text}
              <img src={item.image} alt='' />
            </div>
          ))}
        </div>
      </div>
      <div className='dots-container'>
        {sliderData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active-dot' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

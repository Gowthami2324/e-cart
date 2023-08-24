import React from 'react';

export const BestCafe = (props) => {
  const { CafeImage, CafeName, Address, Id, Rating } = props.data;

  return (
    <div className='cafes-image'>
      <img src={CafeImage} alt={CafeName} />
      <div>
        <p className='cafeName'>{CafeName}</p>
      </div>
      <div>
        <p className='cafe-description'>{Address}</p>
      </div>
      <div>
        <p className='cafe-description'>{Id}</p>
      </div>
      <div className='rate'>
        <p className='rating'>{Rating}</p>
      </div>
    </div>
  );
};

import React from 'react'
export const Product = (props) => {
    const{productName, ProductImage} = props.data;
    return(
        <div className='product'>
            <img src={ProductImage}/>
            <div className='description'><p>{productName}</p></div>
        </div>
    )
}

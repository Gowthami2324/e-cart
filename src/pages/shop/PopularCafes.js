import React from 'react'
export const PopularCafes = ( props) => {
 const{CafeImage,CafeName,Address,Id,Rating} = props.data;
 return(
     <>
    
    <div className='budget-image'>
        
        <img src={CafeImage}/>
        <div><p>{CafeName}</p></div>
        <div><p>{Address}</p></div>
        <div><p>{Id}</p></div>
        <div><p>{Rating}</p></div>
    </div>
    </>
)

}
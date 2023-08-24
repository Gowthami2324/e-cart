import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export const Navbar = ( ) => {
    return(
        <div className='Navbar'>
       
            <div className='links'>
                
                <Link to="/" className='shop'>shop</Link>
                <Link to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
            </div>
        </div>
    )
}
import cart from './assets/carrito.png'
import './CartWidget.css'
import React from 'react'
import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
const CartWidget = () => {
    const {totalProducts} = useCartContext();
    return(

        <Link to = '/cart' className='CartWidget' /*style={{display: totalQuantity > 0? 'block':'none'}}*/>
            <img src={cart} alt="cart-widget"/>
            <span>{totalProducts()|| ''}</span>
        </Link>
    )
}
export default CartWidget
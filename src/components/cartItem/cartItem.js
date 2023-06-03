import React from 'react';
import { useCartContext} from '../../context/cartContext';
import './cartItem.css';


const CartItem =({product}) => {
    const {removeProduct,clearCart}= useCartContext();
    return(
        <div className='cartItem'>
            <img src={product.img} alt={product.personaje}/>
            <div>
                <p>
                    Nombre: {product.personaje}
                </p>
                <p>
                    Cantidad: {product.quantity}
                </p>
                <p>
                    Precio: ${product.precio}
                </p>
                <p>
                    Subtotal:$ {product.quantity*product.precio}
                </p>

                <button onClick={() => removeProduct(product.id)}>EliminarElemento</button>
<button onClick={() => clearCart()}>Vaciar Carrito</button>
            </div>

        </div>
    )
}
export default CartItem;
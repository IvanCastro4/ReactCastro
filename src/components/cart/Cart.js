import './Cart.css';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import React from 'react';
import CartItem from '../../components/cartItem/cartItem';
import { Button } from 'bootstrap';
import Swal from 'sweetalert2'


const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    const order = {
        buyer:{
        name: 'Carlos',
        email: 'carlos@gmail.com',
        phone: '123456',
        adress: 'calleabc'
    },
        items : cart.map(product => ({ id: product.id, personaje: product.personaje, precio: product.precio, quantity: product.quantity })),
        total : totalPrice()
    }


    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => 
            Swal.fire({
                title: '¿Desea continuar con su compra?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, comprar!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    
                    'Compra exitosa, el id de su pedido es:',
                    id,
                    
                    'success',
                    
                  )
                  .then(() =>{window.location.href= '/'}
                  );
                }
              })
          );
            

    }

    if (cart.length === 0) {
        return (
            <>
                <p>No tienes productos en tu carrito</p>
                <Link to='/' > Ver tienda</Link>
            </>
        );
    }
    return (
        <>
            {
                cart.map(product => <CartItem key={product.id} product={product} />)
            }
            <p>
            
                total: ${totalPrice()}
            </p>
            <button onClick={handleClick}>Realizar compra</button>
        </>
    )
}


export default Cart;
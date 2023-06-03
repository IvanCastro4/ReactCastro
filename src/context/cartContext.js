import { createContext, useContext, useState } from "react";
import Item from "../components/Item/Item";
import React from "react";
export const CartContext =React.createContext([]);
export const useCartContext=() => useContext(CartContext);

const CartProvider = ({children})=> {
    const [cart, setCart] = useState([]);
    
    const addProduct =(Item, quantity) =>{
        if (isInCart(Item.id)){
            setCart(cart.map(product=>{
                return product.id===Item.id? {...product, quantity: product.quantity + quantity}: product
            }));
        }else{
            setCart([...cart, {...Item,quantity}]);
        }
    }
    console.log('carrito:', cart);
    const totalPrice =() => {
        return cart.reduce((prev, act) => prev + act.quantity * act.precio,0);
    }
    const totalProducts = () => cart.reduce((acumulador,productoActual)=> acumulador + productoActual.quantity, 0);


    const clearCart =() => setCart([]);
    const isInCart =(id) => cart.find(product => product.id ===id);
    const removeProduct =(id) => setCart(cart.filter(product=> product.id !==id));


        return(
            <CartContext.Provider value={{cart, addProduct, removeProduct, clearCart,isInCart,totalPrice,totalProducts}}>
                {children}
            </CartContext.Provider>
        )
    }
export default CartProvider;
/*export const CartContext = createContext ([]);
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const addItem = (Item, quantity)=>{
        if(!isInCart(Item.id)){
        setCart(prev => [...prev, {...Item, quantity}])
        
        }else{
            console.error('el producto ya fue agregado')
            }    
        }
        const removeItem =(itemId)=>{
            const cartUpdate = cart.filter(prod => prod.id !==itemId)
            setCart(cartUpdate)
        }
        const clearCart =() =>{
            setCart([])
        }
        const isInCart =(itemId) =>{
            return  cart.some(prod => prod.id ===itemId)
            
        }*/
import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial);
    
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
            console.log(quantity)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
            console.log(quantity)
        }     
    }

    return(
        <div className='Counter'>          
                <div className='Controls'>
                    <button className="Button contador" onClick={decrement} disabled = {quantity === 1}>-</button>
                    <h4 className='Number'>{quantity}</h4>
                    <button className="Button contador" onClick={increment} disabled = {quantity === stock}>+</button>
                </div>
                <div>
                    <button className="Button Add" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
                    
                </div>
        </div>
    )

}
export default ItemCount

/*import './ItemCount.css'
import { useState } from 'react'
const ItemCount = ({initial, stock, onAdd})=> {
   const [quantity, setQuantity] = useState(initial);
        if(stock < quantity) {
            alert('no hay stock suficiente');
        }
        else{
            alert('agregado al carrito')
        };
    

return(
    <div className='Counter'>
        <div className='Controls'>
            <button className='Button' onClick={()=>setQuantity(quantity-1)} >RESTAR -</button>
            <h3 className='Number'>{quantity}</h3>
            <button className='Button' onClick={()=>setQuantity(quantity+1)} >SUMAR+</button>
        </div>
        <div>
            <button className='Button' onClick={()=> onAdd(quantity)} >
                Agregar al carrito.
            </button>
        </div>
    </div>
)};
export default ItemCount*/
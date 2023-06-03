import './ItemDetail.css' 
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
const ItemDetail = ({personaje, categoria, precio, id,stock, img})=>{
    const [quantityAdded, setQuantityAdded] = useState(0)
    const {addProduct} = useCartContext();
    const OnAdd =(quantity) => {
        setQuantityAdded(quantity);
        const data ={img, personaje, precio, id,stock,categoria};
        addProduct(data, quantity);
    }
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {personaje}
                </h2>
            </header>
            <picture>
                <img src={img} alt ={personaje} className="ItemImg"/>
            </picture>
            <section>
            <p className="Info">
                    Categoria:{categoria}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
            
            <Link to = '/' className='Option'>Regresar a ver Tienda</Link>
            <br/>
           
                {
                quantityAdded > 0 ? 
                (
                <Link to = '/cart' className='Option'>Finalizar compra</Link>) 
                
             :(
                <ItemCount initial={1} stock={stock} onAdd={(OnAdd)}/>
    )
            }
                </footer>
            
        </article>
    )
}
export default ItemDetail;
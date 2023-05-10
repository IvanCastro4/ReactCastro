import './ItemDetail.css' 
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({personaje, categoria, precio, id,stock, img})=>{
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log('cantidad agregada',quantity)}/>
            </footer>
        </article>
    )
}
export default ItemDetail
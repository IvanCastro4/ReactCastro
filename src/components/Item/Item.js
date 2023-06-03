import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Item.css' ;
import React,{cartContext} from '../../context/cartContext';
import {useContext} from 'react';
const Item = ({personaje, precio, id, stock, img})=>{
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
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to ={`/detail/${id}`} className="detalle">Ver Detalles</Link>
            </footer>
        </article>
    )
}
export default Item
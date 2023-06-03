import './ItemDetailContainer.css'
import React,{ useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {getFirestore, doc, getDoc,} from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc= doc(querydb, 'productos', 'EGjMF6AsAw30b6uIyOEP');//cuando cambio el detalleId se me rompe todo y no sé por qué
        
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
    }, [])//aquí también debería ir detalleId
    return (    
            
            <ItemDetail {...data}/>
        
    );
}
export default ItemDetailContainer;
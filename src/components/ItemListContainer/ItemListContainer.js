import { useState, useEffect } from "react"
import { getProducts, getProductByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import {getFirestore, collection, getDocs,query, where} from 'firebase/firestore';
const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([]);
    const {categoryId} =useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection= collection(querydb, 'productos');
        if(categoryId){
            const queryFilter = query(queryCollection, where('categoria','==',categoryId ))
            getDocs(queryFilter)
            .then(res=> setData(res.docs.map(product =>({id: product.id,...product.data()}))))
        }
        else{

        getDocs(queryCollection)
        .then(res=> setData(res.docs.map(product =>({id: product.id,...product.data()}))))
}
        
    }, [categoryId])
    return (
        <div>
            <h1>
                {greeting}
            </h1>
            <ItemList data={data}/>
        </div>
    );
}
export default ItemListContainer;
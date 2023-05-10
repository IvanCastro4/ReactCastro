const products =
[
    {
        personaje: 'DarthVader',
        precio: 379,
        stock: 10,
        id: '1',
        img: '../assets/images/DarthVader.jpg',
        categoria: 'StarWars',
        descripcion: 'villano de Star Wars'
    },
    {
        personaje: 'Goku',
        precio: 550,
        stock: 18,
        id: '2',
        img: '../assets/images/cocun.jpg',
        categoria: 'anime',
        descripcion: 'nadie le gana'
    },
    {
        personaje: 'Batman',
        precio: 399,
        stock: 16,
        id: '3',
        img: '../assets/images/batimovil.jfif',
        categoria: 'SuperHeroe',
        descripcion: 'heroe de dc comics'
    },
    {
        personaje: 'Gai Sensei',
        precio: 500,
        stock: 11,
        id: '4',
        img: '../assets/images/gaisensei.jpg',
        categoria: 'anime',
        descripcion: 'el ninja mas fuerte'
    },
    {
        personaje: 'Superman',
        precio: 520,
        stock: 21,
        id: '5',
        img: '../assets/images/superman.jpg',
        categoria: 'SuperHeroe',
        descripcion: 'heroe de dc'
    },
    {
        personaje: 'Spiderman',
        precio: 400,
        stock: 15,
        id: '6',
        img: '../assets/images/spiderman.jpg',
        categoria: 'SuperHeroe',
        descripcion: 'heroe de marvel'
    },
    {
        personaje: 'Messi',
        precio: 450,
        stock: 26,
        id:'7',
        img: '../assets/images/messi.jpg',
        categoria: 'Deportistas',
        descripcion: 'el mejor del mundo'
    },
    {
        personaje: 'Grogu',
        precio: 370,
        stock: 12,
        id: '8',
        img: '../assets/images/grogu.jfif',
        categoria: 'StarWars',
        descripcion: 'heroe de Star Wars'
    }
]
export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}
export const getProductById = (productId) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}
export const getProductByCategory = (productCategory) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.categoria === productCategory))
        },500)
    })
}
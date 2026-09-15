import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router";

const ProductsPage = () => {

    const API_URL = import.meta.env.VITE_API_URL
    
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("electronics")

    useEffect(() => {
        // Versão com .then
        
        fetch(`${API_URL}/products/category/${category}`)
        .then(results => results.json())
        .then (data => setProducts(data))
        

        // Versão com async/await (mesmo comportamento)
        // const loadProducts = async () => {
        //         const data = await fetch(`${API_URL}/products/category/${category}`)
        //         setProducts(data)  
        // }
        // loadProducts()
    }, [category]);

    return (
        <>
        <Header/>
            <h1>Todos os produtos</h1>
            <button onClick={() => setCategory("electronics")}>Eletronicos</button>
            <button onClick={() => setCategory("jewelery")}>Joias</button>
            <div className="product-list">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img
                            src={product.image}
                            alt={product.title}
                        />
                        <p className="product-category">
                            {product.category}
                        </p>
                        <h3>{product.title}</h3>
                        <p className="product-rating">
                            ⭐⭐⭐⭐⭐ ({product.rating.rate})
                        </p>
                        <p className="product-price">
                            R$ {product.price}
                        </p>
                        <Link to={`/produtos/${product.id}`}>
                            Ver mais
                        </Link>
                        <button className="btn-secondary">
                            Adicionar ao carrinho
                        </button>
                    </div>
                ))}
            </div>
        </>
        

    )
}

export default ProductsPage
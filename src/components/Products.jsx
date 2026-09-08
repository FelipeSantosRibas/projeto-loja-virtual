import { useEffect, useState } from "react";
import { getProducts } from "../services/products"

const Products = ({setCartCount}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
        .then (data => setProducts(data))
    }, []);

    const addToCart = () => {
        setCartCount(prev => prev + 1)
    }

    return (
        <section id="produtos" className="products">
            <h2>Produtos em destaque</h2>

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

        <button
            className="btn-secondary"
            onClick={addToCart}
        >
            Adicionar ao carrinho
        </button>
    </div>
))}
            </div>
        </section>
    )
}

export default Products
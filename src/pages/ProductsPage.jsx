import { useEffect, useState } from "react";
import { getProducts } from "../services/products"
import Header from "../components/Header";

const ProductsPage = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Versão com .then/.finally
        getProducts()
        .then (data => setProducts(data))
        .finally(() => setIsLoading(false))

        // Versão com async/await (mesmo comportamento)
        // const loadProducts = async () => {
        //     try {
        //         const data = await getProducts()
        //         setProducts(data)
        //     } finally {
        //         setIsLoading(false)
        //     }
        // }
        // loadProducts()
    }, []);

    return (
        <>
        <Header/>
            <h1>Todos os produtos</h1>
            {isLoading ? 
                <p>Carregando produtos...</p>
            :
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
                        >
                            Adicionar ao carrinho
                        </button>
                    </div>
                ))}
            </div>
            }
        </>
        

    )
}

export default ProductsPage
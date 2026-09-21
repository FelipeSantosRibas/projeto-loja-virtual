const Products = ({setCartCount}) => {

    const addToCart = () => {
        setCartCount(prev => prev + 1)
    }

     return (
        <section id="produtos" className="products">
            <h2>Produtos em destaque</h2>
            <div className="product-list">
                <div className="product-card">
                    <img src="https://placehold.co/240x240/aa3bff/ffffff?text=Tenis" alt="Tênis esportivo" />
                    <p className="product-category">Calçados</p>
                    <h3>Tênis Esportivo</h3>
                    <p className="product-rating">⭐⭐⭐⭐☆ (4.5)</p>
                    <p className="product-price">R$ 299,90</p>
                    <button className="btn-secondary" onClick={addToCart}>Adicionar ao carrinho</button>
                </div>

                <div className="product-card">
                    <img src="https://placehold.co/240x240/3b82f6/ffffff?text=Fone" alt="Fone de ouvido bluetooth" />
                    <p className="product-category">Eletrônicos</p>
                    <h3>Fone de Ouvido Bluetooth</h3>
                    <p className="product-rating">⭐⭐⭐⭐⭐ (4.8)</p>
                    <p className="product-price">R$ 149,90</p>
                    <button className="btn-secondary">Adicionar ao carrinho</button>
                </div>

                <div className="product-card">
                    <img src="https://placehold.co/240x240/22c55e/ffffff?text=Mochila" alt="Mochila para notebook" />
                    <p className="product-category">Acessórios</p>
                    <h3>Mochila para Notebook</h3>
                    <p className="product-rating">⭐⭐⭐⭐☆ (4.2)</p>
                    <p className="product-price">R$ 189,90</p>
                    <button className="btn-secondary">Adicionar ao carrinho</button>
                </div>

                <div className="product-card">
                    <img src="https://placehold.co/240x240/f97316/ffffff?text=Relogio" alt="Relógio smartwatch" />
                    <p className="product-category">Eletrônicos</p>
                    <h3>Relógio Smartwatch</h3>
                    <p className="product-rating">⭐⭐⭐⭐⭐ (4.7)</p>
                    <p className="product-price">R$ 349,90</p>
                    <button className="btn-secondary">Adicionar ao carrinho</button>
                </div>
            </div>
        </section>
    )
}

export default Products
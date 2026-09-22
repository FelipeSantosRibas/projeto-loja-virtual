function CategoryCard({ nomeCategoria, iconeCategoria }) {
    return (
        <div className="category-card">
            <span className="category-icon">{iconeCategoria}</span>
            <p>{nomeCategoria}</p>
        </div>
    )
}

export default CategoryCard
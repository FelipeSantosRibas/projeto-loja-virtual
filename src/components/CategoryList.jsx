import CategoryList from "./CategoryList"

const CategoryList = (categorias) => {
    return (
        <section className="category-list">
            <h1>Categorias</h1>
            {categorias.map(categoriaAtual => (
                <CategoryCard categoria={categoriaAtual} />
            ))}
        </section>
    )
}

export default CategoryList
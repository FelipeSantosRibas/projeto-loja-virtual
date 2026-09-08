import { useState } from "react"
import { Link } from "react-router"

const Header = ({cartCount}) => {

    const [search, setSearch] = useState("")

    const handleChange = event =>{
        setSearch(event.target.value)
    }

    return (
        <header className="header">
            <div className="logo">🛍️ ReactShop</div>
        
            <ul className="nav">
                <li><Link to="/">Início</Link></li>
                <li><Link to="produtos">Produtos</Link></li>
                <li><Link to="contato">Contato</Link></li>
            </ul>
        
            <div className="header-actions">
                 <input
                    type="text"
                    value={search}
                    onChange={handleChange}
                    placeholder="Buscar..."
                />
                <span className="search-text">
                    Buscando por: {search}
                </span>
                <span className="icon-button">🔍</span>
                <span className="icon-button">❤️</span>
                <span className="icon-button cart">
                    🛒
                    <span className="badge">{cartCount}</span>
                </span>
            </div>
        </header>
  )
}

export default Header
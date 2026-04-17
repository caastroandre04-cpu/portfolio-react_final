import { useState } from "react"

function Header() {
const [menuOpen, setMenuOpen] = useState(false)
const [light, setLight] = useState(false)

function toggleTheme() {
    document.body.classList.toggle("light-theme")
    setLight(!light)
}

return (
    <header>
    <div className="header-esquerda">
        <button id="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
        </button>
        <h1>André Castro</h1>
    </div>

    <button id="theme-toggle" onClick={toggleTheme}>
        {light ? "🌙" : "☀️"}
    </button>

    <nav id="menu" className={menuOpen ? "active" : ""}>
        <ul>
        <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
        <li><a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a></li>
        <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
        </ul>
    </nav>
    </header>
)
}

export default Header
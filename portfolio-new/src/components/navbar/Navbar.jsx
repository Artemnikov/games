import './navbar.scss'

export function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'navbar ' + (menuOpen && "active")}>
            <a href="#hero" className='logo'>Artem.</a>
            <nav className="btn_wrapper">
                <a href="#hero">Home</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#works">works</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

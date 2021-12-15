import './menu.scss'

export function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={'menu ' + (menuOpen && "active")}>
            <ul>
                <li><a href="#hero" onClick={() => setMenuOpen(false)} >Home</a></li>
                <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
                <li><a href="#works" onClick={() => setMenuOpen(false)}>Works</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
        </div>
    )
}

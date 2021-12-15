import './navbar.scss'

export function Navbar({ menuOpen, setMenuOpen ) {
    return (
        <div className={'navbar ' + (menuOpen && "active")}>
            <a href="#hero" className='logo'>Artem.</a>
            <div className="btn_wrapper">
                <button> contact</button>
                <button>works</button>
            </div>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span className='lin1'></span>
                <span className='lin2'></span>
                <span className='lin3'></span>
            </div>
        </div>
    )
}

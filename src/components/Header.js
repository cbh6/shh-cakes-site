import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section className="header">
                <h1 className="header__link">Logo</h1>
                <nav className="header__menu">
                    <ul>
                        <li><a href="#">Sobre mí</a></li>
                        <li><a href="#">Tartas</a></li>
                        <li><a href="#">Pedidos/Contacto</a></li>
                    </ul>
                </nav>
            </section>
        )
    }
}

export default Header

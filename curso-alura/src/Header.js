import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper indigo lighten-2">
                <a href="index.html" className="brand-logo">Logo</a>
                <ul className="right">
                    <li><a href="index.html" >Autores</a></li>
                    <li><a href="index.html" >Livros</a></li>
                    <li><a href="index.html" >Sobre</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
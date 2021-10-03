import React from 'react'
import './NavBar.css'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
    return (
        <div>
            <header>
                <div id="logo">
                    <img src="./assets/logo-Staggerer.png"></img>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Películas</a></li>
                        <li><a href="#">Series</a></li>
                        <li><a href="#">Música</a></li>
                        <li><a href="#">Libros</a></li>
                        <li><a href="#">Comics</a></li>
                    </ul>
                </nav>
                <CartWidget />
            </header>
            
        </div>
    )
}

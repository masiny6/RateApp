import React from "react"
import "./navbar.scss"
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="main-navigation">
            <ul className="navigation-list">
                <li className="navigation-elem"><NavLink className="navigation-link" to="/">Главная</NavLink></li>
                <li className="navigation-elem"><NavLink className="navigation-link" to="/calc">Калькулятор</NavLink></li>
                <li className="navigation-elem"><NavLink className="navigation-link" to="/sample">Выборки</NavLink></li>
                <li className="navigation-elem"><NavLink className="navigation-link" to="/info">Информация</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
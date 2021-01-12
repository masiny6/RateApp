import React, {useContext} from "react"
import "./navbar.scss"
import {NavLink} from "react-router-dom"
import { RateContext } from "../../context/RateContext"



const Navbar = () => {
    const {state} = useContext(RateContext)
    const noAction = {color: state.auth ? "#223046" : "grey", cursor: state.auth ? "pointer" : "default"}
    return(
        <nav className="main-navigation">
            <ul className="navigation-list">
                <li className="navigation-elem"><NavLink className="navigation-link" to="/">Главная</NavLink></li>
                <li className="navigation-elem"><NavLink style={noAction} className="navigation-link" to={state.auth ? "/calc" : ""}>Калькулятор</NavLink></li>
                <li className="navigation-elem"><NavLink style={noAction} className="navigation-link" to={state.auth ? "/sample" : ""}>Выборки</NavLink></li>
                <li className="navigation-elem"><NavLink style={noAction} className="navigation-link" to={state.auth ? "/info" : ""}>Информация</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
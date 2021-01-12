import React, {useContext} from "react"
import { RateContext } from "../../context/RateContext"
import Navbar from "../navbar/Navbar"
import {NavLink} from "react-router-dom"
import "./header.scss"

export const Header = () => {

    const {modalShowHandler, state} = useContext(RateContext)

    return(
        <div className="header">
            <div className="header__wrapper">
                <div className="logo">
                    <NavLink className="logo__link" to="/"><h2 className="logo__title">RateApp</h2></NavLink>
                </div>
                <Navbar/>
                <div className= "person">
                    <i className="fa fa-user" aria-hidden="true" onClick={modalShowHandler}/>&nbsp;
                    {state.auth ? <span>Привет {state.welcome}!</span> : <span></span>}
                </div>
                
            </div>
            <hr/>
        </div>
    )
}
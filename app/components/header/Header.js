import React from "react"
import Navbar from "../navbar/Navbar"
import "./header.scss"

export const Header = () => {

    return(
        <div className="header">
            <div className="header__wrapper">
                <div className="logo">
                    <a className="logo__link" href="#"><h2 className="logo__title">RateApp</h2></a>
                </div>
                <Navbar/>
                <div className= "person">
                    <i className="fa fa-user" aria-hidden="true"/>
                </div>
                
            </div>
            <hr/>
        </div>
    )
}
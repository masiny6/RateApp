import React, {useContext} from "react"
import { RateContext } from "../../context/RateContext"
import Navbar from "../navbar/Navbar"
import "./header.scss"

export const Header = () => {

    const {modalShowHandler} = useContext(RateContext)

    return(
        <div className="header">
            <div className="header__wrapper">
                <div className="logo">
                    <a className="logo__link" href="#"><h2 className="logo__title">RateApp</h2></a>
                </div>
                <Navbar/>
                <div className= "person">
                    <i className="fa fa-user" aria-hidden="true" onClick={modalShowHandler}/>
                </div>
                
            </div>
            <hr/>
        </div>
    )
}
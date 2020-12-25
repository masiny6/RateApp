import React, {useContext} from "react"
import { RateContext } from "../../context/RateContext"
import "./saidbar.scss"

export const Sidebar = () => {

    const {state} = useContext(RateContext)//Импортировали наш контекст и зарали стайт


    return(
        <div className="sidebar">
            <div className="sidebar__head">
                <h3>Все валюты</h3>
            </div>

            <div className="sidebar__content">
                <ul className="sidebar__list">
                    {
                        Object.keys(state.currency).map((item, i)=>{
                            return(
                                <li className="sidebar__elem" key={item}>
                                    <p>
                                        <span>
                                            <img className="sidebar__img" src={state.currency[item].flag} alt={item}/>&nbsp;{item}
                                        </span>&nbsp; {state.currency[item].name}
                                    </p>
                                </li>
                            )
                        })
                    }
                    <li className="sidebar__elem"></li>
                </ul>
            </div>



        </div>
    )
}
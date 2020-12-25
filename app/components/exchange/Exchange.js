import React, {useContext} from "react"
import { RateContext } from "../../context/RateContext"
import "./exchange.scss"



export const Exchange = () => {

    const {state} = useContext(RateContext)

    const currency = {...state.currency}

    return(
        <div className="exchange">
            <div className="exchange__container">

                <div className="exchange__content">
                    <div><p>Базовая валюта: {state.base} &nbsp;  &nbsp;Дата: {state.date}</p></div>
                    <ul className="exchange__list">
                        {
                            Object.keys(currency).map((item, i)=>{
                                return(
                                    <li className="exchange__elem" key={item}>
                                        <span><img className="exchange__img" src={currency[item].flag} alt={item}/>{item}</span>
                                        <span>{`1${state.base} = ${currency[item].course} ${item}`}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
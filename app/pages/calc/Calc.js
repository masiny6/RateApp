import React from "react"
import { Counter } from "../../components/counter/Counter"
import { CountResult } from "../../components/countResult/CountResult"
import "./calc.scss"

export const Calc = () => {
    return(
        <div className="calculator">
            <div className="calculator__container">
                <Counter/>
                <CountResult/>
            </div>
        </div>
    )
}
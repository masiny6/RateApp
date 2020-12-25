import React,{useContext} from 'react';
import { RateContext } from '../../context/RateContext';
import './countResult.scss';


export const CountResult = () => {

    const {state} = useContext(RateContext)
    return(
        <div className="calculator__result">
            <ul className="calculator__list">
                {state.result ?
                <li className="calculator__elem">
                    <p className="calculator__inner">
                        <span>{state.inputValue}&nbsp;RUB</span>
                        =
                        <span>{state.result}&nbsp;{state.currencyValue}</span>
                    </p>
                </li> : null}
            </ul>
        </div>
    )
}
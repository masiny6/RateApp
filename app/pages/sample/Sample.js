import React, {useContext} from "react"
import { Button } from "../../components/button/Button"
import { RateContext } from "../../context/RateContext"
import "./sample.scss"


export const Sample = () => {

    const {state, baseHandler, base2Handler, sampleDateHandler, dataWrite, sampleRemove} = useContext(RateContext)
    return(
        <div className="sample">
            <div className="sample__container">
                <div>
                    <h3>Получить курс: &nbsp;

                        <select value={state.sample.base} onChange={baseHandler}>
                            {
                                Object.keys(state.currency).map((item, i)=>{
                                    return(
                                    <option key={item}>{item}</option>
                                    )
                                })
                            }
                        </select>

                        &nbsp; &nbsp;  к  &nbsp; &nbsp;

                        <select value={state.sample.base2} onChange={base2Handler}>
                            {
                                Object.keys(state.currency).map((item, i)=>{
                                    return(
                                    <option key={item}>{item}</option>
                                    )
                                })
                            }
                        </select>

                    </h3>
                </div>

                <div className="sample__head">
                    <span>Дата: <input type="date" onChange={sampleDateHandler}/></span>
                    <Button text="Получить курс" click={dataWrite} arg={state.sample}/>
                </div>

                <div className="sample__result">
                    <ul className="sample__list">
                       {
                            Object.keys(state.sampleList).map((item, i)=>{
                                return(
                                    <li className="sample__elem" key={item}>
                                        <span><img className="sample__img" src={state.currency[state.sampleList[item].base].flag} alt={item}/>&nbsp;{state.sampleList[item].base}</span>
                                        <span>{state.sampleList[item].date}</span>
                                        <span>{`${state.sampleList[item].course} ${state.sampleList[item].base2}`}</span>
                                        <button className="sample__btn" onClick={()=> sampleRemove(item)}><i className="fa fa-times"/></button>
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
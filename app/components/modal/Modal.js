import React, { Fragment, useState, useContext } from 'react';//useState позволяет создавать локальный state внутри функциональных компонентов
import { RateContext } from '../../context/RateContext';
import { Login } from '../login/Login';
import { Register } from '../register/Register';
import './modal.scss';


export const Modal = () => {

    const {state, modalHideHandler} = useContext(RateContext)

    const [value, setValue] = useState("login")

    const links = [{name: "Вход", id: "login"}, {name: "Регистрация", id: "register"}]

    const cls = ["modal"]

    const windowHandler = (id) => {
        setValue(id)
    }

    if(state.showModal) {
        cls.push("modal-show")
    }
    return(
        <div className={cls.join(" ")}>
            <Fragment>
            <div className="modal__head">
                <ul className="modal__list">
                    {links.map((item, i)=> {
                        return(
                            <li style = {{fontWeight: item.id === value ? "bold" : "normal"}} key={item.name} onClick={()=> windowHandler(item.id)} className="modal__elem">{item.name}</li>
                        )
                    })}
                </ul>
                <i style={{cursor: "pointer"}} className="fa fa-times" aria-hidden="true" onClick={modalHideHandler}/>
            </div>
            <hr/>
            </Fragment>
            <div style = {{textAlign: "center"}}>
                <h2 style = {{color: "red"}}>{state.error}</h2>
            </div>
            
            {value === "register" ? <Register/> : <Login/>}
            
        </div>
    )
}
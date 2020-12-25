import React, { Fragment } from 'react';
import { Login } from '../login/Login';
import { Register } from '../register/Register';
import './modal.scss';


export const Modal = () => {
    return(
        <div className="modal">
            <Fragment>
            <div className="modal__head">
                <ul className="modal__list">
                    <li className="modal__elem">Вход</li>
                    <li className="modal__elem">Регистрация</li>
                </ul>
                <i className="fa fa-times" aria-hidden="true"/>
            </div>
            <hr/>
            </Fragment>
            <Login/>
            {/* <Register/> */}
        </div>
    )
}
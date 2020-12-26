import React, { Fragment, useContext } from 'react';
import { RateContext } from '../../context/RateContext';
import { Button } from '../button/Button';
import './login.scss';



export const Login = () => {

    const {renderInputs, state, loginHandler} = useContext(RateContext)
    return(
        <Fragment>
            <div className="modal-form">
                {renderInputs()}
            </div>
            <div className="modal-btn">
                <Button click = {loginHandler} disabled = {!state.isFormValid} text="Войти"/>
            </div>
        </Fragment>
    )
}

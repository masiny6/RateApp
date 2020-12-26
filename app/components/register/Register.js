import React, { Fragment, useContext } from 'react';
import './register.scss';
import { Button } from '../button/Button';
import { RateContext } from '../../context/RateContext';


export const Register = () => {

    const {renderInputs, state, registerHandler} = useContext(RateContext)

    return(
        <Fragment>
            <div className="modal-form">
               {renderInputs()}
            </div>
            <div className="modal-btn">
                <Button click = {registerHandler} disabled={!state.isFormValid} text="Зарегистрироваться"/>
            </div>
        </Fragment>
    )
}

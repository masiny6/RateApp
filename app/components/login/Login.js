import React, { Fragment, useContext } from 'react';
import { RateContext } from '../../context/RateContext';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import './login.scss';



export const Login = () => {

    const {renderInputs} = useContext(RateContext)
    return(
        <Fragment>
            <div className="modal-form">
                {renderInputs()}
            </div>
            <div className="modal-btn">
                <Button text="Войти"/>
            </div>
        </Fragment>
    )
}

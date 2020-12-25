import React, { Fragment } from "react"
import Layout from "./components/layout/Layout"
import {RateContext} from "./context/RateContext"
import "./scss/App.scss"
import axios from "axios"


import CHF from "./images/CHF.png"
import CNY from "./images/CNY.png"
import EUR from "./images/EUR.png"
import GBP from "./images/GBP.png"
import JPY from "./images/JPY.png"
import RUB from "./images/RUB.png"
import USD from "./images/USD.png"
import { Dark } from "./components/dark/Dark"
import { Modal } from "./components/modal/Modal"
import { Input } from "./components/input/Input"



export default class App extends React.Component { //Функциональный компонент

    constructor(props) {
        super(props);
        this.state = {
            formControls: {
                email: {
                    value: "",
                    type: "email",
                    label: "Email",
                    errorMessage: "Введите корректный Email",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        email: true
                    }
                },
                password: {
                    value: "",
                    type: "password",
                    label: "Пароль",
                    errorMessage: "Введите корректный пароль",
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLenght: 6
                    }
                }
            },



            base: "USD",
            rate: "",
            date: "",
            currency: { USD: {name: "Доллар США", flag: USD, course: ""},
                        CNY: {name: "Китайский Юань", flag: CNY, course: ""},
                        EUR: {name: "Евро", flag: EUR, course: ""},
                        GBP: {name: "Фунт Стерлиногов", flag: GBP, course: ""},
                        JPY: {name: "Японская Йена", flag: JPY, course: ""},
                        RUB: {name: "Российский Рубль", flag: RUB, course: ""},
                        CHF: {name: "Швейцарский Франк", flag: CHF, course: ""},
            },
            //calculator
            inputValue: 100,
            currencyValue: "USD",
            result: null,

            //sample
            sample: {base: "USD", base2: "RUB", date: "", course: ""},
            sampleList: ""
        }
    }

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName} - ${event.target.value}`)
    }



    renderInputs = () => {
        return Object.keys(this.state.formControls).map((controlName, i)=> {
            const control = this.state.formControls[controlName]
            return(
                <Input 
                    key = {controlName + i}
                    type = {control.type}
                    value = {control.value}
                    valid = {control.touched}
                    label = {control.label}
                    errorMessage = {control}
                    shouldValidate = {true}
                    onChange = {(event)=> this.onChangeHandler(event, controlName)}
                />
            )
        })
    }
    
    baseHandler = (event) => {
        this.setState({
            sample: {...this.state.sample, base: event.target.value}
        })
    }
    base2Handler = (event) => {
        this.setState({
            sample: {...this.state.sample, base2: event.target.value}
        })
    }
    sampleDateHandler = (event) => {
        this.setState({
            sample: {...this.state.sample, date: event.target.value}
        })
    }

    dataWrite = async () => {

        await fetch(`https://api.exchangeratesapi.io/${this.state.sample.date}?base=${this.state.sample.base}`)
        .then((response)=> response.json()).then((response)=>{
            this.setState({
                sample: {...this.state.sample, course: response.rates[this.state.sample.base2]}
            })
        })


        await axios.post("https://rateapp-c75d2-default-rtdb.firebaseio.com/sample.json", this.state.sample)
        .then((response)=> {
            return("")
        })//Помещает информацию в базу данных

        await axios("https://rateapp-c75d2-default-rtdb.firebaseio.com/sample.json")
        .then((response)=>{
            this.setState({
                sampleList: response.data
            })
        })//Считывает информацию из базы данных и помещает в state
    }

    sampleRemove = async (id) => {
        let sampleList = {...this.state.sampleList}
        delete sampleList[id]
        this.setState({
            sampleList
        })
        await axios.delete(`https://rateapp-c75d2-default-rtdb.firebaseio.com/sample/${id}.json`)
    }







    inputValueHandler = (event) => {
        this.setState({
            inputValue: event.target.value,
            result: null
        })
    }
    
    currencyValueHandler = (event) => {
        this.setState({
            currencyValue: event.target.value,
            result: null
        })
    }

    calculatorHandler = async (value) => {
        let result
        await fetch("https://api.exchangeratesapi.io/latest?base=RUB")
        .then((response)=> response.json()).then((response)=>{
            result = response.rates[value] * this.state.inputValue
        })
        this.setState({
            result
        })
        
    }

    componentDidMount() {
        fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then((response)=> response.json()).then((responce)=>{
            //console.log(responce)
            const rateArr = ["USD", "CNY", "EUR", "GBP", "JPY", "RUB", "CHF"]
            const currency = {...this.state.currency}

            for(let i = 0; i < rateArr.length; i++) {
                currency[rateArr[i]].course = responce.rates[rateArr[i]]
            }

            this.setState({
                rate: responce.rates,
                date: responce.date,
                currency
            })
        })
        axios("https://rateapp-c75d2-default-rtdb.firebaseio.com/sample.json")
        .then((response)=>{
            this.setState({
                sampleList: response.data
            })
        })
    }




    render() {
        return (
            <Fragment>
                <RateContext.Provider
                    value={{state: this.state,
                            inputValueHandler: this.inputValueHandler,
                            currencyValueHandler: this.currencyValueHandler,
                            calculatorHandler: this.calculatorHandler,
                            baseHandler: this.baseHandler,
                            base2Handler: this.base2Handler,
                            sampleDateHandler: this.sampleDateHandler,
                            dataWrite: this.dataWrite,
                            sampleRemove: this.sampleRemove,
                            renderInputs: this.renderInputs
                    }}>
                    <Dark/>
                    <Modal/>
                    <Layout/>
                </RateContext.Provider>
            </Fragment>
            
        )
    }
}
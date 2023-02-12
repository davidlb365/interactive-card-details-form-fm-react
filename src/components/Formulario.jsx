import React, { useState } from 'react'
import Error from './Error'
import Success from './Success'

function Formulario({name, setName, number, setNumber, month, setMonth, year, setYear, cvc, setCvc}) {
    const [errorName, setErrorName] = useState('i')
    const [errorNumber, setErrorNumber] = useState('i')
    const [errorMonth, setErrorMonth] = useState('i')
    const [errorYear, setErrorYear] = useState('i')
    const [errorCvc, setErrorCvc] = useState('i')

    function changeNumber(e) {
        let value = e.target.value
        let newValue = ''
        value = value.replace(/\s/g, '')
        for(let i = 0; i<value.length; i++) {
            if(i%4 == 0 && i > 0) newValue = newValue.concat(' ')
            newValue = newValue.concat(value[i])
        }
        setNumber(newValue)
    }

    function handleSubmit(e) {
        e.preventDefault()

        checkName()
        checkNumber()
        checkMonth()
        checkYear()
        checkCvc()
    }

    function checkName() {
        name === '' ? setErrorName("Can't be blank") : setErrorName('')
    }

    function checkNumber() {
        if(number === '') {
            setErrorNumber("Can't be blank")
            return
        }
        if(number.length < 19) {
            setErrorNumber("Wrong format, too short")
            return
        }
        const regexNumber = /\D/
        const valueFormatted = number.replaceAll(/\s/g, '')
        regexNumber.test(valueFormatted) ? setErrorNumber("Wrong format, numbers only") : setErrorNumber('')
    }

    function checkMonth() {
        if(month === '') {
            setErrorMonth("Can't be blank")
            return
        }
        if(month.length < 2) {
            setErrorMonth("Too short")
            return
        }
        (isNaN(month) || parseInt(month) < 1 || parseInt(month) > 12) ? setErrorMonth("Wrong format") : setErrorMonth('')
    }

    function checkYear() {
        if(year === '') {
            setErrorYear("Can't be blank")
            return
        }
        if(year.length < 2) {
            setErrorYear("Too short")
            return
        }
        (isNaN(year) || parseInt(year) < 1) ? setErrorYear("Wrong format") : setErrorYear('')
    }

    function checkCvc() {
        if(cvc === '') {
            setErrorCvc("Can't be blank")
            return
        }
        if(cvc.length < 3) {
            setErrorCvc("Too short")
            return
        }
        isNaN(cvc) ? setErrorCvc("Wrong format") : setErrorCvc('')

    }

    return (
        <div className="content" id="content">
            {([errorName, errorNumber, errorMonth, errorYear, errorCvc].every(elem => elem === '')) ? (
                <Success />
            ) : (
                <form className="form" id="submit" onSubmit={handleSubmit}>
                    <div className="form__container">
                        <label htmlFor="name" className="form__label">CARDHOLDER NAME</label>
                        <input type="text" id="form-name" placeholder="e.g. Jane Appleseed" className={`${errorName && errorName !== 'i' && 'redInput'} input__card`} value={name} onChange={ (e) => setName(e.target.value)}/>
                        {errorName && errorName !== 'i' && <Error msg={errorName} />}
                    </div>
                    <div className="form__container">
                        <label htmlFor="number" className="form__label">CARD NUMBER</label>
                        <input type="text" id="form-number" placeholder="e.g. 1234 5678 9123 0000" className={`${errorNumber && errorNumber !== 'i' && 'redInput'} input__card`} maxLength="19" value={number} onChange={changeNumber}/>
                        {errorNumber && errorNumber !== 'i' && <Error msg={errorNumber} />}
                    </div>
                    <div className="form__container form__container--footer">
                        <div className="form__date">
                            <label className="form__label">Exp. Date (MM/YY)</label>
                            <input type="text" placeholder="MM" className={`${errorMonth && errorMonth !== 'i' && 'redInput'} input__date`} id="form-month" maxLength="2" value={month} onChange={ (e) => setMonth(e.target.value)}/>
                            <input type="text" placeholder="YY" className={`${errorYear && errorYear !== 'i' && 'redInput'} input__date`} id="form-year" maxLength="2" value={year} onChange={ (e) => setYear(e.target.value)}/>
                            {errorMonth && errorMonth !== 'i' && <Error msg={errorMonth} />}
                            {errorMonth === '' && errorYear && errorYear !== 'i' && <Error msg={errorYear} />}
                        </div>
                        <div className="form__cvc">
                            <label className="form__label">CVC</label>
                            <input type="text" placeholder="e.g. 123" className={`${errorCvc && errorCvc !== 'i' && 'redInput'} input__cvc`} id="form-cvc" maxLength="3" value={cvc} onChange={ (e) => setCvc(e.target.value)}/>
                            {errorCvc && errorCvc !== 'i' && <Error msg={errorCvc} />}
                        </div>
                    </div>
                    <input type="submit" className="form__submit" value="Confirm" />
                </form>
            )}
        </div>
    )
}

export default Formulario
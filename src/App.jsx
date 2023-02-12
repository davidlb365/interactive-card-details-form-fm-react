import { useState } from 'react'
import Formulario from './components/Formulario'
import Cards from './components/Cards'

function App() {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [cvc, setCvc] = useState('')

    return (
        <main>
            <div className="background"></div>
            <Formulario 
                name={name}
                setName={setName}
                number={number}
                setNumber={setNumber}
                month={month}
                setMonth={setMonth}
                year={year}
                setYear={setYear}
                cvc={cvc}
                setCvc={setCvc}
            />
            <Cards 
                name={name}
                number={number}
                month={month}
                year={year}
                cvc={cvc}
            />
        </main>
    )
}

export default App

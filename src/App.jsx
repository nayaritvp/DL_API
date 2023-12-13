import { useState } from 'react'
import  MiApi  from './Components/MiApi'
import  Buscador  from './Components/Buscador'
import './App.css'

function App() {
  const [feriados, setFeriados] = useState ([]);
  const [feriadosOtro, setFeriadosOtro] = useState ([]);

  return (
    <>
    <Buscador
    feriados={feriados}
    setFeriadosOtro={setFeriadosOtro}
    />
    <MiApi
    feriados={feriados}
    setFeriados={setFeriados}
    feriadosOtro={feriadosOtro}
    setFeriadosOtro={setFeriadosOtro}
    />
    </>
  )
}

export default App

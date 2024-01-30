import React, { useState } from 'react'
import Github from './images/github-mark/github-mark-white.svg'
import Linkedin from './images/linkedin-mark/icon1-linkedin.svg'
import './App.css'

function App() {
  const [screenValue, setScreenValue] = useState('')
  const [result, setResult] = useState(0)
  const [acumulador, setAcumulator] = useState(0)
  const [operation, setOperation] = useState(false)

  // COMPONENTES

  const Line = ({ img, user }) => {
    const [currentUser, setUser] = useState(user)

    return (
      <li>
        <img src={img} />
        <h3>{currentUser}</h3>
      </li>
    )
  }

  const screen = (valor, res) => {
    return (
      <div className="screen">
        <span>{valor}</span>
        <span>{res}</span>
      </div>
    )
  }

  const btn = (label, onClick) => {
    if (label === '=') {
      return (
        <button className="btnEqual" onClick={onClick}>
          {label}
        </button>
      )
    }

    if (
      label === 'AC' ||
      label === '(' ||
      label === ')' ||
      label === '/' ||
      label === '*' ||
      label === '-' ||
      label === '+'
    ) {
      return (
        <button className="btnOper" onClick={onClick}>
          {label}
        </button>
      )
    } else {
      return (
        <button className="btn" onClick={onClick}>
          {label}
        </button>
      )
    }
  }

  // FUNÇÕES

  const addCalc = (d) => {
    if ((d === '+' || d === '-' || d === '*' || d === '/') && operation) {
      setOperation(false)
      setScreenValue(result + d)
      return
    }

    if (operation) {
      setScreenValue(d)
      setOperation(false)
      return
    }

    const valueCalc = screenValue + d
    setScreenValue(valueCalc)
  }

  const limparMemoria = () => {
    setOperation(false)
    setResult(0)
    setScreenValue('')
    setAcumulator(0)
  }

  const operacoes = (oper) => {
    if (oper == 'bs') {
      let vscreen = screenValue
      vscreen = vscreen.substring(0, vscreen.length - 1)
      setScreenValue(vscreen)
      setOperation(false)
      return
    }

    try {
      const r = eval(screenValue) // VARIÁVEL DE CÁLCULO

      let adjustedResult // VARIÁVEL PARA AJUSTAR O RESULTADO

      if (Math.abs(r) >= 1e15) {
        adjustedResult = r.toExponential(2) // toExponential serve para trazer esse result em notação ciêntifica
      } else {
        adjustedResult = String(r) //
      }

      setAcumulator(adjustedResult)
      setResult(adjustedResult)
      setOperation(true)
    } catch {
      setResult('ERRO')
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        {screen(screenValue, result)}

        <div className="btnArea">
          {btn('AC', limparMemoria)}
          {btn('(', () => addCalc('('))}
          {btn(')', () => addCalc(')'))}
          {btn('/', () => addCalc('/'))}
          {btn('7', () => addCalc('7'))}
          {btn('8', () => addCalc('8'))}
          {btn('9', () => addCalc('9'))}
          {btn('*', () => addCalc('*'))}
          {btn('4', () => addCalc('4'))}
          {btn('5', () => addCalc('5'))}
          {btn('6', () => addCalc('6'))}
          {btn('-', () => addCalc('-'))}
          {btn('1', () => addCalc('1'))}
          {btn('2', () => addCalc('2'))}
          {btn('3', () => addCalc('3'))}
          {btn('+', () => addCalc('+'))}
          {btn('<-', () => operacoes('bs'))}
          {btn('.', () => addCalc('.'))}
          {btn('0', () => addCalc('0'))}
          {btn('=', () => operacoes('='))}
        </div>
      </div>

      <div className="devInfo">
        <ul>
          <a
            href="https://github.com/RodrigoNasc13"
            target="_blank"
            rel="noreferrer"
          >
            <Line img={Github} user="RodrigoNasc13" />
          </a>
          <a
            href="https://linkedin.com/in/rodrigonasct"
            target="_blank"
            rel="noreferrer"
          >
            <Line img={Linkedin} user="rodrigonasct" />
          </a>
        </ul>
      </div>
    </div>
  )
}

export default App

import React,{useState} from 'react'
import './App.css';

function App() {

  const [valorTela,setValorTela]=useState('')
  const [resultado,setResultado]=useState(0)
  const [acumulador,setAcumulador]=useState(0)
  const [operacao,setOperacao]=useState(false)

  // COMPONENTES

  const tela = (valor,res) => {

    return(

      <div className='screen'>

        <span>{valor}</span>
        <span>{res}</span>

      </div>

    )

  }

  const btn = (label,onClick) => {

    if (label === '=') {

      return(

        <button className='btnEqual' onClick={onClick}>
  
          {label}
  
        </button>
  
      )  

    }

    if ((label === 'AC' || label === '(' || label === ')' || label === '/' || label === '*' || label === '-' || label === '+')) {

      return(

        <button className='btnOper' onClick={onClick}>
  
          {label}

        </button>

      )

    }

    else {

      return(

        <button className='btn' onClick={onClick}>
  
          {label}
  
        </button>
  
      )

    }

  }

  // FUNÇÕES

  const addCalc = (d) => {

    if ( (d=='+' || d=='-' || d=='*' || d=='/') && operacao ) {
      
      setOperacao(false)
      setValorTela(resultado + d)
      return

    }

    if (operacao) {

      setValorTela(d)
      setOperacao(false)
      return

    }

    const valueCalc = valorTela + d
    setValorTela(valueCalc)

  }

  const limparMemoria = () => {

    setOperacao(false)
    setResultado(0)
    setValorTela('')
    setAcumulador(0)
    return

  }

  const operacoes = (oper) => {

    if (oper==('bs')) {

      let vTela = valorTela
      vTela = vTela.substring(0, (vTela.length - 1))
      setValorTela(vTela)
      setOperacao(false)
      return

    }

    try {

      const r = eval(valorTela) // VARIÁVEL DE CÁLCULO
      setAcumulador(r)
      setResultado(r)
      setOperacao(true)

    }

    catch {

      setResultado('ERRO')

    }


  }

  return (

    <div className='container'>

      <h3>Calculadora Matemática</h3>

      <div className='calculadora'>

        {tela(valorTela,resultado)}

        <div className='btnArea'>

          {btn('AC',limparMemoria)}
          {btn('(',()=>addCalc('('))}
          {btn(')',()=>addCalc(')'))}
          {btn('/',()=>addCalc('/'))}
          {btn('7',()=>addCalc('7'))}
          {btn('8',()=>addCalc('8'))}
          {btn('9',()=>addCalc('9'))}
          {btn('*',()=>addCalc('*'))}
          {btn('4',()=>addCalc('4'))}
          {btn('5',()=>addCalc('5'))}
          {btn('6',()=>addCalc('6'))}
          {btn('-',()=>addCalc('-'))}
          {btn('1',()=>addCalc('1'))}
          {btn('2',()=>addCalc('2'))}
          {btn('3',()=>addCalc('3'))}
          {btn('+',()=>addCalc('+'))}
          {btn('<-',()=>operacoes('bs'))}
          {btn('.',()=>addCalc('.'))}
          {btn('0',()=>addCalc('0'))}
          {btn('=',()=>operacoes('='))}

        </div>

      </div>


    </div>

  );
}

export default App;

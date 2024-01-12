import React,{useState} from 'react'
import './App.css';

function App() {

  const [valorTela,setValorTela]=useState('')
  const [resultado,setResultado]=useState(0)
  const [acumulador,setAcumulador]=useState(0)
  const [operacao,setOperacao]=useState(false)

  // COMPONEMTES

  const tela = (valor,res) => {

    return(

      <div className=''>

        <span>{valor}</span>
        <span>{res}</span>

      </div>

    )

  }

  const btn = (label,onClick) => {

    return(

      <button className='' onClick={onClick}>

        {label}

      </button>

    )

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

    
    <div></div>

  );
}

export default App;

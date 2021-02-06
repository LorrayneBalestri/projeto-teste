import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
              <div id="app">
              <Primeiro></Primeiro>
              <ComParametro 
                   titulo="Situaçao do Aluno"
                   aluno="Pedro Silva" nota="9.0" />            
    </div>,
    document.getElementById('root')
)


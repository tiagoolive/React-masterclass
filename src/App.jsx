import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro.jsx'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default () => (
    <div className="App">
        <Card titulo="#06 - Condicional v2">
            <CondicionalComIf numero={14}></CondicionalComIf>
        </Card>
        <Card titulo="#05 - Condicional v1">
            <Condicional numero={1}></Condicional>
        </Card>
        <Card titulo="#04 - Componente com Repeticao">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Fábio</li>
                    <li>Julia</li>
                    <li>Carla</li>
                    <li>Eduardo</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente com parametro">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtitulo" />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>


        {/* <Primeiro />
        <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtitulo" /> */}
        {/* <ComFilhos>
            <ul>
            <li>Fábio</li>
            <li>Julia</li>
            <li>Carla</li>
            <li>Eduardo</li>
            </ul>
        </ComFilhos> */}
    </div>
);
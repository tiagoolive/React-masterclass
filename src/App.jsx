import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro.jsx'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#11 - Mega-sena" color="#ffe9dc">
                <Mega qtdeNumero={8}></Mega>
            </Card>
            <Card titulo="#10 - Contador" color="#83d0c9">
                <Contador valor={100} passo={10}></Contador>
            </Card>
            <Card titulo="#09 - Input" color="#65c3ba">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Comunicação indireta" color="#54b2a9">
                <Super></Super>
            </Card>
            <Card titulo="#07 - Comunicação direta" color="#35a79c">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#06 - Condicional v2" color="#009688">
                <CondicionalComIf numero={14}></CondicionalComIf>
            </Card>
            <Card titulo="#05 - Condicional v1" color="#651e3e">
                <Condicional numero={1}></Condicional>
            </Card>
            <Card titulo="#04 - Componente com Repeticao" color="#451e3e">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#03 - Componente com Filhos" color="#251e3e">
                <ComFilhos>
                    <ul>
                        <li>Fábio</li>
                        <li>Julia</li>
                        <li>Carla</li>
                        <li>Eduardo</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente com parametro" color="#051e3e">
                <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtitulo" />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#851e3e">
                <Primeiro />
            </Card>
        </div>
    </div>
);
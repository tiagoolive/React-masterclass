import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <Filho {...props}>André</Filho>
        <Filho sobrenome={props.sobrenome}>Paulo</Filho>
        <Filho sobrenome="Silva">Amanda</Filho>
    </div>
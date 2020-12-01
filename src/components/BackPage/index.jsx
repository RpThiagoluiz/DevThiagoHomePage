import React from 'react'
import { useHistory } from "react-router-dom";

import { Container } from './styles'
import BackIcon from '../../assets/img/freeIcons/seta.svg'

const BackPage = () => {
    let history = useHistory()
    return (
        <Container>
         
         <img src={BackIcon} alt=""onClick={() => history.goBack()}/>
            
        </Container>
    )
}

export default BackPage
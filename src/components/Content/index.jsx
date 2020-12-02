import React from 'react'
import Card from '../ProjectCards'

import { Container } from './styles'

//img Background
import testeBck from '../../assets/img/imgCards/teste.svg'




const Content = () => {

   return (
      <Container>
         <Card
            backgroundImg={testeBck}
            title="Teste useState"
            description="A pagina interativa"
            link="/project/interactive"
            icon="react"
         />
      
      </Container>
   )
}

export default Content
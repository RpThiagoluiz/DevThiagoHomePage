import React from 'react'
import Card from '../ProjectCards'

import { Container } from './styles'

//img Background
import testeBck from '../../assets/img/imgCards/teste.svg'
import bin from '../../assets/img/imgCards/binario.svg'




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

         <Card
            backgroundImg={bin}
            title="Lista de Tarefas"
            description="form basico "
            link="/project/todolist"
            icon="react"
         />
        
       

      </Container>
   )
}

export default Content
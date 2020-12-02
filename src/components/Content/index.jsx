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
            title="Formulario"
            description="form basico "
            link="/project/formOne"
            icon="react"
         />
         <Card
            backgroundImg={bin}
            title="Formulario"
            description="form basico "
            link="/project/formOne"
            icon="typeScript"
         />
         <Card
            backgroundImg={bin}
            title="Formulario"
            description="form basico "
            link="/project/formOne"
            icon="typeScript"
         />
         <Card
            backgroundImg={bin}
            title="Formulario"
            description="form basico "
            link="/project/formOne"
            icon="typeScript"
         />

      </Container>
   )
}

export default Content
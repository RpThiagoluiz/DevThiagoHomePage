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
            title="React"
            description="As paginas foram criadas com React."
            link="/project/interativa"
            icon="react"
         />
         <Card
            backgroundImg
            title="CSS3"
            description="As paginas foram criadas com React."
            link="https://github.com/RpThiagoluiz"
            icon="css"
            
         />
         <Card
            backgroundImg
            title="TypeScript"
            description="As paginas foram criadas com React."
            link="https://github.com/RpThiagoluiz"
            icon="typeScript"
            
         />
      

      </Container>
   )
}

export default Content
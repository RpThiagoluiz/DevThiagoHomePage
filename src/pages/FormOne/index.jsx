import React from 'react'
import BackPage from '../../components/BackPage'
import TopBar from '../../components/TopBar'

import { 
   Container,
   TopSide

} from './styles'


export default function FormOne()  {


   return(
 
      <Container>
         <TopSide>
            <TopBar LeftTitle={<h3>Formulario Simples</h3>}/>
         </TopSide>

         <BackPage />

      </Container>
   )
}
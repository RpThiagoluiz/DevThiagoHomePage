import React from 'react'

import TopBar from '../../components/TopBar'
import GitHubLink from '../../components/GitHubLink'
import BackPage from '../../components/BackPage'
import ProjectInterative from '../../components/ProjectInteractive'
import DescriptionBTn from '../../components/DescriptionBTN'

import {
   Container,
   TopSide

} from './styles'



export default function Interactive() {
   

   return (

      <Container>
         <TopSide>
            <TopBar LeftTitle={<h3>Conteudo Interativo</h3>} />
         </TopSide>

         <GitHubLink link="https://github.com/RpThiagoluiz/DevThiagoHomePage/tree/main/src/pages/Interactive" />
         <BackPage />

         <DescriptionBTn
            title="Hello"
            description="deucerto"
         
         />


         <ProjectInterative

         />
      </Container>

   )
}
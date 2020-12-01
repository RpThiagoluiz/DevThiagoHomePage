import React from 'react'

import TopBar from '../../components/TopBar'
import GitHubLink from '../../components/GitHubLink'
import BackPage from '../../components/BackPage'

import {
   Container,
   TopSide

} from './styles'
import ProjectInterative from '../../components/ProjectInteractive'

export default function Interactive() {
   return (
  
      <Container>
         <TopSide>
            <TopBar LeftTitle={<h3>Conteudo Interativo</h3>}/>
         </TopSide>

         <GitHubLink link="https://github.com/RpThiagoluiz"/>
         <BackPage />
         <ProjectInterative
         
         />
      </Container>
      
   )
}
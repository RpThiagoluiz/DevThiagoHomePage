import React from 'react'

import logoGithub from '../../assets/img/imgLandingPage/github.png'

import { Container } from './styles'

const GitHubLink = ({
   link
}) => {
   return(
      <Container>
         <a href={link} target="blank"><img src={logoGithub} alt="GitHub RpThiagoLuiz"/></a>
      </Container>
   )
}
export default GitHubLink
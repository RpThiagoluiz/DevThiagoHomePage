import React from 'react'
import { Container } from './styles'
import BurgerBtn from '../../components/BurgerBtn'

import logoGithub from '../../assets/img/imgLandingPage/github.svg'
import logoTwitter from '../../assets/img/imgLandingPage/twitter.svg'
import logoLinkedIn from '../../assets/img/imgLandingPage/linkedin.svg'

export default function LandingPage() {
   return (
      <Container>
         <BurgerBtn />

         <h1>Bem-Vindo (a)!</h1>
         <p>Me chamo Thiago, sou um web developer júnior, (HTML, CSS, JS). <br />
            Experiência com desenvolvimento utilizando React.js.<br />
            Possuo conhecimentos em Git, em styled components,SASS e typescript. <br />
            Expertise em React Hooks e outros populares workflows da biblioteca. <br />
            Esse site foi criado para ser utilizado de portifolio, nele você encontrará diversos projetos.<br />
            Atualmente o site esta sendo atualizado para ReactJS.
         </p>

         
        <div className="icons">
           <a href="https://github.com/RpThiagoluiz" target="blank"><img src={logoGithub} alt="GitHub RpThiagoLuiz"/></a>
           <a href="https://twitter.com/RpThiagoluiz" target="blank" ><img src={logoTwitter} alt="Twitter RpThiagoLuiz"/></a>
           <a href="https://www.linkedin.com/in/thiago-luiz-0984191a7/" target="blank" ><img src={logoLinkedIn} alt="LinkedIn ThiagoLuiz"/></a>
        </div>
         
      </Container>
   )
}
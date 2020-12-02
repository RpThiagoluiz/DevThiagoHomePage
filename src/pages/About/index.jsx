import React from 'react'


import TopBar from '../../components/TopBar'

import logoGithub from '../../assets/img/imgLandingPage/github.svg'
import logoTwitter from '../../assets/img/imgLandingPage/twitter.svg'
import logoLinkedIn from '../../assets/img/imgLandingPage/linkedin.svg'

import {
   TopSide,
   Container,
   Content

} from './styles'

export default function About() {


   return (
      <Container>
         <TopSide>
            <TopBar LeftTitle={<h3>It`s ME!</h3>} />
         </TopSide>

         <Content>
            <h2>Ola, ... um pouco sobre minha jornada </h2>
            <p>
               Comecei a estudar programacao em 2019, html, css e JS. Ate então não possuia nenhum conhecimento em programação, trabalhava no ramo de vendas de roupas de varejo.
               Como ja pretendia mudar de ramo, os imprevistos da vida me ajudaram nisso, e neste caminho eu encontrei o REACT, apesar de ser um pouco mais complicado, com erros enormes e assustadores,
               me apaixonei. Desde então venho estudando a Biblioteca e seus frameworks. Comecei comprando um curso online da Alura, depois passei para diversos cursos realizados pela uDemy e  hoje
               busco colocar em pratica algum habilidades, conhecimentos, e passar por  problemas que desenvolvedores passam quando vão criar uma aplicação.
               Algum desses problemas são ate simples de resolver, outros ja demoram algum tempo e necessitam de um ajudando BRABO, google.
               O intuito desse site é  colocar varios projetos nele para consolidar meu conhecimento e utiliza-lo como portifolio.
            </p>

            <div className="icons">
            
               <a href="https://github.com/RpThiagoluiz" target="blank"><img src={logoGithub} alt="GitHub RpThiagoLuiz"/></a>
               <a href="https://twitter.com/RpThiagoluiz" target="blank" ><img src={logoTwitter} alt="Twitter RpThiagoLuiz" /></a>
               <a href="https://www.linkedin.com/in/thiago-luiz-0984191a7/" target="blank" ><img src={logoLinkedIn} alt="LinkedIn ThiagoLuiz" /></a>
            </div>

         </Content>

      </Container>
   )
}
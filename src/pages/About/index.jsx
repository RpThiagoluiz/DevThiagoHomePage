import React from "react";

import TopBar from "../../components/TopBar";
import BackPage from "../../components/BackPage";

import logoGithub from "../../assets/img/imgLandingPage/github.svg";
import logoTwitter from "../../assets/img/imgLandingPage/twitter.svg";
import logoLinkedIn from "../../assets/img/imgLandingPage/linkedin.svg";

import { Container, Content } from "./styles";

const About = () => {
  return (
    <Container>
      <TopBar LeftTitle={<h2>WebDev Thiago</h2>} />

      <BackPage />

      <Content>
        <h2>Ola, ... um pouco sobre minha jornada </h2>
        <p>
          Comecei a estudar programação em 2019, html, css e JS. Ate então não
          possuía nenhum conhecimento em programação, trabalhava no ramo de
          vendas de roupas de varejo. Como já pretendia mudar de ramo, os
          imprevistos da vida me ajudaram nisso, e neste caminho eu encontrei o
          REACT, apesar de ser um pouco mais complicado, com erros enormes e
          assustadores, me apaixonei. Desde então venho estudando a Biblioteca e
          seus frameworks. Comecei comprando um curso online da Alura, depois
          passei para diversos cursos realizados pela uDemy, NLWs promovidas
          pela RocketSeat e hoje busco colocar em pratica algum habilidades,
          conhecimentos, e passar por problemas que desenvolvedores passam
          quando vão criar uma aplicação. Algum desses problemas são ate simples
          de resolver, outros demoram algumas horas no google. Criei este site o
          intuito de colocar vários projectos nele para consolidar meu
          conhecimento e utiliza-lo como portfólio.
        </p>
      </Content>
      <div className="icons">
        <a href="https://github.com/RpThiagoluiz" target="blank">
          <img src={logoGithub} alt="GitHub RpThiagoLuiz" />
        </a>
        <a href="https://twitter.com/RpThiagoluiz" target="blank">
          <img src={logoTwitter} alt="Twitter RpThiagoLuiz" />
        </a>
        <a
          href="https://www.linkedin.com/in/thiago-luiz-0984191a7/"
          target="blank"
        >
          <img src={logoLinkedIn} alt="LinkedIn ThiagoLuiz" />
        </a>
      </div>
    </Container>
  );
};

export default About;

import React from "react";

import { Container } from "./styles";
import BurgerBtn from "../../components/BurgerBtn";

import logoGithub from "../../assets/img/imgLandingPage/github.svg";
import logoTwitter from "../../assets/img/imgLandingPage/twitter.svg";
import logoLinkedIn from "../../assets/img/imgLandingPage/linkedin.svg";

const LandingPage = () => {
  return (
    <Container>
      <BurgerBtn />

      <h1>Bem-Vindo (a)!</h1>
      <p>
        Me chamo Thiago, sou um web developer júnior, (HTML5, CSS3, JS). <br />
        Experiência com desenvolvimento utilizando ReactJS.
        <br />
        Possuo conhecimentos em Git, em Styled components e typescript. <br />
        Expertise em React Hooks e outros populares workflows da biblioteca.{" "}
        <br />
        Esse site foi criado para ser utilizado de portifolio, nele você
        encontrará diversos projetos.
        <br />
        Venho atualizando site para aplicar meus estudos. <br />
        Qualquer critica construtiva é sempre bem vinda.
      </p>

      <div className="icons">
        <a
          href="https://github.com/RpThiagoluiz"
          target="_blank"
          rel="noopener noreferrer"
          target="blank"
        >
          <img src={logoGithub} alt="GitHub RpThiagoLuiz" />
        </a>
        <a
          href="https://twitter.com/RpThiagoluiz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoTwitter} alt="Twitter RpThiagoLuiz" />
        </a>
        <a
          href="https://www.linkedin.com/in/thiago-luiz-0984191a7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoLinkedIn} alt="LinkedIn ThiagoLuiz" />
        </a>
      </div>
    </Container>
  );
};
export default LandingPage;

import React from "react";

//Components
import BackPage from "../../components/BackPage";
import DescriptionBTn from "../../components/DescriptionBTN";
import GitHubLink from "../../components/GitHubLink";
import ToDoApp from "../../components/ToDoApp";
import TopBar from "../../components/TopBar";

import { Container, TopSide, Content } from "./styles";

const FormOne = () => {
  return (
    <Container>
      <TopSide>
        <TopBar LeftTitle={<h3>Lista de Tarefas - To Do List </h3>} />
      </TopSide>

      <BackPage />
      <GitHubLink link="https://github.com/RpThiagoluiz/DevThiagoHomePage/tree/main/src/pages/ToDoList" />
      <DescriptionBTn
        title="Lista de Tarefas"
        description="Você acrescenta tarefas, deleta  e exclui PERMANENTEMENTE itens da sua lista. 
            A list de atividades é salva no localStorage do browser.
            Há um botão que limpa o seu localStorage - Limpar Dados.
            "
      />

      <Content>
        <ToDoApp />
      </Content>
    </Container>
  );
};
export default FormOne;

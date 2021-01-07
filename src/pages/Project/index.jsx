import React from "react";
import Card from "../../components/ProjectCards";

import TopBar from "../../components/TopBar";

import { Container, Content } from "./styles";

const Project = () => {
  return (
    <Container>
      <TopBar LeftTitle={<h2>WebDev Thiago</h2>} />
      <Content>
        <Card
          title="Cursos"
          description={`Projetos realizados durante cursos de programação e/ou bootcamps`}
        />
        <Card
          title="Solo"
          description="Projetos realizados por conta propria."
        />
      </Content>
    </Container>
  );
};

export default Project;

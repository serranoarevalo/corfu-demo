import React from "react";
import styled from "styled-components";
import { Button } from "corfu";

const StyledButton = styled(Button)`
  margin-bottom: 30px;
  display: block;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 32px;
`;

export default () => (
  <Container>
    <Title>Buttons</Title>
    <StyledButton content="This is round" edges="rounded" />
    <StyledButton
      content="A little round"
      edges="round-sharp"
      primaryColor="success"
    />
    <StyledButton content="Not round" primaryColor="alert" />
    <StyledButton content="This is danger" primaryColor="error" />
    <StyledButton content="This is inverted" primaryColor="success" inverted />
    <StyledButton content="And so is this" primaryColor="alert" inverted />
    <StyledButton content="And so is this" inverted />
  </Container>
);

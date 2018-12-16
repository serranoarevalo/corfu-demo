import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SLink = styled(Link)`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 50px;
`;

export default () => (
  <Container>
    <Title>Corfu</Title>
    <SLink to="/buttons">Buttons</SLink>
    <SLink to="/cards">Cards</SLink>
    <SLink to="/dropdowns">Dropdowns</SLink>
    <SLink to="/forms">Forms</SLink>
    <SLink to="/modals">Modals</SLink>
    <SLink to="/notifications">Notifications</SLink>
    <SLink to="/tags">Tags</SLink>
  </Container>
);

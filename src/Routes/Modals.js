import React from "react";
import styled from "styled-components";
import { Modal } from "corfu";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 50px;
  }
`;

const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 32px;
`;

export default () => (
  <Container>
    <Title>Modals</Title>
    <Modal
      title={"Notification title 😬"}
      theme={"primary"}
      supportText={"So this is what shows up as support"}
      cancelText={"Cancel"}
      confirmText={"Next Step"}
    />
    <Modal
      title={"Something is wrong"}
      theme={"error"}
      cancelText={"Abort"}
      confirmText={"Try again"}
    />
    <Modal
      title={"Something might be wrong"}
      supportText={"And here we tell you how to fix it"}
      theme={"alert"}
      cancelText={"I'm scared"}
      confirmText={"Fix it"}
    />
    <Modal
      title={"Everything is ok!"}
      supportText={"Congrats!"}
      theme={"success"}
      cancelText={"Cancel"}
      confirmText={"Continue"}
    />
  </Container>
);

import React from "react";
import styled from "styled-components";
import { Tag } from "corfu";

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

const Flex = styled.div`
  display: flex;
  > * {
    margin-right: 20px;
  }
`;

export default () => (
  <Container>
    <Title>Tags</Title>
    <Flex>
      <Tag text={"Tag"} edges={"sharp"} bgColor={"primary"} />
      <Tag text={"Another one"} edges={"rounded"} bgColor={"alert"} />
      <Tag text={"This one"} edges={"round-sharp"} bgColor={"success"} />
      <Tag text={"And this one"} edges={"rounded"} bgColor={"error"} />
    </Flex>
  </Container>
);

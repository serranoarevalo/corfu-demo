import React from "react";
import styled from "styled-components";
import { Input, Checkbox, Radio, Switch } from "corfu";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 32px;
`;

const Section = styled.div`
  margin-bottom: 50px;
  > * {
    margin-bottom: 50px;
  }
`;

export default () => (
  <Container>
    <Section>
      <Title>Inputs</Title>
      <Input
        value="Hello"
        label="This is the label"
        name="input"
        id="input"
        placeholder="Love this UI Kit"
      />
      <Input
        value=""
        label="This is an textarea"
        name="input"
        id="input"
        placeholder="Love Corfu"
        multiline
      />
      <Input
        value="Hello"
        label="This is the label"
        name="input"
        id="input"
        hasError
        errorMsg="Something is wrong"
        placeholder="Love this UI Kit"
      />
      <Input
        value="Hello"
        label="This is the label"
        name="input"
        id="input"
        hasSuccess
        successMsg="Something is OK!"
        placeholder="Love this UI Kit"
      />
      <Input
        value="Hello"
        label="This is the label"
        name="input"
        id="input"
        hasWarning
        warningMsg="Something has a warning!"
        placeholder="Love this UI Kit"
      />
    </Section>
    <Section>
      <Title>Checkboxes, Radios, Switch</Title>
      <Checkbox
        label="Unchecked Label"
        name="input"
        id="input"
        checked={false}
      />
      <Checkbox label="Checked Label" name="input" id="input" checked={true} />
      <Checkbox
        label="Disabled Label"
        name="input"
        id="input"
        checked={false}
        disabled
      />
      <Radio label="Unchecked Label" name="input" id="input" disabled />
      <Radio label="Checked Label" name="input" id="input" />
      <Radio label="Disabled Label" name="input" id="input" checked />
      <Switch />
      <Switch on={false} />
    </Section>
  </Container>
);

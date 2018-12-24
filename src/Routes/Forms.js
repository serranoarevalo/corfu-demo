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

const StyledCheckbox = styled(Checkbox)`
  & > div {
    top: 15%;
  }
`;

const StyledRadio = styled(Radio)`
  & > div {
    top: 15%;
  }
`;

export default () => (
  <Container>
    <Section>
      <Title>Inputs</Title>
      <Input
        value=""
        label="This is the label"
        name="input"
        id="input"
        onChange={() => null}
        placeholder="Love this UI Kit"
      />
      <Input
        value=""
        label="This is an textarea"
        name="input"
        id="input"
        placeholder="Love Corfu"
        multiline
        onChange={() => null}
      />
      <Input
        value="Hello"
        label="This is the label"
        name="input"
        id="input"
        hasError
        errorMsg="Something is wrong"
        placeholder="Love this UI Kit"
        onChange={() => null}
      />
      <Input
        value="Hello"
        label="This is the label"
        name="input"
        id="input"
        hasSuccess
        successMsg="Something is OK!"
        placeholder="Love this UI Kit"
        onChange={() => null}
      />
      <Input
        value="Hello"
        label="This is the label"
        name="input"
        id="input"
        hasWarning
        warningMsg="Something has a warning!"
        placeholder="Love this UI Kit"
        onChange={() => null}
      />
    </Section>
    <Section>
      <Title>Checkboxes, Radios, Switch</Title>
      <StyledCheckbox
        label="Unchecked Label"
        name="input"
        id="input"
        checked={false}
        onChange={() => null}
      />
      <StyledCheckbox
        label="Checked Label"
        name="input"
        id="input"
        checked={true}
        onChange={() => null}
      />
      <StyledCheckbox
        label="Disabled Label"
        name="input"
        id="input"
        checked={false}
        disabled
        onChange={null}
      />
      <StyledRadio
        label="Unchecked Label"
        name="input"
        id="input"
        disabled
        checked={false}
        onChange={null}
      />
      <StyledRadio
        label="Checked Label"
        name="input"
        id="input"
        onChange={null}
        checked={false}
      />
      <StyledRadio
        label="Disabled Label"
        name="input"
        id="input"
        checked
        onChange={null}
      />
      <span style={{ display: "flex" }}>
        <Switch on={false} />
        <span style={{ width: 20 }} />
        <Switch /> {"    "}
      </span>
    </Section>
  </Container>
);

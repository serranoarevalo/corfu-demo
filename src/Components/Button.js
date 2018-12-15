import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Button = ({ text, element = "div" }) => <Container>{text}</Container>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  element: PropTypes.oneOf(["div", "button", "a"])
};

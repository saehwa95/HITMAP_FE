import React from "react";
import Router from "./shared/Router";
import "./App.css";
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <Router />
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 375px;
  height: 100vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #808080;
`;

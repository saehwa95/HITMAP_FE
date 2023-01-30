import React from "react";
import Router from "./shared/Router";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { ReactComponent as BackGround } from "./asset/image/BackGround.svg";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <BackGround className="back-ground" />
        <Container>
          <Router />
        </Container>
      </Wrapper>

      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;
const Wrapper = styled.div`
  .back-ground {
    width: 100%;
    height: 99.6vh;
  }
`;

const Container = styled.div`
  width: 375px;
  height: 100vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
`;

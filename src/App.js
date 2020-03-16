import React, { Component, Fragment } from "react";
// import "./App.css";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Container>
          <Button>Hello</Button>
          <Button danger>World</Button>
          <Anchor as="a" href="https://google.com">
            Go to Google
          </Anchor>
        </Container>
      </React.Fragment>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
`;

const Anchor = styled(Button)`
  text-decoration: none;
`;

// const Button = ({ danger }) => (
//   <button
//     className={danger ? "button button--success" : "button button--danger"}
//   >
//     Hello
//   </button>
// );

export default App;

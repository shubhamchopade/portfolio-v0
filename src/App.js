import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { About, Landing, Nav, Projects, Experience } from "./components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
    body {
      background-color: ${(props) => props.theme.bg.main}
    } 
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/experience">
            <Experience />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

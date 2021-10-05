import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { About, Landing, Nav, Projects, Experience } from "./components";
import { Portfolio } from "./components/project-pages/Portfolio";
import { TailwindGradient } from "./components/project-pages/TailwindGradient";
import { TechSapien } from "./components/project-pages/TechSapien";
import { TheBookPundits } from "./components/project-pages/TheBookPundits";
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
          <Route exact path="/thebookpundits">
            <TheBookPundits />
          </Route>
          <Route exact path="/techsapien">
            <TechSapien />
          </Route>
          <Route exact path="/tailwindgradient">
            <TailwindGradient />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Portfolio } from "./components/projects/portfolio/Portfolio";
import { TailwindGradient } from "./components/projects/tailwind-gradient/TailwindGradient";
import { TechSapien } from "./components/projects/techsapien/TechSapien";
import { TheBookPundits } from "./components/projects/the-book-pundits/TheBookPundits";
import { Ajna } from "./components/projects/ajna/Ajna";
import theme from "./theme";
import ReactGA from "react-ga4";
import RouteChangeTracker from "./components/common/RouterGoogleAnalytics";
import { Nav } from "./components/header/Nav";
import { Landing } from "./components/Landing";


const GlobalStyles = createGlobalStyle`
    body {
      background-color: ${(props) => props.theme.bg.main}
    } 
`;
const TRACKING_ID = "G-1MJPBQSZWF"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/app" });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Landing />
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
          <Route exact path="/ajna">
            <Ajna />
          </Route>
        </Switch>
        <RouteChangeTracker />
      </Router>
    </ThemeProvider>
  );
}

export default App;

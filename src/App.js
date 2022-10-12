import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Portfolio } from "./components/projects/portfolio/Portfolio";
import { TailwindGradient } from "./components/projects/tailwind-gradient/TailwindGradient";
import { TechSapien } from "./components/projects/techsapien/TechSapien";
import { TheBookPundits } from "./components/projects/the-book-pundits/TheBookPundits";
import { Ajna } from "./components/projects/ajna/Ajna";
import theme from "./theme";
import ReactGA from "react-ga4";
import { Nav } from "./components/header/Nav";
import { Landing } from "./components/Landing";
import ScrollToTop from "./components/common/ScrollToTop";


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
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/thebookpundits" element={<TheBookPundits />} />
          <Route path="/techsapien" element={<TechSapien />} />
          <Route path="/tailwindgradient" element={<TailwindGradient />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/ajna" element={<Ajna />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

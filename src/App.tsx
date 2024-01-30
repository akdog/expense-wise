import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";

//Import Pages
import MobileApp from "./pages/MobileApp";
import DesktopApp from "./pages/DesktopApp";

//Import Theme
import { theme } from "./theme";

//type for GlobalStyle
type GlobalStyleProps = {
  isMobile: boolean;
};

function App() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle isMobile={isMobile} />
        {isMobile ? <MobileApp /> : <DesktopApp />}
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`


  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    font-family: "Montserrat", sans-serif;
    background: ${(props) => (props.isMobile ? "#EFEFF1" : "#15152D")};    
    color: ${(props) => (props.isMobile ? "" : "white")};

  }
  h1{
    color: ${(props) => (props.isMobile ? "" : "white")};
  }
  a{
    text-decoration:none;
    color:${(props) => props.theme.colors.primary}
  }

  #navbar-link{
    color:white;
  }
 
 
`;

export default App;

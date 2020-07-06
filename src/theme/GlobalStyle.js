import { createGlobalStyle } from "styled-components";
import { theme } from "./mainTheme";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
    
    *,*::before,*::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    html {
        font-size: 62.5%;
    }

    body {
        width: 100%;
        min-height: 100vh;
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
        color: ${theme.text};
        background-color: ${theme.primary};
    }
`;

export default GlobalStyle;

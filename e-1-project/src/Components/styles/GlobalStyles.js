import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle 
    `

    :root {
        --pink: #FF66C4;
        --black: #333333;
        --white: #f6f6f6;
        --grey: #e8e8e8;

    }

    html{
        scroll-behavior: smooth;
      }
    
        body {
        margin: 0;
        padding: 0;
        background: #f6f6f6;
        font-family: 'Montserrat', sans-serif;
        color: white;
        -webkit-tap-highlight-color: transparent;
        overflow-x: hidden
        }
    
        a {
        text-decoration: none;
        }
    
        a:visited {
        color: white;
        }
    
        li {
        list-style: none;
        }

        `
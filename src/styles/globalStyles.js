import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0%;
        padding: 0%;
        box-sizing: border-box;
        color: #222;
    }

    body{
        background-image: linear-gradient(to right, #6F56CB, #C750C1);
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
    }
`;

import { createGlobalStyle } from "styled-components";
import "font-awesome/css/font-awesome.css";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: 0;
    }
    body, html {
        background: #1b1b1b;
        font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        height: 100%;
        color: white;
    }

    .btn {
        background-image: linear-gradient(48deg, #fd5a74, #f47e42);
        color: #fff;
        font-size: 16px;
        height: 56px;
        border: 0;
        border-radius: 5px;
        width: 100%;
        margin-bottom: 15px;
        cursor: pointer;
    }
`;

export default GlobalStyle;

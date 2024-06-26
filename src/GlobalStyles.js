import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
html{
    font-size: 62.5%;
}
body,
form,
button,
input {
    font-family: "Space Mono", monospace;
    font-weight: 700;
}
body{
    background: #C5E4E7;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

`;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html, body, #root{
    height: 100%;
    
}

*, button, input{
    border: 0;
    outline: 0;
    font-family: "Roboto", sans-serif;
}
button{
    cursor: pointer;
}
`;

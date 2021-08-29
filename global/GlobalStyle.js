import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body, html{
    font-family: 'Roboto Slab', serif;
    margin: 0;
    padding: 0;
}


h1{
    font-size: 74px;
    font-weight: 400;
    position: relative;
    width: fit-content;

    ::after{
        z-index: -20;
        position: absolute;
        right: 100px;
        left:-10px;
       
        bottom: 10px;
        content: " ";
        height: 50%;
        width: 120%;
        background: #81b29a;
    }
}

.TextContainer{
h3{
    font-size: 30px;
    font-weight: 300;
}

p, li{
    font-size: 21px;
    font-weight: 300;
}


}





`;

export default GlobalStyle;

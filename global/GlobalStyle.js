import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body, html{

    margin: 0;
    padding: 0;
}
*{
    font-family: 'Roboto Slab', serif;
    font-weight: 300;
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
       transform: rotate(-2deg);
        bottom: 10px;
        content: " ";
        height: 50%;
        width: 120%;
        background: ${({ theme }) => theme.colors.primary};;
    }
}





.text-container{
h3{
    font-size: 30px;
    font-weight: 400;
}

p, li{
    font-size: 21px;
    line-height: 30px;
    font-weight: 300;
}


}

.button{
    background: ${({ theme }) => theme.colors.primary};
    color: red;
}




`;

export default GlobalStyle;

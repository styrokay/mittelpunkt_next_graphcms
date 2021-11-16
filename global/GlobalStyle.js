import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import media from "styled-media-query";
const GlobalStyle = createGlobalStyle`
body, html, #_next{
    white-space: break-spaces;
    margin: 0;
    padding: 0;
}
*{

    font-family: 'Roboto Slab', serif;
    font-weight: 300;
    box-sizing: border-box;
}


table{

tbody{



    td:last-child{
font-weight: 900;
width: 20%;
text-align: right;


        ${media.lessThan("medium")`
        width: 50%;
        `}
    }

}

}




h1{
    font-size: 45px;
    font-weight: 400;
    position: relative;
    width: fit-content;
    


    ${media.lessThan("medium")`
    font-size: 10vw;
    `}
 
    ::before{
        z-index: -20;
        position: absolute;
        right: 0;
        left: 0;
       transform: rotate(-2deg);
        bottom: 10px;
        content: " ";
        height: 50%;
        width: 100%;
        background: ${({ theme }) => theme.colors.primary};;
/*         z-index: -20;
        position: absolute;
        right: 100px;
        left:-10px;
       transform: rotate(-2deg);
        bottom: 10px;
        content: " ";
        height: 50%;
        width: 120%;
        background: ${({ theme }) => theme.colors.primary};; */
    }  
}


h3{
    font-size: 2rem;
    margin: 0;

}

.text-container{
h3{
    font-size: 30px;
    font-weight: 400;
    margin-top: 50px;
    i{
        font-weight: 400;
    }
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


a{
    color: ${({ theme }) => theme.colors.primary};;
}

b{
    font-weight: 500;
}

.link{
display: inline-block;

    background: ${({ theme }) => theme.colors.primary};
*{
    color: red;
}
}

u{
    text-decoration-color: ${({ theme }) => theme.colors.primary};
}

::marker{
    color: 

}
::selection {
  background: ${({ theme }) => theme.colors.primary};
}

`;

export default GlobalStyle;

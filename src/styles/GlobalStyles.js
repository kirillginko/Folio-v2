import { createGlobalStyle } from "styled-components"
import { Fonts } from "./fonts"

const GlobalStyles = createGlobalStyle`
    ${Fonts};

    :root{
        --black: #0f0e0e;
        --burlywood: #f6c9a0;
        --grey: rgb(151, 151, 151);
    }

*   {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body {
    margin: 0;
    padding: 0;
    background-color: var(--grey);
    min-height: 100vh;
    min-height: -webkit-fill-available;
    box-sizing: border-box;
    font-family: "Questrial", sans-serif;
}
h1, h2, h3, h4, h5, p, a{
    color: var(--black);
    }

h1, h2, h3, h4, a{
        font-family: "Questrial", sans-serif;
    }
    
li  {
    list-style: none;
    }

img {
    width: 100%;
    display: block;
    }

html    {
    overflow: hidden;
    min-height: -webkit-fill-available;
    }
canvas {
    width: 100vw;
    height: 100vh;
    display: block;
    z-index: -1;
}
a:link {
    text-decoration: none;
}
.main{
     display: inline-block;
}
.noise {
     position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 1;
}
.loader__wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;




`

export { GlobalStyles }

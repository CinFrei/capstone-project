import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }

  :root {
    --accent-color: #ff9a00;
    --dark-blue: #4b4c64;
    --dark-rose: #e8c6b6;
    --light-blue: #989dbd;
    --light-rose: #f4e2df;
    --primary-anthrazit: #4b4b4b;
    --primary-background-gradient: linear-gradient(0, #ffffff 0%, #f2f2f2 100%);
    --primary-grey: #f2f2f2;
    --primary-white:  #ffffff;
    --secondary-background-gradient: linear-gradient(0, rgba(242,242,242,1) 0%, rgba(255,255,255,1) 91%, rgba(255,255,255,0) 100%);
  }

  body {
    color: var(--primary-anthrazit);
    font-family: 'Marcellus', serif;
    font-size: 112.5%;
    margin: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Kaushan Script', cursive;
  }

  h1 {
    color: var(--dark-blue);
    margin: 0px;
    text-align: center;
  }

  input, textarea, button {
    font-size: 1em;
  }
`

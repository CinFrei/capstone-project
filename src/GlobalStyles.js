import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }

  :root {
    --light-rose: #f4e2df;
    --dark-rose: #e8c6b6;
    --light-blue: #989dbd;
    --dark-blue: #4b4c64;
    --accent-color: #ff9a00;

    --primary-background-gradient: linear-gradient(0, #ffffff 0%, #f2f2f2 100%);
    --secondary-background-gradient: linear-gradient(0, rgba(242,242,242,1) 0%, rgba(255,255,255,1) 91%, rgba(255,255,255,0) 100%);

    --primary-anthrazit: #4b4b4b;
    --primary-grey: #f2f2f2;
    --primary-white:  #ffffff;
  }

  body {
    font-size: 112.5%;
    font-family: 'Marcellus', serif;
    margin: 0;
    color: var(--primary-anthrazit);
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Kaushan Script', cursive;
  }

  h1 {
    margin: 0px;
    color: var(--dark-blue);
    text-align: center;
  }

  input, textarea, button {
    font-size: 1em;
  }
`

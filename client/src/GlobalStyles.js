import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }

  :root {
    --accent-color: #ffa812;
    --dark-blue-gradient: linear-gradient(0, rgba(64,64,83,1) 0%, rgba(64,64,83,1) 86%, rgba(64,64,83,0.5045923758586494) 95%, rgba(64,64,83,0) 100%);
    --dark-blue: #404053;
    --light-blue: #ced3f7;
    --primary-anthrazit: #4b4b4b;
  }

  body {
    background-color: var(--dark-blue);
    color: var(--light-blue);
    font-family: 'Marcellus', serif;
    font-size: 112.5%;
    margin: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Kaushan Script', cursive;
  }

  h1 {
    color: var(--light-blue);
    margin: 0;
    text-align: center;
  }

  input, textarea, button {
    font-size: 1em;
  }
`

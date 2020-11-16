import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');

  * {
    box-sizing: border-box;
  }
  body {
    font-size: 112.5%;
    font-family: 'Marcellus', serif;
    margin: 0;
    color: white;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Kaushan Script', cursive;
  }
  input, textarea, button {
    font-size: 1em;
  }
`
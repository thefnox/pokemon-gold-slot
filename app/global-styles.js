import { createGlobalStyle } from 'styled-components';
import font from './fonts/PKMN.ttf';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  
  @font-face {
    font-family: 'PokemonGB';
    src: url('./PKMN.ttf') format('truetype')
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'PokemonGB', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'PokemonGB', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #000;
    min-height: 100%;
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;

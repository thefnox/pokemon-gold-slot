import { createGlobalStyle, injectGlobal } from 'styled-components';
import PokemonGB from './fonts/Pokemon-GB.ttf';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

  @font-face {
    font-family: 'PokemonGB';
    src: url('app/fonts/Pokemon-GB.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalStyle;

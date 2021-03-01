import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --thinyBackground: ${props => props.theme.colors.thinyBackground};
  --background: ${props => props.theme.colors.background};
  --title: ${props => props.theme.colors.title};
  --sub-title: ${props => props.theme.colors.subTitle};
  --gray-line: ${props => props.theme.colors.grayLine};
  --yellow: ${props => props.theme.colors.yellow};
  --yellow-dark: ${props => props.theme.colors.yellowDark};
  
  --red: #E83F5B;
  --green: #4CD62B;
  --blue-twitter: #2AA9E0;
  --text-highlight: ${props => props.theme.colors.textHighlight};

  --invert-white: ${props => props.theme.colors.invertWhite};
  --invert-black: ${props => props.theme.colors.invertBlack};
  --overlay: ${props => props.theme.colors.overlay};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: var(--text-highlight);
}

@media(max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: var(--background);
  color:  var(--text);
}

body, input, textarea, button {
  font: 400 1rem "Inter", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
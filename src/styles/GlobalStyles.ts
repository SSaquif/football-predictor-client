// globalStyles.js
import { createGlobalStyle } from "styled-components";
// TODO: split into CSSVariables and CSSReset and GlobalStyles
const GlobalStyles = createGlobalStyle`
 /*
  CSS Variables
 */
  :root {
    /* Common Dimensions */
    --header-height: 60px;
    --footer-height: 60px;
    
    /* Background Colors */
    --bg-color-light-primary: #eeeeec;
    
    /* Box Shadows */
    --shadow-color: 60deg 2% 58%;
    --shadow-elevation-low:
      0px 0.8px 0.9px hsl(var(--shadow-color) / 0.52),
      0px 3.3px 3.7px -2.5px hsl(var(--shadow-color) / 0.52);
    --shadow-elevation-medium:
      0px 0.8px 0.9px hsl(var(--shadow-color) / 0.48),
      0px 4.2px 4.7px -1.2px hsl(var(--shadow-color) / 0.48),
      0.1px 16.3px 18.3px -2.5px hsl(var(--shadow-color) / 0.48);
    --shadow-elevation-high:
      0px 0.8px 0.9px hsl(var(--shadow-color) / 0.45),
      0px 6.3px 7.1px -0.5px hsl(var(--shadow-color) / 0.45),
      0.1px 13.2px 14.9px -1px hsl(var(--shadow-color) / 0.45),
      0.1px 25.5px 28.7px -1.5px hsl(var(--shadow-color) / 0.45),
      0.2px 47px 52.9px -2px hsl(var(--shadow-color) / 0.45),
      0.4px 81.5px 91.7px -2.5px hsl(var(--shadow-color) / 0.45);
  }
  /*
  1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /*
  2. Remove default margin
  */
  * {
    margin: 0;
  }
  /*
  3a. Allow percentage-based heights in the application
  3b. Added default bg color 
  */
  html, body, #root {
    height: 100%;    
    background-color: var(--bg-color-light-primary);
  }
  /*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
  */
  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /*
  6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
  7. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  /*
  8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /*
  9. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;    
  }
`;

export default GlobalStyles;

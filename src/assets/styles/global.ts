import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  /* reset css 적용 */
  ${reset}

  body {
    font-size: 16px;
    color: white;
    background-color: #111;

    @media screen and (max-width: 1024px) {
      font-size: 14px;
    }
  }

  :root {
    /* 폰트 적용 */
    font-family: 'Pretendard',-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-weight: 200;
    letter-spacing: -0.3px
  }

  * {
    padding: 0;
    border: 0;
    margin: 0;
  }
`

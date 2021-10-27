import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    :root {
        --dark-pink: #DD747D;
        --pale-pink: #E3CDCB;
        --dark-purple: #685D77;
        --white: #FFF;

        --font-size-display: 48px;
        --font-size-h1: 40px;
        --font-size-h2: 33px;
        --font-size-h3: 27px;
        --font-size-h4: 23px;
        --font-size-h5: 19px;
        --font-size-base: 16px;
        --font-size-sm: 13px;
        --font-size-micro: 11px;
    }

    @media (min-width: 768px) {
        :root {
            --font-size-display: 57px;
            --font-size-h1: 47px;
            --font-size-h2: 39px;
            --font-size-h3: 32px;
            --font-size-h4: 27px;
            --font-size-h5: 22px;
            --font-size-base: 19px;
            --font-size-sm: 16px;
            --font-size-micro: 13px;
        }
    }

    body {
        font-family: 'Roboto Mono', monospace;
    }

    p, a, h1 {
        margin:0; 
        padding:0;
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }


`

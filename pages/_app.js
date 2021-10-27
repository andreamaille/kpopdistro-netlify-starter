import { GlobalStyles } from 'styles/GlobalStyles.style'
import { AppWrapper } from '../state.js' // import based on where you put it

export function Application({ Component, pageProps }) {
  return (
    <AppWrapper>
      <GlobalStyles />
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default Application

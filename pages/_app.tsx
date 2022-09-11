import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from '../contexts/character/context'
import { Provider as ScaleProvider } from '../contexts/opacity/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <ScaleProvider>
        <Component {...pageProps} />
      </ScaleProvider>
    </Provider>
  )
}

export default MyApp

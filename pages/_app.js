import '../styles/globals.css'
import {MoralisProvider} from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return <MoralisProvider
  appId="8UqxhvTS0blFU4C1BvKLYglCmYA7ZVYPf9ORDMJN"
  serverUrl="https://pylv9wpqdww2.usemoralis.com:2053/server">
    <Component {...pageProps} />
  </MoralisProvider>
}

export default MyApp

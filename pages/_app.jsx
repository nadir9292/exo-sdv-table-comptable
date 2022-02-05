import { AddEntryProvider } from "../components/context/Add-entryContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <AddEntryProvider>
      <Component {...pageProps} />
    </AddEntryProvider>
  )
}

export default MyApp

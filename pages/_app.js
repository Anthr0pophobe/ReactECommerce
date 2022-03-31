import '../styles/globals.css'
import Navbar from '../src/layout/Navbar'
import { PanierProvider } from '../src/context/panierContext'
import { CommandeProvider } from '../src/context/commandeContext'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
  <PanierProvider>
    <CommandeProvider>
    <Component {...pageProps} />
    </CommandeProvider>
  </PanierProvider>
  </>
}

export default MyApp

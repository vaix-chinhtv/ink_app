import './App.css'
import { UseInkProvider } from 'useink'
import { AlephTestnet, PhalaTestnet} from 'useink/chains'
import ConnectWallet from './ConnectWallet'

function App() {

  return (
    <UseInkProvider
      config={{
        dappName: 'Plats_HKT',
        chains: [AlephTestnet, PhalaTestnet]
      }}
    >
      <ConnectWallet />
    </UseInkProvider>
  )
}

export default App

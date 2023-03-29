import '@rainbow-me/rainbowkit/styles.css';
import { configureChains, createClient, goerli, mainnet, WagmiConfig } from 'wagmi';
import './App.css';

import {
  getDefaultWallets,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit';

import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const { chains, provider } = configureChains(
  [mainnet],
  [
    publicProvider(),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <div>
            <ConnectButton />
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  )
}

export default App

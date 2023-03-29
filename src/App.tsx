import '@rainbow-me/rainbowkit/styles.css';
import { configureChains, createClient, goerli, mainnet, WagmiConfig } from 'wagmi';
import './App.css';

import {
  getDefaultWallets,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit';

import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, goerli],
  [
    publicProvider({}),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
})

function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <ConnectButton />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  )
}

export default App

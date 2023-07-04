import { Chain } from '@wagmi/core'

export const avalancheSpruce = {
  id: 424242,
  name: 'Spruce',
  network: 'avalanche-spruce',
  nativeCurrency: {
    decimals: 18,
    name: 'USDCf',
    symbol: 'USDCf'
  },
  rpcUrls: {
    public: { http: ['https://api-insti-1-testnet-us-west-2.avax-test.network/ext/bc/Ue98aQ3AoP1EqH8LwX496W6h1d8hUHNHG7AFGvRe4PSJVkQw1/rpc'] },
    default: { http: ['https://api-insti-1-testnet-us-west-2.avax-test.network/ext/bc/Ue98aQ3AoP1EqH8LwX496W6h1d8hUHNHG7AFGvRe4PSJVkQw1/rpc'] }
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' }
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934
    }
  }
} as const satisfies Chain

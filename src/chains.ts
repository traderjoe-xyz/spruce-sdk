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
    public: { http: ['https://subnets.avax.network/insti-1/testnet/rpc'] },
    default: { http: ['https://subnets.avax.network/insti-1/testnet/rpc'] }
  },
  blockExplorers: {
    etherscan: { name: 'Explorer', url: 'https://testnet.evergreenspruce.io' },
    default: { name: 'Explorer', url: 'https://testnet.evergreenspruce.io' }
  },
  contracts: {
    multicall3: {
      address: '0x5CB6904C4c4518e7a28c385a20064dD5FFc70850',
      blockCreated: 4541
    }
  },
  testnet: true
} as const satisfies Chain

import ethers from 'ethers';
import { rpcProvider } from './settings.js';

const wsProvider = new ethers.providers.WebSocketProvider(rpcProvider);
wsProvider.on('block', (blockNumber) => {
  console.log('New Block: ' + blockNumber);
});

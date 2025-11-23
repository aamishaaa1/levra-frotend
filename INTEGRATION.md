# Contract Integration Guide

This document explains how to integrate the Levra frontend with the smart contracts.

## Overview

The frontend connects to the Levra contracts located in `../contracts/`. The integration happens through the `lib/contractIntegration.ts` file.

## Contract Modules

### StreamController
Main orchestration layer for all stream operations.

```typescript
import { StreamController } from '../contracts/core/StreamController';

// Create a stream
const stream = StreamController.createStream({
  recipient: 'bitcoincash:qp...',
  amount: 100000000000n, // 1000 BCH in satoshis
  rate: 1902587n, // ~0.019 BCH per block
  timeUnit: TimeUnit.BLOCK
});

// Claim from stream
const result = StreamController.claim(stream, currentTime);
```

### RateEngine
Handles payment rate calculations.

```typescript
import { RateEngine } from '../contracts/core/RateEngine';

// Calculate claimable amount
const claimable = RateEngine.calculateClaimable(stream, currentTime);

// Check if expired
const expired = RateEngine.isExpired(stream, currentTime);
```

### ConditionEngine
Manages bitwise condition flags.

```typescript
import { ConditionEngine, ConditionFlag } from '../contracts/core/ConditionEngine';

// Check if stream can be claimed
const canClaim = ConditionEngine.canClaim(stream);

// Set conditions
const conditions = ConditionFlag.ACTIVE | ConditionFlag.SERVICE_ON;
```

### LoopRenewal
Implements the loop mechanism for continuous streaming.

```typescript
import { LoopRenewal } from '../contracts/core/LoopRenewal';

// Execute loop iteration
const result = LoopRenewal.executeLoop(stream, currentTime);
// Returns: { newUTXO, claimedAmount, shouldContinue }
```

### SafetyModule
Emergency override and dispute resolution.

```typescript
import { SafetyModule } from '../contracts/core/SafetyModule';

// Initiate dispute
const disputed = SafetyModule.initiateDispute(stream, 'Payment issue');

// Execute emergency override
const result = SafetyModule.executeOverride(stream, request, emergencyKey);
```

## Data Flow

### Creating a Stream

1. User fills out form in `CreateStreamForm.tsx`
2. Form data is validated
3. `LuminaContract.createStream()` is called
4. Contract creates stream UTXO on-chain
5. Stream ID is returned to frontend
6. UI updates to show new stream

### Claiming Funds

1. User clicks "Claim Now" button
2. `LuminaContract.claimStream()` is called
3. Contract calculates claimable amount
4. Transaction is created and signed
5. Funds are transferred to recipient
6. UI updates with new balance

### Pausing a Stream

1. User clicks "Pause" button
2. `LuminaContract.pauseStream()` is called
3. Contract sets PAUSED flag
4. Stream stops accumulating claimable funds
5. UI shows paused status

## Wallet Integration

The frontend needs to connect to a Bitcoin Cash wallet. Supported wallets:

- **CashConnect** - Browser extension
- **Paytaca** - Mobile wallet with WalletConnect
- **Electron Cash** - Desktop wallet

### Connection Flow

```typescript
import { useWallet } from '@/hooks/useWallet';

const { connected, address, balance, connect, disconnect } = useWallet();

// Connect wallet
await connect();

// Get address
console.log(address); // bitcoincash:qp...

// Get balance
console.log(balance); // 10.5 BCH
```

## Blockchain Queries

To fetch streams from the blockchain:

```typescript
// Get all streams for an address
const streams = await LuminaContract.getStreamsForAddress(address);

// Get specific stream
const stream = await LuminaContract.getStream(streamId);

// Calculate claimable amount
const claimable = await LuminaContract.calculateClaimable(streamId);
```

## Transaction Signing

All transactions need to be signed by the user's wallet:

```typescript
// Create transaction
const tx = createClaimTransaction(stream);

// Sign with wallet
const signedTx = await wallet.signTransaction(tx);

// Broadcast to network
const txid = await broadcastTransaction(signedTx);
```

## Error Handling

Always handle errors gracefully:

```typescript
try {
  await LuminaContract.claimStream(streamId);
} catch (error) {
  if (error.code === 'INSUFFICIENT_FUNDS') {
    showToast('Not enough funds to claim', 'error');
  } else if (error.code === 'STREAM_PAUSED') {
    showToast('Stream is paused', 'error');
  } else {
    showToast('Failed to claim stream', 'error');
  }
}
```

## Testing

Test the integration with mock data first:

```typescript
// Use mock streams for development
const mockStream = {
  id: 'test_1',
  type: 'payroll',
  recipient: 'bitcoincash:qp...',
  amount: 100000000000n,
  rate: 1902587n,
  // ...
};
```

## Next Steps

1. Implement wallet connection
2. Connect to Bitcoin Cash node
3. Integrate contract modules
4. Test on testnet
5. Deploy to mainnet

## Resources

- [CashScript Documentation](https://cashscript.org/)
- [Bitcoin Cash Developer Portal](https://developer.bitcoin.com/)
- [Layla CHIPs Specification](https://github.com/...)

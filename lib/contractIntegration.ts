/**
 * Integration layer between frontend and Levra contracts
 * 
 * This file connects frontend to StreamController, RateEngine, etc.
 * Handles conversion between frontend types and contract types
 */

import { CreateStreamParams, Stream, TimeUnit, ConditionFlag } from './types';

// Import contracts (will be available after build)
// import { StreamController } from '../../contracts/core/StreamController';
// import { RateEngine } from '../../contracts/core/RateEngine';
// import { ConditionEngine } from '../../contracts/core/ConditionEngine';

export class LevraContract {
  /**
   * Create a new payment stream
   * Converts frontend params to contract StreamParams
   */
  static async createStream(params: CreateStreamParams): Promise<string> {
    try {
      // Convert string amounts to bigint (satoshis)
      const amountSats = BigInt(Math.floor(parseFloat(params.amount) * 1e8));
      const rateSats = BigInt(Math.floor(parseFloat(params.rate) * 1e8));
      const durationSeconds = params.duration ? parseInt(params.duration) : undefined;

      // Prepare contract params
      const contractParams = {
        recipient: params.recipient,
        amount: amountSats,
        rate: rateSats,
        timeUnit: params.timeUnit,
        duration: durationSeconds,
        emergencyKey: params.emergencyKey,
        conditions: params.conditions || ConditionFlag.ACTIVE,
      };

      console.log('Creating stream with params:', contractParams);

      // TODO: Call actual contract
      // const stream = StreamController.createStream(contractParams);
      // const streamId = stream.streamId.toString('hex');

      // Mock for now
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('stream_' + Date.now());
        }, 1000);
      });
    } catch (error) {
      console.error('Failed to create stream:', error);
      throw error;
    }
  }

  /**
   * Claim available funds from a stream
   * Calls StreamController.claim() and LoopRenewal.executeLoop()
   */
  static async claimStream(streamId: string, amount?: string): Promise<{ txid: string; amount: string }> {
    try {
      console.log('Claiming stream:', streamId);

      // TODO: Get stream from blockchain
      // const stream = await this.getStreamUTXO(streamId);
      
      // Calculate current time
      const currentTime = Math.floor(Date.now() / 1000);

      // Convert amount if specified
      const amountSats = amount ? BigInt(Math.floor(parseFloat(amount) * 1e8)) : undefined;

      // TODO: Call contract
      // const result = StreamController.claim(stream, currentTime, amountSats);
      // const claimedBCH = (Number(result.claimedAmount) / 1e8).toFixed(8);

      // Mock for now
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            txid: 'tx_' + Date.now(),
            amount: amount || '1.5',
          });
        }, 1000);
      });
    } catch (error) {
      console.error('Failed to claim stream:', error);
      throw error;
    }
  }

  /**
   * Pause a stream
   */
  static async pauseStream(streamId: string): Promise<void> {
    // TODO: Integrate with StreamController.pause()
    console.log('Pausing stream:', streamId);
    
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }

  /**
   * Resume a paused stream
   */
  static async resumeStream(streamId: string): Promise<void> {
    // TODO: Integrate with StreamController.resume()
    console.log('Resuming stream:', streamId);
    
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }

  /**
   * Get stream details
   */
  static async getStream(streamId: string): Promise<Stream | null> {
    // TODO: Fetch from blockchain
    console.log('Fetching stream:', streamId);
    
    return null;
  }

  /**
   * Get all streams for an address
   */
  static async getStreamsForAddress(address: string): Promise<Stream[]> {
    // TODO: Query blockchain for streams
    console.log('Fetching streams for:', address);
    
    return [];
  }

  /**
   * Calculate claimable amount
   * Uses RateEngine.calculateClaimable()
   */
  static async calculateClaimable(streamId: string): Promise<string> {
    try {
      console.log('Calculating claimable for:', streamId);

      // TODO: Get stream from blockchain
      // const stream = await this.getStreamUTXO(streamId);
      
      // Calculate current time
      const currentTime = Math.floor(Date.now() / 1000);

      // TODO: Call RateEngine
      // const claimableSats = RateEngine.calculateClaimable(stream, currentTime);
      // const claimableBCH = (Number(claimableSats) / 1e8).toFixed(8);
      // return claimableBCH;

      // Mock for now
      return '0.5';
    } catch (error) {
      console.error('Failed to calculate claimable:', error);
      return '0';
    }
  }

  /**
   * Helper: Convert Buffer to hex string
   */
  private static bufferToHex(buffer: Buffer): string {
    return buffer.toString('hex');
  }

  /**
   * Helper: Convert hex string to Buffer
   */
  private static hexToBuffer(hex: string): Buffer {
    return Buffer.from(hex, 'hex');
  }

  /**
   * Helper: Convert BCH to satoshis
   */
  static bchToSats(bch: string | number): bigint {
    return BigInt(Math.floor(Number(bch) * 1e8));
  }

  /**
   * Helper: Convert satoshis to BCH
   */
  static satsToBch(sats: bigint | number): string {
    return (Number(sats) / 1e8).toFixed(8);
  }

  /**
   * Initiate dispute
   */
  static async initiateDispute(streamId: string, reason: string): Promise<void> {
    // TODO: Use SafetyModule.initiateDispute()
    console.log('Initiating dispute:', streamId, reason);
    
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }

  /**
   * Resolve dispute (emergency key only)
   */
  static async resolveDispute(streamId: string, resolution: 'resume' | 'refund'): Promise<void> {
    // TODO: Use SafetyModule.resolveDispute()
    console.log('Resolving dispute:', streamId, resolution);
    
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }
}

/**
 * BCH Wallet Connection
 * Supports: CashConnect, Paytaca, and other BCH wallets
 */

export interface WalletInfo {
  address: string;
  balance: string;
  network: 'mainnet' | 'testnet';
  walletType: 'cashconnect' | 'paytaca' | 'other';
}

export class BCHWallet {
  /**
   * Check if CashConnect is available
   */
  static isCashConnectAvailable(): boolean {
    return typeof window !== 'undefined' && 'bitcoinCash' in window;
  }

  /**
   * Connect to BCH wallet
   */
  static async connect(): Promise<WalletInfo> {
    // Check for CashConnect (browser extension)
    if (this.isCashConnectAvailable()) {
      return this.connectCashConnect();
    }

    // Fallback to demo mode for hackathon
    console.log('No BCH wallet detected. Using demo mode.');
    return this.getDemoWallet();
  }

  /**
   * Connect via CashConnect
   */
  private static async connectCashConnect(): Promise<WalletInfo> {
    try {
      // @ts-ignore - CashConnect types
      const accounts = await window.bitcoinCash.request({
        method: 'bch_requestAccounts',
      });

      if (!accounts || accounts.length === 0) {
        throw new Error('No accounts found');
      }

      const address = accounts[0];

      // Get balance
      // @ts-ignore
      const balance = await window.bitcoinCash.request({
        method: 'bch_getBalance',
        params: [address],
      });

      return {
        address,
        balance: this.formatBalance(balance),
        network: 'mainnet',
        walletType: 'cashconnect',
      };
    } catch (error) {
      console.error('CashConnect connection failed:', error);
      throw error;
    }
  }

  /**
   * Get demo wallet for testing
   */
  private static getDemoWallet(): WalletInfo {
    return {
      address: 'bitcoincash:qp3w8x7k2m5n9t4r6y1u3v5w7x8z9a2b3c4d5e6f',
      balance: '10.5',
      network: 'testnet',
      walletType: 'other',
    };
  }

  /**
   * Format balance from satoshis to BCH
   */
  private static formatBalance(satoshis: string | number): string {
    const bch = Number(satoshis) / 1e8;
    return bch.toFixed(4);
  }

  /**
   * Disconnect wallet
   */
  static disconnect(): void {
    // Clear any stored wallet data
    if (typeof window !== 'undefined') {
      localStorage.removeItem('bch_wallet_address');
    }
  }

  /**
   * Sign transaction
   */
  static async signTransaction(tx: any): Promise<string> {
    if (!this.isCashConnectAvailable()) {
      throw new Error('No wallet connected');
    }

    try {
      // @ts-ignore
      const signedTx = await window.bitcoinCash.request({
        method: 'bch_signTransaction',
        params: [tx],
      });

      return signedTx;
    } catch (error) {
      console.error('Transaction signing failed:', error);
      throw error;
    }
  }

  /**
   * Get network
   */
  static async getNetwork(): Promise<'mainnet' | 'testnet'> {
    if (!this.isCashConnectAvailable()) {
      return 'testnet';
    }

    try {
      // @ts-ignore
      const network = await window.bitcoinCash.request({
        method: 'bch_getNetwork',
      });

      return network === 'mainnet' ? 'mainnet' : 'testnet';
    } catch (error) {
      return 'testnet';
    }
  }
}

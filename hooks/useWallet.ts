import { useState, useEffect } from 'react';
import { BCHWallet, WalletInfo } from '@/lib/walletConnect';

export function useWallet() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string>('0');
  const [network, setNetwork] = useState<'mainnet' | 'testnet'>('testnet');
  const [walletType, setWalletType] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState(false);

  // Check if wallet is already connected on mount
  useEffect(() => {
    const savedAddress = localStorage.getItem('bch_wallet_address');
    if (savedAddress) {
      setAddress(savedAddress);
      setConnected(true);
    }
  }, []);

  const connect = async () => {
    setIsConnecting(true);
    try {
      const walletInfo: WalletInfo = await BCHWallet.connect();
      
      setConnected(true);
      setAddress(walletInfo.address);
      setBalance(walletInfo.balance);
      setNetwork(walletInfo.network);
      setWalletType(walletInfo.walletType);

      // Save to localStorage
      localStorage.setItem('bch_wallet_address', walletInfo.address);

      console.log('Wallet connected:', walletInfo);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      
      // Fallback to demo mode
      const demoWallet = {
        address: 'bitcoincash:qp3w8x7k2m5n9t4r6y1u3v5w7x8z9a2b3c4d5e6f',
        balance: '10.5',
        network: 'testnet' as const,
        walletType: 'demo',
      };
      
      setConnected(true);
      setAddress(demoWallet.address);
      setBalance(demoWallet.balance);
      setNetwork(demoWallet.network);
      setWalletType(demoWallet.walletType);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = () => {
    BCHWallet.disconnect();
    setConnected(false);
    setAddress(null);
    setBalance('0');
    setWalletType('');
  };

  const formatAddress = (addr: string | null): string => {
    if (!addr) return '';
    if (addr.length <= 20) return addr;
    return `${addr.slice(0, 13)}...${addr.slice(-4)}`;
  };

  return {
    connected,
    address,
    balance,
    network,
    walletType,
    isConnecting,
    connect,
    disconnect,
    formatAddress,
  };
}

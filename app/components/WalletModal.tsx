'use client';

import { useState } from 'react';
import Modal from './Modal';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (walletType: string) => void;
}

export default function WalletModal({ isOpen, onClose, onConnect }: WalletModalProps) {
  const [isConnecting, setIsConnecting] = useState(false);

  const wallets = [
    {
      id: 'cashconnect',
      name: 'CashConnect',
      description: 'Browser extension wallet',
      available: typeof window !== 'undefined' && 'bitcoinCash' in window,
    },
    {
      id: 'paytaca',
      name: 'Paytaca',
      description: 'Mobile wallet with WalletConnect',
      available: false, // Will be implemented
    },
    {
      id: 'demo',
      name: 'Demo Mode',
      description: 'Try without connecting wallet',
      available: true,
    },
  ];

  const handleConnect = async (walletId: string) => {
    setIsConnecting(true);
    try {
      await onConnect(walletId);
      onClose();
    } catch (error) {
      console.error('Connection failed:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Connect Wallet">
      <div className="space-y-3">
        {wallets.map((wallet) => (
          <button
            key={wallet.id}
            onClick={() => handleConnect(wallet.id)}
            disabled={!wallet.available || isConnecting}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              wallet.available
                ? 'border-gray-200 hover:border-emerald-500 hover:bg-emerald-50'
                : 'border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                wallet.available ? 'bg-emerald-50' : 'bg-gray-100'
              }`}>
                <svg className={`w-6 h-6 ${wallet.available ? 'text-emerald-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 mb-0.5">
                  {wallet.name}
                  {!wallet.available && (
                    <span className="ml-2 text-xs font-normal text-gray-500">(Coming soon)</span>
                  )}
                </div>
                <div className="text-sm text-gray-600">{wallet.description}</div>
              </div>
              {wallet.available && (
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex gap-3">
          <span className="text-lg">ℹ️</span>
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Don&apos;t have a BCH wallet?</p>
            <p className="text-blue-700">
              Install{' '}
              <a
                href="https://cashconnect.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-900"
              >
                CashConnect
              </a>{' '}
              browser extension or use Demo Mode to explore.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

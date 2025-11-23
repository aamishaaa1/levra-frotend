'use client';

import Link from 'next/link';
import { useWallet } from '@/hooks/useWallet';

export default function Header() {
  const { connected, address, balance, network, walletType, isConnecting, connect, disconnect, formatAddress } = useWallet();

  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">L</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Levra</h1>
                <p className="text-xs text-gray-500">Money that flows</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/stats" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Stats
              </Link>
              <Link href="/docs" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Docs
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Network Badge */}
            {connected && (
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg">
                <div className={`w-2 h-2 rounded-full ${network === 'mainnet' ? 'bg-emerald-500' : 'bg-yellow-500'}`} />
                <span className="text-xs font-medium text-gray-700 capitalize">{network}</span>
              </div>
            )}

            {/* Balance */}
            {connected && balance && (
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg">
                <span className="text-sm font-semibold text-emerald-700">{balance} BCH</span>
              </div>
            )}

            {/* Connect/Disconnect Button */}
            {connected ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={disconnect}
                  className="px-4 py-2 text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="hidden sm:inline">{formatAddress(address)}</span>
                    <span className="sm:hidden">Connected</span>
                  </span>
                </button>
              </div>
            ) : (
              <button
                onClick={connect}
                disabled={isConnecting}
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 rounded-lg transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isConnecting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Connecting...
                  </span>
                ) : (
                  'Connect Wallet'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

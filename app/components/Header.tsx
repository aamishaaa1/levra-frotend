'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [connected, setConnected] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
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
              <Link href="/stats" className="text-sm text-gray-600 hover:text-gray-900">
                Stats
              </Link>
              <Link href="/docs" className="text-sm text-gray-600 hover:text-gray-900">
                Docs
              </Link>
            </nav>
          </div>
          <button
            onClick={() => setConnected(!connected)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              connected
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'text-gray-700 hover:text-gray-900 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {connected ? (
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                Connected
              </span>
            ) : (
              'Connect Wallet'
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

'use client';

import { useRouter } from 'next/navigation';

export default function StreamDetail() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <span>←</span>
              <span>Back</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">L</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Levra</h1>
              </div>
            </div>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Stream Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Payroll Stream</h1>
              <p className="text-gray-500">To: John Doe</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Active
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Total Amount</div>
              <div className="text-2xl font-bold text-gray-900">1000 BCH</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Claimed</div>
              <div className="text-2xl font-bold text-emerald-600">45.2 BCH</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Remaining</div>
              <div className="text-2xl font-bold text-gray-900">954.8 BCH</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>45%</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-blue-500" style={{ width: '45%' }} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all">
              Claim Available Funds
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Pause Stream
            </button>
          </div>
        </div>

        {/* Stream Details */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Stream Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Payment Rate</span>
              <span className="font-medium text-gray-900">0.019 BCH per block</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Time Unit</span>
              <span className="font-medium text-gray-900">Block (~10 minutes)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Duration</span>
              <span className="font-medium text-gray-900">52,560 blocks (~1 year)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Started</span>
              <span className="font-medium text-gray-900">Jan 15, 2025</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Estimated End</span>
              <span className="font-medium text-gray-900">Jan 15, 2026</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Loop Counter</span>
              <span className="font-medium text-gray-900">2,376 iterations</span>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Transaction History</h2>
          <div className="space-y-3">
            {[
              { date: 'Nov 23, 2025 14:30', amount: '1.9', type: 'Claim', txid: 'abc123...' },
              { date: 'Nov 22, 2025 09:15', amount: '1.9', type: 'Claim', txid: 'def456...' },
              { date: 'Nov 21, 2025 16:45', amount: '1.9', type: 'Claim', txid: 'ghi789...' },
              { date: 'Nov 20, 2025 11:20', amount: '1.9', type: 'Claim', txid: 'jkl012...' },
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div>
                  <div className="font-medium text-gray-900">{tx.type}</div>
                  <div className="text-sm text-gray-500">{tx.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-emerald-600">+{tx.amount} BCH</div>
                  <a href="#" className="text-xs text-blue-600 hover:underline">
                    {tx.txid}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

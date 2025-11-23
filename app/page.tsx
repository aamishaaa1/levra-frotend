'use client';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StreamTypeSelector from './components/StreamTypeSelector';
import CreateStreamForm from './components/CreateStreamForm';
import StreamCard from './components/StreamCard';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'create' | 'manage'>('create');
  const [streamType, setStreamType] = useState<'payroll' | 'subscription' | 'escrow' | 'drip'>('payroll');

  const handleClaim = (streamId: string) => {
    console.log('Claiming stream:', streamId);
  };

  const handlePause = (streamId: string) => {
    console.log('Pausing stream:', streamId);
  };

  const handleDetails = (streamId: string) => {
    console.log('Viewing details:', streamId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <Header />

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Money that flows <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">automatically</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mb-6">
            No more manual payments. Set the rate, add conditions if you want, and let it run. 
            Salary streams per block. Subscriptions pause when service is down. Escrow releases at milestones.
          </p>
          <div className="flex items-center gap-4 justify-center">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Non-custodial</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>On-chain only</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Low fees</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('create')}
            className={`px-6 py-3 font-medium transition-all relative ${
              activeTab === 'create'
                ? 'text-emerald-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Create Stream
            {activeTab === 'create' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('manage')}
            className={`px-6 py-3 font-medium transition-all relative ${
              activeTab === 'manage'
                ? 'text-emerald-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            My Streams
            {activeTab === 'manage' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600" />
            )}
          </button>
        </div>

        {activeTab === 'create' ? (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <StreamTypeSelector 
                selected={streamType} 
                onSelect={(id) => setStreamType(id as 'payroll' | 'subscription' | 'escrow' | 'drip')} 
              />
            </div>
            <div className="lg:col-span-2">
              <CreateStreamForm streamType={streamType} />
            </div>
          </div>
        ) : (
          /* My Streams Tab */
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-sm text-gray-600 mb-1">Active Streams</div>
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-xs text-emerald-600 mt-1">All flowing</div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-sm text-gray-600 mb-1">Total Flowing</div>
                <div className="text-2xl font-bold text-gray-900">1,150 BCH</div>
                <div className="text-xs text-gray-600 mt-1">Across all streams</div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-sm text-gray-600 mb-1">Claimable Now</div>
                <div className="text-2xl font-bold text-emerald-600">2.4 BCH</div>
                <div className="text-xs text-gray-600 mt-1">Ready to claim</div>
              </div>
            </div>

            {/* Active Streams */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Active Streams</h3>
                  <p className="text-sm text-gray-500 mt-0.5">Streams you&apos;re sending</p>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full">
                  3 active
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { 
                    id: '1', 
                    type: 'Streaming Payroll', 
                    recipient: 'bitcoincash:qp3w...x7k2', 
                    rate: '0.019 BCH/block', 
                    claimed: '45.2', 
                    total: '1000', 
                    progress: 45,
                    lastClaim: '2 hours ago'
                  },
                  { 
                    id: '2', 
                    type: 'Pay-per-Use', 
                    recipient: 'bitcoincash:qq7m...9n4p', 
                    rate: '0.00167 BCH/min', 
                    claimed: '12.8', 
                    total: '100', 
                    progress: 13,
                    lastClaim: '15 min ago'
                  },
                  { 
                    id: '3', 
                    type: 'Milestone Escrow', 
                    recipient: 'bitcoincash:qz8k...2m5t', 
                    rate: 'Milestone 2/3 complete', 
                    claimed: '30', 
                    total: '50', 
                    progress: 60,
                    lastClaim: '1 day ago'
                  },
                ].map((stream) => (
                  <StreamCard
                    key={stream.id}
                    type={stream.type}
                    recipient={stream.recipient}
                    rate={stream.rate}
                    claimed={stream.claimed}
                    total={stream.total}
                    progress={stream.progress}
                    onClaim={() => handleClaim(stream.id)}
                    onPause={() => handlePause(stream.id)}
                    onDetails={() => handleDetails(stream.id)}
                  />
                ))}
              </div>
            </div>

            {/* Incoming Streams */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Receiving</h3>
                  <p className="text-sm text-gray-500 mt-0.5">Streams flowing to you</p>
                </div>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                  1 stream
                </span>
              </div>
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50 border-2 border-emerald-200 rounded-xl p-6">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-30 -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30 -ml-16 -mb-16" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-lg font-bold text-gray-900">Monthly Salary</div>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-100 rounded-full">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                          <span className="text-xs font-medium text-emerald-700">Flowing</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">From: bitcoincash:qr5a...8w3n</div>
                      <div className="text-xs text-gray-500 mt-1">Rate: 0.0083 BCH/block (~12 BCH/day)</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-emerald-600">2.4 BCH</div>
                      <div className="text-xs text-gray-600 mt-1">≈ $1,080 USD</div>
                    </div>
                  </div>
                  
                  {/* Mini progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1.5">
                      <span>Last claimed 3 hours ago</span>
                      <span>Next auto-claim in 21 hours</span>
                    </div>
                    <div className="h-1.5 bg-white/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 w-1/8 animate-pulse" />
                    </div>
                  </div>
                  
                  <button className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl active:scale-98 flex items-center justify-center gap-2 group">
                    <span>Claim 2.4 BCH Now</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

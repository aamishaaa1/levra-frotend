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
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab('create')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'create'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Create Stream
          </button>
          <button
            onClick={() => setActiveTab('manage')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'manage'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            My Streams
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
          <div className="space-y-4">
            {/* Active Streams */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Active Streams</h3>
                <span className="text-sm text-gray-500">3 streams</span>
              </div>
              <div className="space-y-3">
                {[
                  { id: '1', type: 'Payroll', recipient: 'John Doe', rate: '0.019 BCH/block', claimed: '45.2', total: '1000', progress: 45 },
                  { id: '2', type: 'Subscription', recipient: 'Netflix Clone', rate: '0.001 BCH/min', claimed: '12.8', total: '100', progress: 13 },
                  { id: '3', type: 'Escrow', recipient: 'Contractor', rate: 'Milestone 2/3', claimed: '30', total: '50', progress: 60 },
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
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Receiving</h3>
                <span className="text-sm text-gray-500">1 stream</span>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-medium text-gray-900">Salary Stream</div>
                    <div className="text-sm text-gray-500">From: Acme Corp</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-emerald-600">2.4 BCH</div>
                    <div className="text-xs text-gray-500">Available to claim</div>
                  </div>
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all">
                  Claim 2.4 BCH
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

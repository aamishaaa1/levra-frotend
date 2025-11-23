'use client';

import { useState } from 'react';

interface CreateStreamFormProps {
  streamType: 'payroll' | 'subscription' | 'escrow' | 'drip';
}

export default function CreateStreamForm({ streamType }: CreateStreamFormProps) {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [timeUnit, setTimeUnit] = useState('Block');
  const [duration, setDuration] = useState('');

  const getTitle = () => {
    switch (streamType) {
      case 'payroll': return 'Setup Streaming Payroll';
      case 'subscription': return 'Setup Pay-per-Use';
      case 'escrow': return 'Setup Milestone Escrow';
      case 'drip': return 'Setup Drip Funding';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating stream:', { recipient, amount, rate, timeUnit, duration });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">{getTitle()}</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipient */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Recipient Address
          </label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="bitcoincash:qp..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Total Amount
          </label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="1000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            />
            <span className="absolute right-4 top-3 text-gray-500 font-medium">BCH</span>
          </div>
        </div>

        {/* Rate */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Rate
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="0.01"
              step="0.001"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Per
            </label>
            <select
              value={timeUnit}
              onChange={(e) => setTimeUnit(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white"
            >
              <option>Block</option>
              <option>Minute</option>
              <option>Hour</option>
              <option>Day</option>
            </select>
          </div>
        </div>

        {/* Duration */}
        {streamType !== 'escrow' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration (optional)
            </label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="52560 blocks (~1 year)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            />
          </div>
        )}

        {/* Milestones for Escrow */}
        {streamType === 'escrow' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Milestones
            </label>
            <div className="space-y-3">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex gap-3">
                  <input
                    type="text"
                    placeholder={`Milestone ${num}`}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Amount"
                    className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Summary */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Stream will last</span>
            <span className="font-medium text-gray-900">
              {duration ? `~${Math.floor(Number(duration) / 144)} days` : '—'}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Recipient receives</span>
            <span className="font-medium text-gray-900">
              {rate ? `${rate} BCH per ${timeUnit.toLowerCase()}` : '—'}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Can claim every</span>
            <span className="font-medium text-gray-900">
              {timeUnit === 'Block' ? '~10 minutes' : timeUnit}
            </span>
          </div>
        </div>

        {/* Create Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all shadow-sm"
        >
          Create Stream
        </button>
      </form>
    </div>
  );
}

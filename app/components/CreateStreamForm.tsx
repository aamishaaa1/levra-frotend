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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getTitle = () => {
    switch (streamType) {
      case 'payroll': return 'Setup Streaming Payroll';
      case 'subscription': return 'Setup Pay-per-Use';
      case 'escrow': return 'Setup Milestone Escrow';
      case 'drip': return 'Setup Drip Funding';
    }
  };

  const getDescription = () => {
    switch (streamType) {
      case 'payroll': return 'Money flows every block. Employee can claim whenever they want. No waiting for payday.';
      case 'subscription': return 'Payment only flows while service is active. Service down? Payment stops automatically.';
      case 'escrow': return 'Set milestones. When each one is done, funds unlock. Simple as that.';
      case 'drip': return 'Release funds slowly over time. Great for grants, DAO treasuries, or controlled spending.';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Creating stream:', { recipient, amount, rate, timeUnit, duration });
    setIsSubmitting(false);
  };

  // Calculate preview values
  const totalPayments = rate && amount ? Math.floor(Number(amount) / Number(rate)) : 0;
  const durationDays = duration ? Math.floor(Number(duration) / 144) : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 px-6 py-5 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">{getTitle()}</h2>
        <p className="text-sm text-gray-600">{getDescription()}</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Recipient */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Who gets paid?
          </label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="bitcoincash:qp3w8x7k2m5n9..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-900 placeholder-gray-400"
            required
          />
          <p className="mt-1.5 text-xs text-gray-500">
            Their Bitcoin Cash address. They&apos;ll be able to claim funds as they flow.
          </p>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How much total?
          </label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="1000"
              step="0.01"
              min="0"
              className="w-full px-4 py-3 pr-16 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-900 placeholder-gray-400"
              required
            />
            <span className="absolute right-4 top-3.5 text-gray-600 font-medium">BCH</span>
          </div>
          <p className="mt-1.5 text-xs text-gray-500">
            Total amount to stream. This will flow out based on your rate below.
          </p>
        </div>

        {/* Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How fast should it flow?
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="0.01"
                step="0.001"
                min="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-900 placeholder-gray-400"
                required
              />
            </div>
            <div>
              <select
                value={timeUnit}
                onChange={(e) => setTimeUnit(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white text-gray-900 transition-all"
              >
                <option className="text-gray-900">Block (~10 min)</option>
                <option className="text-gray-900">Minute</option>
                <option className="text-gray-900">Hour</option>
                <option className="text-gray-900">Day</option>
              </select>
            </div>
          </div>
          <p className="mt-1.5 text-xs text-gray-500">
            Payment rate. For example: 0.01 BCH per block means ~1.44 BCH per day.
          </p>
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-900 placeholder-gray-400"
            />
            <p className="mt-1.5 text-xs text-gray-500">
              Leave empty for unlimited duration
            </p>
          </div>
        )}

        {/* Milestones for Escrow */}
        {streamType === 'escrow' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Milestones
            </label>
            <div className="space-y-3">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700 font-semibold">
                    {num}
                  </div>
                  <input
                    type="text"
                    placeholder={`Milestone ${num} description`}
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                  <input
                    type="number"
                    placeholder="Amount"
                    className="w-32 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Live Preview */}
        {(amount || rate) && (
          <div className="bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 rounded-xl p-5 border border-emerald-200 animate-fadeIn">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">Live Preview</span>
            </div>
            <div className="space-y-3">
              {duration && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Duration</span>
                  <span className="font-semibold text-gray-900">
                    {durationDays > 0 ? `~${durationDays} days` : 'Unlimited'}
                  </span>
                </div>
              )}
              {rate && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Flow rate</span>
                  <span className="font-semibold text-emerald-700">
                    {rate} BCH per {timeUnit.toLowerCase()}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Claim frequency</span>
                <span className="font-semibold text-gray-900">
                  {timeUnit === 'Block' ? 'Every ~10 min' : `Every ${timeUnit.toLowerCase()}`}
                </span>
              </div>
              {totalPayments > 0 && (
                <div className="pt-3 mt-3 border-t border-emerald-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total payments</span>
                    <span className="font-semibold text-gray-900">
                      ~{totalPayments.toLocaleString()} times
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Create Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Creating Stream...
            </>
          ) : (
            <>
              <span>Create Stream</span>
              <span>→</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

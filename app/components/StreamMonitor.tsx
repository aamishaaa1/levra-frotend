'use client';

import { useState, useEffect } from 'react';

interface StreamMonitorProps {
  streamId: string;
  rate: number;
  timeUnit: string;
  lastClaim: number;
}

export default function StreamMonitor({ streamId, rate, timeUnit, lastClaim }: StreamMonitorProps) {
  const [elapsed, setElapsed] = useState(0);
  const [claimable, setClaimable] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Math.floor(Date.now() / 1000);
      const elapsedSeconds = now - lastClaim;
      setElapsed(elapsedSeconds);

      // Calculate claimable based on time unit
      let units = 0;
      switch (timeUnit.toLowerCase()) {
        case 'second':
          units = elapsedSeconds;
          break;
        case 'minute':
          units = Math.floor(elapsedSeconds / 60);
          break;
        case 'block':
          units = Math.floor(elapsedSeconds / 600); // ~10 min per block
          break;
        case 'hour':
          units = Math.floor(elapsedSeconds / 3600);
          break;
        case 'day':
          units = Math.floor(elapsedSeconds / 86400);
          break;
      }

      setClaimable(rate * units);
    }, 1000);

    return () => clearInterval(interval);
  }, [lastClaim, rate, timeUnit]);

  const formatTime = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;
    return `${Math.floor(seconds / 86400)}d ${Math.floor((seconds % 86400) / 3600)}h`;
  };

  const formatBCH = (satoshis: number) => {
    return (satoshis / 1e8).toFixed(8);
  };

  return (
    <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl p-5 text-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-sm font-medium opacity-90">Streaming Now</span>
        </div>
        <span className="text-xs opacity-75">{formatTime(elapsed)}</span>
      </div>

      <div className="space-y-2">
        <div className="text-3xl font-bold">
          {formatBCH(claimable)} BCH
        </div>
        <div className="text-sm opacity-90">
          Available to claim right now
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="flex justify-between text-sm">
          <span className="opacity-75">Flow rate</span>
          <span className="font-medium">{formatBCH(rate)} BCH per {timeUnit.toLowerCase()}</span>
        </div>
      </div>
    </div>
  );
}

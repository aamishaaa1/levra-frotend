import { Stream, StreamStats, TimeUnit } from './types';

/**
 * Calculate stream statistics
 * Based on RateEngine from contracts
 */
export function calculateStreamStats(stream: Stream, currentTime?: number): StreamStats {
  const now = currentTime || Math.floor(Date.now() / 1000);
  
  // Calculate claimable amount
  const elapsed = now - stream.lastClaim;
  const units = convertToUnits(elapsed, stream.timeUnit);
  const claimable = stream.rate * BigInt(units);
  const claimableAmount = claimable > stream.amount ? stream.amount : claimable;
  
  // Calculate total originally streamed
  const totalElapsed = now - stream.startTime;
  const totalUnits = convertToUnits(totalElapsed, stream.timeUnit);
  const totalStreamed = stream.rate * BigInt(totalUnits);
  
  // Estimate original amount (remaining + already claimed)
  const originalAmount = stream.amount + totalStreamed;
  const claimedAmount = totalStreamed;
  
  const progress = Number(claimedAmount * 100n / originalAmount);

  // Estimate depletion
  const remainingUnits = Number(stream.amount / stream.rate);
  const secondsPerUnit = unitsToSeconds(1, stream.timeUnit);
  const estimatedEndDate = new Date((stream.lastClaim + (remainingUnits * secondsPerUnit)) * 1000);

  return {
    totalAmount: formatBCH(originalAmount),
    claimedAmount: formatBCH(claimedAmount),
    remainingAmount: formatBCH(stream.amount),
    progress: Math.min(progress, 100),
    estimatedEndDate,
  };
}

function formatBCH(satoshis: bigint): string {
  return (Number(satoshis) / 1e8).toFixed(4);
}

function convertToUnits(elapsed: number, unit: TimeUnit): number {
  switch (unit) {
    case TimeUnit.SECOND: return elapsed;
    case TimeUnit.MINUTE: return Math.floor(elapsed / 60);
    case TimeUnit.BLOCK: return Math.floor(elapsed / 600); // ~10 min per block
    case TimeUnit.HOUR: return Math.floor(elapsed / 3600);
    case TimeUnit.DAY: return Math.floor(elapsed / 86400);
    default: return elapsed;
  }
}

function unitsToSeconds(units: number, unit: TimeUnit): number {
  switch (unit) {
    case TimeUnit.SECOND: return units;
    case TimeUnit.MINUTE: return units * 60;
    case TimeUnit.BLOCK: return units * 600;
    case TimeUnit.HOUR: return units * 3600;
    case TimeUnit.DAY: return units * 86400;
    default: return units;
  }
}

export function formatTimeUnit(unit: TimeUnit): string {
  switch (unit) {
    case TimeUnit.SECOND: return 'second';
    case TimeUnit.MINUTE: return 'minute';
    case TimeUnit.BLOCK: return 'block';
    case TimeUnit.HOUR: return 'hour';
    case TimeUnit.DAY: return 'day';
    default: return 'second';
  }
}

export function formatDuration(blocks: number): string {
  const days = Math.floor(blocks / 144); // ~144 blocks per day
  if (days < 1) {
    const hours = Math.floor(blocks / 6);
    return `~${hours} hours`;
  }
  if (days < 30) {
    return `~${days} days`;
  }
  const months = Math.floor(days / 30);
  if (months < 12) {
    return `~${months} months`;
  }
  const years = Math.floor(months / 12);
  return `~${years} year${years > 1 ? 's' : ''}`;
}

export function getStreamStatusColor(status: string): string {
  switch (status) {
    case 'active': return 'emerald';
    case 'paused': return 'yellow';
    case 'disputed': return 'red';
    case 'expired': return 'gray';
    case 'completed': return 'blue';
    default: return 'gray';
  }
}

export function getStreamTypeIcon(type: string): string {
  switch (type) {
    case 'payroll': return '💰';
    case 'subscription': return '🔄';
    case 'escrow': return '🎯';
    case 'drip': return '💧';
    default: return '💸';
  }
}

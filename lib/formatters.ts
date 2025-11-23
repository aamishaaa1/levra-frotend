/**
 * Formatting utilities for displaying data
 */

export function formatBCH(satoshis: bigint | number | string): string {
  const sats = typeof satoshis === 'bigint' ? Number(satoshis) : Number(satoshis);
  const bch = sats / 1e8;
  
  if (bch < 0.0001) {
    return bch.toFixed(8);
  }
  if (bch < 1) {
    return bch.toFixed(4);
  }
  return bch.toFixed(2);
}

export function formatAddress(address: string, length: number = 8): string {
  if (address.length <= length * 2) {
    return address;
  }
  return `${address.slice(0, length)}...${address.slice(-length)}`;
}

export function formatDate(timestamp: bigint | number | Date): string {
  const date = timestamp instanceof Date ? timestamp : new Date(Number(timestamp));
  
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  // Less than 1 minute
  if (diff < 60000) {
    return 'Just now';
  }
  
  // Less than 1 hour
  if (diff < 3600000) {
    const minutes = Math.floor(diff / 60000);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
  
  // Less than 1 day
  if (diff < 86400000) {
    const hours = Math.floor(diff / 3600000);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  
  // Less than 1 week
  if (diff < 604800000) {
    const days = Math.floor(diff / 86400000);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
  
  // Format as date
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatRelativeTime(timestamp: bigint | number | Date): string {
  const date = timestamp instanceof Date ? timestamp : new Date(Number(timestamp));
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  
  if (diff < 0) {
    return 'Expired';
  }
  
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  
  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''}`;
  }
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''}`;
  }
  return `${minutes} minute${minutes > 1 ? 's' : ''}`;
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function formatTxId(txid: string): string {
  return `${txid.slice(0, 8)}...${txid.slice(-8)}`;
}

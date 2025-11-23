// Stream type categories
export type StreamType = 'payroll' | 'subscription' | 'escrow' | 'drip' | 'custom';

// Matches StreamUTXO from contracts
export interface Stream {
  id: string;
  type: StreamType;
  
  // Financial
  amount: bigint;           // Remaining balance
  rate: bigint;             // Payment rate per time unit
  
  // Time
  timeUnit: TimeUnit;
  startTime: number;
  lastClaim: number;
  endTime?: number;
  
  // Loop state (Loops CHIP)
  loopCounter: number;
  maxLoops?: number;
  
  // Parties
  recipient: string;
  sender: string;
  
  // Conditions (Bitwise CHIP)
  conditions: number;
  
  // Safety (P2S CHIP)
  emergencyKey: string;
  
  // Metadata
  streamId: string;
  version: number;
}

export enum TimeUnit {
  SECOND = 0,
  MINUTE = 1,
  BLOCK = 2,
  HOUR = 3,
  DAY = 4
}

export interface StreamStats {
  totalAmount: string;
  claimedAmount: string;
  remainingAmount: string;
  progress: number;
  estimatedEndDate: Date;
}

export interface CreateStreamParams {
  recipient: string;
  amount: string;
  rate: string;
  timeUnit: TimeUnit;
  duration?: string;
  type: StreamType;
  emergencyKey?: string;
  conditions?: number;
}

export enum ConditionFlag {
  ACTIVE = 0x01,
  PAUSED = 0x02,
  DISPUTED = 0x04,
  EXPIRED = 0x08,
  SERVICE_ON = 0x10,
  MILESTONE_1 = 0x20,
  MILESTONE_2 = 0x40,
  EMERGENCY = 0x80,
}

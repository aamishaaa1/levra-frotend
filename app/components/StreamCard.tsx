interface StreamCardProps {
  type: string;
  recipient: string;
  rate: string;
  claimed: string;
  total: string;
  progress: number;
  onClaim: () => void;
  onPause: () => void;
  onDetails: () => void;
}

export default function StreamCard({
  type,
  recipient,
  rate,
  claimed,
  total,
  progress,
  onClaim,
  onPause,
  onDetails,
}: StreamCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="font-medium text-gray-900">{type}</div>
          <div className="text-sm text-gray-500">To: {recipient}</div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900">{rate}</div>
          <div className="text-xs text-gray-500">
            {claimed}/{total} BCH
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onClaim}
          className="flex-1 py-2 text-sm font-medium text-emerald-600 border border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
        >
          Claim Now
        </button>
        <button
          onClick={onPause}
          className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Pause
        </button>
        <button
          onClick={onDetails}
          className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Details
        </button>
      </div>
    </div>
  );
}

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
    <div className="group border border-gray-200 rounded-xl p-5 hover:border-emerald-300 hover:shadow-md transition-all duration-200 bg-white">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div className="font-semibold text-gray-900">{type}</div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          </div>
          <div className="text-sm text-gray-500">To: {recipient}</div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900">{rate}</div>
          <div className="text-xs text-gray-500">
            {claimed}/{total} BCH
          </div>
        </div>
      </div>
      
      {/* Progress with percentage */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-600 mb-1.5">
          <span>Progress</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-700 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={onClaim}
          className="flex-1 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-sm hover:shadow active:scale-95"
        >
          Claim Now
        </button>
        <button
          onClick={onPause}
          className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all active:scale-95"
        >
          Pause
        </button>
        <button
          onClick={onDetails}
          className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all active:scale-95"
        >
          Details
        </button>
      </div>
    </div>
  );
}

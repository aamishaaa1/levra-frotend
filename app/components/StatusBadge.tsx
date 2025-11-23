interface StatusBadgeProps {
  status: 'active' | 'paused' | 'disputed' | 'expired' | 'completed';
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const colors = {
    active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    paused: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    disputed: 'bg-red-50 text-red-700 border-red-200',
    expired: 'bg-gray-50 text-gray-700 border-gray-200',
    completed: 'bg-blue-50 text-blue-700 border-blue-200',
  };

  const labels = {
    active: 'Active',
    paused: 'Paused',
    disputed: 'Disputed',
    expired: 'Expired',
    completed: 'Completed',
  };

  return (
    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${colors[status]}`}>
      {status === 'active' && <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />}
      {labels[status]}
    </div>
  );
}

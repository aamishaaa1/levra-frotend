interface StreamType {
  id: string;
  label: string;
  desc: string;
  icon: string;
}

interface StreamTypeSelectorProps {
  selected: string;
  onSelect: (id: string) => void;
}

const streamTypes: StreamType[] = [
  { id: 'payroll', label: 'Streaming Payroll', desc: 'Salary flows per block/minute/day', icon: '💰' },
  { id: 'subscription', label: 'Pay-per-Use', desc: 'Pay only while service is on', icon: '🔄' },
  { id: 'escrow', label: 'Milestone Escrow', desc: 'Unlock funds at milestones', icon: '🎯' },
  { id: 'drip', label: 'Drip Funding', desc: 'Slow, controlled release', icon: '💧' },
];

export default function StreamTypeSelector({ selected, onSelect }: StreamTypeSelectorProps) {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-700 mb-4">Choose stream type</h2>
      <div className="space-y-2">
        {streamTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onSelect(type.id)}
            className={`w-full text-left p-4 rounded-lg border transition-all ${
              selected === type.id
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{type.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900">{type.label}</div>
                <div className="text-sm text-gray-500">{type.desc}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

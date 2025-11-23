import PayrollIcon from './icons/PayrollIcon';
import SubscriptionIcon from './icons/SubscriptionIcon';
import EscrowIcon from './icons/EscrowIcon';
import DripIcon from './icons/DripIcon';

interface StreamType {
  id: string;
  label: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface StreamTypeSelectorProps {
  selected: string;
  onSelect: (id: string) => void;
}

const streamTypes: StreamType[] = [
  { 
    id: 'payroll', 
    label: 'Streaming Payroll', 
    desc: 'Salary flows per block/minute/day', 
    Icon: PayrollIcon,
    color: 'emerald'
  },
  { 
    id: 'subscription', 
    label: 'Pay-per-Use', 
    desc: 'Pay only while service is on', 
    Icon: SubscriptionIcon,
    color: 'blue'
  },
  { 
    id: 'escrow', 
    label: 'Milestone Escrow', 
    desc: 'Unlock funds at milestones', 
    Icon: EscrowIcon,
    color: 'purple'
  },
  { 
    id: 'drip', 
    label: 'Drip Funding', 
    desc: 'Slow, controlled release', 
    Icon: DripIcon,
    color: 'cyan'
  },
];

const colorClasses = {
  emerald: {
    border: 'border-emerald-500',
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    hover: 'hover:border-emerald-300'
  },
  blue: {
    border: 'border-blue-500',
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    hover: 'hover:border-blue-300'
  },
  purple: {
    border: 'border-purple-500',
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    hover: 'hover:border-purple-300'
  },
  cyan: {
    border: 'border-cyan-500',
    bg: 'bg-cyan-50',
    text: 'text-cyan-700',
    hover: 'hover:border-cyan-300'
  },
};

export default function StreamTypeSelector({ selected, onSelect }: StreamTypeSelectorProps) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
        Choose Stream Type
      </h2>
      <div className="space-y-3">
        {streamTypes.map((type) => {
          const isSelected = selected === type.id;
          const colors = colorClasses[type.color as keyof typeof colorClasses];
          
          return (
            <button
              key={type.id}
              onClick={() => onSelect(type.id)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                isSelected
                  ? `${colors.border} ${colors.bg} shadow-md scale-105`
                  : `border-gray-200 bg-white ${colors.hover} hover:shadow-sm`
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  isSelected ? colors.bg : 'bg-gray-50'
                }`}>
                  <type.Icon className={`w-6 h-6 ${isSelected ? colors.text : 'text-gray-600'}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-semibold mb-0.5 ${isSelected ? colors.text : 'text-gray-900'}`}>
                    {type.label}
                  </div>
                  <div className="text-sm text-gray-600 leading-snug">
                    {type.desc}
                  </div>
                </div>
                {isSelected && (
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full ${colors.bg} flex items-center justify-center`}>
                    <svg className={`w-4 h-4 ${colors.text}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Info Box */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <div className="flex gap-3 text-sm">
          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="leading-relaxed text-gray-700">
            All streams use <span className="font-semibold text-gray-900">Layla CHIPs</span> for 
            programmable money: Loops for continuous flow, Bitwise for conditions, P2S for safety.
          </p>
        </div>
      </div>
    </div>
  );
}

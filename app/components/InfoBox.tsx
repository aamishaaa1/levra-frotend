interface InfoBoxProps {
  type?: 'info' | 'tip' | 'warning';
  children: React.ReactNode;
}

export default function InfoBox({ type = 'info', children }: InfoBoxProps) {
  const styles = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: 'ℹ️'
    },
    tip: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-800',
      icon: '💡'
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: '⚠️'
    }
  };

  const style = styles[type];

  return (
    <div className={`${style.bg} ${style.border} border rounded-lg p-4`}>
      <div className="flex gap-3">
        <span className="text-lg flex-shrink-0">{style.icon}</span>
        <div className={`text-sm ${style.text} leading-relaxed`}>
          {children}
        </div>
      </div>
    </div>
  );
}

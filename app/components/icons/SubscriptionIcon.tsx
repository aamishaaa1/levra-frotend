export default function SubscriptionIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 4V10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.49 15C19.9828 16.8404 18.8481 18.4608 17.2628 19.5926C15.6776 20.7244 13.7403 21.3 11.7725 21.2283C9.80467 21.1565 7.91682 20.4415 6.41263 19.1971C4.90844 17.9527 3.87371 16.2523 3.47642 14.3644C3.07913 12.4765 3.34197 10.5084 4.21885 8.78394C5.09572 7.05951 6.53493 5.68068 8.29981 4.87671C10.0647 4.07273 12.0501 3.89117 13.9262 4.36134C15.8023 4.83151 17.4625 5.92699 18.64 7.47L23 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

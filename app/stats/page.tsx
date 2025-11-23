import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Stats() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Network Stats</h1>
          <p className="text-gray-600">Real-time statistics from the Lumina network</p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="text-sm text-gray-600 mb-2">Total Streams</div>
            <div className="text-3xl font-bold text-gray-900">1,247</div>
            <div className="text-sm text-emerald-600 mt-2">+12% this week</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="text-sm text-gray-600 mb-2">Total Volume</div>
            <div className="text-3xl font-bold text-gray-900">45.2K BCH</div>
            <div className="text-sm text-emerald-600 mt-2">+8% this week</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="text-sm text-gray-600 mb-2">Active Users</div>
            <div className="text-3xl font-bold text-gray-900">892</div>
            <div className="text-sm text-emerald-600 mt-2">+15% this week</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="text-sm text-gray-600 mb-2">Avg Stream Size</div>
            <div className="text-3xl font-bold text-gray-900">36.2 BCH</div>
            <div className="text-sm text-gray-500 mt-2">Median: 12.5 BCH</div>
          </div>
        </div>

        {/* Stream Types Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Stream Types</h2>
          <div className="space-y-4">
            {[
              { type: 'Payroll', count: 542, percentage: 43, color: 'emerald' },
              { type: 'Subscription', count: 387, percentage: 31, color: 'blue' },
              { type: 'Escrow', count: 218, percentage: 17, color: 'purple' },
              { type: 'Invoice', count: 100, percentage: 9, color: 'orange' },
            ].map((item) => (
              <div key={item.type}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-900">{item.type}</span>
                  <span className="text-gray-600">
                    {item.count} streams ({item.percentage}%)
                  </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-${item.color}-500`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'Stream Created', type: 'Payroll', amount: '1000 BCH', time: '2 minutes ago' },
              { action: 'Claim', type: 'Subscription', amount: '2.5 BCH', time: '5 minutes ago' },
              { action: 'Stream Created', type: 'Escrow', amount: '50 BCH', time: '12 minutes ago' },
              { action: 'Milestone Complete', type: 'Escrow', amount: '15 BCH', time: '18 minutes ago' },
              { action: 'Claim', type: 'Payroll', amount: '1.9 BCH', time: '23 minutes ago' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div>
                  <div className="font-medium text-gray-900">{activity.action}</div>
                  <div className="text-sm text-gray-500">{activity.type}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-gray-900">{activity.amount}</div>
                  <div className="text-sm text-gray-500">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

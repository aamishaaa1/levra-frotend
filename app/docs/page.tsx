import Link from 'next/link';

export default function Docs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">L</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Levra</h1>
                <p className="text-xs text-gray-500">Documentation</p>
              </div>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Back to App
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">How Levra Works</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Levra lets you program how money moves. Instead of one big payment, funds flow 
              continuously based on time, conditions, or milestones. It's like setting up a 
              payment that runs itself.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What can you do?</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">💰 Streaming Payroll</h3>
                  <p className="text-gray-600">
                    Salary flows per block, minute, or day. Employees claim anytime. No waiting for payday.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">🔄 Pay-per-Use</h3>
                  <p className="text-gray-600">
                    Payment flows only while service is active. Service down? Payment stops automatically.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">🎯 Milestone Escrow</h3>
                  <p className="text-gray-600">
                    Funds unlock when work is done. Complete milestone 1, get paid. Complete milestone 2, get paid again.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">💧 Drip Funding</h3>
                  <p className="text-gray-600">
                    Release funds slowly over time. Perfect for DAOs, grants, or controlled spending.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How it works</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Set the rate</h4>
                    <p className="text-gray-600">
                      Pick how much flows per block, minute, hour, or day. That's your payment rate.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Add conditions (optional)</h4>
                    <p className="text-gray-600">
                      Want payment to stop if service goes down? Or unlock at milestones? Add conditions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Let it run</h4>
                    <p className="text-gray-600">
                      Stream runs automatically. Recipient claims whenever they want. You can pause or stop anytime.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Bitcoin Cash?</h2>
              <p className="text-gray-600 mb-4">
                Bitcoin Cash is perfect for streaming payments because:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Low fees - You can stream small amounts without losing money to fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Fast confirmations - Payments settle in minutes, not hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Layla CHIPs - New features that make streaming possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Non-custodial - You always control your money</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Questions</h2>
              
              <div className="space-y-4">
                <details className="border border-gray-200 rounded-lg p-4">
                  <summary className="font-medium text-gray-900 cursor-pointer">
                    Can I pause a stream?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes! You can pause and resume streams anytime. The recipient won't be able to claim 
                    while it's paused.
                  </p>
                </details>

                <details className="border border-gray-200 rounded-lg p-4">
                  <summary className="font-medium text-gray-900 cursor-pointer">
                    What if there's a dispute?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Lumina has built-in dispute resolution. You can flag a stream as disputed, 
                    and an emergency key can resolve it. This protects both parties.
                  </p>
                </details>

                <details className="border border-gray-200 rounded-lg p-4">
                  <summary className="font-medium text-gray-900 cursor-pointer">
                    How often can recipients claim?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    As often as they want! There&apos;s no limit. They can claim every block if they want to.
                  </p>
                </details>

                <details className="border border-gray-200 rounded-lg p-4">
                  <summary className="font-medium text-gray-900 cursor-pointer">
                    Is my money safe?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes. Levra is non-custodial, meaning you always control your funds. 
                    Everything happens on-chain with Bitcoin Cash smart contracts.
                  </p>
                </details>

                <details className="border border-gray-200 rounded-lg p-4">
                  <summary className="font-medium text-gray-900 cursor-pointer">
                    What are the fees?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Just the standard Bitcoin Cash transaction fees, which are typically less than a cent. 
                    No platform fees.
                  </p>
                </details>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get Started</h2>
              <p className="text-gray-600 mb-4">
                Ready to try it? Connect your Bitcoin Cash wallet and create your first stream.
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all"
              >
                Start Streaming
              </Link>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-sm mt-20">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            Powered by Bitcoin Cash • Layla CHIPs
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/docs" className="text-gray-600 hover:text-gray-900">
              Docs
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              GitHub
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

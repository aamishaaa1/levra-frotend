export default function SkeletonCard() {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="h-5 bg-gray-200 rounded w-32 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-48"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-24"></div>
      </div>
      
      <div className="mb-4">
        <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
      </div>
      
      <div className="flex gap-2">
        <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>
        <div className="w-20 h-10 bg-gray-200 rounded-lg"></div>
        <div className="w-20 h-10 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
}

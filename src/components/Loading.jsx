export default function Loading() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      <span className="text-gray-600">
        Loading...
      </span>
    </div>
  );
}
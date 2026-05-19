export default function Modal({
  title,
  children,
}) {
  return (
    <div className="bg-white rounded-xl p-5 w-96 shadow-lg border">
      <h2 className="text-xl font-bold mb-3">
        {title}
      </h2>

      <div className="text-gray-600">
        {children}
      </div>
    </div>
  );
}
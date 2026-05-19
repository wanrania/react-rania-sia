export default function Alert({
  type = "success",
  children,
}) {
  const types = {
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-700",
    info: "bg-blue-100 text-blue-700",
  };

  return (
    <div className={`${types[type]} px-4 py-3 rounded-lg`}>
      {children}
    </div>
  );
}
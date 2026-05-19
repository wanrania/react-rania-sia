export default function TextArea({
  label,
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">
        {label}
      </label>

      <textarea
        placeholder={placeholder}
        rows="4"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>
  );
}
export default function Loader({ text = "Loading..." }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white px-6 py-4 rounded-xl shadow-sm border">
        <p className="text-gray-700 text-sm">{text}</p>
      </div>
    </div>
  );
}
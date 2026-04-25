export default function Loader({ text = "Loading..." }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="app-section flex items-center gap-4 rounded-[1.75rem] px-6 py-5">
        <div className="h-10 w-10 rounded-2xl border-2 border-slate-200 border-t-slate-950 animate-spin" />
        <div>
          <p className="text-sm font-semibold text-slate-950">Please wait</p>
          <p className="text-sm text-slate-500">{text}</p>
        </div>
      </div>
    </div>
  );
}
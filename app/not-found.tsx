export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">404</h2>
      <p className="text-lg text-slate-600 mb-8">Could not find requested resource</p>
      <a 
        href="/"
        className="px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors"
      >
        Return Home
      </a>
    </div>
  );
}

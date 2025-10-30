import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-800 bg-slate-950/60 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">
            Anime<span className="text-emerald-400">Finder</span>
          </h1>
        </div>
      </header>
      <main className="flex-1">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;

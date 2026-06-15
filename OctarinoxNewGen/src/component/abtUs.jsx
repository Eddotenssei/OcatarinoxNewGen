export default function OctarinoXNewGen() {
  const developers = [
    {
      name: "ალექსანდრე",
      color: "from-violet-500 to-indigo-600",
      border: "hover:border-violet-500/50",
    },
    {
      name: "ილია",
      color: "from-emerald-500 to-teal-600",
      border: "hover:border-emerald-500/50",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans flex flex-col items-center justify-center px-6 py-16">
      {/* Header */}
      <header className="text-center mb-16">
        <p className="text-xs tracking-[0.35em] uppercase text-violet-400 mb-4 font-medium">
          octarinox
        </p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          <span className="text-white">გამარჯობათ,</span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            OctarinoXNewGen
          </span>
        </h1>
        <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </header>

      {/* Developers Label */}
      <p className="text-sm text-zinc-400 tracking-widest uppercase mb-8 font-medium">
        developers:
      </p>

      {/* Developer Cards — მართკუთხა, სიმაღლეში დიდი */}
      <div className="flex flex-row gap-6 justify-center">
        {developers.map((dev) => (
          <div
            key={dev.name}
            className={`w-36 h-64 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-4 ${dev.border} transition-all duration-300 group cursor-default`}
          >
            {/* გრადიენტი ზოლი ზემოდან */}
            <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${dev.color} opacity-60 group-hover:opacity-100 group-hover:w-16 transition-all duration-500`} />

            {/* სახელი */}
            <h2 className="text-sm font-semibold text-white tracking-wide text-center px-2">
              {dev.name}
            </h2>
          </div>
        ))}
      </div>

      {/* Footer accent */}
      <div className="mt-16 flex items-center gap-3 text-zinc-600 text-xs tracking-widest uppercase">
        <div className="h-px w-12 bg-zinc-700" />
        <span>newgen</span>
        <div className="h-px w-12 bg-zinc-700" />
      </div>
    </div>
  );
}
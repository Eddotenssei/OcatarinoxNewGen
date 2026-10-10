export default function Footer() {
  return (
    <footer className="text-white grid grid-cols-1 gap-6 border-t border-line bg-[#a07bff33] px-[5%] py-6 backdrop-blur-[5px] sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_repeat(3,minmax(105px,150px))]">
      <div>
        <a href="/home" className="text-xl font-bold">
          Octarinox
        </a>

        <p className="mt-2 text-sm text-muted">
          IT venture studio, Tbilisi, Georgia
        </p>

        <p className="mt-1 text-sm">
          Built at Octarinox. Open for everyone.
        </p>

        <p className="mt-3 max-w-[700px] font-mono text-[10px] leading-relaxed text-muted">
          © 2026 Octarinox LLC · Code licensed under MIT and Apache-2.0 ·
          Site content CC BY 4.0
        </p>
      </div>

      <div className="flex flex-col items-start gap-2 text-sm">
        <h2 className="font-mono text-xs text-muted">
          projects
        </h2>

        <a href="/projects/argus">Argus</a>
        <a href="/projects/octar-lab">OCTAR LAB</a>
        <a href="/projects/clinic-os">Clinic OS</a>
      </div>

      <div className="flex flex-col items-start gap-2 text-sm">
        <h2 className="font-mono text-xs text-muted">
          octarinox
        </h2>

        <a href="/about">About</a>
        <span aria-disabled="true">Services ↗</span>
        <span aria-disabled="true">Contact ↗</span>
      </div>

      <div className="flex flex-col items-start gap-2 text-sm">
        <h2 className="font-mono text-xs text-muted">
          community
        </h2>

        <span aria-disabled="true">GitHub ↗</span>
        <span aria-disabled="true">Issues ↗</span>
        <span aria-disabled="true">Discussions ↗</span>
      </div>
    </footer>
  );
}
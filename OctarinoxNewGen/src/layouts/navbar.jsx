export default function Navbar() {
  return (
    <header className="flex flex-wrap items-center gap-4 border-b border-line px-[5%] py-4 text-white sm:gap-6">
      <a href="/home" className="text-xl font-bold">
        Octarinox
      </a>

      <nav
        className="ml-auto flex flex-wrap items-center gap-3 text-sm sm:gap-5"
        aria-label="Main navigation"
      >
        <a
          className="whitespace-nowrap rounded-full border border-[#a07bff55] bg-[#a07bff33] px-[10px] py-0.5"
          href="/home"
        >
          Home
        </a>

        <a
          className="whitespace-nowrap rounded-full border border-[#a07bff55] bg-[#a07bff33] px-[10px] py-0.5"
          href="/projects"
        >
          Projects
        </a>

        <a
          className="whitespace-nowrap rounded-full border border-[#a07bff55] bg-[#a07bff33] px-[10px] py-0.5"
          href="/why-open-source"
        >
          Why open source
        </a>

        <a
          className="whitespace-nowrap rounded-full border border-[#a07bff55] bg-[#a07bff33] px-[10px] py-0.5"
          href="/aboutUs"
        >
          About
        </a>
      </nav>

      <span aria-hidden="true">
        ◐
      </span>

      <span className="font-mono text-xs" aria-disabled="true">
        GitHub ↗
      </span>
    </header>
  );
}
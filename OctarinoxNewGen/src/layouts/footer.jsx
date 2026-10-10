
export default function Footer() {
  const groups = [
    {
      title: "projects",
      items: [
        ["Argus", "/projects/argus"],
        ["OCTAR LAB", "/projects/octar-lab"],
        ["Clinic OS", "/projects/clinic-os"],
      ],
    },
    {
      title: "octarinox",
      items: [
        ["About", "/about"],
        ["Services ↗", null],
        ["Contact ↗", null],
      ],
    },
    {
      title: "community",
      items: [
        ["GitHub ↗", null],
        ["Issues ↗", null],
        ["Discussions ↗", null],
      ],
    },
  ];

  return (
    <footer className="grid grid-cols-1 gap-6 border-t border-line bg-[#a07bff33] px-[5%] py-6 backdrop-blur-[5px] sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_repeat(3,minmax(105px,150px))]">
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

      {groups.map((group) => (
        <div
          key={group.title}
          className="flex flex-col items-start gap-2 text-sm"
        >
          <h2 className="font-mono text-xs text-muted">
            {group.title}
          </h2>

          {group.items.map(([label, href]) =>
            href ? (
              <a key={label} href={href}>
                {label}
              </a>
            ) : (
              <span key={label} aria-disabled="true">
                {label}
              </span>
            ),
          )}
        </div>
      ))}
    </footer>
  );
}

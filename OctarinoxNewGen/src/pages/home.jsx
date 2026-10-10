import codeRain from "../assets/octarinox-code-rain-main1440x2120.gif";

const projects = [
  {
    slug: "argus",
    name: "Argus",
    version: "v6.2.0",
    description:
      "Security and QA scanning. Python CLI and a Tauri desktop GUI.",
    metadata: "Python, Rust · MIT · 3 days ago",
    stars: "142",
  },
  {
    slug: "octar-lab",
    name: "OCTAR LAB",
    version: "v1.4.0",
    description:
      "Desktop workbench for prompts, models and experiments.",
    metadata: "Python · Apache-2.0 · 9 days ago",
    stars: "87",
  },
  {
    slug: "clinic-os",
    name: "Clinic OS",
    version: "pending",
    description: "Copy pending.",
    metadata: "— · — ·",
    stars: "—",
    pending: true,
  },
];

const reasons = [
  {
    title: "We needed these tools ourselves.",
    description:
      "Every project here started as an internal requirement and ran in production before it was made public.",
  },
  {
    title: "Code beats slides.",
    description:
      "When someone evaluates an engineering team, they need evidence. Our code is open. Read it, run it, judge it.",
  },
  {
    title: "The Georgian tech scene deserves more public engineering.",
    description:
      "Very little open engineering work comes out of the local market. We would rather help change that than complain about it.",
  },
  {
    title: "We borrow from open source constantly.",
    description:
      "Our entire stack sits on work other people gave away. Returning some of it is the minimum.",
  },
];





function Section({ label, children }) {
  return (
    <section
      className="mt-10 grid grid-cols-[7.5%_minmax(0,1fr)] px-[5%] pl-[2.9%]"
      aria-label={label}
    >
      <span
        className="justify-self-start self-start pt-3 font-mono text-[clamp(12px,1vw,18px)] tracking-[0.16em] [writing-mode:vertical-rl] [text-orientation:upright]"
        aria-hidden="true"
      >
        {label}
      </span>

      <div className="min-w-0">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="ox-home relative isolate mx-auto flex min-h-[max(100vh,clamp(900px,66.667vw,1280px))] w-full max-w-[1920px] flex-1 flex-col overflow-x-clip bg-[#111113] font-sans text-cream"
      style={{ backgroundImage: `url(${codeRain})` }}
>

      <main className="flex-1">
        <section className="px-[5%] py-[35px] pb-[42px] md:pl-[13%]">
          <h1 className="text-[clamp(2.75rem,4.584vw,5.5rem)] font-bold leading-[0.96] tracking-[-0.035em]">
            Tools we built
            <br />
            Released as we use them.
          </h1>

          <div className="mt-7 flex flex-wrap gap-4 sm:gap-6">
            <a
              href="/projects"
              className="inline-flex min-h-10 min-w-[150px] items-center justify-center rounded-3xl border border-[#a07bff66] bg-accent px-5 py-2 text-sm text-white"
            >
              Browse projects
            </a>

            <span
              className="inline-flex min-h-10 min-w-[150px] items-center justify-center rounded-3xl border border-[#a07bff66] bg-[#a07bff33] px-5 py-2 text-sm"
              aria-disabled="true"
            >
              View on GitHub
            </span>
          </div>
        </section>

        <section
          className="bg-[#a07bff33] px-[5%] py-4 sm:px-[10%]"
          aria-label="Project statistics"
        >
          <h2 className="mb-3 text-center text-[clamp(20px,2vw,38px)]">
            Built at Octarinox. Open for everyone.
          </h2>

          <ul className="grid grid-cols-2 gap-4 font-mono text-[clamp(12px,1vw,18px)] text-muted md:grid-cols-4 md:gap-5">
            {[
              "3 projects",
              "14 releases",
              "2 licenses",
              "Built in Tbilisi",
            ].map((stat) => (
              <li key={stat}>{stat}</li>
            ))}
          </ul>
        </section>

        <Section label="projects">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="grid min-h-[78px] grid-cols-1 items-center gap-3 border-b border-line py-4 md:grid-cols-[24%_minmax(0,1fr)_25%] md:gap-5"
            >
              <div>
                <h2>
                  <a
                    href={`/projects/${project.slug}`}
                    className={`text-[clamp(24px,2.083vw,40px)] font-bold leading-[1.1] ${
                      project.pending ? "text-muted" : ""
                    }`}
                  >
                    {project.name}
                  </a>
                </h2>

                <p className="mt-1 font-mono text-xs text-muted">
                  {project.version}
                </p>
              </div>

              <p className="text-sm text-muted md:text-[clamp(14px,1.05vw,20px)]">
                {project.description}
              </p>

              <div className="font-mono text-xs text-muted md:text-right">
                <p>{project.metadata}</p>
                <p className="mt-2 text-cream">★ {project.stars}</p>
              </div>
            </article>
          ))}
        </Section>

        <Section label="why">
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <article key={reason.title}>
                <h2 className="text-xl font-bold">
                  {reason.title}
                </h2>

                <p className="mt-1 max-w-[650px] text-sm leading-snug text-muted">
                  {reason.description}
                </p>

                {index === 0 && (
                  <a
                    href="/why-open-source"
                    className="text-sm text-accent"
                  >
                    Read the full version↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section label="who">
          <div className="pb-16">
            <p className="max-w-[900px] text-lg">
              Octarinox is an IT venture studio in Tbilisi, Georgia. We build
              AI-powered software products, some for our portfolio, some for
              clients.
            </p>

            <div className="mt-2 flex flex-wrap gap-5 text-sm text-accent">
              <a href="/about">More about Octarinox</a>
              <a
                href="https://octarinox.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                octarinox.com ↗
              </a>
            </div>
          </div>
        </Section>
      </main>

    </div>
  );
}


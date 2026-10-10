import "../assets/WhyOpenSource.css";
import codeRain from "../assets/octarinox-code-rain-main1440x2120.gif";


export default function WhyOpenSource() {
  return (
    <div className="ox-why"
    style={{ backgroundImage: `url(${codeRain})` }}>
      <main className="flex-1">
        <div className="why-editorial">
          <h1 className="why-label">Why Open Source</h1>

          <section className="why-row">
            <span className="why-number" aria-hidden="true">
              01
            </span>

            <div>
              <h2 className="why-title">
                We needed these tools ourselves.
              </h2>

              <p className="why-copy">
                Every project here started as an internal requirement.
              </p>

              <p className="why-copy">
                Each one ran in production before it was made public.
              </p>

              <p className="why-copy">
                Nothing on this site was written to be a showcase.
              </p>
            </div>
          </section>

          <section className="why-row">
            <span className="why-number" aria-hidden="true">
              02
            </span>

            <div>
              <h2 className="why-title">
                Code beats slides.
              </h2>

              <p className="why-copy">
                When someone evaluates an engineering team, they need evidence.
              </p>

              <p className="why-copy">
                Our code is open. Read it, run it, judge it.
              </p>
            </div>
          </section>

          <section className="why-row">
            <span className="why-number" aria-hidden="true">
              03
            </span>

            <div>
              <h2 className="why-title">
                The Georgian tech scene deserves more public engineering.
              </h2>

              <p className="why-copy">
                Very little open engineering work comes out of the local market.
              </p>

              <p className="why-copy">
                We would rather be part of changing that than complain.
              </p>
            </div>
          </section>

          <section className="why-row">
            <span className="why-number" aria-hidden="true">
              04
            </span>

            <div>
              <h2 className="why-title">
                We borrow from open source constantly.
              </h2>

              <p className="why-copy">
                Our entire stack sits on work other people gave away.
              </p>

              <p className="why-copy">
                Returning some of it is the minimum.
              </p>
            </div>
          </section>
        </div>

        <div className="flex flex-col items-end gap-3 px-[5%] py-5 font-mono text-xs text-accent">
          <a
            href="https://octarinox.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            octarinox.com ↗
          </a>

          <a href="/projects">
            See the tools: all projects
          </a>
        </div>
      </main>
    </div>
  );
}
import codeRainAboutUS from "../assets/octarinox-code-rain-slot-fade-1920x1280.gif";
import "../assets/AboutUs.css";


const sections = [
  {
    label: "company",
    title: "About Octarinox",
    paragraphs: [
      "Octarinox is an IT venture studio based in Tbilisi, Georgia.",
      "We build AI-powered software products, some for ourselves, some for clients.",
    ],
  },
  {
    label: "the",
    title: "The model",
    paragraphs: ["Copy pending: what a venture studio is and how we work."],
  },
  {
    label: "disciplines",
    title: "Disciplines in-house",
    paragraphs: ["Research, design, engineering, launch, operations."],
  },
  {
    label: "client",
    title: "Client work and our own products",
    paragraphs: ["Copy pending: how the two feed each other."],
  },
];



export default function AboutUs() {
  return (
    <div className="ox-about" 
    style={{ backgroundImage: `url(${codeRainAboutUS})` }}>

      <main className="flex-1">
        <div className="about-editorial">
          {sections.map((section, index) => {
            const Heading = index === 0 ? "h1" : "h2";

            return (
              <section key={section.title} className="about-row">
                <span className="about-label" aria-hidden="true">{section.label}</span>
                <div>
                  <Heading className="about-title">{section.title}</Heading>
                  {section.paragraphs.map((paragraph) => (
                    <p className="about-copy" key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="flex flex-col items-end gap-3 px-[5%] py-5 font-mono text-xs text-accent">
          <a href="https://octarinox.com" target="_blank" rel="noopener noreferrer">
            octarinox.com ↗
          </a>
          <a href="/projects">Contribute to the open tools</a>
        </div>
      </main>

    </div>
  );
}

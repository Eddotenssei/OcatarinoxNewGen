
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

const outputDirectory = path.join(
  __dirname,
  "../src/pages/generated"
);

// JSON serialization safely escapes dynamic text for generated JSX.
const literal = (value) => JSON.stringify(value ?? "");

function createFileName(title, id) {
  const slug = String(title ?? "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${slug || "project"}-${id}`;
}

function formatDate(value) {
  if (!value) return "";

  const date = new Date(`${value}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

const { data, error } = await supabase
  .from("openSourceCards")
  .select("*")
  .order("id", { ascending: true });

if (error) {
  console.error("Supabase error:", error.message);
  process.exit(1);
}

await fs.mkdir(outputDirectory, { recursive: true });

const generatedRoutes = [];
const imports = [];

for (const project of data) {
  const componentName = `Project${project.id}`;
  const fileName = createFileName(project.title, project.id);

  const title = literal(project.title);
  const content = literal(project.content);
  const description = literal(project.description);
  const githubUrl = literal(project.github_url);
  const image = literal(project.image);
  const language = literal(project.programming_language);
  const pageUrl = literal(project.page_url);
  const version = literal(project.version);
  const released = literal(formatDate(project.released));
  const extras = literal(project.extras);

  const pageContent = `
import React from "react";
import "./openSourceProject.css";



function OctarinoxMark() {
  return (
    <svg className="osp-brand-mark" viewBox="0 0 64 64"
      aria-hidden="true">
      <defs>
        <linearGradient id="osp-mark-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b68aff" />
          <stop offset="1" stopColor="#6f2fe0" />
        </linearGradient>
      </defs>
      <g fill="url(#osp-mark-grad)" stroke="#a97aff" strokeWidth="1.2">
        <path d="M31 4C43 4 51 12 51 21c0 8-7 13-14 10-6-3-5-9-1-12 4-3 9 0 9 4 4-8-4-17-14-19z"/>
        <path d="M60 31C60 43 52 51 43 51c-8 0-13-7-10-14 3-6 9-5 12-1 3 4 0 9-4 9 8 4 17-4 19-14z"/>
        <path d="M33 60C21 60 13 52 13 43c0-8 7-13 14-10 6 3 5 9 1 12-4 3-9 0-9-4-4 8 4 17 14 19z"/>
        <path d="M4 33C4 21 12 13 21 13c8 0 13 7 10 14-3 6-9 5-12 1-3-4 0-9 4-9-8-4-17 4-19 14z"/>
        <circle cx="32" cy="32" r="8" fill="#2b164b" />
        <circle cx="32" cy="32" r="4" fill="#a87aff" stroke="none" />
      </g>
    </svg>
  );
}

function ${componentName}() {
  const project = {
    title: ${title},
    content: ${content},
    description: ${description},
    github_url: ${githubUrl},
    image: ${image},
    programming_language: ${language},
    page_url: ${pageUrl},
    version: ${version},
    released: ${released},
    extras: ${extras},
  };

  return (
    <main className="osp-page">
      <div className="osp-layout">
        <aside className="osp-vertical-brand" aria-label="Octarinox Lab">
          {"OCTAR-LAB".split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </aside>

        <section className="osp-main-column">
          <p className="osp-eyebrow">
            Open-source project · Built for developers
          </p>

          <h1 className="osp-title">{project.title}</h1>

          <div className="osp-chips">
            {project.programming_language && (
              <span>{project.programming_language}</span>
            )}
            {project.version && <span>v{project.version}</span>}
            <span>Open Source</span>
          </div>

          <section className="osp-content-section">
            <h2>What it does</h2>
            <div className="osp-text-panel osp-description">
              {project.description || project.content || "No description provided yet."}
            </div>
          </section>

          {project.extras && (
            <section className="osp-content-section">
              <h2>Extras</h2>
              <div className="osp-text-panel">
                {project.extras}
              </div>
            </section>
          )}

          <section className="osp-content-section osp-readme-section" id="readme">
            <h2 className="osp-readme-heading">readme</h2>
            <div className="osp-text-panel osp-readme">
              {project.content || "No README content available yet."}
            </div>
          </section>
        </section>

        <aside className="osp-right-column">
          <div className="osp-repo-meta">
            <div className="osp-repo-topline">
              <span>project.mdx</span>
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="osp-stars"
                >
                  GitHub ↗
                </a>
              )}
            </div>

            <div className="osp-meta-row">
              <span>language</span>
              <span>{project.programming_language || "Not specified"}</span>
            </div>

            <div className="osp-meta-row">
              <span>version</span>
              <span>{project.version || "Not specified"}</span>
            </div>

            <div className="osp-meta-row">
              <span>released</span>
              <span>{project.released || "Not specified"}</span>
            </div>
          </div>

          <div className="osp-actions">
            {project.github_url && (
              <a
                className="osp-button osp-button-primary"
                href={project.github_url}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub ↗
              </a>
            )}

            {project.page_url && (
              <a
                className="osp-button osp-button-secondary"
                href={project.page_url}
                target="_blank"
                rel="noreferrer"
              >
                Project Website ↗
              </a>
            )}

            <a
              className="osp-button osp-button-secondary"
              href="#readme"
            >
              Documentation ↓
            </a>
          </div>

          {project.image && (
            <img
              className="osp-project-image"
              src={project.image}
              alt={project.title}
            />
          )}


          <div className="osp-built-by">
            <span>Built at Octarinox</span>
            <OctarinoxMark />
            <span>Open for everyone</span>
          </div>
        </aside>
      </div>

      <a
        className="osp-site-link"
        href="https://octarinox.com/"
        target="_blank"
        rel="noreferrer"
      >
        octarinox.com
      </a>
    </main>
  );
}

export default ${componentName};
`;

  const filePath = path.join(
    outputDirectory,
    `${fileName}.jsx`
  );

  await fs.writeFile(filePath, pageContent, "utf8");

  imports.push(
    `import ${componentName} from "./${fileName}.jsx";`
  );

  generatedRoutes.push(`{
    path: "/projects/${fileName}",
    element: <${componentName} />
  }`);

  console.log(`Generated: ${fileName}.jsx`);
}

const routesFile = `
import React from "react";
${imports.join("\n")}

export const generatedRoutes = [
  ${generatedRoutes.join(",\n")}
];
`;

await fs.writeFile(
  path.join(outputDirectory, "generatedRoutes.jsx"),
  routesFile,
  "utf8"
);

// Shared styling for every generated project page.
const css = `
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap");

.osp-page {
  min-height: 100vh;
  background: #111113;
  color: #dcd9d2;
  font-family: "Inter", sans-serif;
  padding: 50px 5%;
  box-sizing: border-box;
}

.osp-page * {
  box-sizing: border-box;
}

.osp-page a {
  color: inherit;
  text-decoration: none;
}

.osp-page a:hover {
  color: #a07bff;
}

.osp-page a:focus-visible {
  outline: 2px solid #a07bff;
  outline-offset: 4px;
}

.osp-layout {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr) minmax(280px, 360px);
  gap: 38px;
  max-width: 1440px;
  margin: 0 auto;
}

.osp-vertical-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: #a07bff;
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  padding-top: 8px;
}

.osp-main-column,
.osp-right-column {
  min-width: 0;
}

.osp-eyebrow {
  color: #a07bff;
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  line-height: 1.8;
  margin: 0 0 18px;
}

.osp-title {
  font-size: clamp(36px, 5vw, 72px);
  line-height: 1.05;
  letter-spacing: -0.055em;
  overflow-wrap: anywhere;
  margin: 0 0 25px;
}

.osp-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-bottom: 65px;
}

.osp-chips span {
  border: 1px solid #3b2c53;
  border-radius: 5px;
  color: #c5a9ff;
  background: #19141f;
  padding: 7px 10px;
  font: 11px "JetBrains Mono", monospace;
  overflow-wrap: anywhere;
}

.osp-content-section {
  margin-bottom: 44px;
}

.osp-content-section h2 {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: .16em;
  color: #a07bff;
  margin: 0 0 16px;
}

.osp-text-panel {
  color: #b8b4c0;
  background: #151419;
  border: 1px solid #2a2a2e;
  border-radius: 8px;
  padding: 23px;
  line-height: 1.9;
  font-size: 14px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.osp-description {
  font-size: 16px;
}

.osp-readme-section {
  scroll-margin-top: 30px;
}

.osp-readme-heading {
  font-family: "JetBrains Mono", monospace;
}

.osp-repo-meta {
  border: 1px solid #30283b;
  background: #151319;
  border-radius: 9px;
  padding: 16px;
  margin-bottom: 16px;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
}

.osp-repo-topline,
.osp-meta-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.osp-repo-topline {
  padding-bottom: 17px;
  margin-bottom: 5px;
  border-bottom: 1px solid #30283b;
  color: #cdb9ff;
}

.osp-stars {
  color: #a07bff !important;
  white-space: nowrap;
}

.osp-meta-row {
  padding: 11px 0;
  border-bottom: 1px solid #242129;
}

.osp-meta-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.osp-meta-row span:first-child {
  color: #77717f;
}

.osp-meta-row span:last-child {
  color: #dcd9e5;
  text-align: right;
  overflow-wrap: anywhere;
}

.osp-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 22px;
}

.osp-button {
  display: block;
  text-align: center;
  padding: 13px 16px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  transition: background .2s, border-color .2s;
}

.osp-button-primary {
  background: #8656df;
  color: #fff !important;
  border: 1px solid #8656df;
}

.osp-button-primary:hover {
  background: #986df0;
}

.osp-button-secondary {
  border: 1px solid #3b3445;
  color: #c9c3d2 !important;
  background: #17151b;
}

.osp-button-secondary:hover {
  border-color: #a07bff;
}

.osp-project-image {
  display: block;
  width: 100%;
  max-height: 230px;
  object-fit: contain;
  border: 1px solid #30283b;
  border-radius: 8px;
  background: #151319;
  padding: 12px;
  margin-bottom: 18px;
}

.osp-illustration {
  width: 100%;
  overflow: hidden;
  border: 1px solid #30283b;
  border-radius: 8px;
  background: #141119;
}

.osp-illustration svg {
  display: block;
  width: 100%;
  height: auto;
}

.osp-built-by {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: #8d849a;
  font-size: 10px;
  margin-top: 20px;
}

.osp-brand-mark {
  width: 35px;
  flex-shrink: 0;
}

.osp-site-link {
  display: block;
  max-width: 1440px;
  margin: 45px auto 0;
  color: #8d849a !important;
  font: 11px "JetBrains Mono", monospace;
  text-align: right;
}

@media (max-width: 1000px) {
  .osp-page {
    padding: 35px 24px;
  }

  .osp-layout {
    grid-template-columns: 28px minmax(0, 1fr);
    gap: 24px;
  }

  .osp-right-column {
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
    gap: 16px;
  }

  .osp-repo-meta,
  .osp-actions,
  .osp-project-image,
  .osp-illustration,
  .osp-built-by {
    min-width: 0;
    margin-bottom: 0;
  }

  .osp-built-by {
    grid-column: 1 / -1;
  }

  .osp-chips {
    margin-bottom: 42px;
  }
}

@media (max-width: 600px) {
  .osp-page {
    padding: 25px 16px;
  }

  .osp-layout {
    grid-template-columns: 20px minmax(0, 1fr);
    gap: 13px;
  }

  .osp-title {
    font-size: 36px;
  }

  .osp-chips {
    margin-bottom: 35px;
  }

  .osp-text-panel {
    padding: 16px;
    font-size: 13px;
  }

  .osp-right-column {
    grid-template-columns: minmax(0, 1fr);
  }

  .osp-built-by {
    grid-column: auto;
  }
}
`;

await fs.writeFile(
  path.join(outputDirectory, "openSourceProject.css"),
  css,
  "utf8"
);

console.log(`Generated ${data.length} project pages.`);
console.log("Generated routes and shared CSS.");


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

function Project21() {
  const project = {
    title: "RAC GINDA CHAWERE",
    content: "VAXO BOZIA",
    description: "VAXO YRURA",
    github_url: "https://github.com/",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    programming_language: "angular, react, html",
    page_url: "",
    version: "1.25.2.DASDASDA",
    released: "28 Sept 2026",
    extras: "CHICHIS BUASILI AQ",
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

export default Project21;

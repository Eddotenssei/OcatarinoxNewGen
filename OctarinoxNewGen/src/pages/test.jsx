import React from "react";
// import { ArrowUpRight, Star } from "lucide-react";
import "../assets/test.css";

function Test() {
  return (
    <div className="illustration" aria-label="Purple line-art illustration of a laboratory flask and experiment graph">
      <svg viewBox="0 0 360 250" role="img" aria-hidden="true">
        <defs>
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#6d4ab3" strokeWidth=".45" opacity=".6" />
          </pattern>
          <linearGradient id="liquid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9b6bff" stopOpacity=".55" />
            <stop offset="100%" stopColor="#9b6bff" stopOpacity=".18" />
          </linearGradient>
          <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e7d9ff" stopOpacity=".16" />
            <stop offset="100%" stopColor="#9a6cff" stopOpacity=".04" />
          </linearGradient>
        </defs>
        <rect width="360" height="250" fill="url(#grid)" opacity=".9" />
        <path d="M15 15h14M15 15v14M345 15h-14M345 15v14M15 235h14M15 235v-14M345 235h-14M345 235v-14"
          stroke="#ad8aff" strokeWidth="1.3" fill="none" />
        <text x="28" y="31" fill="#a99ac7" fontSize="7" letterSpacing="1.2">OCTAR//LAB</text>
        <text x="29" y="217" fill="#8d7aa8" fontSize="7" letterSpacing=".8">RUN 014 · PyQt6</text>
        {/* flask */}
        <path d="M112 38h32M118 38v52L82 177Q79 184 89 184h78q10 0 6-8L137 90V38"
          fill="url(#glass)" stroke="#dfd0ff" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M101 137h53l20 40q2 5-5 5H87q-6 0-3-6z" fill="url(#liquid)" stroke="#a47cff" strokeWidth="1" />
        <path d="M112 137h42" stroke="#d3bfff" strokeWidth="1.1" />
        <path d="M118 43v47L88 169M137 43v47l32 79" fill="none" stroke="#fff" strokeWidth=".8" opacity=".5" />
        <circle cx="124" cy="116" r="4" fill="none" stroke="#d8c7ff" strokeWidth="1" />
        <circle cx="138" cy="103" r="2.2" fill="none" stroke="#d8c7ff" strokeWidth=".8" />
        <circle cx="146" cy="128" r="2.5" fill="none" stroke="#d8c7ff" strokeWidth=".8" />
        <circle cx="117" cy="160" r="2.4" fill="none" stroke="#d8c7ff" strokeWidth=".8" />
        <circle cx="135" cy="152" r="3" fill="none" stroke="#d8c7ff" strokeWidth=".8" />
        <circle cx="155" cy="166" r="2" fill="none" stroke="#d8c7ff" strokeWidth=".8" />
        {/* model graph */}
        <g stroke="#a77cff" strokeWidth="1" fill="none" opacity=".9">
          <path d="M235 57L292 86L329 44M292 86L253 130L322 134M235 57L329 44M292 86L322 134" />
          <path d="M152 87C185 72 205 63 235 57M151 133C189 145 213 144 253 130" strokeDasharray="2 4" opacity=".7" />
        </g>
        <g fill="#6e4eae" stroke="#b69aff" strokeWidth="1.3">
          <circle cx="235" cy="57" r="7.5"/><circle cx="292" cy="86" r="7.5"/>
          <circle cx="329" cy="44" r="7.5"/><circle cx="253" cy="130" r="7.5"/>
          <circle cx="322" cy="134" r="7.5"/>
        </g>
        <g fill="#cdb9ff">
          <circle cx="235" cy="57" r="2"/><circle cx="292" cy="86" r="2"/>
          <circle cx="329" cy="44" r="2"/><circle cx="253" cy="130" r="2"/>
          <circle cx="322" cy="134" r="2"/>
        </g>
        {/* tiny terminal */}
        <rect x="204" y="160" width="142" height="67" rx="5" fill="#141119" stroke="#6d4bb2" strokeWidth=".9" />
        <path d="M204 172h142" stroke="#4b376b" strokeWidth=".8" />
        <circle cx="212" cy="166" r="1.5" fill="#a982ff"/><circle cx="218" cy="166" r="1.5" fill="#8c6bd4"/><circle cx="224" cy="166" r="1.5" fill="#6f579f"/>
        <text x="211" y="181" fontSize="5.8" fill="#b6a2dc">› experiment: eval("v1.4")</text>
        <text x="307" y="181" fontSize="5.8" fill="#a78cff">loss 0.032</text>
        <path d="M282 218l12-6 8 3 10-8 10 2 12-8 10-2" stroke="#a77cff" strokeWidth="1.3" fill="none" />
        <path d="M282 222h60" stroke="#4c3a68" strokeWidth=".6" />
      </svg>
    </div>
  );
}

function OctarinoxMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="markGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b68aff" />
          <stop offset="1" stopColor="#6f2fe0" />
        </linearGradient>
      </defs>
      <g fill="url(#markGrad)" stroke="#a97aff" strokeWidth="1.2">
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

export default function App() {
  return (
    <main className="page">
      <div className="layout">
        <aside className="vertical-brand" aria-label="Octarinox Lab">
          <span>O</span><span>C</span><span>T</span><span>A</span><span>R</span><span>-</span><span>L</span><span>A</span><span>B</span>
        </aside>

        <section className="main-column">
          <p className="eyebrow">Desktop workbench for prompts, models and experiments, built in PyQt6</p>
          <div className="chips">
            <span>Apache-2.0</span>
            <span>Python · PyQt6</span>
            <span>v1.4.0</span>
          </div>

          <section className="content-section what-section">
            <h2>What it does</h2>
            <div className="text-panel description">
              OCTAR LAB keeps prompt authoring, model configuration and experiment tracking in one local application.<br />
              It runs locally. No hosted service required.
            </div>
          </section>

          <section className="content-section readme-section">
            <h2 className="readme-heading">readme</h2>
            <div className="text-panel readme">
              We wanted prompts, model settings and experiment notes in one place, on our own machines.<br />
              It was in production use at Octarinox before we released it.
            </div>
          </section>
        </section>

        <aside className="right-column">
          <div className="repo-meta">
            <div className="repo-topline">
              <span>octar-lab.mdx</span>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="stars"> 142 GitHub</a>
            </div>
            <div className="meta-row"><span>language</span><span>Python, Rust</span></div>
            <div className="meta-row"><span>version</span><span>v6.2.0</span></div>
            <div className="meta-row"><span>released</span><span>12 Mar 2026</span></div>
          </div>

          <div className="actions">
            <a className="button button-primary" href="https://github.com/" target="_blank" rel="noreferrer">View on GitHub</a>
            <a className="button button-secondary" href="#readme">Documentation</a>
          </div>

          <Test />

          <div className="built-by">
            <span>Built at Octarinox</span>
            <OctarinoxMark />
            <span>Open for everyone</span>
          </div>
        </aside>
      </div>
      <a className="site-link" href="https://octarinox.com/" target="_blank" rel="noreferrer">octarinox.com</a>
    </main>
  );
}
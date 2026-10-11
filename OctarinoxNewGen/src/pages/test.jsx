import "../assets/Test.css";
import { useLayoutEffect, useRef, useState } from "react";

import codeRain from "../assets/octarinox-code-rain-main1440x2120.gif";


/*
 * Tuple format:
 * [x, y, width, height, fontSize, fontWeight,
 *  color, fontFamily, text, alignment?, vertical?]
 *
 * The original layer order and duplicate text layers are preserved.
 */

const underlayText = [
  [1680, 20, 53.333336, 10.264151, 16, 600, "white", "inter", "About"],
  [1521, 17, 136, 10, 16, 600, "white", "inter", "Why open source"],
  [1425, 17, 72, 15, 16, 600, "white", "inter", "Projects"],
  [
    466, 339, 852, 51, 48, 400, "muted", "inter",
    "Built at Octarinox. Open for everyone.\n\n",
  ],
];

const textLayers = [
  // Header
  [69, 9, 116, 22, 22, 700, "cream", "inter", "Octarinox"],
  [1425, 15, 72, 10.264151, 16, 400, "white", "inter", "Projects"],
  [1521, 15, 134, 10, 16, 400, "white", "inter", "Why open source"],
  [1521, 15, 134, 10, 16, 400, "white", "inter", "Why open source"],
  [1680, 15, 53.333336, 10.264151, 16, 400, "white", "inter", "About"],
  [1780, 12, 16, 17, 18, 400, "muted", "mono", "◐"],
  [1806, 14, 84, 16, 16, 400, "cream", "mono", "GitHub ↗", "right"],

  // Hero
  [250, 64, 756, 61.584908, 88, 700, "cream", "inter", "Tools we built"],
  [
    250, 146, 1412, 61.584908, 88, 700, "cream", "inter",
    "Released as we use them.",
  ],
  [277, 268, 152, 17, 18, 400, "white", "inter", "Browse projects", "center"],
  [488, 268, 140, 11, 18, 400, "cream", "inter", "View on GitHub", "center"],

  // Projects label
  [56, 430, 13, 226, 24, 400, "white", "inter", "projects", "left", true],

  // Argus
  [194, 435, 119, 35, 40, 700, "cream", "inter", "Argus"],
  [194, 482, 45, 13, 12, 400, "muted", "mono", "v6.2.0"],
  [
    651, 450, 597, 21, 20, 400, "muted", "inter",
    "Security and QA scanning. Python CLI and a Tauri desktop GUI.",
  ],
  [1688, 472, 58.666664, 10.264151, 13, 400, "cream", "mono", "★ 142", "right"],
  [
    1362, 462, 285, 13, 15, 400, "muted", "mono",
    "Python, Rust · MIT · 3 days ago", "right",
  ],

  // OCTAR LAB
  [192, 512, 231, 40, 40, 700, "cream", "inter", "OCTAR LAB"],
  [194, 560, 45, 12, 12, 400, "muted", "mono", "v1.4.0"],
  [
    692, 528, 556, 18, 20, 400, "muted", "inter",
    "Desktop workbench for prompts, models and experiments.",
  ],
  [1693, 547, 48, 10.264151, 13, 400, "cream", "mono", "★ 87", "right"],
  [
    1355, 540, 298, 20, 15, 400, "muted", "mono",
    "Python · Apache-2.0 · 9 days ago", "right",
  ],

  // Clinic OS
  [192, 590, 179, 38, 40, 700, "muted", "inter", "Clinic OS"],
  [192, 634, 52, 14, 12, 400, "muted", "mono", "pending"],
  [1108, 608, 138, 21, 20, 400, "muted", "inter", "Copy pending."],
  [1698, 624, 38.666668, 10.264151, 15, 400, "cream", "mono", "★ —", "right"],
  [1565, 627, 51, 12, 12, 400, "muted", "mono", "— · — · ", "right"],

  // Why
  [54, 789, 20, 87, 24, 400, "white", "inter", "why", "left", true],
  [
    192, 702, 398, 22, 24, 700, "cream", "inter",
    "We needed these tools ourselves.",
  ],
  [
    195, 729, 433, 14, 15, 400, "muted", "inter",
    "Every project here started as an internal requirement and ran",
  ],
  [
    195, 744, 288, 14, 15, 400, "muted", "inter",
    "in production before it was made public.",
  ],
  [192, 775, 221, 22, 24, 700, "cream", "inter", "Code beats slides."],
  [
    194, 802, 484, 18, 15, 400, "muted", "inter",
    "When someone evaluates an engineering team, they need evidence.",
  ],
  [
    194, 816, 290, 16, 15, 400, "muted", "inter",
    "Our code is open. Read it, run it, judge it.",
  ],
  [
    192, 852, 708, 23, 24, 700, "cream", "inter",
    "The Georgian tech scene deserves more public engineering.",
  ],
  [
    195, 876, 454, 14, 15, 400, "muted", "inter",
    "Very little open engineering work comes out of the local market.",
  ],
  [
    197, 890, 407, 14, 15, 400, "muted", "inter",
    "We would rather help change that than complain about it.",
  ],
  [
    192, 931, 477, 23, 24, 700, "cream", "inter",
    "We borrow from open source constantly.",
  ],
  [
    195, 956, 381, 14, 15, 400, "muted", "inter",
    "Our entire stack sits on work other people gave away.",
  ],
  [
    195, 972, 258, 14, 15, 400, "muted", "inter",
    "Returning some of it is the minimum.",
  ],
  [
    481, 744, 163, 17, 15, 400, "accent", "inter",
    "Read the full version↗",
  ],

  // Who
  [55, 1030, 15, 87, 24, 400, "white", "inter", "who", "left", true],
  [
    192, 1037, 682, 19, 20, 400, "cream", "inter",
    "Octarinox is an IT venture studio in Tbilisi, Georgia. We build AI-powered",
  ],
  [
    192, 1060, 559, 19, 20, 400, "cream", "inter",
    "software products, some for our portfolio, some for clients.",
  ],
  [
    193, 1082, 155, 14, 15, 400, "accent", "inter",
    "More about Octarinox",
  ],
  [362, 1082, 120, 14, 15, 400, "accent", "inter", "octarinox.com ↗"],

  // Footer brand
  [95, 1183, 97, 18, 20, 700, "cream", "inter", "Octarinox"],
  [
    95, 1210, 236, 13, 15, 400, "muted", "inter",
    "IT venture studio, Tbilisi, Georgia",
  ],
  [
    95, 1230, 266, 14, 15, 400, "cream", "inter",
    "Built at Octarinox. Open for everyone.",
  ],

  // Footer projects
  [1395, 1190, 73, 16, 15, 400, "muted", "mono", "projects"],
  [1395, 1209, 40, 14, 14, 400, "cream", "inter", "Argus"],
  [1395, 1229, 80, 13, 14, 400, "cream", "inter", "OCTAR LAB"],
  [1395, 1249, 63, 14, 14, 400, "cream", "inter", "Clinic OS"],

  // Footer Octarinox
  [1561, 1189, 87, 15, 16, 400, "muted", "mono", "octarinox"],
  [1561, 1209, 41, 14, 14, 400, "cream", "inter", "About"],
  [1561, 1229, 75, 15, 14, 400, "cream", "inter", "Services ↗"],
  [1562, 1249, 73, 14, 14, 400, "cream", "inter", "Contact ↗"],

  // Footer community
  [1737, 1186, 87, 15, 16, 400, "muted", "mono", "community"],
  [1737, 1209, 64, 14, 14, 400, "cream", "inter", "GitHub ↗"],
  [1738, 1230, 62, 15, 14, 400, "cream", "inter", "Issues ↗"],
  [1738, 1249, 97, 14, 14, 400, "cream", "inter", "Discussions ↗"],

  // Copyright
  [
    82, 1254, 621, 10, 12, 400, "muted", "mono",
    "© 2026 Octarinox LLC · Code licensed under MIT and Apache-2.0 · Site content CC BY 4.0",
  ],
];

const statistics = [
  { x: 387, width: 127, value: "3", label: " projects" },
  { x: 776, width: 144, value: "14", label: " releases" },
  { x: 1164, width: 124, value: "2", label: " licenses" },
  { x: 1551, width: 193, value: "Built in", label: " Tbilisi" },
];

function TextLayer({ item }) {
  const [
    x,
    y,
    width,
    height,
    fontSize,
    fontWeight,
    color,
    fontFamily,
    text,
    alignment = "left",
    vertical = false,
  ] = item;

  return (
    <span
      className={
        "home-text home-color-" + color +
        (fontFamily === "mono" ? " home-mono" : "")
      }
      style={{
        left: x,
        top: y,
        width,
        height,
        fontSize,
        fontWeight,
        textAlign: alignment,
      }}
    >
      {vertical ? Array.from(text).join("\n") : text}
    </span>
  );
}

export default function Test() {
  return (
    <main className="home-artboard" aria-label="Octarinox home page"
    style={{ backgroundImage: `url(${codeRain})` }}>
      {/* These layers are below the background in the original design. */}
      <div className="home-underlay" aria-hidden="true">
        {underlayText.map((item, index) => (
          <TextLayer key={index} item={item} />
        ))}
      </div>

      {/*
        Use a PNG exported from the original background rectangle,
        retaining its existing 70% image-fill opacity.
        No additional opacity is applied here.
      */}


      <div className="home-shapes" aria-hidden="true">
        <div className="home-browse-background" />
        <div className="home-github-background" />

        <div className="home-nav-background home-nav-projects" />
        <div className="home-nav-background home-nav-about" />
        <div className="home-nav-background home-nav-why" />

        <div className="home-statistics-glass" />
        <div className="home-footer-glass" />
      </div>

      <div className="home-content">
        {textLayers.map((item, index) => (
          <TextLayer key={index} item={item} />
        ))}

        {statistics.map((stat) => (
          <span
            key={stat.x}
            className="home-statistic home-mono"
            style={{
              left: stat.x,
              top: 360,
              width: stat.width,
              height: 20,
            }}
          >
            <span className="home-color-cream">{stat.value}</span>
            <span className="home-color-muted">{stat.label}</span>
          </span>
        ))}
      </div>

      <div className="home-lines" aria-hidden="true">
        <div
          className="home-line"
          style={{ left: 194, top: 573, width: 1613 }}
        />
        <div
          className="home-line"
          style={{ left: 195, top: 495, width: 1612 }}
        />
        <div
          className="home-line"
          style={{ left: 193, top: 652, width: 1614 }}
        />
        <div
          className="home-line"
          style={{ left: 0, top: 48, width: 1920 }}
        />
      </div>
    </main>
  );
}

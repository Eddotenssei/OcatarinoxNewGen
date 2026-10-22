import { useEffect, useState } from "react";
import "../assets/Blogs.css";
import codeRainAboutUS from "../assets/octarinox-code-rain-slot-fade-1920x1280.gif";

const C = "#dcd9d2";
const M = "#7f7d86";
const A = "#a07bff";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/blogs");

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();

        setBlogs(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const visibleBlogs = blogs.slice(0, 3);

  const blogRows = visibleBlogs.flatMap((blog, index) => {
    const y = 460 + index * 218;

    return [
      [
        blog.title || "Untitled Blog",
        423,
        y,
        850,
        48,
        40,
        { b: 700, c: "#ffffff" },
      ],
      [
        `By ${blog.author || "Unknown author"}`,
        425,
        y + 52,
        850,
        22,
        16,
        { c: M },
      ],
      [blog.text || "", 425, y + 83, 1370, 85, 16, { c: C }],
    ];
  });

  const rows = [
    [
      "Written by the people who maintain the code.",
      427,
      233,
      700,
      22,
      18,
      { c: M },
    ],
    [
      "Engineering notes from the tools we ship.",
      489,
      98,
      1100,
      58,
      48,
      { c: "#ffffff" },
    ],
    ["Blogs", 52, 568, 13, 145, 24, { m: true, c: "#ffffff", a: "center" }],
    ...blogRows,
  ];

  if (loading) {
    rows.push(["Loading blogs...", 425, 500, 700, 40, 24, { c: M }]);
  } else if (error) {
    rows.push([
      "Unable to load blogs. Please try again later.",
      425,
      500,
      1000,
      40,
      20,
      { c: "#ff8b8b" },
    ]);
  } else if (blogs.length === 0) {
    rows.push(["No blogs available yet.", 425, 500, 700, 40, 24, { c: M }]);
  }

  return (
    <main className="blogs-page" aria-label="Blogs">
      <svg viewBox="0 0 1920 1280" xmlns="http://www.w3.org/2000/svg">
        <rect width="1920" height="1280" fill="#131315" />

        <image
          href={codeRainAboutUS}
          width="1920"
          height="1280"
          preserveAspectRatio="none"
        />

        <rect
          x="96"
          y="207"
          width="1785"
          height="904"
          rx="64"
          fill={A}
          fillOpacity=".04"
          stroke={A}
          strokeOpacity=".32"
        />

        <foreignObject x="130" y="390" width="1700" height="680">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            className="blogs-scroll-list"
          >
            {loading ? (
              <p className="blogs-status">Loading blogs...</p>
            ) : error ? (
              <p className="blogs-status">
                Unable to load blogs. Please try again later.
              </p>
            ) : blogs.length === 0 ? (
              <p className="blogs-status">No blogs available yet.</p>
            ) : (
              blogs.map((blog, index) => (
                <article key={blog.id ?? index} className="blog-scroll-card">
                  <div className="blog-scroll-image">
                    {blog.image_url && (
                      <img
                        src={blog.image_url}
                        alt={blog.title || "Blog image"}
                      />
                    )}
                  </div>

                  <div className="blog-scroll-content">
                    <h2>{blog.title || "Untitled Blog"}</h2>

                    <p className="blog-scroll-author">
                      By {blog.author || "Unknown author"}
                    </p>

                    <p className="blog-scroll-text">{blog.text || ""}</p>
                  </div>
                </article>
              ))
            )}
          </div>
        </foreignObject>

        <text
          x="988.5"
          y="290"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#ffffff"
          fontSize="48"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
          style={{ pointerEvents: "none" }}
        >
          Blogs
        </text>
      </svg>
    </main>
  );
}

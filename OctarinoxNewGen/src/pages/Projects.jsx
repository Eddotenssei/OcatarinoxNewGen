import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../services/supabase";
import "../assets/Projects.css";
import codeRain from "../assets/octarinox-code-rain-main1440x2120.gif";


const createFileName = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export default function CodeCards() {
  const [activeFilter, setActiveFilter] = useState("ყველა");
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function getCards() {
      try {
        const { data, error } = await supabase
          .from("openSourceCards")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Failed to fetch projects:", error);
          return;
        }

        setCards(data ?? []);
      } finally {
        setLoading(false);
      }
    }

    getCards();
  }, []);

  // Build language filters dynamically from Supabase data.
  const languages = [
    "All",
    ...new Set(
      cards.flatMap((card) =>
        card.programming_language
          ? card.programming_language
              .split(",")
              .map((lang) => lang.trim())
              .filter(Boolean)
              .map(
                (lang) =>
                  lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase(),
              )
          : [],
      ),
    ),
  ];

  // Filter projects by programming language.
  const filteredCards =
    activeFilter === "ყველა"
      ? cards
      : cards.filter((card) =>
          card.programming_language
            ?.split(",")
            .map((lang) => lang.trim().toLowerCase())
            .includes(activeFilter.toLowerCase()),
        );

  if (loading) {
    return (
      <div className="ox-projects">
        <main className="flex-1">
          <div className="projects-directory-wrap">
            <section
              className="projects-directory"
              aria-label="Project directory"
            >
              <p className="projects-intro text-muted">Loading projects...</p>
            </section>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="ox-projects"
    style={{ backgroundImage: `url(${codeRain})` }}>
      <main className="flex-1">
        <h1 className="projects-tagline">
          Built at Octarinox. Open for everyone.
        </h1>

        <div className="projects-directory-wrap">
          <span className="projects-label" aria-hidden="true">
            projects
          </span>

          <section
            className="projects-directory"
            aria-label="Project directory"
          >
            <p className="projects-intro text-muted">
              Open-source projects built by the Octarinox community.
            </p>

            {/* Dynamic programming-language filters */}
            <div
              className="projects-controls"
              role="group"
              aria-label="Filter projects by programming language"
            >
              <div className="projects-filter-list">
                {languages.map((lang) => (
                  <button
                    type="button"
                    key={lang}
                    aria-pressed={activeFilter === lang}
                    onClick={() => setActiveFilter(lang)}
                    className={
                      "projects-filter " +
                      (activeFilter === lang ? "is-active" : "")
                    }
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <p className="sr-only" role="status">
              {filteredCards.length} projects found.
            </p>

            {/* Projects fetched from Supabase */}
            {filteredCards.map((card) => {
              const slug = createFileName(card.title);

              const languages = card.programming_language
                ?.split(",")
                .map((lang) => lang.trim())
                .filter(Boolean);

              return (
                <article
                  key={card.id}
                  className="projects-row"
                  onClick={() => navigate(`/projects/${slug}`)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      navigate(`/projects/${slug}`);
                    }
                  }}
                  role="link"
                  tabIndex={0}
                  aria-label={`View project ${card.title}`}
                  style={{ cursor: "pointer" }}
                >
                  <div className="projects-preview">
                    {card.image ? (
                      <img src={card.image} alt={card.title} loading="lazy" />
                    ) : (
                      <span>{languages?.[0] ?? "Open source"}</span>
                    )}
                  </div>

                  <div className="projects-details">
                    <div>
                      <h2>
                        <span className="projects-title">{card.title}</span>
                      </h2>

                      <p className="mt-3 font-mono text-xs text-muted">
                        {languages?.join(" · ") || "Open source"}
                      </p>
                    </div>

                    <p className="projects-description text-muted">
                      {card.content || "No description available."}
                    </p>

                    <div className="text-right font-mono text-xs text-muted">
                      {card.github_url ? (
                        <a
                          href={card.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="projects-title"
                        >
                          GitHub ↗
                        </a>
                      ) : (
                        <span>Open source</span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}

            {!filteredCards.length && (
              <div className="py-24 text-center">
                <h2 className="text-xl">
                  {cards.length ? "No projects found" : "No projects available"}
                </h2>

                {cards.length > 0 && activeFilter !== "ყველა" && (
                  <button
                    type="button"
                    className="mt-4 text-accent"
                    onClick={() => setActiveFilter("ყველა")}
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

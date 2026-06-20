import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export default function CodeCards() {
  const [activeFilter, setActiveFilter] = useState("ყველა");
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCards() {
      const { data, error } = await supabase
        .from("openSourceCards")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setCards(data);
      }

      setLoading(false);
    }

    getCards();
  }, []);

  const languages = [
    "ყველა",
    ...new Set(cards.map((card) => card.programming_language).filter(Boolean)),
  ];

  const filteredCards =
    activeFilter === "ყველა"
      ? cards
      : cards.filter((card) => card.programming_language === activeFilter);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a14] flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a14] font-mono text-gray-200 p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-[1330px] min-h-[650px] bg-[#11111b]/50 rounded-2xl border border-white/5 py-[72px] px-10 shadow-xl backdrop-blur-sm flex flex-col">
        {/* Filter Buttons */}
        <div className="flex justify-between items-center gap-4 mb-8 pb-6 border-b border-white/5">
          <div className="flex gap-2 flex-wrap">
            {languages.map((lang) => {
              const isActive = activeFilter === lang;

              return (
                <button
                  key={lang}
                  onClick={() => setActiveFilter(lang)}
                  className={`px-5 py-2 rounded-lg text-xs font-semibold cursor-pointer border transition-all ${
                    isActive
                      ? "bg-blue-500/10 border-blue-500 text-blue-400"
                      : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  {lang}
                </button>
              );
            })}
          </div>

          <p className="text-gray-500 text-xs">{filteredCards.length} ბარათი</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              onClick={() => {
                if (card.page_url) {
                  window.open(card.page_url, "_blank");
                }
              }}
              className="bg-[#11111b] border border-white/5 rounded-xl p-5 cursor-pointer hover:border-white/20 transition-all hover:-translate-y-1 flex flex-col"
            >
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}

              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400">
                  {card.programming_language}
                </span>

                <span className="text-gray-600 text-sm">↗</span>
              </div>

              <h3 className="text-white font-bold text-sm mb-2">
                {card.title}
              </h3>

              <p className="text-gray-400 text-[11px] leading-relaxed">
                {card.content}
              </p>

              {card.github_url && (
                <a
                  href={card.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-4 text-xs text-blue-400 hover:text-blue-300"
                >
                  GitHub →
                </a>
              )}
            </div>
          ))}
        </div>

        {filteredCards.length === 0 && (
          <div className="text-center text-gray-600 text-sm my-auto py-16">
            ბარათები ვერ მოიძებნა
          </div>
        )}
      </div>
    </div>
  );
}

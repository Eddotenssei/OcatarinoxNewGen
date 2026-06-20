import { useState } from "react";

const LANGUAGES = ["ყველა", "JavaScript", "Python", "Rust", "Go", "TypeScript", "C++"];

const CARDS = [
  {
    id: 1,
    title: "React Counter",
    lang: "JavaScript",
    color: "#f7df1e",
    bg: "#f7df1e22",
    description: "მარტივი counter კომპონენტი useState hook-ით",
    code: `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`
  },
  {
    id: 2,
    title: "Async Fetch",
    lang: "TypeScript",
    color: "#3178c6",
    bg: "#3178c622",
    description: "API-დან მონაცემების async/await-ით წამოღება",
    code: `async function fetchUser(id: number): Promise<User> {
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json();
}`
  },
  {
    id: 3,
    title: "List Comprehension",
    lang: "Python",
    color: "#3776ab",
    bg: "#3776ab22",
    description: "სიის გენერირება list comprehension-ით",
    code: `numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers if x % 2 == 0]`
  },
  {
    id: 4,
    title: "Ownership & Borrowing",
    lang: "Rust",
    color: "#ce422b",
    bg: "#ce422b22",
    description: "Rust-ის ownership სისტემის მაგალითი",
    code: `fn main() {
  let s1 = String::from("hello");
  let s2 = &s1; // borrow ხდება
}`
  }
];

export default function CodeCards() {
  const [activeFilter, setActiveFilter] = useState("ყველა");
  const [selectedCard, setSelectedCard] = useState(null);
  const [copied, setCopied] = useState(false);

  // ფილტრაციის ფუნქცია
  let filteredCards = CARDS;
  if (activeFilter !== "ყველა") {
    filteredCards = CARDS.filter(function(card) {
      return card.lang === activeFilter;
    });
  }

  // კოპირების ფუნქცია
  function handleCopy(text) {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(function() {
      setCopied(false);
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-[#0a0a14] font-mono text-gray-200 p-6 flex flex-col items-center justify-center relative">
      
      {/* 
        მთავარ კონტეინერს დაემატა:
        - min-h-[650px] -> აიძულებს ბარათს, რომ სიმაღლეში მნიშვნელოვნად გაიზარდოს
        - flex flex-col -> ეხმარება შიგთავსს სიმაღლის სწორად განაწილებაში
      */}
      <div className="w-full max-w-[1330px] min-h-[650px] bg-[#11111b]/50 rounded-2xl border border-white/5 py-[72px] px-10 shadow-xl backdrop-blur-sm flex flex-col">
        
        {/* ფილტრის ღილაკების ზოლი */}
        <div className="flex justify-between items-center gap-4 mb-8 pb-6 border-b border-white/5">
          <div className="flex gap-2 flex-wrap">
            {LANGUAGES.map(function(lang) {
              const isActive = activeFilter === lang;
              return (
                <button
                  key={lang}
                  onClick={function() { setActiveFilter(lang); }}
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

        {/* 
          კოდის ბარათების Grid
          პატარა ბარათებსაც ავუწიე შიდა სიმაღლე (py-8), რომ დიდი კონტეინერის ფონზე ლამაზად და დიდებად გამოჩნდნენ
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {filteredCards.map(function(card) {
            return (
              <div
                key={card.id}
                onClick={function() { setSelectedCard(card); }}
                className="bg-[#11111b] border border-white/5 rounded-xl px-5 py-8 cursor-pointer hover:border-white/20 transition-all transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span 
                      className="text-[10px] font-bold px-2.5 py-1 rounded"
                      style={{ color: card.color, backgroundColor: card.bg }}
                    >
                      {card.lang}
                    </span>
                    <span className="text-gray-600 text-sm">↗</span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{card.title}</h3>
                </div>
                <p className="text-gray-400 text-[11px] leading-relaxed mt-2">{card.description}</p>
              </div>
            );
          })}
        </div>

        {/* ცარიელი სტეიტი */}
        {filteredCards.length === 0 && (
          <div className="text-center text-gray-600 text-sm my-auto py-16">ბარათები ვერ მოიძებნა</div>
        )}
      </div>

      {/* MODAL ფანჯარა კოდის საჩვენებლად */}
      {selectedCard !== null && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-xl bg-[#11111b] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
            
            <div className="bg-[#1e1e2e] p-4 flex items-center justify-between border-b border-white/5">
              <button 
                onClick={function() { setSelectedCard(null); }}
                className="text-xs text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded"
              >
                ✕ დახურვა
              </button>
              <div className="text-white text-sm font-bold">{selectedCard.title}</div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-white">
                {selectedCard.lang}
              </span>
            </div>

            <div className="bg-[#181825] px-4 py-3 flex items-center justify-between border-b border-white/5">
              <p className="text-gray-400 text-xs">{selectedCard.description}</p>
              <button 
                onClick={function() { handleCopy(selectedCard.code); }}
                className="bg-[#313244] hover:bg-[#45475a] text-white text-[11px] px-3 py-1.5 rounded transition-all"
              >
                {copied ? "✓ კოპირებულია" : "კოპირება"}
              </button>
            </div>

            <div className="p-4 overflow-auto max-h-[350px] bg-[#0e0e16]">
              <pre className="text-xs text-gray-300 leading-relaxed whitespace-pre-wrap">
                {selectedCard.code}
              </pre>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
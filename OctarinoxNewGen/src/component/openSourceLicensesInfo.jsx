export default function OpenSourceLicensesInfo() {
  return (
    <>
       <div className="m-[50px] px-[50px] py-10 flex flex-col gap-10">

      {/* Main Card */}
      <div className="w-full bg-[#161b22] border border-white/10 rounded-3xl p-10 flex flex-col gap-10">

        {/* Title */}
        <h1 className="text-5xl font-bold text-center 
          bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 
          bg-clip-text text-transparent">
          Open Source Licenses
        </h1>

        {/* Intro */}
        <p className="text-slate-300 text-xl leading-9 text-center max-w-4xl mx-auto">
          Open source licenses განსაზღვრავს წესებს, თუ როგორ შეგიძლია გამოიყენო,
          შეცვალო და გაავრცელო პროგრამული კოდი.  
          ისინი არის სამართლებრივი შეთანხმებები დეველოპერსა და მომხმარებელს შორის.
        </p>

        {/* License Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* MIT License */}
          <div className="bg-[#0d1117] border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-violet-300 mb-4">
              MIT License
            </h2>

            <p className="text-slate-300 leading-7 mb-4">
              ერთ-ერთი ყველაზე მარტივი და პოპულარული open source ლიცენზია.
              თითქმის არანაირ შეზღუდვას არ აწესებს.
            </p>

            <h3 className="text-white font-semibold mb-2">✔ რაც შეგიძლია:</h3>
            <ul className="text-slate-300 space-y-2 mb-4">
              <li>• გამოიყენო კომერციულ პროექტებში</li>
              <li>• შეცვალო კოდი</li>
              <li>• გაავრცელო თავისუფლად</li>
            </ul>

            <h3 className="text-white font-semibold mb-2">⚠ მოთხოვნა:</h3>
            <p className="text-slate-300">
              უნდა დატოვო ორიგინალი copyright შეტყობინება.
            </p>
          </div>

          {/* Apache License */}
          <div className="bg-[#0d1117] border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-fuchsia-300 mb-4">
              Apache License 2.0
            </h2>

            <p className="text-slate-300 leading-7 mb-4">
              უფრო განვითარებული ლიცენზია, რომელიც იცავს პატენტებსაც.
              ხშირად გამოიყენება დიდ კომპანიებში.
            </p>

            <h3 className="text-white font-semibold mb-2">✔ რაც შეგიძლია:</h3>
            <ul className="text-slate-300 space-y-2 mb-4">
              <li>• კომერციული გამოყენება</li>
              <li>• შეცვლა და გავრცელება</li>
              <li>• დახურული პროექტშიც გამოყენება</li>
            </ul>

            <h3 className="text-white font-semibold mb-2">⚠ მოთხოვნები:</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• უნდა მიუთითო ცვლილებები</li>
              <li>• უნდა შეინარჩუნო ლიცენზიის ტექსტი</li>
            </ul>
          </div>

          {/* BSD License */}
          <div className="bg-[#0d1117] border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-indigo-300 mb-4">
              BSD License
            </h2>

            <p className="text-slate-300 leading-7 mb-4">
              ძალიან მარტივი და თავისუფალი ლიცენზია, MIT-ის მსგავსი,
              მაგრამ მცირე განსხვავებებით.
            </p>

            <h3 className="text-white font-semibold mb-2">✔ რაც შეგიძლია:</h3>
            <ul className="text-slate-300 space-y-2 mb-4">
              <li>• გამოყენება ნებისმიერ პროექტში</li>
              <li>• მოდიფიკაცია</li>
              <li>• კომერციული გამოყენება</li>
            </ul>

            <h3 className="text-white font-semibold mb-2">⚠ მოთხოვნა:</h3>
            <p className="text-slate-300">
              უნდა დარჩეს ორიგინალი ავტორის აღნიშვნა.
            </p>
          </div>

          {/* GPL License */}
          <div className="bg-[#0d1117] border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-green-300 mb-4">
              GPL (General Public License)
            </h2>

            <p className="text-slate-300 leading-7 mb-4">
              “Copyleft” ტიპის ლიცენზია — თუ იყენებ კოდს, შენს ცვლილებებსაც
              უნდა გაუზიარო საზოგადოებას.
            </p>

            <h3 className="text-white font-semibold mb-2">✔ რაც შეგიძლია:</h3>
            <ul className="text-slate-300 space-y-2 mb-4">
              <li>• თავისუფლად გამოყენება</li>
              <li>• შეცვლა</li>
              <li>• გავრცელება</li>
            </ul>

            <h3 className="text-white font-semibold mb-2">❗ მთავარი წესი:</h3>
            <p className="text-slate-300">
              თუ შეცვლი და გაავრცელებ — შენი კოდიც აუცილებლად open source უნდა იყოს.
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-[#0d1117] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">
            📌 მოკლე შეჯამება
          </h2>

          <p className="text-slate-300 leading-8">
            Open source ლიცენზიები გვეხმარება დავიცვათ ბალანსი თავისუფლებასა და
            სამართლებრივ წესებს შორის.  
            ზოგი ლიცენზია (MIT, BSD) ძალიან თავისუფალია, ხოლო GPL მოითხოვს
            კოდის გაზიარებასაც ცვლილების შემდეგ.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-400 text-sm">
          ლიცენზიები არის open source ეკოსისტემის სამართლებრივი საფუძველი ⚖️
        </div>

      </div>
    </div>
    </>
  );
}
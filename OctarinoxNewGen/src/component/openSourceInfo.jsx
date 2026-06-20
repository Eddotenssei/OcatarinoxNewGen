export default function OpenSourceInfo() {
  return (
    <>
      <div className="m-[50px] px-[50px] py-10 flex flex-col gap-10">

      {/* Main Card */}
      <div className="w-full bg-[#161b22] border border-white/10 rounded-3xl p-10 flex flex-col gap-10">

        {/* Title */}
        <h1 className="text-5xl font-bold text-center 
          bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 
          bg-clip-text text-transparent">
          Open Source
        </h1>

        {/* Intro */}
        <p className="text-slate-300 text-xl leading-9 text-center max-w-4xl mx-auto">
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
            Open Source
          </span>{" "}
          (ღია კოდი) არის პროგრამული უზრუნველყოფის განვითარების მოდელი, სადაც
          საწყისი კოდი საჯაროდ არის ხელმისაწვდომი ყველასთვის — ნახვის,
          გამოყენების, შეცვლის და გავრცელების მიზნით.
        </p>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Principles */}
          <div className="bg-[#0d1117] border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              🧠 ძირითადი პრინციპები
            </h2>
            <ul className="text-slate-300 space-y-3 leading-7">
              <li>• გამჭვირვალობა — კოდი ყველასთვის ხელმისაწვდომია</li>
              <li>• თანამშრომლობა — დეველოპერები ერთად ქმნიან პროექტებს</li>
              <li>• თავისუფლება — გამოყენება და შეცვლა ნებადართულია</li>
              <li>• საზოგადოებრივი განვითარება</li>
            </ul>
          </div>

          {/* Licenses */}
          {/* <div className="bg-[#0d1117] border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              ⚖️ ლიცენზიები
            </h2>

            <div className="space-y-4 text-slate-300">
              <div>
                <h3 className="text-violet-300 font-semibold">MIT / Apache / BSD</h3>
                <p>მოქნილი ლიცენზიები — კომერციულად გამოყენებაც შესაძლებელია.</p>
              </div>

              <div>
                <h3 className="text-fuchsia-300 font-semibold">GPL (Copyleft)</h3>
                <p>თუ შეცვლი, ვალდებული ხარ ისევ ღიად გაავრცელო.</p>
              </div>
            </div>
          </div> */}

          {/* Advantages */}
          <div className="bg-[#0d1117] border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              ✅ უპირატესობები
            </h2>
            <ul className="text-slate-300 space-y-3">
              <li>• უფასო ან იაფი გამოყენება</li>
              <li>• მაღალი უსაფრთხოება</li>
              <li>• სწრაფი განვითარება</li>
              <li>• არ ხარ ერთ კომპანიაზე დამოკიდებული</li>
            </ul>
          </div>

          {/* Disadvantages */}
          <div className="bg-[#0d1117] border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              ⚠️ ნაკლოვანებები
            </h2>
            <ul className="text-slate-300 space-y-3">
              <li>• ზოგჯერ რთულია დამწყებისთვის</li>
              <li>• ოფიციალური მხარდაჭერა არ არის</li>
              <li>• ხარისხი განსხვავდება პროექტებზე</li>
              <li>• საჭიროებს აქტიურ მენტენანსს</li>
            </ul>
          </div>
        </div>

        {/* Examples */}
        <div className="bg-[#0d1117] border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">
            🌍 ცნობილი Open Source პროექტები
          </h2>

          <p className="text-slate-300 leading-8">
            Open source გამოიყენება ყველგან — ოპერაციული სისტემებიდან ვებ ტექნოლოგიებამდე:
            Linux, Ubuntu, Firefox, Apache, Node.js, React და სხვა.  
            ისინი ქმნიან თანამედროვე ინტერნეტის საფუძველს.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-400 text-sm">
          Open Source არის თანამედროვე პროგრამირების ერთ-ერთი ყველაზე ძლიერი ეკოსისტემა 🚀
        </div>

      </div>
    </div>
    </>
  );
}
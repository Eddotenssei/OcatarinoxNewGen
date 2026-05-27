export default function OpenSourceCards() {
  return (
    <div className="min-h-screen bg-[#0d1117] px-[50px] py-10 flex flex-col gap-10">

      {/* პირველი ქარდი */}
      <div className="w-full bg-[#161b22] border border-white/10 rounded-3xl p-10">
        
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          Open Source
        </h1>

        <p className="text-slate-300 text-xl leading-10 text-center">
          <span className="text-indigo-400 font-semibold">
            Open Source
          </span>{" "}
          (ღია კოდი) არის პროგრამული უზრუნველყოფის განვითარების მოდელი,
          სადაც საწყისი კოდი საჯაროდ არის ხელმისაწვდომი ნებისმიერი
          ადამიანისთვის — ნახვის, გამოყენების, შეცვლისა და გავრცელების მიზნით.
        </p>

      </div>

      {/* გამყოფი */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-60" />

      {/* მეორე ქარდი */}
      <div className="w-full bg-[#161b22] border border-white/10 rounded-3xl p-10">
        
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          Open Source Licenses
        </h1>

        <p className="text-slate-300 text-xl leading-10 text-center">
          Open Source ლიცენზიები განსაზღვრავს თუ როგორ შეიძლება
          პროგრამული კოდის გამოყენება, შეცვლა და გავრცელება.
          სხვადასხვა ლიცენზიას განსხვავებული წესები და პირობები აქვს,
          რომლებიც იცავს როგორც დეველოპერებს, ასევე მომხმარებლებს.
        </p>

      </div>

    </div>
  );
}
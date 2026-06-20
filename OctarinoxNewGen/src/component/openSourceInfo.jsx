export default function OpenSourceInfo() {
  return (
    <>
      <div className="m-[50px] px-[50px] py-10 flex flex-col gap-10">

        {/* Card */}
        <div className="w-full bg-[#161b22] border border-white/10 rounded-3xl p-10">

          {/* Title with gradient */}
          <h1 className="text-5xl font-bold text-center mb-8 
            bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 
            bg-clip-text text-transparent">
            Open Source
          </h1>

          <p className="text-slate-300 text-xl leading-10 text-center">
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
              Open Source
            </span>{" "}
            (ღია კოდი) არის პროგრამული უზრუნველყოფის განვითარების მოდელი, სადაც
            საწყისი კოდი საჯაროდ არის ხელმისაწვდომი ნებისმიერი ადამიანისთვის —
            ნახვის, გამოყენების, შეცვლისა და გავრცელების მიზნით.
          </p>
        </div>

      </div>
    </>
  );
}
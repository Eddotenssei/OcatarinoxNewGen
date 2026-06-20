export default function OpenSourceLicensesInfo() {
  return (
    <>
      <div className="m-[50px] px-[50px] py-10 flex flex-col gap-10">

        {/* პირველი ქარდი */}
        <div className="w-full bg-[#161b22] border border-white/10 rounded-3xl p-10">
          
          <h1 className="text-5xl font-bold text-center mb-8 
            bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 
            bg-clip-text text-transparent">
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
    </>
  );
}
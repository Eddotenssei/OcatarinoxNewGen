export default function Card({title, text}) {
  return (

      <div className=" m-20 w-full bg-[#161b22] border border-white/10 rounded-3xl p-10">
        
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          {title}
        </h1>

        <p className="text-slate-300 text-xl leading-10 text-center">
          <span className="text-indigo-400 font-semibold">
          </span>
            {text}
        </p>

      </div>
    
  );
}
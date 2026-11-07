export default function Blog(){
 return (
   <div className="max-w-7xl mx-auto px-8 py-20">
     <a href="/" className="font-bold">← BACK</a>
     <h1 className="text-5xl font-black mt-10">FLEET TIPS & NEWS</h1>
     <div className="grid md:grid-cols-3 gap-6 mt-12">
       {[
         ["How to reduce truck fuel costs 2026","5 proven tips from our workshop"],
         ["When to replace Scania injectors","Signs your truck is losing power"],
         ["COF checklist for trailers","Don't fail your roadworthy - read this"]
       ].map(([t,d])=>(
         <div key={t} className="border-2 border-black p-8">
           <h3 className="font-black text-xl">{t}</h3>
           <p className="mt-2 text-zinc-600">{d}</p>
         </div>
       ))}
     </div>
   </div>
 )
}
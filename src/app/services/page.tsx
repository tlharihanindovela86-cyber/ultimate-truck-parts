export default function Services(){
 return(
  <div className="bg-[#f9f7f2] min-h-screen">
   <div className="bg-[#111111] text-white px-8 py-16">
     <div className="max-w-7xl mx-auto">
       <a href="/" className="text-sm font-bold bg-[#EAB308] text-[#111111] px-4 py-2 rounded-full">BACK HOME</a>
       <h1 className="text-6xl font-black mt-8">OUR <span className="text-[#EAB308]">SERVICES</span></h1>
       <p className="mt-4 text-zinc-400">6 services - Workshop Pretoria - 500+ happy clients</p>
     </div>
   </div>
   <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-8">
     <div className="bg-white p-8 rounded-[1.5rem] border shadow-sm"><div className="w-12 h-1 bg-[#EAB308] rounded-full"></div><h3 className="font-black text-xl mt-4">Sourcing Parts</h3><p className="text-sm text-zinc-500 mt-2">Volvo, Scania, MAN, Toyota - 24hr sourcing</p><a href="/booking" className="mt-6 inline-block bg-[#111111] text-[#EAB308] px-6 py-2 rounded-full font-bold text-sm">BOOK</a></div>
     <div className="bg-white p-8 rounded-[1.5rem] border shadow-sm"><div className="w-12 h-1 bg-[#111111] rounded-full"></div><h3 className="font-black text-xl mt-4">Transport</h3><p className="text-sm text-zinc-500 mt-2">Lowbed, car carrier, anywhere in SA</p><a href="/booking" className="mt-6 inline-block bg-[#111111] text-[#EAB308] px-6 py-2 rounded-full font-bold text-sm">BOOK</a></div>
     <div className="bg-white p-8 rounded-[1.5rem] border shadow-sm"><div className="w-12 h-1 bg-[#EAB308] rounded-full"></div><h3 className="font-black text-xl mt-4">Car Services</h3><p className="text-sm text-zinc-500 mt-2">Engine, brakes, diagnostics, COF</p><a href="/booking" className="mt-6 inline-block bg-[#111111] text-[#EAB308] px-6 py-2 rounded-full font-bold text-sm">BOOK</a></div>
     <div className="bg-white p-8 rounded-[1.5rem] border shadow-sm"><div className="w-12 h-1 bg-[#111111] rounded-full"></div><h3 className="font-black text-xl mt-4">Truck Services</h3><p className="text-sm text-zinc-500 mt-2">Fleet maintenance, engine rebuild</p><a href="/booking" className="mt-6 inline-block bg-[#111111] text-[#EAB308] px-6 py-2 rounded-full font-bold text-sm">BOOK</a></div>
     <div className="bg-white p-8 rounded-[1.5rem] border shadow-sm"><div className="w-12 h-1 bg-[#EAB308] rounded-full"></div><h3 className="font-black text-xl mt-4">Trailer Service</h3><p className="text-sm text-zinc-500 mt-2">Air systems, welding, suspension</p><a href="/booking" className="mt-6 inline-block bg-[#111111] text-[#EAB308] px-6 py-2 rounded-full font-bold text-sm">BOOK</a></div>
     <div className="bg-white p-8 rounded-[1.5rem] border shadow-sm"><div className="w-12 h-1 bg-[#111111] rounded-full"></div><h3 className="font-black text-xl mt-4">Car Detailing</h3><p className="text-sm text-zinc-500 mt-2">Full wash, polish, interior deep clean</p><a href="/booking" className="mt-6 inline-block bg-[#111111] text-[#EAB308] px-6 py-2 rounded-full font-bold text-sm">BOOK</a></div>
   </div>
  </div>
 )
}

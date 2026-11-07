export default function Home(){
 return(
  <div className="bg-[#f9f7f2]">
   <div className="bg-[#111111] text-white px-8 py-20">
     <nav className="flex justify-between max-w-7xl mx-auto items-center">
       <h1 className="font-black text-xl tracking-widest">ULTIMATE <span className="text-[#EAB308]">TRUCK PARTS</span></h1>
       <div className="flex gap-5 font-bold text-xs tracking-wider items-center">
         <a href="/services" className="hover:text-[#EAB308]">SERVICES</a>
         <a href="/booking" className="hover:text-[#EAB308]">BOOKING</a>
         <a href="/payment" className="bg-[#EAB308] text-[#111111] px-5 py-2.5 rounded-full">PAYMENT</a>
         <a href="/contact" className="hover:text-[#EAB308]">CONTACT</a>
       </div>
     </nav>
     <div className="max-w-7xl mx-auto mt-20">
       <p className="text-[#EAB308] font-bold tracking-[0.3em] text-xs">PRETORIA - EST. 2020 - 500+ CLIENTS</p>
       <h2 className="text-7xl font-black leading-[0.9] mt-5">SOURCING<br/>PARTS, CARS,<br/><span className="text-[#EAB308]">TRUCKS</span></h2>
       <p className="mt-6 text-zinc-400 max-w-xl">Workshop, Transport, Trailer Service, Car Detailing - Professional and Trusted</p>
       <div className="mt-10 flex gap-4 flex-wrap">
         <a href="/booking" className="bg-[#EAB308] text-[#111111] px-10 py-4 font-black rounded-full">BOOK NOW</a>
         <a href="/payment" className="border border-[#EAB308]/40 text-[#EAB308] px-10 py-4 font-bold rounded-full">PAYMENT METHODS</a>
       </div>
     </div>
   </div>
   <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-6">
     <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200"><div className="w-10 h-1 bg-[#EAB308] rounded-full"></div><h3 className="font-black mt-4">Sourcing Parts</h3><p className="mt-2 text-sm text-zinc-500">Volvo, Scania, MAN, Toyota - 24hr sourcing Pretoria</p></div>
     <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200"><div className="w-10 h-1 bg-[#111111] rounded-full"></div><h3 className="font-black mt-4">Truck Services</h3><p className="mt-2 text-sm text-zinc-500">Engine, gearbox, COF prep, fleet maintenance</p></div>
     <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200"><div className="w-10 h-1 bg-[#EAB308] rounded-full"></div><h3 className="font-black mt-4">Transport</h3><p className="mt-2 text-sm text-zinc-500">Lowbed, car carrier, anywhere in SA - Insured</p></div>
   </div>
   <div className="bg-white py-20 px-8 border-t">
     <div className="max-w-7xl mx-auto">
       <h2 className="text-5xl font-black text-black">WHAT OUR <span className="text-[#EAB308]">CLIENTS SAY</span></h2>
       <div className="mt-12 grid md:grid-cols-3 gap-8">
         <div className="bg-[#f9f7f2] p-8 rounded-2xl border"><p className="text-[#EAB308] font-black">5.0 RATING</p><p className="mt-4 font-bold text-black text-sm">They sourced my Scania engine parts in 1 day! Very professional.</p><p className="mt-6 font-black text-xs">THABO M. - Fleet Owner</p></div>
         <div className="bg-[#f9f7f2] p-8 rounded-2xl border"><p className="text-[#EAB308] font-black">5.0 RATING</p><p className="mt-4 font-bold text-black text-sm">Used their transport Durban to Pretoria. Safe, on time.</p><p className="mt-6 font-black text-xs">SARAH K. - Car Client</p></div>
         <div className="bg-[#f9f7f2] p-8 rounded-2xl border"><p className="text-[#EAB308] font-black">5.0 RATING</p><p className="mt-4 font-bold text-black text-sm">Best detailing in Pretoria! My bakkie looks brand new.</p><p className="mt-6 font-black text-xs">DAVID N. - Mamelodi</p></div>
       </div>
     </div>
   </div>
   <div className="bg-[#111111] py-16 px-8 text-center rounded-t-[2.5rem] mx-4">
     <h2 className="text-4xl font-black text-white">NEED PARTS TODAY?</h2>
     <p className="mt-3 text-[#EAB308]">WhatsApp 078 908 9256 - Reply in 5mins</p>
     <a href="https://wa.me/27789089256" className="mt-8 inline-block bg-[#EAB308] text-[#111111] px-12 py-4 font-black rounded-full">CHAT ON WHATSAPP</a>
   </div>
   <footer className="text-center py-8 text-xs text-zinc-400 tracking-widest">ULTIMATE TRUCK PARTS - 078 908 9256 - PRETORIA</footer>
  </div>
 );
}

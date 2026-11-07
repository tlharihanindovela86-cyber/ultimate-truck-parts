export default function Contact(){
 return (
  <div className="max-w-5xl mx-auto px-8 py-20">
   <a href="/" className="font-bold">? BACK HOME</a>
   <h1 className="text-6xl font-black mt-8">CONTACT US</h1>
   
   <div className="mt-12 grid md:grid-cols-2 gap-10">
     <div className="bg-black text-white p-10">
       <h2 className="text-yellow-400 font-black text-2xl">ULTIMATE TRUCK PARTS</h2>
       <div className="mt-8 space-y-6 text-lg">
         <p><span className="text-zinc-500">WhatsApp / Call:</span><br/><a href="https://wa.me/27789089256" className="text-2xl font-black text-yellow-400">078 908 9256</a></p>
         <p><span className="text-zinc-500">Email:</span><br/><a href="mailto:brucendovela@icloud.com" className="text-xl font-bold">brucendovela@icloud.com</a></p>
         <p><span className="text-zinc-500">Location:</span><br/>Pretoria, Gauteng<br/>Nationwide Delivery</p>
         <p><span className="text-zinc-500">Hours:</span><br/>Mon-Sat: 7am - 6pm<br/>Sunday: Emergency Only</p>
       </div>
       <div className="mt-10 flex gap-4">
         <a href="https://wa.me/27789089256" className="bg-[#25D366] px-6 py-3 font-black">WHATSAPP US</a>
         <a href="mailto:brucendovela@icloud.com" className="border border-white px-6 py-3 font-black">EMAIL US</a>
       </div>
     </div>

     <div>
       <iframe src="https://maps.google.com/maps?q=Pretoria%20South%20Africa&t=&z=11&ie=UTF8&iwloc=&output=embed" className="w-full h-96 border-2 border-black"></iframe>
       <div className="mt-6 bg-yellow-400 p-6 font-bold">
         Need parts urgently? WhatsApp 078 908 9256 now - we source within 24hrs in Pretoria!
       </div>
     </div>
   </div>
  </div>
 )
}

"use client"
import { useState } from "react"

export default function Booking(){
 const [paid,setPaid]=useState(false)
 return (
   <div className="max-w-3xl mx-auto px-8 py-20">
     <a href="/" className="font-bold">← BACK</a>
     <h1 className="text-5xl font-black mt-10">BOOK A SERVICE</h1>
     <p className="text-zinc-600 mt-3">Pretoria workshop + mobile team. Pay deposit via Paystack.</p>
     
     <form className="mt-10 grid gap-4" onSubmit={e=>{e.preventDefault(); setPaid(true)}}>
       <input placeholder="Full Name" required className="border-2 border-black p-4 font-bold"/>
       <input placeholder="Phone (WhatsApp)" required className="border-2 border-black p-4 font-bold"/>
       <select className="border-2 border-black p-4 font-bold">
         <option>Sourcing Parts</option>
         <option>Sourcing Cars and Trucks</option>
         <option>Transport</option>
         <option>Car Services / Repairs</option>
         <option>Truck Services</option>
         <option>Trailer Service</option>
         <option>Car Detailing</option>
       </select>
       <textarea placeholder="Vehicle Reg + What you need" className="border-2 border-black p-4 h-32"/>
       <button className="bg-yellow-400 text-black py-4 font-black text-lg">PAY R250 DEPOSIT WITH PAYSTACK →</button>
     </form>

     {paid && (
       <div className="mt-10 bg-black text-white p-8">
         <h2 className="text-2xl font-black text-yellow-400">✓ BOOKING RECEIVED</h2>
         <p className="mt-3">We will call you in 30 mins. Paystack integration will be connected to your account.</p>
         <p className="mt-2 text-sm text-zinc-400">For real Paystack: Add your PAYSTACK_PUBLIC_KEY in .env file</p>
       </div>
     )}
   </div>
 )
}
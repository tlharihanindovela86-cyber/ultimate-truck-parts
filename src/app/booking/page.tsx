'use client'
import { useState } from 'react'
export default function Booking(){
 const [step,setStep]=useState(1)
 const [form,setForm]=useState({name:'',phone:'',service:'Sourcing Parts',vehicle:'',clientBank:'',clientAcc:'',amount:'',ref:''})
 const save=()=>{
   const all=JSON.parse(localStorage.getItem('ultimate_bookings')||'[]')
   all.push({...form,id:Date.now(),date:new Date().toLocaleString()})
   localStorage.setItem('ultimate_bookings',JSON.stringify(all))
   const msg=`NEW BOOKING TO FNB 63035524198 - Name: ${form.name} Phone: ${form.phone} Service: ${form.service} Vehicle: ${form.vehicle} Bank: ${form.clientBank} Acc: ${form.clientAcc} Amount: ${form.amount} Ref: ${form.ref}`
   window.open('https://wa.me/27789089256?text='+encodeURIComponent(msg),'_blank')
 }
 return (
  <div className='min-h-screen bg-[#f9f7f2]'><div className='max-w-3xl mx-auto px-8 py-12'>
    <a href='/' className='bg-[#111111] text-[#EAB308] px-4 py-2 rounded-full text-sm font-bold'>BACK</a>
    <h1 className='text-4xl font-black mt-8'>BOOK <span className='text-[#EAB308]'>FNB 63035524198</span></h1>
    <div className='mt-6 flex gap-2'><div className={`flex-1 h-2 rounded-full ${step>=1?'bg-[#EAB308]':'bg-zinc-200'}`}></div><div className={`flex-1 h-2 rounded-full ${step>=2?'bg-[#EAB308]':'bg-zinc-200'}`}></div><div className={`flex-1 h-2 rounded-full ${step>=3?'bg-[#EAB308]':'bg-zinc-200'}`}></div></div>
    {step===1 && <div className='mt-6 bg-white p-6 rounded-2xl border grid gap-3'><input placeholder='Full Name' className='border p-3 rounded-full text-sm' value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/><input placeholder='Phone' className='border p-3 rounded-full text-sm' value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/><select className='border p-3 rounded-full text-sm' value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option>Sourcing Parts</option><option>Transport</option><option>Car Services</option><option>Truck Services</option></select><textarea placeholder='Vehicle details' className='border p-3 rounded-xl text-sm' value={form.vehicle} onChange={e=>setForm({...form,vehicle:e.target.value})}/><button onClick={()=>{if(form.name&&form.phone)setStep(2)}} className='bg-[#111111] text-[#EAB308] py-3 rounded-full font-black'>NEXT</button></div>}
    {step===2 && <div className='mt-6 bg-white p-6 rounded-2xl border'><div className='bg-[#111111] text-white p-4 rounded-xl'><p className='text-[#EAB308] text-xs font-bold'>PAY TO</p><p className='font-black'>FNB 63035524198 - Bruce Ndovela</p></div><div className='mt-4 grid grid-cols-2 gap-3'><input placeholder='Your Bank' className='border p-3 rounded-full text-sm' value={form.clientBank} onChange={e=>setForm({...form,clientBank:e.target.value})}/><input placeholder='Your Acc' className='border p-3 rounded-full text-sm' value={form.clientAcc} onChange={e=>setForm({...form,clientAcc:e.target.value})}/><input placeholder='Amount' className='border p-3 rounded-full text-sm' value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})}/><input placeholder='Ref' className='border p-3 rounded-full text-sm' value={form.ref} onChange={e=>setForm({...form,ref:e.target.value})}/></div><div className='mt-4 flex gap-2'><button onClick={()=>setStep(1)} className='flex-1 border py-3 rounded-full text-sm'>BACK</button><button onClick={()=>setStep(3)} className='flex-1 bg-[#EAB308] py-3 rounded-full font-black text-sm'>NEXT</button></div></div>}
    {step===3 && <div className='mt-6 bg-white p-6 rounded-2xl border'><p className='font-black'>Confirm - To FNB 63035524198</p><p className='text-sm mt-2'>{form.name} - {form.phone} - {form.service} - {form.amount}</p><button onClick={save} className='mt-6 w-full bg-[#EAB308] py-4 rounded-full font-black'>CONFIRM + SAVE TO ADMIN</button></div>}
  </div></div>
 )
}

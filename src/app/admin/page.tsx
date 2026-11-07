'use client'
import { useState, useEffect } from 'react'
export default function Admin(){
 const [pin,setPin]=useState('')
 const [logged,setLogged]=useState(false)
 const [bookings,setBookings]=useState<any[]>([])
 useEffect(()=>{ if(logged){ setBookings(JSON.parse(localStorage.getItem('ultimate_bookings')||'[]')) } },[logged])
 const login=()=>{ if(pin==='0789') setLogged(true); else alert('PIN is 0789') }
 const clear=()=>{ if(confirm('Clear all?')){ localStorage.removeItem('ultimate_bookings'); setBookings([]) } }
 if(!logged) return (
  <div className='min-h-screen bg-[#f9f7f2] flex items-center justify-center p-8'>
    <div className='bg-white p-8 rounded-[2rem] border shadow-xl max-w-sm w-full text-center'>
      <h1 className='font-black text-2xl'>ADMIN <span className='text-[#EAB308]'>LOGIN</span></h1>
      <p className='text-xs text-zinc-500 mt-2'>FNB 63035524198</p>
      <input type='password' placeholder='PIN 0789' className='mt-6 w-full border p-4 rounded-full font-bold' value={pin} onChange={e=>setPin(e.target.value)}/>
      <button onClick={login} className='mt-4 w-full bg-[#111111] text-[#EAB308] py-4 rounded-full font-black'>LOGIN</button>
    </div>
  </div>
 )
 return (
  <div className='min-h-screen bg-[#f9f7f2]'>
    <div className='bg-[#111111] text-white px-8 py-6'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <div><a href='/' className='text-xs bg-[#EAB308] text-black px-3 py-1 rounded-full font-bold'>HOME</a><h1 className='text-2xl font-black mt-3'>BOOKINGS - <span className='text-[#EAB308]'>FNB 63035524198</span></h1><p className='text-xs text-zinc-400'>{bookings.length} bookings</p></div>
        <div className='flex gap-2'><button onClick={clear} className='bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-xs'>CLEAR</button><button onClick={()=>setLogged(false)} className='bg-zinc-800 px-4 py-2 rounded-full text-xs'>LOGOUT</button></div>
      </div>
    </div>
    <div className='max-w-6xl mx-auto px-8 py-8'>
      {bookings.length===0 ? (
        <div className='bg-white p-16 rounded-[2rem] border text-center'><p className='text-6xl'>??</p><p className='font-black text-xl mt-6'>Empty - No bookings yet</p><p className='text-sm text-zinc-500 mt-3'>When a client books on /booking, it will show here automatically</p><p className='text-xs text-zinc-400 mt-6'>All payments go to FNB 63035524198 - Bruce Ndovela</p></div>
      ) : (
        <div className='space-y-4'>
          {bookings.map((b:any)=>(
            <div key={b.id} className='bg-white p-6 rounded-2xl border flex justify-between'>
              <div>
                <p className='font-black'>{b.name} - {b.phone}</p>
                <p className='text-sm text-zinc-600 mt-1'>{b.service} - {b.vehicle} - {b.date}</p>
                <div className='mt-3 bg-[#f9f7f2] p-3 rounded-xl text-xs border'><p>Client Bank: {b.clientBank} Acc: {b.clientAcc} | Amount: {b.amount} Ref: {b.ref}</p><p className='text-[10px] text-zinc-500 mt-1'>To: FNB 63035524198</p></div>
              </div>
              <div className='ml-4'><a href={`https://wa.me/${b.phone.replace(/[^0-9]/g,'')}`} target='_blank' className='bg-green-500 text-white px-6 py-3 rounded-full font-black text-sm block text-center'>CHAT CLIENT</a><p className='text-[10px] text-center mt-2 text-zinc-500'>WhatsApp</p></div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
 )
}

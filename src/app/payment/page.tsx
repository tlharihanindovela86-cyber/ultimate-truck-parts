'use client'
import { useState } from 'react'
export default function Payment(){
 const [method, setMethod] = useState('eft')
 const [showBank, setShowBank] = useState(true)
 const [form, setForm] = useState({clientBank:'', clientName:'', clientRef:'', amount:'', accountNo:'', cardName:''})
 const [submitted, setSubmitted] = useState(false)

 const handleSubmit = () => {
  setSubmitted(true)
  const msg = `NEW PAYMENT TO FNB 63035524198 - Method: ${method} - Client: ${form.clientName} - Client Bank: ${form.clientBank} - Acc: ${form.accountNo} - Ref: ${form.clientRef} - Amount: ${form.amount}`
  window.open('https://wa.me/27789089256?text=' + encodeURIComponent(msg), '_blank')
 }

 return (
  <div className='min-h-screen bg-[#f9f7f2]'>
   <div className='max-w-4xl mx-auto px-8 py-12'>
    <a href='/' className='text-sm font-bold bg-[#111111] text-[#EAB308] px-4 py-2 rounded-full'>BACK HOME</a>
    <h1 className='text-5xl font-black mt-8'>PAY TO <span className='text-[#EAB308]'>FNB ACCOUNT</span></h1>
    <p className='mt-3 text-zinc-500'>All payments go straight to FNB 63035524198 - Bruce Ndovela</p>
    
    <div className='mt-6 bg-[#111111] text-white p-6 rounded-[1.5rem]'>
      <p className='text-[#EAB308] font-bold text-xs tracking-widest'>OUR BANK DETAILS - ALL PAYMENTS HERE</p>
      <div className='mt-4 grid md:grid-cols-2 gap-4 text-sm'>
        <div><p className='text-zinc-400'>Account Holder</p><p className='font-black text-lg'>Bruce Ndovela</p></div>
        <div><p className='text-zinc-400'>Bank</p><p className='font-black text-lg'>FNB / RMB</p></div>
        <div><p className='text-zinc-400'>Account Number</p><p className='font-black text-xl text-[#EAB308]'>63035524198</p></div>
        <div><p className='text-zinc-400'>Branch Code</p><p className='font-black text-lg'>250655</p></div>
      </div>
      <p className='mt-4 bg-[#EAB308] text-[#111111] px-4 py-2 rounded-full text-xs font-black inline-block'>REF: Your Name + Phone Number</p>
    </div>

    <div className='mt-10 grid grid-cols-3 gap-4'>
      <button onClick={()=>setMethod('eft')} className={method==='eft' ? 'bg-[#111111] text-[#EAB308] p-5 rounded-2xl border-2 border-[#111111]' : 'bg-white p-5 rounded-2xl border hover:border-[#EAB308]'}>
        <p className='font-black text-sm'>EFT - BANK APP</p><p className='text-[10px] mt-1'>Straight to FNB</p>
      </button>
      <button onClick={()=>setMethod('card')} className={method==='card' ? 'bg-[#111111] text-[#EAB308] p-5 rounded-2xl border-2 border-[#111111]' : 'bg-white p-5 rounded-2xl border hover:border-[#EAB308]'}>
        <p className='font-black text-sm'>CARD TO BANK</p><p className='text-[10px] mt-1'>Pay from card to FNB</p>
      </button>
      <button onClick={()=>setMethod('cash')} className={method==='cash' ? 'bg-[#111111] text-[#EAB308] p-5 rounded-2xl border-2 border-[#111111]' : 'bg-white p-5 rounded-2xl border hover:border-[#EAB308]'}>
        <p className='font-black text-sm'>CASH DEPOSIT</p><p className='text-[10px] mt-1'>Deposit to FNB</p>
      </button>
    </div>

    <div className='mt-8 bg-white p-8 rounded-[1.5rem] border shadow-sm'>
      <h3 className='font-black text-lg'>ADD YOUR BANKING DETAILS - After paying to FNB</h3>
      <p className='text-xs text-zinc-500 mt-1'>So we can confirm your payment came straight to our FNB account</p>
      
      <div className='mt-6 grid gap-4'>
        <input placeholder='Your Full Name (as on your bank)' className='border border-zinc-300 p-4 rounded-full font-bold text-sm' value={form.clientName} onChange={e=>setForm({...form, clientName:e.target.value})}/>
        <div className='grid grid-cols-2 gap-4'>
          <input placeholder='Your Bank Name (Capitec, FNB, etc)' className='border border-zinc-300 p-4 rounded-full font-bold text-sm' value={form.clientBank} onChange={e=>setForm({...form, clientBank:e.target.value})}/>
          <input placeholder='Your Account Number' className='border border-zinc-300 p-4 rounded-full font-bold text-sm' value={form.accountNo} onChange={e=>setForm({...form, accountNo:e.target.value})}/>
        </div>
        {method==='card' && <input placeholder='Name on Card' className='border border-zinc-300 p-4 rounded-full font-bold text-sm' value={form.cardName} onChange={e=>setForm({...form, cardName:e.target.value})}/>}
        <div className='grid grid-cols-2 gap-4'>
          <input placeholder='Reference you used' className='border border-zinc-300 p-4 rounded-full font-bold text-sm' value={form.clientRef} onChange={e=>setForm({...form, clientRef:e.target.value})}/>
          <input placeholder='Amount Paid (e.g R2500)' className='border border-zinc-300 p-4 rounded-full font-bold text-sm' value={form.amount} onChange={e=>setForm({...form, amount:e.target.value})}/>
        </div>
        
        <div className='bg-[#FFFBEB] p-4 rounded-2xl border border-[#EAB308]/20 text-xs'>
          <p className='font-black'>How it works:</p>
          <p className='mt-2 text-zinc-600'>1. Pay straight to FNB 63035524198 using your banking app (EFT or Card to bank) - 2. Fill form above - 3. Click submit - Goes to our WhatsApp instantly</p>
        </div>

        <button onClick={handleSubmit} className='bg-[#EAB308] text-[#111111] py-4 font-black rounded-full text-lg'>SUBMIT - PAYMENT TO FNB 63035524198</button>
        {submitted && <div className='bg-green-50 border border-green-200 p-4 rounded-2xl text-center'><p className='text-green-700 font-black'>Payment proof sent to WhatsApp!</p><p className='text-xs mt-1'>We will confirm when we see it in FNB account 63035524198</p></div>}
      </div>
    </div>

    <div className='mt-8 bg-[#111111] p-6 rounded-[1.5rem] text-center'>
      <p className='text-white font-bold'>After payment, send POP to:</p>
      <p className='text-[#EAB308] font-black text-xl mt-2'>078 908 9256 (WhatsApp)</p>
      <p className='text-zinc-400 text-xs mt-2'>Money goes straight to FNB 63035524198 - No Yoco fees</p>
    </div>
   </div>
  </div>
 )
}

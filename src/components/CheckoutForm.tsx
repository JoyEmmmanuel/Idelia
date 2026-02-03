'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { client } from '@/src/sanity/lib/client' 
import { NIGERIAN_STATES } from '@/src/constants/nigeria'
import PaystackPop from '@paystack/inline-js' 

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface Settings {
  lagosFee: number;
  interstateFee: number;
}

interface PaystackTransaction {
  reference: string;
  status: string;
  message?: string;
}

export default function CheckoutForm({ cartItems }: { cartItems: CartItem[] }) {
  const router = useRouter()
  const [state, setState] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [settings, setSettings] = useState<Settings | null>(null)

  useEffect(() => {
    client.fetch(`*[_type == "settings"][0]{lagosFee, interstateFee}`)
      .then((data: Settings) => setSettings(data))
      .catch(err => console.error("Settings fetch error:", err))
  }, [])

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shippingFee = settings
    ? state === 'Lagos'
      ? settings.lagosFee
      : state
      ? settings.interstateFee
      : 0
    : 0
  const total = subtotal + shippingFee

  const handleAcquisition = () => {
    if (!email || !state || total === 0) return

    new PaystackPop({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
      email,
      amount: total * 100,
      currency: 'NGN',
      onSuccess: (transaction: PaystackTransaction) => {
        console.log('Acquisition Success:', transaction.reference)
        router.push('/success')
      },
      onClose: () => {
        console.log('Acquisition window dismissed.')
      }
    })
  }

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      {/* 01. SELECTION REVIEW */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-idelia-olive font-bold tracking-[0.4em]">01</span>
          <label className="text-[11px] uppercase tracking-[0.2em] text-idelia-olive font-medium">Your Selection</label>
        </div>

        <div className="space-y-4">
          {cartItems.map((item: CartItem) => (
            <div key={item.id} className="flex gap-6 items-center group">
              <div className="relative w-16 h-20 bg-[#F5F5F0] overflow-hidden border border-idelia-olive/5">
                <Image 
                  src={item.image || '/placeholder-wig.jpg'} 
                  alt={item.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  priority
                />
              </div>
              <div className="flex-1 flex justify-between items-baseline">
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest text-idelia-dark">{item.name}</h4>
                  <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-tighter font-light">Quantity: {item.quantity}</p>
                </div>
                <span className="text-sm font-serif text-idelia-dark">₦{item.price.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 02. LOGISTICS */}
      <div className="space-y-4 w-full overflow-hidden">
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-idelia-olive font-bold tracking-[0.4em] uppercase">02</span>
          <label className="text-[11px] uppercase tracking-[0.2em] text-idelia-olive font-medium">Concierge Delivery</label>
        </div>
        <div className="relative w-full">
          <select 
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full bg-transparent border-b border-idelia-olive/20 py-4 text-xs font-light tracking-widest focus:outline-none focus:border-idelia-olive appearance-none cursor-pointer uppercase text-idelia-dark rounded-none"
          >
            <option value="" className="bg-idelia-cream">Select Region</option>
            {NIGERIAN_STATES.map((s: string) => (
              <option key={s} value={s} className="bg-idelia-cream text-idelia-dark py-4">{s}</option>
            ))}
          </select>
          <div className="absolute right-0 bottom-4 pointer-events-none text-idelia-olive/40">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>

      {/* 03. CONTACT */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-idelia-olive font-bold tracking-[0.4em]">03</span>
          <label className="text-[11px] uppercase tracking-[0.2em] text-idelia-olive font-medium">Contact Details</label>
        </div>
        <input 
          type="email" 
          placeholder="EMAIL ADDRESS"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border-b border-idelia-olive/20 py-4 text-xs font-light tracking-[0.2em] focus:outline-none focus:border-idelia-olive rounded-none uppercase text-idelia-dark placeholder:text-gray-300"
          required
        />
      </div>

      <div className="pt-8 border-t border-idelia-olive/10 space-y-4">
        <div className="flex justify-between items-baseline">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Subtotal</span>
          <span className="text-sm tracking-tight text-idelia-dark">₦{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Shipping</span>
          <span className="text-sm tracking-tight text-idelia-dark italic">
            {shippingFee > 0 ? `₦${shippingFee.toLocaleString()}` : 'Select Region'}
          </span>
        </div>
        <div className="flex justify-between items-center pt-6">
          <span className="text-[12px] uppercase tracking-[0.4em] font-bold text-idelia-olive">Total</span>
          <span className="text-3xl font-serif text-idelia-dark tracking-tighter">₦{total.toLocaleString()}</span>
        </div>
      </div>

      <button 
        type="button"
        onClick={handleAcquisition}
        disabled={!email || !state || total === 0}
        className="w-full bg-idelia-olive text-idelia-cream py-5 text-[10px] uppercase tracking-[0.5em] transition-all duration-700 hover:bg-idelia-dark disabled:opacity-30 disabled:cursor-not-allowed"
      >
        {(!email || !state) ? 'Provide Selection Details' : 'Complete Acquisition'}
      </button>
    </div>
  )
}

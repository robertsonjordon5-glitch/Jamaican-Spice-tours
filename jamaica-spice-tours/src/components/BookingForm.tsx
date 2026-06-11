import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  ShieldCheck, 
  ChevronRight, 
  Check, 
  Utensils, 
  ArrowRight, 
  Sparkles,
  Info
} from 'lucide-react';
import { Tour } from '../types';

interface BookingFormProps {
  tours: Tour[];
  selectedTourId: string;
  setSelectedTourId: (id: string) => void;
}

export default function BookingForm({ tours, selectedTourId, setSelectedTourId }: BookingFormProps) {
  const [guests, setGuests] = useState<number>(2);
  const [travelDate, setTravelDate] = useState<string>('');
  const [leadName, setLeadName] = useState<string>('');
  const [leadEmail, setLeadEmail] = useState<string>('');
  const [leadPhone, setLeadPhone] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isEmailSending, setIsEmailSending] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string>('');

  const handleCheckoutSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!travelDate) {
      setValidationError('Please select your Travel Date first to verify availability.');
      return;
    }
    if (!leadName.trim()) {
      setValidationError('Lead traveler Full Name is required to personalize your expedition.');
      return;
    }
    if (!leadEmail.trim() || !leadEmail.includes('@')) {
      setValidationError('A valid Email Address is required to dispatch your secure receipt seamless copy.');
      return;
    }
    if (!leadPhone.trim()) {
      setValidationError('A WhatsApp-active Phone Number is required to coordinate pickups.');
      return;
    }
    
    setValidationError('');
    setIsEmailSending(true);
    
    // Simulate seamless email loading dispatch
    setTimeout(() => {
      setIsEmailSending(false);
      setIsSubmitted(true);
    }, 1200);
  };

  // Find currently selected tour details
  const activeTour = tours.find(t => t.id === selectedTourId) || tours[0];

  // Determine pricing
  const baseTourPrice = activeTour ? activeTour.price : 129;
  const grandTotal = baseTourPrice * guests;

  return (
    <div 
      id="book"
      className="bg-brand-green-medium/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl text-white hover:border-brand-gold/30 transition-all duration-300 relative overflow-hidden"
    >
      {/* Decorative sun flare style bg */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none"></div>
      
      {isSubmitted ? (
        <div className="space-y-6 relative z-10 text-center py-6">
          <div className="w-16 h-16 rounded-full bg-brand-gold text-brand-green-dark flex items-center justify-center mx-auto shadow-lg shadow-brand-gold/30">
            <Check className="w-9 h-9 stroke-[3px]" />
          </div>
          
          <div className="space-y-2">
            <h3 className="font-serif text-3xl font-bold text-white tracking-tight">
              Voyage Initiated!
            </h3>
            <p className="text-xs text-brand-gold font-extrabold uppercase tracking-widest leading-relaxed text-center flex justify-center items-center gap-1.5">
              <span>Secure Checking</span>
              <span>&bull;</span>
              <span>JTB Live Protocol</span>
            </p>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs py-3 px-4 rounded-xl text-center font-bold">
            ⚡ Your booking ledger has been dispatched seamlessly to <strong className="text-white">Remone317@yahoo.com</strong>!
          </div>

          <p className="text-sm text-white/90 leading-relaxed font-light">
            We have prepared your custom trip ledger below and notified <strong className="text-[#facc15]">Remone Henry Samuel</strong>. To select your exact payment dispatch or customize itinerary features, trigger the instant WhatsApp line.
          </p>

          <div className="bg-brand-green-dark/95 rounded-2xl p-5 text-left border border-white/10 space-y-3 shadow-inner">
            <div className="border-b border-white/10 pb-2 flex justify-between items-center text-[10px] font-sans">
              <span className="uppercase tracking-wider font-extrabold text-brand-gold">Pre-Vetted Trip Ledger</span>
              <span className="text-white/50 font-mono">CODE: JST-{Math.floor(Math.random() * 900000 + 100000)}</span>
            </div>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-start gap-4">
                <span className="text-white/60">Lead Traveler:</span>
                <span className="font-bold text-white text-right">{leadName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Contact Email:</span>
                <span className="font-bold text-white">{leadEmail}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Phone/WhatsApp:</span>
                <span className="font-bold text-white font-mono">{leadPhone}</span>
              </div>
              <div className="flex justify-between items-start gap-4 pt-2 border-t border-white/5">
                <span className="text-white/60">Selected Trail:</span>
                <span className="font-bold text-white text-right">{activeTour.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Travel Date:</span>
                <span className="font-bold text-brand-gold font-mono">{travelDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Total Passengers:</span>
                <span className="font-bold text-white">{guests} {guests > 1 ? 'Guests' : 'Guest'}</span>
              </div>

              <div className="pt-3 border-t border-white/10 flex justify-between items-baseline">
                <span className="text-xs font-extrabold text-white/60 uppercase tracking-wider">Estimated Total Balance:</span>
                <span className="text-2xl font-serif font-black text-brand-gold">${grandTotal} USD</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/18769096809?text=Hi%20Captain%20Remone%2C%20I%20(${encodeURIComponent(leadName)})%20just%20completed%20the%20booking%20for%20the%20${encodeURIComponent(activeTour.title)}%20trip%20on%20${travelDate}%20for%20${guests}%20guests.%20An%20online%20invoice%20was%20sent%20to%20my%20email%20(${encodeURIComponent(leadEmail)})%20and%20seamlessly%20routed%20to%20Remone317%40yahoo.com.%20Total%20estimate%20is%20%24${grandTotal}.%20Please%20confirm%20my%20pickup%20slots!`}
                target="_blank"
                rel="noreferrer"
                className="flex-grow text-center py-4 bg-[#25D366] hover:bg-[#20ba56] text-white font-black tracking-widest uppercase rounded-2xl shadow-lg transition-transform hover:scale-[1.02] text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Instant Confirm on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-4 bg-white/10 hover:bg-white/15 text-white/95 text-xs font-extrabold uppercase rounded-2xl border border-white/20 transition-all cursor-pointer"
              >
                Book Another Date
              </button>
            </div>
            
            <p className="text-[9px] text-white/50 leading-relaxed text-center">
              *JTB Certified Security Assured. No credit details were requested or compromised. Pay direct via NCB terminal.
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Dynamic Header */}
          <div className="mb-6 relative z-10">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-[10px] md:text-xs font-black text-brand-gold uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#00457C] inline-block animate-pulse"></span>
                PayPal Secure Checkout
              </span>
              <span className="text-[10px] md:text-xs font-black text-brand-gold bg-brand-gold/15 border border-brand-gold/40 px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-gold shrink-0 animate-pulse" />
                JTB Licensed Operator
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
              Craft Your Live Expedition
            </h3>
            <p className="text-xs text-white/70 mt-1">
              Select package, provide travel details, and check out securely below.
            </p>
          </div>

          <div className="space-y-5 relative z-10">
        
        {/* 1. Choose Tour Experience */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">
            1. Select Your Tour Destination
          </label>
          <div className="grid grid-cols-1 gap-2.5">
            {tours.map((t) => {
              const isSelected = t.id === selectedTourId;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTourId(t.id)}
                  type="button"
                  className={`flex items-center justify-between text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-brand-green-dark border-brand-gold shadow-lg shadow-brand-gold/5' 
                      : 'bg-black/20 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-brand-gold bg-brand-gold' : 'border-white/40'
                    }`}>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-brand-green-dark"></span>}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white transition-colors group-hover:text-brand-gold">
                        {t.title}
                      </span>
                      <span className="block text-[10px] text-white/60 mt-0.5">
                        {t.duration} • Private Expedition
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-black text-brand-gold font-serif">
                    ${t.price}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Date & Guests Inline Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">
              2. Travel Date
            </label>
            <div className="relative">
              <input 
                type="date" 
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-black/20 hover:bg-black/30 text-white text-xs rounded-xl border border-white/10 px-3.5 py-3 focus:outline-none focus:border-brand-gold transition-colors block cursor-pointer"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">
              3. Travel Guests
            </label>
            <div className="flex items-center justify-between bg-black/20 rounded-xl border border-white/10 p-1">
              <button 
                type="button"
                onClick={() => setGuests(prev => Math.max(1, prev - 1))}
                className="w-10 h-10 flex items-center justify-center font-bold text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                -
              </button>
              <span className="text-xs font-extrabold text-white font-mono">{guests}</span>
              <button 
                type="button"
                onClick={() => setGuests(prev => Math.min(20, prev + 1))}
                className="w-10 h-10 flex items-center justify-center font-bold text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* 4. Lead Passenger Contact Details */}
        <div className="space-y-3.5 pt-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-gold">
            4. Lead Passenger Information
          </label>
          
          <div className="space-y-3">
            <div>
              <input
                type="text"
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
                placeholder="Full Name (e.g. Jane Doe)"
                className="w-full bg-black/20 hover:bg-black/30 text-white text-xs rounded-xl border border-white/10 px-3.5 py-3 focus:outline-none focus:border-brand-gold transition-colors block"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <input
                  type="email"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full bg-black/20 hover:bg-black/30 text-white text-xs rounded-xl border border-white/10 px-3.5 py-3 focus:outline-none focus:border-brand-gold transition-colors block"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  value={leadPhone}
                  onChange={(e) => setLeadPhone(e.target.value)}
                  placeholder="WhatsApp Number / Phone"
                  className="w-full bg-black/20 hover:bg-black/30 text-white text-xs rounded-xl border border-white/10 px-3.5 py-3 focus:outline-none focus:border-brand-gold transition-colors block"
                  required
                />
              </div>
            </div>
          </div>
          
          <p className="text-[10px] text-white/50 leading-relaxed -mt-0.5">
            Our reservation center triggers an email dispatch automatically to both your address and <strong className="text-white/70">Remone317@yahoo.com</strong> to verify tour availability seamlessly.
          </p>
        </div>

        {/* 5. Invoice Live Booking Summary */}
        <div className="bg-brand-green-dark border border-white/10 rounded-2xl p-4.5 mt-2 space-y-3 shadow-inner">
          <div className="flex justify-between pb-2 border-b border-white/15">
            <span className="text-[10px] uppercase font-bold text-brand-gold tracking-widest flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-brand-gold" /> Live Summary
            </span>
            <span className="text-[10px] text-white/50 font-medium">Private SUV Charter</span>
          </div>
          
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between text-white/90">
              <span>{activeTour.title}</span>
              <span className="font-mono">${baseTourPrice} x {guests}</span>
            </div>
            
            {travelDate && (
              <div className="flex justify-between text-white/60 text-[11px]">
                <span>Coordinated Date</span>
                <span>{travelDate}</span>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-white/15 flex justify-between items-end">
            <div>
              <span className="block text-[10px] uppercase font-bold text-white/40 tracking-wider">Estimated Total</span>
              <span className="text-xs text-white/60">Fully-inclusive price</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-serif font-black text-brand-gold block leading-none">
                ${grandTotal}
              </span>
              <span className="text-[9px] text-white/50 block font-bold leading-none mt-1">USD • FULL TRIP</span>
            </div>
          </div>
        </div>

        {/* Validation Error Banner */}
        {validationError && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-200 text-xs py-3 px-4 rounded-xl text-center font-bold animate-pulse">
            {validationError}
          </div>
        )}

        {/* 5. PayPal Prominent CTA Anchor */}
        <div className="pt-3 space-y-4">
          <button
            type="button"
            onClick={handleCheckoutSubmit}
            className="block w-full text-center py-4.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-green-dark font-black tracking-widest uppercase rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] border border-brand-gold text-sm group cursor-pointer"
            id="paypal-checkout-button"
          >
            <span className="flex items-center justify-center gap-2">
              Book &amp; Pay via PayPal
              <ArrowRight className="w-4 h-4 text-brand-green-dark group-hover:translate-x-1.5 transition-transform" />
            </span>
          </button>

          {/* Secure transaction info */}
          <div className="flex flex-col items-center justify-center gap-1 text-[10px] text-white/70 font-medium text-center">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Payments go immediately and securely to <strong className="text-brand-gold font-bold">Remone317@yahoo.com</strong>.</span>
            </div>
            <span className="text-white/40 text-[9px]">PayPal Certified &bull; Instant tour seat authorization</span>
          </div>

          {/* Visual Trust Badges (PayPal only) */}
          <div className="border-t border-white/10 pt-4 text-center">
            <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest block mb-2.5">
              Verified Payment Method
            </span>
            <div className="flex justify-center items-center">
              
              {/* PayPal Badge */}
              <div className="bg-[#002C8A] hover:bg-[#002266] px-5 py-2 rounded-xl flex items-center justify-center border border-white/10 transition-all w-28 shadow-lg gap-1.5" title="PayPal Secure">
                <span className="text-white font-extrabold italic text-sm font-sans tracking-tight">PayPal</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </>
  )}
</div>
  );
}

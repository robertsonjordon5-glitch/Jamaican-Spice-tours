import React from 'react';
import { ShieldCheck } from 'lucide-react';

const BookingForm = () => {
  return (
    <form className="space-y-4">
      {/* Pathway 1: PayPal Checkout */}
      <button
        type="button"
        onClick={() => window.open('https://paypal.me/RemoneSamuels728', '_blank')}
        className="w-full flex items-center justify-center gap-2 bg-[#00457C] text-white py-4 rounded-lg font-bold hover:bg-blue-900 transition-colors shadow-lg"
      >
        <ShieldCheck className="w-5 h-5" />
        Pay via PayPal Secure Checkout
      </button>

      {/* Pathway 2: WhatsApp Automation */}
      <button
        type="button"
        onClick={() => window.open('https://wa.me/18769896889?text=New Booking Paid & Confirmed! Trail: Doctors Cave Beach', '_blank')}
        style={{ width: '100%', backgroundColor: '#25D366', color: '#fff', padding: '16px', borderRadius: '12px', fontWeight: 900 }}
      >
        INSTANT CONFIRM ON WHATSAPP →
      </button>
    <a 
  href="https://cash.app/$JSpiceTours" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="payment-button cash-app"
  >
  Pay with Cash App
</a>
      {/* Security Assurance */}
      <div>
        <p className="text-[9px] text-white/50 leading-relaxed text-center">
          *JTB Certified. Security Assured. No credit details are requested or compromised.
        </p>
      </div>
    </form>
  );
};

export default BookingForm;
      

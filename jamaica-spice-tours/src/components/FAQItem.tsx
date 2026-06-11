import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '../types';

interface FAQItemProps {
  key?: React.Key;
  faq: FAQ;
}

export default function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="border-b border-white/5 py-4 transition-all duration-300"
    >
      <button
        id={`faq-toggle-${faq.question.toLowerCase().replace(/\s+/g, '-')}`}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-serif text-base md:text-lg font-bold text-white hover:text-brand-gold transition-colors duration-200 py-2 focus:outline-none cursor-pointer"
      >
        <span>{faq.question}</span>
        <span className={`p-1.5 rounded-full bg-white/5 transition-all duration-300 ${isOpen ? 'rotate-180 bg-brand-gold text-brand-green-dark' : 'text-brand-gold hover:bg-white/10'}`}>
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <p className="text-sm md:text-base text-white/85 leading-relaxed pl-1 pr-6 pb-2 font-sans font-light">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

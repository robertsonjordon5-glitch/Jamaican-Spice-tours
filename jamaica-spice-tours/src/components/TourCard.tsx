import React from 'react';
import { Star, Clock, Users, Check, ArrowRight } from 'lucide-react';
import { Tour } from '../types';

interface TourCardProps {
  key?: React.Key;
  tour: Tour;
  onSelect: (tourId: string) => void;
}

export default function TourCard({ tour, onSelect }: TourCardProps) {
  return (
    <div 
      id={`tour-card-${tour.id}`}
      className="group bg-brand-green-medium/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-brand-gold/5 overflow-hidden border border-white/10 hover:border-brand-gold/50 transition-all duration-300 flex flex-col h-full"
    >
      {/* Target image with hover zoom */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-green-dark">
        <img 
          src={tour.image} 
          alt={tour.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 bg-brand-green-dark border border-brand-gold/40 text-brand-gold text-xs font-semibold uppercase tracking-wider rounded-lg shadow-md">
            {tour.tag}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Rating and Info */}
        <div className="flex items-center justify-between mb-3 text-xs text-white/50 font-medium">
          <div className="flex items-center gap-1">
            <div className="flex items-center text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current animate-pulse" />
              ))}
            </div>
            <span className="text-white ml-1 font-semibold">{tour.rating}</span>
            <span className="text-white/60">({tour.reviewCount} reviews)</span>
          </div>
          <span className="text-brand-green-dark bg-brand-gold px-2 py-0.5 rounded-md font-bold text-[10px] uppercase tracking-wider">
            Best Seller
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-bold text-white group-hover:text-brand-gold transition-colors duration-200 mb-2">
          {tour.title}
        </h3>

        {/* Short description */}
        <p className="text-sm text-white/80 mb-4 line-clamp-2">
          {tour.description}
        </p>

        {/* Highlights List */}
        <div className="space-y-2 mb-6 flex-grow border-t border-b border-white/10 py-4">
          {tour.highlights.map((highlight, index) => (
            <div key={index} className="flex items-start text-xs text-white/90 gap-2">
              <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Grid specifications */}
        <div className="flex items-center justify-between gap-4 mb-5 text-xs text-white/80 bg-brand-green-dark/80 px-4 py-3 rounded-xl border border-white/5">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-brand-gold" />
            <span>{tour.duration}</span>
          </div>
          <div className="w-[1px] h-4 bg-white/20"></div>
          <div className="flex items-center gap-1.5 font-medium">
            <Users className="w-3.5 h-3.5 text-brand-gold" />
            <span>{tour.groupType}</span>
          </div>
        </div>

        {/* Price & Primary Action */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <div>
            <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold block">Exclusive Rate</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-brand-gold font-serif">${tour.price}</span>
              <span className="text-xs text-white/75">/ guest</span>
            </div>
          </div>
          
          <button 
            id={`book-btn-${tour.id}`}
            onClick={() => onSelect(tour.id)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-brand-gold hover:bg-brand-gold/90 text-brand-green-dark font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Book Tour</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-green-dark group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

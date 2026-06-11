import React, { useState } from 'react';
import { 
  Compass, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Check, 
  Clock, 
  Users, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Utensils, 
  Menu, 
  X,
  ShieldCheck,
  Palmtree,
  Coffee,
  Flame,
  Heart
} from 'lucide-react';

import { Tour, FAQ, Review } from './types';
import TourCard from './components/TourCard';
import FAQItem from './components/FAQItem';
import BookingForm from './components/BookingForm';

// Import photographic assets
import heroBambooRafting from './assets/images/hero_bamboo_rafting_1780753595972.png';
import tourDunnsRiver from './assets/images/tour_dunns_river_1780753608026.png';
import tourJerkChicken from './assets/images/tour_jerk_chicken_1780753620893.png';
import tourBlueMountains from './assets/images/tour_blue_mountains_1780753632798.png';
import doctorsCaveBeach from './assets/images/doctors_cave_beach_1780753644755.png';
import catamaranBoat from './assets/images/catamaran_boat_1780966656715.png';

// Redefine the comprehensive Tour Packages matching the user's requested price list and activities
const TOUR_PACKAGES: Tour[] = [
  {
    id: 'doctors-cave-beach',
    title: 'Doctors Cave Beach Excursion',
    image: doctorsCaveBeach,
    imageAlt: "Doctors Cave Beach pristine white sands",
    tag: 'Scenic & Relaxation',
    duration: 'Flexible Hours',
    groupType: 'Per Person Round Trip',
    price: 20,
    rating: 4.9,
    reviewCount: 142,
    description: "Soothe yourself along the brilliant white sands of Jamaica's premier healing mineral beach. Safe, beautiful crystal waters, premium beach loungers, changing rooms, and dining bars.",
    highlights: [
      "Access to Doctor's Cave beach medical-vetted therapeutic mineral waters",
      "Comfortable round-trip private transport with AC comfort",
      "Excellent beach side umbrellas, watersports & reef snorkeling available to rent",
      "Conveniently located on Montego Bay's legendary Hip Strip"
    ]
  },
  {
    id: 'margaritaville-nightlife',
    title: 'Margaritaville Beachfront Nightlife',
    image: doctorsCaveBeach,
    imageAlt: "Margaritaville Beach Party Montego Bay",
    tag: 'Island Vibes & Music',
    duration: '4 Hours',
    groupType: 'Up to 25 people per night limit',
    price: 25,
    rating: 4.8,
    reviewCount: 88,
    description: "Dive headfirst into Montego Bay's most iconic shore-side party hub. Witness golden sunset reflections, participate in seaside trampolines, scale waterslides, and jam to stellar island music.",
    highlights: [
      "Secure hotel round-trip shuttle transportation",
      "Features dynamic beach trampolines and legendary 120ft water slide into the ocean",
      "Lively local DJs, island music, cold beers & signatures Margaritas",
      "Private group booking slots available up to 25 people nightly"
    ]
  },
  {
    id: 'pier-one-nightlife',
    title: 'Pier One Harbor-Deck Nightlife',
    image: catamaranBoat,
    imageAlt: "Pier One Night Club Montego Bay",
    tag: 'Waterfront Clubbing',
    duration: '4 Hours',
    groupType: 'Per Person VIP Transit',
    price: 20,
    rating: 4.9,
    reviewCount: 105,
    description: "Montego Bay’s ultimate open-air seaside club. Dance above the ocean harbor, enjoy live DJs spinning reggae & dancehall classics, and experience the pure electrical vibe under the stars.",
    highlights: [
      "Fully guided round-trip transport directly to the pier deck gate",
      "Vibrant live local tracks, island DJs, and dancehall rhythm sets",
      "Sip authentic local rums and cold Red Stripe beers over sea views",
      "VIP bypass entry and priority lounge tables available"
    ]
  },
  {
    id: 'jet-car-adventure',
    title: 'Futuristic Luxury Jet Car Adventure',
    image: catamaranBoat,
    imageAlt: "High-speed water jet car",
    tag: 'Marine Water Adrenaline',
    duration: '45 Minutes',
    groupType: 'Two Passengers Max',
    price: 150,
    rating: 5.0,
    reviewCount: 64,
    description: "Breeze through Montego Bay Lagoon on a custom Corvette-styled high-speed water jetcar. The ultimate marine adrenaline-rush designed for speed enthusiasts.",
    highlights: [
      "45 full minutes of high-velocity water racing across the open sea",
      "Sleek custom sports car watercraft with throttle controls",
      "Fits up to 2 passengers comfortably (driver & co-pilot)",
      "High-grade safety lifejackets and direct professional captain briefing"
    ]
  },
  {
    id: 'bamboo-rafting',
    title: 'Traditional River Bamboo Rafting',
    image: heroBambooRafting,
    imageAlt: "Peaceful scenic bamboo rafting trail",
    tag: 'Eco-River Romance',
    duration: '2 Hours',
    groupType: '2 Persons Per Raft',
    price: 100,
    rating: 4.9,
    reviewCount: 176,
    description: "Unravel your stress on an authentic hand-guided 30-foot bamboo river raft. Glide beneath tall emerald green jungle canopies, drink fresh coconuts, and get a natural foot rub.",
    highlights: [
      "Gently navigate down Trelawny's tropical waterways",
      "Guided by deep, licensed local raftsmen sharing authentic folk tales",
      "Therapeutic natural limestone foot massage included on the riverbank",
      "Fresh coconut water and native flower garlands handcrafted on-board"
    ]
  },
  {
    id: 'dreamer-party-boat',
    title: 'Dreamer Party Boat Catamaran Cruise',
    image: catamaranBoat,
    imageAlt: "Catamaran party cruise marine ride",
    tag: 'Coastal Sail & Snorkel',
    duration: '3 Hours',
    groupType: 'Sailing Excursion',
    price: 100,
    rating: 4.9,
    reviewCount: 160,
    description: "The ultimate 3-hour marine party. Glide across Montego Bay's pristine reefs, dive into deep snorkeling, and enjoy a fully open bar paired with authentic savory Jamaican dishes.",
    highlights: [
      "3-hour sailing cruise on the luxurious premium Dreamer catamaran",
      "Fully loaded local open bar serving native rum punch, beers, and sodas",
      "Authentic fresh Jamaican buffet and snacks served on the high seas",
      "Snorkeling stop with premium gears to swim with tropical sea turtles & fish"
    ]
  },
  {
    id: 'private-boat-booking',
    title: 'Private Yacht & Sea Vessel Charter',
    image: catamaranBoat,
    imageAlt: "Private luxury catamaran charter vessel",
    tag: 'Ultimate Sea Privacy',
    duration: 'Half-Day Yachting',
    groupType: '8 to 15 People Group',
    price: 800,
    rating: 5.0,
    reviewCount: 41,
    description: "Book an entire premier sailing catamaran exclusively for your group. Spend half a day snorkeling, swimming, drinking, and customizing the itinerary for 8 to 15 people.",
    highlights: [
      "100% exclusive rental of sea catamaran (Price ranges from $800 to $1,000)",
      "Accommodates private parties of 8 up to 15 passengers smoothly",
      "Experienced maritime crew, captain, and personal hostesses",
      "Unlimited premium bar, catering services, and sound system"
    ]
  },
  {
    id: 'negril-7mile-ricks',
    title: 'Negril: 7-Mile Beach & Rick’s Cafe Sunset Tour',
    image: doctorsCaveBeach,
    imageAlt: "Rick's Cafe Sunset ocean cliff jumping",
    tag: 'Coastline Paradise',
    duration: '8 Hours',
    groupType: 'Per Person Round Trip',
    price: 130,
    rating: 4.9,
    reviewCount: 210,
    description: "Explore the cool capital of Jamaica. Unwind on the shallow, pristine sands of Negril's famous 7-Mile Beach, and visit Rick’s Cafe for epic reggae tunes, sunset views, and extreme cliff jumps.",
    highlights: [
      "Leisurely hours along the white shallow shores of 7-Mile Beach",
      "High-vibe sunset dining & live band entertainment at legendary Rick's Cafe",
      "Witness or participate in thrilling cliff dives directly into crystal blue sea",
      "Private AC transport with door-to-door hotel and cruise port convenience"
    ]
  },
  {
    id: 'dunns-river-falls',
    title: "Dunn's River Falls Vertical Rainforest Climb",
    image: tourDunnsRiver,
    imageAlt: "Dunns River Falls tropical terraced cascades",
    tag: 'Adrenaline Cascades',
    duration: '7 Hours',
    groupType: 'Round Trip Per Person',
    price: 150,
    rating: 5.0,
    reviewCount: 228,
    description: "Ascend the iconic, 600-foot terraced waterfall cascades of Dunn's River Falls. Join hands to climb the slippery limestone steps with professional guides, and swim in natural pools.",
    highlights: [
      "Tackle the majestic 600-foot natural terraced waterfall climb",
      "Stop inside therapeutic crystal rainforest plunge pools along the path",
      "All-inclusive admissions, entry park vouchers, and private AC shuttle",
      "Option to halt at authentic local wood-fired dry jerk pits for lunch"
    ]
  },
  {
    id: 'ys-falls-atv',
    title: 'YS Falls & Rugged Jungle Mud-ATV Deal',
    image: tourDunnsRiver,
    imageAlt: "Offroad ATV trailing and YS falls adventure",
    tag: 'ATV & Cascade Bundle',
    duration: '8 Hours',
    groupType: 'Premium Package' ,
    price: 300,
    rating: 5.0,
    reviewCount: 92,
    description: "An ultimate high-octane dual adventure. Tear across dense muddy forest tracks on your personal powerful ATV, then dive into the 7 magnificent tiered waterfalls of YS Falls.",
    highlights: [
      "Power through rugged Jamaican country mud on 4x4 high performance ATVs",
      "Swim and rope-swing into the refreshing mineral pools of YS waterfalls",
      "Deluxe double park entry vouchers, safety gear & professional instructors",
      "Private transit across beautiful historical sugar and rum estates"
    ]
  },
  {
    id: 'kingston-bob-marley',
    title: 'Kingston: Bob Marley Museum Heritage Tour',
    image: tourBlueMountains,
    imageAlt: "Bob Marley Museum exterior in Kingston",
    tag: 'Musical & Historical',
    duration: '9 Hours',
    groupType: 'Round Trip Per Person',
    price: 250,
    rating: 4.9,
    reviewCount: 119,
    description: "A deep cultural journey to the home and recording studio of reggae legend Bob Marley in Kingston. Explore gold records, personal memorabilia, and the legendary acoustic guitar stash.",
    highlights: [
      "Exclusive entry and guided exploration of Bob Marley’s 56 Hope Road residence",
      "Behold deep Rastafarian relics, photographic galleries, and studio rooms",
      "Comfortable cruise across the lush scenic mountain landscape to Kingston capital",
      "Optional culinary jerk dining stops and city sightsee stops"
    ]
  },
  {
    id: 'st-anns-marley-house',
    title: "Nine Mile: Bob Marley's Birthplace (St. Ann's)",
    image: tourBlueMountains,
    imageAlt: "Nine Mile St. Ann birthplace cottage",
    tag: 'Cultural Roots Pilgrimage',
    duration: '6 Hours',
    groupType: 'Per Person Round Trip',
    price: 150,
    rating: 4.8,
    reviewCount: 82,
    description: "Journey deep into the misty mountains of St. Ann to Nine Mile, the birthplace, childhood home, and final mausoleum resting place of Bob Marley. Guided by storytelling Rastafarian elders.",
    highlights: [
      "Explore the tranquil mountain birthplace cottage and famous Mount Zion rock",
      "Pay respects at the gold-embellished marble mausoleum and resting chambers",
      "Gain authentic family lore from resident Rastafarian host guides",
      "Breathtaking country roads through remote, green farming valleys"
    ]
  },
  {
    id: 'hip-strip-shopping',
    title: 'Hip Strip Shopping & Dining Tour',
    image: doctorsCaveBeach,
    imageAlt: "Montego Bay Hip Strip shopping district",
    tag: 'Shopping & Dining',
    duration: '4 Hours',
    groupType: 'Per Person Transit Service',
    price: 30,
    rating: 4.7,
    reviewCount: 74,
    description: "Browse the absolute best shops and local diners in Montego Bay. Purchase duty-free jewelry, authentic souvenir spices, hand-carved local masterwork, and recline at ocean view cafes.",
    highlights: [
      "Coordinated private round-trip vehicle transfers directly to the strip shops",
      "Secure shopping assistance away from busy port brokers",
      "Sip native rum drinks at Doctors Cave beach diners and seafood spots",
      "100% customizable schedule—stop and leave at your personal pleasure"
    ]
  },
  {
    id: 'cooking-class-jerk',
    title: 'Jamaica Spice Live Cooking Class',
    image: tourJerkChicken,
    imageAlt: "Interactive Jamaican cooking masterclass with Chef Samuel",
    tag: 'Culinary Masterclass',
    duration: '3 Hours',
    groupType: 'Caters up to 80 guests maximum',
    price: 80,
    rating: 5.0,
    reviewCount: 188,
    description: "Unravel the secret of authentic Caribbean gastronomy. Join Chef Remone Samuel to learn how to dry-jerk chicken over hot coals, slow-simmer curries, or prepare your personal favorite Jamaican meal.",
    highlights: [
      "Masterclass on slow-smoking authentic jerk chicken over fresh pimento wood",
      "Step-by-step instruction on creating dense, rich Jamaican yellow curry gravy",
      "Choose to learn and prepare your favorite Jamaican recipe on the spot",
      "All organic ingredients, wood coal cooking setups, and large group capacity up to 80"
    ]
  }
];

// Expanded authentic Jamaican culinary specialties list
const JAMAICAN_FOODS = [
  {
    id: 'ackee',
    name: 'Ackee & Saltfish',
    category: 'National Dish',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=600&q=80', // Beautiful tropical presentation
    tagline: 'Sautéed delicately with island herbs & natural organic oils',
    description: 'Our highly revered national treasure. Freshly harvested tropical ackee fruit sauteed with salted codfish, yellow onions, native Scotch bonnet pepper, scallions, sweet tomatoes, and a generous crack of black pimento logs.'
  },
  {
    id: 'jerk',
    name: 'Authentic Pan Jerk Chicken & Pork',
    category: 'Culinary Masterclass',
    image: tourJerkChicken, // Uses JTB local asset!
    tagline: 'Wood-smoked over wild hot coals & green pimento branches',
    description: 'The definitive smoky flavor of Jamaica. Marinated for 48 hours in Remone’s custom hand-blended paste of Scotch bonnet, scallions, ginger, thyme, and spices, then slow-charred inside split iron drums to achieve mouth-watering perfection.'
  },
  {
    id: 'patties',
    name: 'Jamaican Patties',
    category: 'Street Snack Royalty',
    image: 'https://images.unsplash.com/photo-1608797178974-15b35a61d121?auto=format&fit=crop&w=600&q=80', // High-end golden pastry
    tagline: 'Crisp, flaky pastry shells containing ground-beef spice fillings',
    description: 'An iconic street royalty classic. Super-flaky golden turmeric pastry shells baked to golden perfection, loaded with savory spiced minced beef, curried chicken, or farm fresh garden vegetables that melt in your hand.'
  },
  {
    id: 'oxtail',
    name: 'Slow-Braised Jamaican Oxtail',
    category: 'Regal Stews',
    image: 'https://images.unsplash.com/photo-1547928500-404775a7e1b4?auto=format&fit=crop&w=600&q=80', // Rich savory stew
    tagline: 'Fall-off-the-bone beef tails simmered with broad butter beans',
    description: 'Comfort food at its absolute sovereign pinnacle. Select cuts of beef oxtail seasoned with local herbs, garlic, green onions, and pimento berries, then caramelized and slow-braised for hours alongside plump broad butter beans in a thick, rich brown gravy reduction.'
  },
  {
    id: 'curry-goat',
    name: 'Authentic Jamaican Curry Goat',
    category: 'Highland Curries',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80', // Rich gold curry
    tagline: 'Slow-simmered tender goat infused with aromatic island yellow curry',
    description: 'A legendary party and Sunday staple. Select cuts of tender bone-in goat meat slow-cooked in spicy native yellow curry powder, packed with aromatic thyme, scotch bonnet peppers, garlic cloves, ginger roots, and soft Irish potatoes until it melts off the bone.'
  },
  {
    id: 'steamed-fish',
    name: 'Seaside Steamed Fish & Crackers',
    category: 'Seaside Masterpieces',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80', // Perfect seafood skillet
    tagline: 'Whole red snapper slow-simmered with okra, pumpkin & soft Excelsior water crackers',
    description: 'Our ultimate beachfront health-food specialty. Freshly snared whole snapper slow-steamed in a buttery, rich vegetable broth packed with okra fingers, pumpkin slices, carrots, thyme, and pimento. Finished with legendary Excelsior crackers nestled directly in the pan to soak up the glorious broth.'
  },
  {
    id: 'escovitch-fish',
    name: 'Old Harbor Escovitch Fish',
    category: 'Coastal Crisps',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', // Rich crispy snapper fish dish
    tagline: 'Perfectly seared snapper drenched in peppery pickled vinegar medley',
    description: 'The definitive king of Hellshire Beach snacks. Snapper rubbed with native spices, pan-fried dry until incredibly crispy, then topped with a generous ladle of freshly pickled vinegar infused with julienned carrots, onions, whole pimento berries, and fiery scotch bonnet peppers.'
  },
  {
    id: 'coffee',
    name: 'Blue Mountain Coffee',
    category: 'Estate Reserve',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80', // Fresh drip coffee
    tagline: 'Highly aromatic, single-estate beans picked in misty highlands',
    description: 'Prized worldwide as the most exclusive, non-bitter, and smooth single-origin bean. Cultivated high in Jamaica’s cloud forests at over 5,000 feet, sun-dried, and dark-roasted on the exact morning of your private journey.'
  }
];

// Authorized Airport Taxi Rate sheet originating from Donald Sangster Int'l Airport (MBJ)
export interface TaxiRate {
  destination: string;
  zone: string;
  price1to4: number; // One way for 1 to 4 passengers
  extraPrice: number; // One way for each additional passenger
}

const TAXI_RATES: TaxiRate[] = [
  { destination: "Hip Strips, Sandals Mo-bay", zone: "Montego Bay", price1to4: 15.00, extraPrice: 4.00 },
  { destination: "Downtown Montego Bay, Sandals Royal, Riu Mo-Bay", zone: "Montego Bay", price1to4: 20.00, extraPrice: 5.00 },
  { destination: "Zoey, Ironshore Residential Area", zone: "Montego Bay", price1to4: 25.00, extraPrice: 6.00 },
  { destination: "Holiday Inn, Half Moon, Coral Gardens", zone: "Rose Hall", price1to4: 30.00, extraPrice: 7.00 },
  { destination: "Spring Farm, Jewels, Hyatt, Reading, Secrets, Sunset Resort", zone: "Montego Bay Outskirts", price1to4: 35.00, extraPrice: 9.00 },
  { destination: "Iberostar", zone: "Rose Hall", price1to4: 40.00, extraPrice: 10.00 },
  { destination: "Round Hill Resort", zone: "Hanover Area", price1to4: 45.00, extraPrice: 12.00 },
  { destination: "Tryall Club & Golf Resort", zone: "Hanover Area", price1to4: 50.00, extraPrice: 13.00 },
  { destination: "Falmouth, Royalton Resort, Grand Palladium, Lucea", zone: "Falmouth & Lucea", price1to4: 60.00, extraPrice: 15.00 },
  { destination: "Duncans Colony", zone: "Trelawny", price1to4: 65.00, extraPrice: 16.00 },
  { destination: "Green Island, Braco Strip", zone: "Trelawny", price1to4: 80.00, extraPrice: 20.00 },
  { destination: "Sav-la-mar, Discovery Bay, Bluefields", zone: "Coastlines", price1to4: 90.00, extraPrice: 22.00 },
  { destination: "Negril Coast, Runaway Bay, New Market", zone: "Negril & Runaway Bay", price1to4: 100.00, extraPrice: 25.00 },
  { destination: "Whitehouse Beach Resort", zone: "West Coast", price1to4: 110.00, extraPrice: 27.00 },
  { destination: "Ocho Rios Harbor, Browns Town, Black River", zone: "Ocho Rios", price1to4: 120.00, extraPrice: 30.00 },
  { destination: "Boscobel Ian Fleming Airport Zone", zone: "Oracabessa & St Mary", price1to4: 130.00, extraPrice: 32.00 },
  { destination: "Alexandria, Oracabessa Scenic", zone: "St Mary", price1to4: 140.00, extraPrice: 35.00 },
  { destination: "Santa Cruz, Claremont, Maggotty Highlands", zone: "Inlands", price1to4: 150.00, extraPrice: 35.00 },
  { destination: "Port Maria, Christiana, Treasure Beach, Moneague", zone: "Inlands & South Seas", price1to4: 160.00, extraPrice: 40.00 },
  { destination: "Mandeville, Ewarton, Southfield, Alligator Pond", zone: "Mountain Ridges & Coast", price1to4: 170.00, extraPrice: 45.00 },
  { destination: "Porus Township", zone: "Inlands", price1to4: 190.00, extraPrice: 45.00 },
  { destination: "May Pen, Linstead Valleys", zone: "Inlands", price1to4: 220.00, extraPrice: 55.00 },
  { destination: "Spanish Town Heritage", zone: "Historical Sites", price1to4: 240.00, extraPrice: 60.00 },
  { destination: "Kingston Capital, Annotto Bay", zone: "Kingston Capital", price1to4: 250.00, extraPrice: 60.00 },
  { destination: "Buff Bay Coast", zone: "Portland Blue Coast", price1to4: 260.00, extraPrice: 50.00 },
  { destination: "Port Antonio Majestic, Yallahs Valley", zone: "Portland & Blue Ridges", price1to4: 300.00, extraPrice: 70.00 },
  { destination: "Boston Jerk Beaches, Morant Bay", zone: "Portland & St Thomas", price1to4: 330.00, extraPrice: 75.00 },
  { destination: "Manchioneal (Portland) Port Morant (St. Thomas)", zone: "Portland & St Thomas Blue Coast", price1to4: 350.00, extraPrice: 80.00 }
];

const FAQS: FAQ[] = [
  {
    question: "Do you accommodate complex cruise ship port schedules?",
    answer: "Absolutely. We specialize in custom port schedules. We guarantee seamless, immediate private pickup directly at the Montego Bay or Falmouth cruise terminals adjacent to your ship's disembarkation. Remone ensures your private group is safely returned to the docks at least 2 full hours prior to your ship's scheduled gangway close."
  },
  {
    question: "What is completely included in your listed tour price?",
    answer: "No hidden charges whatsoever. Every tour rate includes fully private, air-conditioned roundtrip hotel/port transportation, all admission tickets, all food/beverage tasting sessions outline in the itinerary, and the dedicated guidance of Remone Henry Samuel or a senior native guide of our premium team."
  },
  {
    question: "How strenuous are these excursions?",
    answer: "Our Waterfall and Mountain escapes involve moderate activity (walking and climbing). However, because these bookings are 100% private for your group, we move at your exact comfort level, making it flawless for youngsters or seniors alike. The Spice Culinary Tour is completely relaxed with minimal walking."
  },
  {
    question: "What is your rescheduling & cancellation policy?",
    answer: "We understand travel plans are fluid. We offer 100% free, flexible date changes and tour transfers. Cancellations requested up to 24 hours prior to your scheduled morning pick-up receive a full refund, no questions asked."
  }
];

const REVIEWS: Review[] = [
  {
    name: "Clara & Robert Vance",
    location: "Miami, Florida",
    rating: 5,
    date: "May 2026",
    text: "Booking with Remone was the absolute highlight of our Jamaican cruise! We completely escaped the generic crowds and did the Negril tour. The food at his family's hidden smoker pit was simply out of this world.",
    tourName: "Negril: Cliff Jumps & Sunset",
    avatarSeed: "colin"
  },
  {
    name: "Julianne Brooks",
    location: "London, UK",
    rating: 5,
    date: "April 2026",
    text: "The Ocho Rios rainforest adventure was pristine. Remone navigated a custom trail that bypassed the main queues. We swam in pristine crystal basins, took beautiful photos, and felt completely protected and pampered.",
    tourName: "Ocho Rios: Falls & Rainforest",
    avatarSeed: "sarah"
  },
  {
    name: "The Miller Family",
    location: "Toronto, Canada",
    rating: 5,
    date: "March 2026",
    text: "We rafted on the Martha Brae with Remone. Absolute magic. Sweeping riverbeds, Luminous Lagoon glowing swim, and a beautiful historical tour of Trelawny. Remone's authentic care is world-class.",
    tourName: "Mobay & Trelawny River Trail",
    avatarSeed: "miller"
  }
];

export default function App() {
  const [selectedTourId, setSelectedTourId] = useState<string>('doctors-cave-beach');
  const [activeFoodId, setActiveFoodId] = useState<string>('jerk');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [taxiSearchQuery, setTaxiSearchQuery] = useState<string>('');
  const [taxiPassengers, setTaxiPassengers] = useState<number>(2);

  // Smooth scroll handler targeting anchor elements
  const handleScrollToElement = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToBooking = (tourId?: string) => {
    if (tourId) {
      setSelectedTourId(tourId);
    }
    setMobileMenuOpen(false);
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-green-dark text-white font-sans antialiased selection:bg-brand-gold selection:text-brand-green-dark">
      
      {/* Upper Promo Banner */}
      <div className="bg-brand-green-medium text-white text-[11.5px] md:text-xs lg:text-sm font-extrabold text-center py-2.5 px-4 shadow-sm relative z-30 tracking-wider flex items-center justify-center flex-wrap gap-2 sm:gap-4 border-b border-white/10 uppercase">
        <div className="flex items-center gap-1.5 text-brand-gold">
          <ShieldCheck className="w-4 h-4 shrink-0 animate-pulse" />
          <span>JTB Certified &amp; Licensed Operator</span>
        </div>
        <span className="hidden md:inline-block text-white/35">|</span>
        <div className="flex items-center gap-1.5 text-white/95">
          <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0 animate-pulse" />
          <span>100% Private Custom Tours</span>
        </div>
        <span className="hidden md:inline-block text-white/35">|</span>
        <div className="flex items-center gap-1.5">
          <span className="text-white/70">WhatsApp/Call Direct:</span>
          <a href="tel:+18769096809" className="text-brand-gold hover:text-white transition underline font-mono">+1 876 909 6809</a>
        </div>
      </div>

      {/* Floating Glass Sticky Header */}
      <header className="sticky top-0 z-20 bg-brand-green-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-22 flex items-center justify-between">
          
          {/* Brand Logo & Brand Stamp */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleScrollToElement('home')} 
              className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
              id="brand-logo"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 hover:bg-brand-green-medium rounded-xl flex items-center justify-center text-brand-gold border border-brand-gold/30 shadow-md transition-colors">
                <Compass className="w-5 md:w-6 h-5 md:h-6 rotate-12 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <div>
                <span className="block font-serif text-lg md:text-xl font-black text-white tracking-tight leading-none group-hover:text-brand-gold transition-colors">
                  JAMAICAN SPICE TOUR
                </span>
                <span className="block text-[10px] md:text-xs font-bold text-brand-gold uppercase tracking-widest leading-none mt-1">
                  Tours, Taste, &amp; Thrills
                </span>
              </div>
            </button>

            {/* Micro Badge for JTB on Mobile and desktop adjacent to brand */}
            <div className="bg-[#facc15]/10 border border-[#facc15]/30 px-2 py-0.5 rounded-md text-[9px] font-extrabold text-[#facc15] uppercase tracking-wide flex items-center gap-1 shrink-0">
              <ShieldCheck className="w-3 h-3 text-[#facc15]" />
              <span>JTB Licensed</span>
            </div>
          </div>

          {/* Desktop Navigation Checklist with exact anchors */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-bold text-white/95">
            <button onClick={() => handleScrollToElement('home')} className="hover:text-brand-gold transition-colors cursor-pointer py-1 block">
              Home
            </button>
            <button onClick={() => handleScrollToElement('food')} className="hover:text-brand-gold transition-colors cursor-pointer py-1 block">
              Food
            </button>
            <button onClick={() => handleScrollToElement('tours')} className="hover:text-brand-gold transition-colors cursor-pointer py-1 block">
              Tours
            </button>
            <button onClick={() => handleScrollToElement('transfers')} className="hover:text-brand-gold transition-colors cursor-pointer py-1 block font-black text-brand-gold">
              ⚡ MBJ Shuttles
            </button>
            <button onClick={() => handleScrollToElement('about')} className="hover:text-brand-gold transition-colors cursor-pointer py-1 block">
              About
            </button>
            <button onClick={() => handleScrollToElement('book')} className="hover:text-brand-gold transition-colors cursor-pointer py-1 block flex items-center gap-1 text-brand-gold">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Book
            </button>
          </nav>

          {/* Nav Right CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+18769096809" 
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-white hover:text-brand-gold transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-gold animate-bounce" />
              <span className="font-mono text-sm">+1 876 909 6809</span>
            </a>
            <button
              onClick={() => handleScrollToBooking()}
              className="px-5 py-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-green-dark font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all duration-200 cursor-pointer hover:scale-102"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Opener */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-brand-green-medium border-b border-white/10 px-4 py-6 space-y-4 shadow-2xl text-white">
            <div className="flex flex-col gap-3 font-semibold text-white/90 text-base">
              <button onClick={() => handleScrollToElement('home')} className="text-left py-2 hover:text-brand-gold transition-colors">
                Home
              </button>
              <button onClick={() => handleScrollToElement('food')} className="text-left py-2 hover:text-brand-gold transition-colors">
                Food
              </button>
              <button onClick={() => handleScrollToElement('tours')} className="text-left py-2 hover:text-brand-gold transition-colors">
                Tours
              </button>
              <button onClick={() => handleScrollToElement('transfers')} className="text-left py-2 text-brand-gold font-bold transition-colors">
                ⚡ MBJ Shuttles &amp; Rates
              </button>
              <button onClick={() => handleScrollToElement('about')} className="text-left py-2 hover:text-brand-gold transition-colors">
                About
              </button>
              <button onClick={() => handleScrollToElement('book')} className="text-left py-2 hover:text-brand-gold transition-colors flex items-center gap-1.5 text-brand-gold">
                <Sparkles className="w-4 h-4 text-brand-gold" />
                Book &amp; Pay Securely
              </button>
            </div>
            
            <div className="border-t border-white/10 pt-4 space-y-3">
              <p className="text-xs text-white/60 uppercase tracking-widest font-black">Local Hotline</p>
              <a 
                href="tel:+18769096809"
                className="flex items-center gap-2.5 text-base font-bold text-white hover:text-brand-gold py-1"
              >
                <Phone className="w-4.5 h-4.5 text-brand-gold shrink-0" />
                <span className="font-mono text-brand-gold">+1 876 909 6809</span>
              </a>
              <button
                onClick={() => handleScrollToBooking()}
                className="w-full text-center py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-green-dark font-black text-xs uppercase tracking-widest rounded-xl shadow-md cursor-pointer"
              >
                Inquire &amp; Book
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section (#home) with requested layout */}
      <section id="home" className="relative min-h-screen py-10 sm:py-16 md:py-20 lg:py-28 flex items-center bg-brand-green-dark text-white overflow-hidden">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 scale-102">
          <img 
            src={heroBambooRafting} 
            alt="The Ultimate Jamaican Experience Bamboo Rafting" 
            className="w-full h-full object-cover object-center transform scale-100 opacity-55 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          {/* Subtle luxurious dark forest gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#022c22]/95 via-[#022c22]/80 to-[#022c22]/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] via-transparent to-[#022c22]/40"></div>
        </div>

        {/* Content Box with Beautiful Two-Column Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 flex items-center h-full w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
            
            {/* Left Column: Headline, Description & Calls to action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* VIP Trust Anchor */}
              <div className="inline-flex items-center gap-2.5 bg-[#facc15] text-brand-green-dark border-2 border-[#facc15] px-4 py-2 rounded-2xl text-[10.5px] md:text-xs font-black uppercase tracking-widest shadow-lg shadow-brand-gold/15 animate-pulse">
                <ShieldCheck className="w-5 h-5 text-brand-green-dark shrink-0" />
                <span>Fully JTB Certified &amp; Licensed Private Travel Provider</span>
              </div>

              {/* Headline and Subhead */}
              <div className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white mb-2 leading-[1.08] drop-shadow-md">
                  The Ultimate <br className="hidden sm:inline" />
                  <span className="text-brand-gold">Jamaican Experience.</span>
                </h1>
                <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-brand-green-light font-bold">
                  Tours, Taste, and Thrills.
                </p>
              </div>

              {/* Vibe and description copy */}
              <p className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed font-light max-w-2xl font-sans">
                Welcome to <strong>Jamaican Spice Tour</strong>. Escape the packed commercial bus crowds and slow down. Coordinate directly with chef, owner, and primary local expert <strong className="text-brand-gold font-bold">Remone Henry Samuel</strong> to witness pure waterfalls, smoke-cured food pits, and tropical wonders in Montego Bay, Negril, and beyond.
              </p>

              {/* Display Phone Number in Hero */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-6 text-sm text-gray-200 bg-brand-green-medium/40 backdrop-blur-sm border border-white/10 px-5 py-3 w-max rounded-xl max-w-full shadow-md">
                <span className="font-bold flex items-center gap-2 text-brand-gold">
                  <Phone className="w-4.5 h-4.5 text-brand-gold" /> Call / WhatsApp Direct:
                </span>
                <a href="tel:+18769096809" className="font-mono text-base font-extrabold text-white hover:text-brand-gold transition underline">
                  +1 876 909 6809
                </a>
              </div>

              {/* Dynamic CTA Grid linking to #book */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => handleScrollToBooking()}
                  id="hero-primary-cta"
                  className="px-8 py-4.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-green-dark font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl transition-all duration-300 cursor-pointer text-center hover:scale-[1.03] flex items-center justify-center gap-2.5"
                >
                  <span>Book Instantly Via PayPal</span>
                  <ArrowRight className="w-4 h-4 text-brand-green-dark" />
                </button>
                
                <button
                  onClick={() => handleScrollToElement('tours')}
                  className="px-6 py-4.5 bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-widest rounded-2xl border border-white/20 transition-all cursor-pointer text-center"
                >
                  Explore Tour Packages
                </button>
              </div>

              {/* Trust overlay indicators */}
              <div className="pt-4 flex items-center gap-3 text-xs text-white/60">
                <ShieldCheck className="w-4.5 h-4.5 text-brand-green-light shrink-0" />
                <span>Full air-conditioned private SUV transport. No deposit needed now.</span>
              </div>

            </div>

            {/* Right Column: Prominent, high-prestige JTB Trust Registry & Safety Seal Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm bg-gradient-to-br from-[#023c30]/90 to-[#011f18]/95 backdrop-blur-md rounded-3xl p-6 md:p-7 border-2 border-brand-gold/40 shadow-2xl relative overflow-hidden group hover:border-brand-gold transition-all duration-300">
                
                {/* Visual Sun Stamp backdrop effect */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
                
                {/* Header of registry seal card */}
                <div className="flex items-center gap-3.5 mb-5 border-b border-white/10 pb-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-brand-green-dark shrink-0 shadow-lg shadow-brand-gold/30">
                    <Award className="w-6 h-6 stroke-[2.5px]" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-extrabold text-brand-gold uppercase tracking-widest">Official Registry</span>
                    <h3 className="text-sm font-black text-white uppercase tracking-wider">Jamaica Tourist Board</h3>
                  </div>
                </div>

                {/* Registry certification description */}
                <div className="space-y-4 text-xs text-gray-200 relative z-10">
                  <p className="font-light italic text-white/80 leading-relaxed text-[12.5px]">
                    "This provider operates with rigorous tourist safety compliance, fully vetted drivers, premium certified vehicles, and JTB-vetted protocols."
                  </p>
                  
                  {/* Bullet check list */}
                  <div className="space-y-3 pt-3 border-t border-white/10">
                    
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-extrabold text-white text-[11px] uppercase tracking-wider">JTB Licensed Operator</span>
                        <span className="block text-[10px] text-brand-gold font-mono font-medium">Certification Vouched &amp; Vetted</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-extrabold text-white text-[11px] uppercase tracking-wider">Maritime Safety Endorsed</span>
                        <span className="block text-[10px] text-white/60">Fully Licensed Captain &amp; Coastal Vessel Inspections</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-extrabold text-white text-[11px] uppercase tracking-wider">Comprehensive Client Cover</span>
                        <span className="block text-[10px] text-white/60">100% Insured Fleet with Gold Liability Assurance</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer seal badge with golden ribbon look */}
                <div className="mt-6 bg-brand-gold/15 border border-brand-gold/30 rounded-xl p-3 text-center relative z-10">
                  <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest block animate-pulse">
                    ★ GUARANTEED JTB COMPLIANCE ★
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Band */}
      <section className="bg-[#022c22] border-y border-white/10 py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center">
          <div className="space-y-1">
            <span className="block text-3xl font-serif font-black text-brand-gold flex items-center justify-center gap-1.5 uppercase">
              <ShieldCheck className="w-7 h-7 text-brand-gold animate-bounce-slow shrink-0" />
              JTB
            </span>
            <span className="block text-xs uppercase font-extrabold text-white/70 tracking-wider font-sans">Certified &amp; Licensed Operator</span>
          </div>
          <div className="space-y-1 border-l border-white/10">
            <span className="block text-3xl font-serif font-black text-brand-gold">15+ Yrs</span>
            <span className="block text-xs uppercase font-extrabold text-white/70 tracking-wider font-sans">Remone's Island Mastery</span>
          </div>
          <div className="space-y-1 border-l border-white/10">
            <span className="block text-3xl font-serif font-black text-brand-gold">$0 Fees</span>
            <span className="block text-xs uppercase font-extrabold text-white/70 tracking-wider font-sans">Risk-Free Reservations</span>
          </div>
        </div>
      </section>

      {/* Authentic Jamaican Food Section (#food) */}
      <section id="food" className="py-20 md:py-28 bg-[#043328] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] md:text-xs font-black text-brand-gold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-lg inline-block border border-white/10">
              GASTRONOMY EXCELLENCE
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Authentic Jamaican Food
            </h2>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light font-sans">
              Taste is the direct gateway to Jamaica’s ancestry. We reject generic hotel kitchen packages. Over wood coals, backroad huts, and misty estates, savor the authentic culinary triumphs of our nation.
            </p>
          </div>

          {/* Interactive Bento Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side list of 5 foods */}
            <div className="lg:col-span-5 space-y-3">
              {JAMAICAN_FOODS.map((food) => {
                const isActive = activeFoodId === food.id;
                return (
                  <button
                    key={food.id}
                    onClick={() => setActiveFoodId(food.id)}
                    className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer block ${
                      isActive 
                        ? 'bg-brand-green-medium border-brand-gold shadow-lg shadow-brand-gold/10 scale-102' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs uppercase font-bold text-brand-gold tracking-widest leading-none bg-brand-green-dark px-2.5 py-1 rounded">
                        {food.category}
                      </span>
                      {isActive && <Flame className="w-4 h-4 text-brand-gold animate-bounce" />}
                    </div>
                    <h4 className="text-lg font-bold text-white font-serif">{food.name}</h4>
                    <p className="text-xs text-white/70 mt-1 line-clamp-1">{food.tagline}</p>
                  </button>
                );
              })}
            </div>

            {/* Right side active detail showcase panel */}
            <div className="lg:col-span-7 bg-brand-green-dark rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {(() => {
                const food = JAMAICAN_FOODS.find(f => f.id === activeFoodId) || JAMAICAN_FOODS[0];
                return (
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Visual aspect */}
                    <div className="md:w-5/12 relative aspect-[4/3] md:aspect-auto">
                      <img 
                        src={food.image} 
                        alt={food.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-green-dark via-transparent to-transparent"></div>
                    </div>

                    {/* Copy details */}
                    <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block font-mono">
                          ★ Local Highlight Masterclass
                        </span>
                        <h3 className="text-2xl font-serif font-bold text-white leading-tight">
                          {food.name}
                        </h3>
                        <blockquote className="border-l-2 border-brand-gold pl-3 text-xs italic text-white/85 py-1 leading-relaxed bg-white/5 rounded-r-lg pr-3">
                          "{food.tagline}"
                        </blockquote>
                        <p className="text-xs md:text-sm text-white/95 leading-relaxed font-light">
                          {food.description}
                        </p>
                      </div>

                      {/* Micro actions */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase text-brand-gold bg-brand-green-medium px-2 py-1 rounded">
                          100% Chef Prepared
                        </span>
                        <button
                          onClick={() => handleScrollToBooking()}
                          className="inline-flex items-center gap-1 text-xs font-extrabold text-white hover:text-brand-gold transition-colors cursor-pointer"
                        >
                          <span>Secure Your Tour Now</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>

          {/* Captain Remone's Beachfront Seafood & Curry Gallery */}
          <div className="mt-24 pt-16 border-t border-white/10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-[10px] md:text-sm font-black text-brand-gold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-lg inline-block border border-white/10 mb-3">
                  ★ Chef Remone's Beachfront Coal Cookout
                </span>
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
                  The Island Food Visual Gallery
                </h3>
                <p className="text-xs md:text-sm text-white/70 mt-3 max-w-2xl font-light">
                  No filter, pure authentic wood-fired cooking. Feast your eyes on some of the exact, mouthwatering traditional seafood plates, steamed snapper, and rich curry goat pans prepared directly over our open-air beach drums.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-[10px] uppercase font-bold text-white/50 tracking-widest block font-sans">
                  Live Food Prep &bull; 100% Native Coal-Fueled
                </span>
              </div>
            </div>

            {/* Premium 4-Column Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Steamed Fish and Crackers */}
              <div id="seafood-steamed" className="bg-brand-green-dark border border-white/10 rounded-2xl overflow-hidden hover:border-brand-gold/50 transition-all duration-300 group flex flex-col justify-between h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80" 
                    alt="Seaside Steamed Fish and Crackers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-brand-green-dark/90 backdrop-blur-md px-2.5 py-1 rounded text-[9px] uppercase font-black text-brand-gold tracking-widest">
                    Seaside Peak
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white font-serif mb-2">Seaside Steamed Snapper</h4>
                    <p className="text-[11px] text-white/80 leading-relaxed font-light mb-4">
                      Freshly snared snapper poached in buttery broth with carrots, bell peppers, okra, and traditional <span className="font-semibold text-brand-gold">Excelsior water crackers</span> soaked in the thick gravy.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px]">
                    <span className="text-brand-gold font-bold">100% Chef-Steamed</span>
                    <span className="text-white/40">Fresh Catch</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Curry Goat */}
              <div id="seafood-curry" className="bg-brand-green-dark border border-white/10 rounded-2xl overflow-hidden hover:border-brand-gold/50 transition-all duration-300 group flex flex-col justify-between h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80" 
                    alt="Authentic Jamaican Curry Goat"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-brand-green-dark/90 backdrop-blur-md px-2.5 py-1 rounded text-[9px] uppercase font-black text-brand-gold tracking-widest">
                    Sunday Classic
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white font-serif mb-2">Authentic Curry Goat</h4>
                    <p className="text-[11px] text-white/80 leading-relaxed font-light mb-4">
                      Slow-cooked goat shoulder infused with island aromatic yellow curry paste, fresh ginger run, garlic mash, scotch bonnet peppers, and soft Irish potatoes.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px]">
                    <span className="text-brand-gold font-bold">Slow-Simmered</span>
                    <span className="text-white/40">Thyme Infused</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Escovitch Fish */}
              <div id="seafood-escovitch" className="bg-brand-green-dark border border-white/10 rounded-2xl overflow-hidden hover:border-brand-gold/50 transition-all duration-300 group flex flex-col justify-between h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" 
                    alt="Old Harbor Escovitch Fish"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-brand-green-dark/90 backdrop-blur-md px-2.5 py-1 rounded text-[9px] uppercase font-black text-brand-gold tracking-widest">
                    Hellshire Style
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white font-serif mb-2">Old Harbor Escovitch</h4>
                    <p className="text-[11px] text-white/80 leading-relaxed font-light mb-4">
                      Crispy whole pan-fried snapper drenched in pickled vinegar sauce packed with native julienned onions, carrots, bell peppers, and fiery whole pimento seeds.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px]">
                    <span className="text-brand-gold font-bold">Gold Crisped</span>
                    <span className="text-white/40">Hellshire Beach</span>
                  </div>
                </div>
              </div>

              {/* Card 4: Authentic Jerk Pits */}
              <div id="seafood-jerk" className="bg-brand-green-dark border border-white/10 rounded-2xl overflow-hidden hover:border-brand-gold/50 transition-all duration-300 group flex flex-col justify-between h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80" 
                    alt="Woodcoal Pan Jerk Platter"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-brand-green-dark/90 backdrop-blur-md px-2.5 py-1 rounded text-[9px] uppercase font-black text-brand-gold tracking-widest">
                    Coal Powered
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white font-serif mb-2">Pan Jerk Platter</h4>
                    <p className="text-[11px] text-white/80 leading-relaxed font-light mb-4">
                      Succulent chicken marinated for 48 hours in scotch bonnet, scallions, dry pimento rub, then slow-charred over hot coals in our split iron wood drums.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px]">
                    <span className="text-brand-gold font-bold">48hr Marinated</span>
                    <span className="text-white/40">Pimento Smoked</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* The Ultimate Island Tours Grid (#tours) */}
      <section id="tours" className="py-20 md:py-28 bg-[#022c22] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] md:text-xs font-black text-brand-gold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-lg inline-block border border-white/10">
              CHOOSE YOUR TRAIL
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              The Ultimate Island Tours Grid
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              We coordinate private regional tours matching your exact speed. No rushing, no rigid itineraries, and JTB-licensed security. Select your perfect destination block to coordinate with Remone.
            </p>
          </div>

          {/* Premium multi-column grid of tour packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TOUR_PACKAGES.map((tour) => (
              <TourCard 
                key={tour.id} 
                tour={tour} 
                onSelect={(id) => handleScrollToBooking(id)} 
              />
            ))}
          </div>

        </div>
      </section>

      {/* Official MBJ Airport Authorized Taxi Rates Matrix (#transfers) */}
      <section id="transfers" className="py-20 md:py-28 bg-[#043328] text-white border-t border-b border-white/10 relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green-light/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header of Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] md:text-xs font-black text-[#facc15] uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-lg inline-block border border-white/10">
              OFFICIAL AIRPORT FARE MATRIX
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Authorized Airport Transfers
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              Originating from **Donald Sangster International Airport (MBJ)**. Vetted and monitored under JTB guidelines. Adjust the passengers count below to calculate your exact official transport rate in real-time.
            </p>
          </div>

          {/* Interactive Calculator Filter Bar */}
          <div className="bg-brand-green-dark p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Filter 1: Search Input */}
              <div className="lg:col-span-7 space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-gold">
                  1. Search Your Hotel or Destination Zone
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={taxiSearchQuery}
                    onChange={(e) => setTaxiSearchQuery(e.target.value)}
                    placeholder="Type to filter... e.g. Riu Mo-Bay, Iberostar, Half Moon, Negril, Ocho Rios..."
                    className="w-full bg-black/30 text-white placeholder-white/40 text-sm rounded-xl border border-white/15 px-4 py-3.5 focus:outline-none focus:border-brand-gold transition-colors focus:ring-1 focus:ring-brand-gold"
                  />
                  {taxiSearchQuery && (
                    <button
                      onClick={() => setTaxiSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xs font-bold bg-white/10 px-2 py-1 rounded"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Filter 2: Interactive Passenger Surcharger */}
              <div className="lg:col-span-5 space-y-2 text-left">
                <div className="flex justify-between items-baseline">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-gold">
                    2. Passengers count
                  </label>
                  <span className="text-xs font-extrabold text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded border border-brand-gold/20 font-mono">
                    {taxiPassengers} {taxiPassengers > 1 ? 'Passengers' : 'Passenger'}
                  </span>
                </div>
                
                {/* Custom input range slider */}
                <div className="flex items-center gap-4 bg-black/20 p-2.5 rounded-xl border border-white/10">
                  <button
                    type="button"
                    onClick={() => setTaxiPassengers(prev => Math.max(1, prev - 1))}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 text-white font-extrabold flex items-center justify-center transition"
                  >
                    -
                  </button>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={taxiPassengers}
                    onChange={(e) => setTaxiPassengers(Number(e.target.value))}
                    className="flex-grow accent-brand-gold h-1.5 rounded-lg cursor-pointer animate-pulse-slow"
                  />
                  <button
                    type="button"
                    onClick={() => setTaxiPassengers(prev => Math.min(20, prev + 1))}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 text-white font-extrabold flex items-center justify-center transition"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

            {/* Note about official pricing rules */}
            <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-[11px] text-white/50">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#facc15]" />
                <span>Base rates apply to 1-4 passengers. Surcharge applied to each additional passenger.</span>
              </span>
              <span className="font-mono text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded">
                Rate increase effective under JTB rules
              </span>
            </div>
          </div>

          {/* Table display */}
          <div className="bg-brand-green-dark border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                
                {/* Table Header */}
                <thead>
                  <tr className="bg-brand-green-medium/40 border-b border-white/10 uppercase tracking-widest text-brand-gold font-bold text-[10px] md:text-xs">
                    <th className="py-4.5 px-4 md:px-6">Destination &amp; Hotels Vetted</th>
                    <th className="py-4.5 px-4 md:px-6 hidden sm:table-cell" id="col-region-shuttle">Region Code</th>
                    <th className="py-4.5 px-4 md:px-6 hidden lg:table-cell text-center">JTB Base (1-4 Pax)</th>
                    <th className="py-4.5 px-4 md:px-6 hidden lg:table-cell text-center">Add. Pax</th>
                    <th className="py-4.5 px-4 md:px-6 text-right text-white">Calculated Tariff</th>
                    <th className="py-4.5 px-4 md:px-6 text-center">Direct RSVP</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-white/5 font-sans">
                  {(() => {
                    const filtered = TAXI_RATES.filter(item => 
                      item.destination.toLowerCase().includes(taxiSearchQuery.toLowerCase()) || 
                      item.zone.toLowerCase().includes(taxiSearchQuery.toLowerCase())
                    );

                    if (filtered.length === 0) {
                      return (
                        <tr>
                          <td colSpan={6} className="py-12 text-center text-white/40 font-medium text-xs">
                            No destinations match "{taxiSearchQuery}". Try spelling with other keywords...
                          </td>
                        </tr>
                      );
                    }

                    return filtered.map((item, index) => {
                      // Pricing math
                      const baseFare = item.price1to4;
                      const extraFare = taxiPassengers > 4 ? (taxiPassengers - 4) * item.extraPrice : 0;
                      const calculatedTotal = baseFare + extraFare;

                      // WhatsApp book text query
                      const whatsappMsg = `Hi Captain Remone! I've calculated the official Donald Sangster Airport (MBJ) transfer rate to *${item.destination}* for *${taxiPassengers} passenger(s)*. The JTB-vetted rates total comes to *$${calculatedTotal} USD* (${taxiPassengers > 4 ? `$${baseFare} base plus extra passenger surcharge` : `$${baseFare} flat package`}). I'd like to book this private transfer with you today!`;

                      return (
                        <tr 
                          key={index} 
                          className="hover:bg-white/5 transition-colors group text-white/90"
                        >
                          {/* Dest */}
                          <td className="py-4 px-4 md:px-6">
                            <span className="block font-bold text-white group-hover:text-[#facc15] transition-colors text-xs md:text-sm">
                              {item.destination}
                            </span>
                            <span className="block sm:hidden text-[10px] text-white/50 mt-1 uppercase font-semibold">
                              {item.zone} &bull; ${item.price1to4} is flat base
                            </span>
                          </td>

                          {/* Zone */}
                          <td className="py-4 px-4 md:px-6 hidden sm:table-cell text-white/60 font-medium">
                            {item.zone}
                          </td>

                          {/* Base (1-4) info */}
                          <td className="py-4 px-4 md:px-6 hidden lg:table-cell text-center font-mono font-semibold text-white/60">
                            ${item.price1to4.toFixed(2)}
                          </td>

                          {/* Surcharge info */}
                          <td className="py-4 px-4 md:px-6 hidden lg:table-cell text-center font-mono font-semibold text-white/60">
                            +${item.extraPrice.toFixed(2)}
                          </td>

                          {/* Calculated total */}
                          <td className="py-4 px-4 md:px-6 text-right font-serif font-black text-brand-gold text-sm md:text-base">
                            <div className="flex flex-col items-end">
                              <span>${calculatedTotal.toFixed(2)} <span className="text-[9px] font-sans font-normal text-white/50">USD</span></span>
                              {taxiPassengers > 4 && (
                                <span className="text-[8.5px] font-sans text-white/40 block mt-0.5">
                                  (${baseFare} base + ${extraFare} s/c)
                                </span>
                              )}
                            </div>
                          </td>

                          {/* WhatsApp dispatch */}
                          <td className="py-4 px-4 md:px-6 text-center">
                            <a
                              href={`https://wa.me/18769096809?text=${encodeURIComponent(whatsappMsg)}`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all shadow hover:scale-102 cursor-pointer"
                            >
                              <span>Book Shuttle</span>
                              <ArrowRight className="w-3 h-3 shrink-0" />
                            </a>
                          </td>
                        </tr>
                      );
                    });
                  })()}
                </tbody>

              </table>
            </div>
          </div>

          {/* Quick FAQ / safety overlay inside the transfers module */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10" id="shuttle-info-cards">
            <div className="p-5 bg-brand-green-dark border border-white/5 rounded-2xl">
              <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-2">★ JTB Premium Vetting</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                All vehicles in Captain Remone Samuel's fleet are fully JTB certified, deeply air-conditioned, and undergo regular sanitation checks.
              </p>
            </div>
            <div className="p-5 bg-brand-green-dark border border-white/5 rounded-2xl">
              <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-2">★ Flight Monitoring</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Provide your flight number at booking. Captain Remone monitors delay schedules in real-time. If your glide path stalls, your private SUV awaits you.
              </p>
            </div>
            <div className="p-5 bg-brand-green-dark border border-white/5 rounded-2xl">
              <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-2">★ Free Child Seats</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Traveling with toddlers or youngsters? Indicate your safety child seating requirements at checkout and we'll prep them completely free of charge.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* About the Owner Section (#about) */}
      <section id="about" className="py-20 md:py-28 bg-[#032921] text-white border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Premium Catamaran with custom highlights */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                
                {/* Visual decorative backgrounds */}
                <div className="absolute top-5 -right-5 w-full h-full bg-[#022c22] rounded-3xl border border-white/10 z-0"></div>
                <div className="absolute bottom-5 -left-5 w-24 h-24 bg-brand-gold rounded-full blur-3xl opacity-30 z-0"></div>
                
                {/* Image panel */}
                <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-green-medium bg-brand-green-dark">
                  <img 
                    src={catamaranBoat} 
                    alt="Jamaica Spice Tours Private Luxury Catamaran" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Stamp overlay */}
                  <div className="absolute bottom-4 right-4 bg-[#022c22]/95 backdrop-blur-md px-3 py-2.5 rounded-xl shadow-md border border-white/10 text-center">
                    <span className="block text-[10px] text-brand-gold font-bold uppercase tracking-wider">Licensed Vessel &amp; Guide</span>
                    <span className="block text-xs font-black text-white mt-0.5">Captain Remone H. Samuel</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right side: classic credentials introducing Romone as Captain */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-[10px] md:text-xs font-black text-brand-gold uppercase tracking-widest bg-white/5 px-2.5 py-1.5 rounded-lg inline-block border border-white/10 font-sans">
                  CLASSIC CARIBBEAN CHARTERS
                </span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                About the Captain: Remone Henry Samuel
              </h3>

              <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 px-3 py-1.5 rounded-lg">
                <Award className="w-4.5 h-4.5 text-brand-gold hover:rotate-12 transition-transform duration-350" />
                <span className="text-xs font-bold text-brand-gold font-sans uppercase tracking-wider">
                  Licensed Skipper, Executive Chef &amp; CEO
                </span>
              </div>

              <div className="text-sm md:text-base text-gray-300 font-light leading-relaxed space-y-4">
                <p>
                  "The genuine soul of Jamaica cannot be found on crowded commercial tour buses. True beauty lives where our lush tropical mountains greet the clear, warm Caribbean Sea—in the fragrant oak-smoke of a beachfront jerk drum and the perfect whisper of the ocean breeze."
                </p>
                <p>
                  As an experienced **licensed boat captain** and local expert with over 15 years navigating both coastal waters and inland scenic routes, **Captain Remone Henry Samuel** offers a classic, premium way to experience Jamaica.
                </p>
                <p>
                  Whether guiding a bespoke overland excursion or pilot-chartering private catamaran cruises and snorkeling boat rides tailored entirely to your party's pace, Captain Remone's passion is to show you Jamaica's hidden paradise. Every voyage is customized, safe, and catered with signature culinary hospitality.
                </p>
              </div>

              {/* Badges checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-white/90">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 border border-white/10 rounded-full" />
                  <span>Licensed Vessel &amp; Professional Maritime Safety Crew</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-white/90">
                  <Check className="w-4 h-4 text-brand-gold shrink-0 border border-white/10 rounded-full" />
                  <span>Private Catamaran Sea Charters &amp; Custom Snorkeling Rides</span>
                </div>
              </div>

              {/* Call/Contact direct in About */}
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-baseline gap-2">
                <span className="text-xs text-white/60">Coordinate directly with Captain Remone:</span>
                <a href="tel:+18769096809" className="text-brand-gold font-mono font-black hover:underline text-lg">
                  +1 876 909 6809
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Review Section */}
      <section id="reviews" className="bg-[#022c22]/50 py-20 md:py-28 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] md:text-xs font-black text-brand-gold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-lg inline-block border border-white/10">
              UNFLINCHING TRAVELER TESTIMONIALS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white">
              Voted #1 Private Explorer Service
            </h2>
            <p className="text-sm text-gray-400 font-sans">
              See what families, cruisers, and solo adventurers say after coordinating their paths with Remone Henry Samuel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <div 
                key={idx}
                className="bg-brand-green-medium/40 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/10 flex flex-col justify-between hover:border-brand-gold/30 hover:scale-101 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center text-brand-gold gap-0.5 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-brand-gold" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-white/95 leading-relaxed italic mb-6">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-brand-green-dark text-brand-gold font-extrabold flex items-center justify-center border border-white/15 text-xs font-mono">
                    {review.name.split(' ')[0][0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{review.name}</h4>
                    <span className="text-[10px] text-white/60 block">{review.location} • <strong className="text-brand-gold">{review.tourName}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Booking and PayPal Section (#book) */}
      <section id="book" className="py-20 md:py-28 bg-[#043328] relative overflow-hidden">
        
        {/* Background decorations */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#022c22]/30 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column Copy */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <span className="text-[10px] md:text-xs font-black text-brand-gold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-lg inline-block border border-white/10">
                100% SECURE PAYPAL CHECKOUT
              </span>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Confirm Fast, Play Securely
              </h2>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
                Secure your private SUV date without technical friction. Because we cap our private charters at a select few reservations weekly (never double-booking), we secure our checkouts using standard secure **PayPal gateway** routed directly to **Remone317@yahoo.com**.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3">
                  <div className="p-2 bg-brand-green-medium border border-white/10 rounded-full text-brand-gold shrink-0">
                    <Check className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Risk-Free Booking Confirmation</h4>
                    <p className="text-xs text-white/70 mt-0.5 leading-relaxed">Lock your day securely now. Discuss customization directly with Remone Henry Samuel before checking out.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-2 bg-brand-green-medium border border-white/10 rounded-full text-brand-gold shrink-0">
                    <Check className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Full Customization Included</h4>
                    <p className="text-xs text-white/70 mt-0.5 leading-relaxed font-light">Indicate dietary parameters, child passenger requirements, or cruise terminal schedules at checkout.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-2 bg-brand-green-medium border border-[#white]/10 rounded-full text-brand-gold shrink-0">
                    <Check className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Luxury Fleet Transit</h4>
                    <p className="text-xs text-white/70 mt-0.5 leading-relaxed font-light">Charter is facilitated on clean, insured premium utility SUVs housing up to 6 guests.</p>
                  </div>
                </div>
              </div>

              {/* Direct Telephone block inside booking */}
              <div className="bg-brand-green-medium p-5 rounded-2xl border border-white/10 shadow-lg">
                <p className="text-xs font-bold uppercase text-brand-gold tracking-widest mb-2">Need immediate assistance?</p>
                <div className="space-y-2">
                  <a href="tel:+18769096809" className="flex items-center gap-2 text-base font-extrabold text-white hover:text-brand-gold transition-colors font-mono">
                    <Phone className="w-5 h-5 text-brand-gold" />
                    <span>+1 876 909 6809 (Remone Henry Samuel)</span>
                  </a>
                  <a 
                    href="mailto:Remone317@yahoo.com" 
                    className="flex items-center gap-2 text-xs font-bold text-white/70 hover:text-brand-gold transition-colors"
                  >
                    <Mail className="w-4 h-4 text-white/50" />
                    <span>Remone317@yahoo.com</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column visual Interactive Form and PayPal integration widget */}
            <div className="lg:col-span-7">
              <BookingForm 
                tours={TOUR_PACKAGES}
                selectedTourId={selectedTourId}
                setSelectedTourId={setSelectedTourId}
              />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-20 md:py-28 bg-[#022c22] border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-[10px] md:text-xs font-black text-brand-gold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-lg inline-block border border-white/10">
              CLEAR EXQUISITE STRUCTURES
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-300 font-sans">
              Clear security protocols to establish comfort before embarking on private Jamaican travels.
            </p>
          </div>

          <div className="bg-brand-green-medium/30 rounded-3xl p-6 md:p-10 shadow-2xl border border-white/10 divide-y divide-white/5">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#011a14] border-t border-white/10 text-white pt-16 pb-12 relative overflow-hidden">
        
        {/* Abstract shapes bg */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-brand-green-light/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-white/10">
            
            {/* Identity column */}
            <div className="md:col-span-5 space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center text-brand-green-dark border border-brand-gold/30 shadow-md">
                  <Compass className="w-5 h-5 rotate-12" />
                </div>
                <div>
                  <span className="block font-serif text-lg font-black text-brand-gold tracking-tight leading-none">
                    JAMAICAN SPICE TOUR
                  </span>
                  <span className="block text-[10px] font-bold text-gray-300 uppercase tracking-widest leading-none mt-1">
                    Tours, Taste, &amp; Thrills
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
                Boutique private travel experiences departing from Montego Bay, St. James, Jamaica. Powered by local passion, certified expertise, and executive culinary hospitality.
              </p>

              <div className="space-y-2 text-xs text-gray-400 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Montego Bay, St. James, Jamaica</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                  <a href="mailto:Remone317@yahoo.com" className="hover:text-brand-gold transition-colors">Remone317@yahoo.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="font-mono text-white">+1 876 909 6809 (Hotline)</span>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                Expedition Trails
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
                <li>
                  <button onClick={() => handleScrollToBooking('negril-sunset')} className="hover:text-brand-gold transition cursor-pointer text-left focus:outline-none">
                    Negril: Cliff Jumps
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollToBooking('ocho-rios-falls')} className="hover:text-brand-gold transition cursor-pointer text-left focus:outline-none">
                    Ocho Rios: Falls &amp; Blue Hole
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollToBooking('mobay-trelawny')} className="hover:text-brand-gold transition cursor-pointer text-left focus:outline-none">
                    Montego Bay &amp; Trelawny
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollToBooking('kingston-south')} className="hover:text-brand-gold transition cursor-pointer text-left focus:outline-none">
                    Kingston &amp; Floyd’s Pelican Bar
                  </button>
                </li>
              </ul>
            </div>

            {/* Navigation links & details column */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                Licensed Protections
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Licensed Jamaica Tourist Board Partner</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>100% Fully Insured Luxury Fleets</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Complimentary Flexible Scheduling</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Verified PayPal Secure Gateway</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Social and Copyright row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <div>
              <p>© {new Date().getFullYear()} Jamaican Spice Tour. All rights reserved.</p>
              <p className="mt-1 text-[10px] text-gray-500">CEO &amp; Primary Guide: Remone Henry Samuel</p>
            </div>
            
            {/* Social handles with anchors */}
            <div className="flex items-center gap-5">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors font-semibold">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors font-semibold">Facebook</a>
              <a href="https://tripadvisor.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors font-semibold">TripAdvisor Profile</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

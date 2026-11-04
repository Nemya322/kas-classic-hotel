export interface MenuItem {
  id: string;
  name: string;
  swName?: string;
  description?: string;
  swDescription?: string;
  price: string;
  numericPrice: number;
  variants?: { labelEn: string; labelSw: string; price: string; numericPrice: number }[];
  hasSideChoice?: boolean;
  image: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  swName: string;
  note?: string;
  swNote?: string;
  items: MenuItem[];
}

export const hotelInfo = {
  name: "Kas Classic Hotel",
  city: "Makambako",
  region: "Njombe Region",
  country: "Tanzania",
  whatsappNumber: "255796123924",
  phoneDisplay: "+255 796 123 924",
  secondaryPhone: "+255 747 993 993",
  secondaryPhoneClean: "255747993993",
  instagram: {
    handle: "kas_classic_hotel",
    profileUrl: "https://www.instagram.com/kas_classic_hotel/",
    post: {
      url: "https://www.instagram.com/p/DQxH_79ihiS/",
      caption: "KAS CLASSIC HOTEL",
      location: "Makambako Town",
    },
  },
};

export const roomCategories = [
  {
    id: "deluxe-double",
    nameEn: "Deluxe King / Double Room",
    nameSw: "Chumba cha Deluxe (Kitanda Kikubwa)",
    badgeEn: "Most Popular",
    badgeSw: "Chaguo Pendwa",
    image: "/images/hotel/stay-bedroom-headboard.webp",
    descEn: "Spacious double room featuring a tall upholstered headboard, air conditioning, crystal vanity dressing table, armchair seating, and private bathroom.",
    descSw: "Chumba chenye nafasi kubwa, kitanda kikubwa cha kisasa, kiyoyozi (AC), meza ya kujipamba yenye kioo, kiti cha kupumzika na bafu ndani.",
    highlightsEn: ["Air Conditioning (AC)", "43\" Flat-Screen TV", "Digital Safe & Mini-Fridge", "Electric Kettle & Tea Tray"],
    highlightsSw: ["Kiyoyozi (AC)", "TV ya Inchi 43", "Kasiki ya Kidijitali & Friji", "Birika la Chai na Kahawa"],
  },
  {
    id: "classic-twin",
    nameEn: "Classic Twin Room",
    nameSw: "Chumba cha Vitanda Viwili (Twin)",
    badgeEn: "Friends & Colleagues",
    badgeSw: "Kwa Marafiki / Kikazi",
    image: "/images/hotel/stay-twin-beds.webp",
    descEn: "Arranged with two comfortable beds, warm under-bed ambient LED lighting, individual tea/coffee trays, room telephone, and en-suite hot shower.",
    descSw: "Chumba chenye vitanda viwili vya kisasa, mwanga tulivu wa LED, huduma ya chai/kahawa, simu ya mapokezi na bafu lenye maji ya moto.",
    highlightsEn: ["2 Separate Beds", "Warm Ambient Lighting", "En-Suite Hot Shower", "Direct Reception Phone"],
    highlightsSw: ["Vitanda 2 Tofauti", "Mwanga Mzuri wa Chumbani", "Bafu Ndani na Maji ya Moto", "Simu ya Mapokezi"],
  },
  {
    id: "honeymoon-suite",
    nameEn: "Honeymoon & VIP Room",
    nameSw: "Chumba Maalum cha Honeymoon & VIP",
    badgeEn: "Special Occasions",
    badgeSw: "Kwa Wanandoa & VIP",
    image: "/images/hotel/stay-bedroom-dressing.webp",
    descEn: "Dedicated Honeymoon Room wing with private balcony access, luxury vanity mirror, lounge armchair, climate control, and poolside proximity.",
    descSw: "Chumba maalum cha Honeymoon chenye balkoni binafsi, kioo na meza ya kifahari, kiti cha starehe, AC na ukaribu na bwawa la kuogelea.",
    highlightsEn: ["Private Balcony Wing", "Luxury Vanity & Lounge Chair", "AC, Safe Box & Mini-Fridge", "Priority Room Service"],
    highlightsSw: ["Balkoni Binafsi", "Meza ya Kifahari & Kiti", "AC, Kasiki na Friji Ndogo", "Huduma ya Haraka Chumbani"],
  },
];

export const inRoomAmenities = [
  { iconId: "ac", en: "Air Conditioning (AC)", sw: "Kiyoyozi (AC)" },
  { iconId: "shower", en: "En-Suite Hot Shower", sw: "Bafu Ndani & Maji ya Moto" },
  { iconId: "tv", en: "43\" Flat-Screen TV", sw: "Televisheni ya Inchi 43" },
  { iconId: "safe", en: "Digital Safe Box", sw: "Kasiki ya Kidijitali (Safe)" },
  { iconId: "fridge", en: "In-Room Mini-Fridge", sw: "Friji Ndogo Chumbani" },
  { iconId: "kettle", en: "Kettle & Tea/Coffee Tray", sw: "Birika la Umeme & Chai" },
  { iconId: "phone", en: "Reception Telephone", sw: "Simu ya Mapokezi" },
  { iconId: "vanity", en: "Crystal Vanity & Lounge Chair", sw: "Meza ya Kioo & Kiti cha Starehe" },
] as const;

export const hotelFacilities = [
  {
    id: "hot-pool",
    titleEn: "Hot Swimming Pool & Sunken Lounge",
    titleSw: "Bwawa la Maji ya Moto & Mapumziko",
    tagEn: "Heated Pool",
    tagSw: "Maji ya Moto",
    descEn: "Enjoy a warm swim even in Makambako's cool highland weather, complete with sunken poolside white sofas, sun loungers, and evening LED lighting.",
    descSw: "Furahia kuogelea kwenye maji ya moto hata wakati wa baridi ya Makambako, pamoja na masofa ya kisasa kando ya bwawa na taa za usiku.",
    image: "/images/hotel/pool-04.jpg",
  },
  {
    id: "restaurant-juice",
    titleEn: "Restaurant, Nyama Choma & Juice Bar",
    titleSw: "Mgahawa, Nyama Choma & Banda la Juisi",
    tagEn: "Dining & Drinks",
    tagSw: "Chakula na Vinywaji",
    descEn: "Freshly grilled Kuku & Nyama Choma, Sato fish, Mchemsho, and a dedicated two-story bamboo Fruit Juice pavilion serving fresh tropical blends.",
    descSw: "Kuku na Nyama Choma, Samaki Sato, Mchemsho pamoja na banda maalum la ghorofa la juisi halisi za matunda.",
    image: "/images/hotel/outside-05.jpg",
  },
  {
    id: "rooftop-gym",
    titleEn: "Upper-Level Fitness Gym",
    titleSw: "Gym ya Kisasa ya Mazoezi",
    tagEn: "Fitness & Wellness",
    tagSw: "Mazoezi na Afya",
    descEn: "Stay active during your trip at our panoramic glass-enclosed upper-level Gym overlooking the hotel courtyard and Makambako town.",
    descSw: "Fanya mazoezi ukiwa safarini kwenye Gym yetu ya kisasa iliyopo ghorofani yenye mandhari nzuri ya mji wa Makambako.",
    image: "/images/hotel/outside-01.jpg",
  },
  {
    id: "mini-bank-shop",
    titleEn: "On-Site Mini Bank, Mini Shop & Parking",
    titleSw: "Mini Bank, Mini Shop na Maegesho",
    tagEn: "Guest Convenience",
    tagSw: "Huduma Muhimu Hapa Hapa",
    descEn: "Access banking/mobile money services (Mini Bank), travel essentials (Mini Shop), and spacious cabro-paved courtyard parking right inside the hotel.",
    descSw: "Pata huduma za kifedha (Mini Bank), mahitaji muhimu (Mini Shop) na maegesho makubwa na salama ya magari ndani ya fensi ya hoteli.",
    image: "/images/hotel/outside-02.jpg",
  },
];

export const signatureDishesPreview = [
  {
    nameEn: "Charcoal Grilled Kuku Choma",
    nameSw: "Kuku Choma Mzima",
    categoryEn: "Grilled Specialties",
    categorySw: "Choma Maalum",
    price: "30,000",
    image: "/images/hotel/dish-grilled-chicken.webp",
  },
  {
    nameEn: "350 g Sato Fish in Coconut Sauce",
    nameSw: "350 g Samaki Sato wa Nazi",
    categoryEn: "Served with Side Choice",
    categorySw: "Pamoja na Ugali / Chipsi / Wali",
    price: "18,000",
    image: "/images/hotel/dish-fish-coconut.webp",
  },
  {
    nameEn: "½ Deep Fried Chicken Makange",
    nameSw: "½ Kuku Makange",
    categoryEn: "Served with Side Choice",
    categorySw: "Pamoja na Ugali / Chipsi / Wali",
    price: "18,000",
    image: "/images/hotel/dish-chicken-makange.webp",
  },
  {
    nameEn: "Kas Signature Tende Juice",
    nameSw: "Juisi Maalum ya Tende (Kas)",
    categoryEn: "Dates, Milk, Nuts & Honey",
    categorySw: "Tende, Maziwa, Karanga na Asali",
    price: "5,000",
    image: "/images/hotel/dish-juice-kas-tende.webp",
  },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "chips",
    name: "Chips",
    swName: "Chipsi",
    note: "Select Regular (TZS 6,000) or Large (TZS 8,000) for Chips Masala.",
    swNote: "Chagua saizi ya Kawaida (TZS 6,000) au Kubwa (TZS 8,000) kwa Chipsi Masala.",
    items: [
      {
        id: "chips-masala",
        name: "Chips Masala",
        swName: "Chipsi Masala",
        description: "Spiced masala fries prepared fresh to order.",
        swDescription: "Chipsi zilizopikwa kwa viungo na mchuzi mzito wa masala.",
        price: "6,000 / 8,000",
        numericPrice: 6000,
        variants: [
          { labelEn: "Regular (6,000)", labelSw: "Kawaida (6,000)", price: "6,000", numericPrice: 6000 },
          { labelEn: "Large (8,000)", labelSw: "Kubwa (8,000)", price: "8,000", numericPrice: 8000 },
        ],
        image: "/images/hotel/dish-chips-masala.webp",
      },
      {
        id: "chips-kavu",
        name: "Chips Kavu",
        swName: "Chipsi Kavu",
        description: "Golden crispy plain fries.",
        swDescription: "Chipsi kavu za moto zilizokaangwa vizuri.",
        price: "3,000",
        numericPrice: 3000,
        image: "/images/hotel/dish-chips-kavu.webp",
      },
    ],
  },
  {
    id: "chicken",
    name: "Chicken",
    swName: "Kuku",
    note: "Served with your choice of ugali, chips, green banana, spaghetti or rice.",
    swNote: "Hutolewa pamoja na ugali, chipsi, ndizi za kupika, spaghetti au wali.",
    items: [
      {
        id: "chicken-deep-fried",
        name: "½ Deep Fried Chicken",
        swName: "½ Kuku wa Kukaanga",
        price: "18,000",
        numericPrice: 18000,
        hasSideChoice: true,
        image: "/images/hotel/dish-chicken-deep-fried.webp",
      },
      {
        id: "chicken-makange",
        name: "½ Deep Fried Chicken Makange",
        swName: "½ Kuku Makange",
        price: "18,000",
        numericPrice: 18000,
        hasSideChoice: true,
        image: "/images/hotel/dish-chicken-makange.webp",
      },
      {
        id: "chicken-coconut",
        name: "½ Chicken in Coconut Sauce",
        swName: "½ Kuku wa Nazi",
        price: "18,000",
        numericPrice: 18000,
        hasSideChoice: true,
        image: "/images/hotel/dish-chicken-coconut.webp",
      },
      {
        id: "chicken-changamoto",
        name: "Chicken Changamoto",
        swName: "Kuku Changamoto",
        price: "18,000",
        numericPrice: 18000,
        hasSideChoice: true,
        image: "/images/hotel/dish-chicken-changamoto.webp",
      },
      {
        id: "chicken-classic",
        name: "Classic Chicken",
        swName: "Kuku Classic",
        price: "18,000",
        numericPrice: 18000,
        hasSideChoice: true,
        image: "/images/hotel/dish-chicken-classic.webp",
      },
      {
        id: "chicken-kas-fried",
        name: "Kas Fried Chicken",
        swName: "Kuku wa Kukaanga wa Kas",
        price: "18,000",
        numericPrice: 18000,
        hasSideChoice: true,
        image: "/images/hotel/dish-chicken-kas-fried.webp",
      },
    ],
  },
  {
    id: "kuku-choma",
    name: "Grilled Chicken",
    swName: "Kuku Choma",
    items: [
      {
        id: "kuku-choma-whole",
        name: "Kuku Choma",
        swName: "Kuku Choma",
        description: "Charcoal-grilled chicken seasoned with house spices.",
        swDescription: "Kuku choma aliyechomwa kwa viungo maalum vya hoteli.",
        price: "30,000",
        numericPrice: 30000,
        image: "/images/hotel/dish-grilled-chicken.webp",
      },
    ],
  },
  {
    id: "beef",
    name: "Beef",
    swName: "Nyama ya Ng'ombe",
    items: [
      {
        id: "beef-stew",
        name: "400 g Beef Stew",
        swName: "400 g Rosti la Ng'ombe",
        price: "10,000",
        numericPrice: 10000,
        image: "/images/hotel/dish-beef-stew.webp",
      },
      {
        id: "beef-makange",
        name: "400 g Beef Makange",
        swName: "400 g Ng'ombe Makange",
        price: "10,000",
        numericPrice: 10000,
        image: "/images/hotel/dish-beef-makange.webp",
      },
      {
        id: "beef-classic",
        name: "400 g Classic Beef",
        swName: "400 g Ng'ombe Classic",
        price: "10,000",
        numericPrice: 10000,
        image: "/images/hotel/dish-beef-classic.webp",
      },
    ],
  },
  {
    id: "spaghetti",
    name: "Spaghetti",
    swName: "Spaghetti",
    items: [
      {
        id: "spaghetti-chicken",
        name: "Chicken Spaghetti",
        swName: "Spaghetti za Kuku",
        price: "18,000",
        numericPrice: 18000,
        image: "/images/hotel/dish-spaghetti-chicken.webp",
      },
      {
        id: "spaghetti-beef",
        name: "Beef Spaghetti",
        swName: "Spaghetti za Nyama ya Ng'ombe",
        price: "15,000",
        numericPrice: 15000,
        image: "/images/hotel/dish-spaghetti-beef.webp",
      },
      {
        id: "spaghetti-special",
        name: "Special Spaghetti",
        swName: "Spaghetti Maalum (Special)",
        price: "15,000",
        numericPrice: 15000,
        image: "/images/hotel/dish-spaghetti-special.webp",
      },
    ],
  },
  {
    id: "mchemsho",
    name: "Mchemsho",
    swName: "Mchemsho",
    items: [
      {
        id: "mchemsho-fish",
        name: "Mchemsho wa Samaki",
        swName: "Mchemsho wa Samaki",
        description: "Clear fish broth boiled with fresh vegetables and highland herbs.",
        swDescription: "Supu nzito ya samaki iliyochemshwa na mbogamboga na viungo.",
        price: "18,000",
        numericPrice: 18000,
        image: "/images/hotel/dish-mchemsho-fish.webp",
      },
      {
        id: "mchemsho-chicken",
        name: "Mchemsho wa Kuku",
        swName: "Mchemsho wa Kuku",
        description: "Warm chicken broth with fresh vegetables.",
        swDescription: "Mchemsho wa moto wa kuku wenye mbogamboga safi.",
        price: "15,000",
        numericPrice: 15000,
        image: "/images/hotel/dish-mchemsho-chicken.webp",
      },
      {
        id: "mchemsho-beef",
        name: "Mchemsho wa Ng'ombe",
        swName: "Mchemsho wa Ng'ombe",
        description: "Hearty beef broth with garden vegetables.",
        swDescription: "Mchemsho wa nyama ya ng'ombe na mbogamboga.",
        price: "10,000",
        numericPrice: 10000,
        image: "/images/hotel/dish-mchemsho-beef.webp",
      },
    ],
  },
  {
    id: "fish",
    name: "Fish",
    swName: "Samaki",
    note: "Served with your choice of ugali, chips, green banana, spaghetti or rice.",
    swNote: "Hutolewa pamoja na ugali, chipsi, ndizi za kupika, spaghetti au wali.",
    items: [
      {
        id: "fish-pan-fried",
        name: "350 g Pan Fried Sato Fish",
        swName: "350 g Samaki Sato wa Kukaanga",
        price: "18,000",
        numericPrice: 18000,
        hasSideChoice: true,
        image: "/images/hotel/dish-fish-pan-fried.webp",
      },
      {
        id: "fish-makange",
        name: "350 g Pan Fried Sato Makange",
        swName: "350 g Samaki Sato Makange",
        price: "18,000",
        numericPrice: 18000,
        hasSideChoice: true,
        image: "/images/hotel/dish-fish-makange.webp",
      },
      {
        id: "fish-coconut",
        name: "350 g Pan Fried Sato in Coconut Sauce",
        swName: "350 g Samaki Sato wa Nazi",
        price: "18,000",
        numericPrice: 18000,
        hasSideChoice: true,
        image: "/images/hotel/dish-fish-coconut.webp",
      },
    ],
  },
  {
    id: "tea",
    name: "Tea & Coffee",
    swName: "Chai na Kahawa",
    items: [
      {
        id: "tea-coffee",
        name: "Tea / Coffee",
        swName: "Chai / Kahawa",
        price: "3,000",
        numericPrice: 3000,
        image: "/images/hotel/dish-tea-coffee.webp",
      },
      {
        id: "tea-zanzibar",
        name: "Zanzibar Spiced Swahili Tea",
        swName: "Chai ya Viungo ya Kiswahili",
        price: "3,000",
        numericPrice: 3000,
        image: "/images/hotel/dish-tea-zanzibar.webp",
      },
    ],
  },
  {
    id: "juice",
    name: "Fresh Juice",
    swName: "Juisi Safi",
    items: [
      {
        id: "juice-tende",
        name: "Kas Tende Juice",
        swName: "Juisi ya Tende ya Kas",
        description: "Fresh Arabic dates, milk, nuts and honey with vanilla.",
        swDescription: "Tende halisi, maziwa, karanga/korosho na asali yenye vanila.",
        price: "5,000",
        numericPrice: 5000,
        image: "/images/hotel/dish-juice-kas-tende.webp",
      },
      {
        id: "juice-mango-pineapple",
        name: "Fresh Mango Pineapple Juice",
        swName: "Juisi ya Embe na Nanasi",
        description: "Ripe mango, pineapple, sugar and honey.",
        swDescription: "Embe bivu, nanasi, sukari kidogo na asali.",
        price: "3,000",
        numericPrice: 3000,
        image: "/images/hotel/dish-juice-mango-pineapple.webp",
      },
      {
        id: "juice-passion-mango",
        name: "Passion Mango Juice",
        swName: "Juisi ya Pesheni na Embe",
        description: "Fresh passion fruit, nuts, ginger and lime juice.",
        swDescription: "Pesheni safi, embe, tangawizi na ndimu.",
        price: "3,000",
        numericPrice: 3000,
        image: "/images/hotel/dish-juice-passion-mango.webp",
      },
      {
        id: "juice-carrot-watermelon",
        name: "Fresh Carrot & Watermelon Juice",
        swName: "Juisi ya Karoti na Tikiti Maji",
        description: "Carrot, honey, ginger, watermelon and vanilla.",
        swDescription: "Karoti, asali, tangawizi, tikiti maji na vanila.",
        price: "3,000",
        numericPrice: 3000,
        image: "/images/hotel/dish-juice-carrot-watermelon.webp",
      },
    ],
  },
];

export const hotelInfo = {
  name: "Kas Classic Hotel",
  city: "Makambako",
  region: "Njombe Region",
  country: "Tanzania",
  whatsappNumber: "255796123924",
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

export const menuCategories = [
  {
    id: "chips",
    name: "Chips",
    swName: "Chipsi",
    items: [
      { name: "Chips Masala", price: "6,000 / 8,000", image: "/images/hotel/dish-chips-masala.webp" },
      { name: "Chips Kavu", price: "3,000", image: "/images/hotel/dish-chips-kavu.webp" },
    ],
  },
  {
    id: "chicken",
    name: "Chicken",
    swName: "Kuku",
    note: "Served with your choice of ugali, chips, green banana, spaghetti or rice.",
    swNote: "Hutolewa pamoja na ugali, chipsi, ndizi za kupika, spaghetti au wali.",
    items: [
      { name: "½ Deep Fried Chicken", price: "18,000", image: "/images/hotel/dish-chicken-deep-fried.webp" },
      { name: "½ Deep Fried Chicken Makange", price: "18,000", image: "/images/hotel/dish-chicken-makange.webp" },
      { name: "½ Chicken in Coconut Sauce", price: "18,000", image: "/images/hotel/dish-chicken-coconut.webp" },
      { name: "Chicken Changamoto", price: "18,000", image: "/images/hotel/dish-chicken-changamoto.webp" },
      { name: "Classic Chicken", price: "18,000", image: "/images/hotel/dish-chicken-classic.webp" },
      { name: "Kas Fried Chicken", price: "18,000", image: "/images/hotel/dish-chicken-kas-fried.webp" },
    ],
  },
  {
    id: "kuku-choma",
    name: "Grilled Chicken",
    swName: "Kuku Choma",
    items: [{ name: "Kuku Choma", price: "30,000", image: "/images/hotel/dish-grilled-chicken.webp" }],
  },
  {
    id: "beef",
    name: "Beef",
    swName: "Nyama ya Ng'ombe",
    items: [
      { name: "400 g Beef Stew", price: "10,000", image: "/images/hotel/dish-beef-stew.webp" },
      { name: "400 g Beef Makange", price: "10,000", image: "/images/hotel/dish-beef-makange.webp" },
      { name: "400 g Classic Beef", price: "10,000", image: "/images/hotel/dish-beef-classic.webp" },
    ],
  },
  {
    id: "spaghetti",
    name: "Spaghetti",
    swName: "Spaghetti",
    items: [
      { name: "Chicken Spaghetti", price: "18,000", image: "/images/hotel/dish-spaghetti-chicken.webp" },
      { name: "Beef Spaghetti", price: "15,000", image: "/images/hotel/dish-spaghetti-beef.webp" },
      { name: "Special Spaghetti", price: "15,000", image: "/images/hotel/dish-spaghetti-special.webp" },
    ],
  },
  {
    id: "mchemsho",
    name: "Mchemsho",
    swName: "Mchemsho",
    items: [
      { name: "Mchemsho wa Samaki", price: "18,000", image: "/images/hotel/dish-mchemsho-fish.webp" },
      { name: "Mchemsho wa Kuku", price: "15,000", image: "/images/hotel/dish-mchemsho-chicken.webp" },
      { name: "Mchemsho wa Ng'ombe", price: "10,000", image: "/images/hotel/dish-mchemsho-beef.webp" },
    ],
  },
  {
    id: "fish",
    name: "Fish",
    swName: "Samaki",
    note: "Served with your choice of ugali, chips, green banana, spaghetti or rice.",
    swNote: "Hutolewa pamoja na ugali, chipsi, ndizi za kupika, spaghetti au wali.",
    items: [
      { name: "350 g Pan Fried Sato Fish", price: "18,000", image: "/images/hotel/dish-fish-pan-fried.webp" },
      { name: "350 g Pan Fried Sato Makange", price: "18,000", image: "/images/hotel/dish-fish-makange.webp" },
      { name: "350 g Pan Fried Sato in Coconut Sauce", price: "18,000", image: "/images/hotel/dish-fish-coconut.webp" },
    ],
  },
  {
    id: "tea",
    name: "Tea & Coffee",
    swName: "Chai na Kahawa",
    items: [
      { name: "Tea / Coffee", price: "3,000", image: "/images/hotel/dish-tea-coffee.webp" },
      { name: "Zanzibar Spiced Swahili Tea", price: "3,000", image: "/images/hotel/dish-tea-zanzibar.webp" },
    ],
  },
  {
    id: "juice",
    name: "Fresh Juice",
    swName: "Juisi Safi",
    items: [
      {
        name: "Kas Tende Juice",
        description: "Fresh Arabic dates, milk, nuts and honey with vanilla.",
        price: "5,000",
        image: "/images/hotel/dish-juice-kas-tende.webp",
      },
      {
        name: "Fresh Mango Pineapple Juice",
        description: "Ripe mango, pineapple, sugar and honey.",
        price: "3,000",
        image: "/images/hotel/dish-juice-mango-pineapple.webp",
      },
      {
        name: "Passion Mango Juice",
        description: "Fresh passion fruit, nuts, ginger and lime juice.",
        price: "3,000",
        image: "/images/hotel/dish-juice-passion-mango.webp",
      },
      {
        name: "Fresh Carrot & Watermelon Juice",
        description: "Carrot, honey, ginger, watermelon and vanilla.",
        price: "3,000",
        image: "/images/hotel/dish-juice-carrot-watermelon.webp",
      },
    ],
  },
] as const;

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface Provider {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: string;
  location: string;
  description: string;
  featured: boolean;
  portfolio: string[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export const categories: Category[] = [
  { id: "1", name: "Wedding Halls", icon: "🏛️", count: 24 },
  { id: "2", name: "Photographers", icon: "📸", count: 38 },
  { id: "3", name: "Makeup Artists", icon: "💄", count: 19 },
  { id: "4", name: "Event Planners", icon: "📋", count: 15 },
  { id: "5", name: "DJs & Music", icon: "🎵", count: 22 },
  { id: "6", name: "Decoration", icon: "🎨", count: 31 },
  { id: "7", name: "Catering", icon: "🍽️", count: 27 },
  { id: "8", name: "Car Rental", icon: "🚗", count: 12 },
  { id: "9", name: "Lighting", icon: "💡", count: 16 },
];

export const providers: Provider[] = [
  {
    id: "1",
    name: "Luminous Studios",
    category: "Photographers",
    categoryId: "2",
    image: "/src/assets/provider-photographer.jpg",
    rating: 4.9,
    reviewCount: 127,
    price: "From $1,200",
    location: "Downtown",
    description: "Award-winning photography studio specializing in weddings and luxury events. We capture every moment with an artistic eye and deliver timeless photographs you'll cherish forever.",
    featured: true,
    portfolio: [],
  },
  {
    id: "2",
    name: "Golden Plate Catering",
    category: "Catering",
    categoryId: "7",
    image: "/src/assets/provider-catering.jpg",
    rating: 4.8,
    reviewCount: 89,
    price: "From $45/person",
    location: "Citywide",
    description: "Premium catering services featuring international cuisine, custom menus, and impeccable presentation. From intimate gatherings to grand celebrations.",
    featured: true,
    portfolio: [],
  },
  {
    id: "3",
    name: "Enchanted Events Décor",
    category: "Decoration",
    categoryId: "6",
    image: "/src/assets/provider-decor.jpg",
    rating: 4.7,
    reviewCount: 64,
    price: "From $800",
    location: "Metro Area",
    description: "Transform any venue into a magical space. We specialize in floral designs, themed décor, and custom installations for unforgettable celebrations.",
    featured: true,
    portfolio: [],
  },
  {
    id: "4",
    name: "DJ Rhythm",
    category: "DJs & Music",
    categoryId: "5",
    image: "/src/assets/provider-dj.jpg",
    rating: 4.6,
    reviewCount: 53,
    price: "From $600",
    location: "All Areas",
    description: "Professional DJ and entertainment services. We bring the perfect soundtrack to your event with state-of-the-art equipment and an extensive music library.",
    featured: false,
    portfolio: [],
  },
  {
    id: "5",
    name: "Glamour Touch",
    category: "Makeup Artists",
    categoryId: "3",
    image: "/src/assets/provider-makeup.jpg",
    rating: 4.9,
    reviewCount: 112,
    price: "From $250",
    location: "Mobile Service",
    description: "Expert bridal and event makeup artistry. We come to you and ensure you look absolutely stunning for your special day.",
    featured: true,
    portfolio: [],
  },
];

export const reviews: Review[] = [
  { id: "1", userName: "Sarah M.", rating: 5, comment: "Absolutely incredible! The photos were beyond our expectations. Every moment was captured beautifully.", date: "2 weeks ago" },
  { id: "2", userName: "James K.", rating: 5, comment: "Professional, creative, and so easy to work with. Highly recommend!", date: "1 month ago" },
  { id: "3", userName: "Amira R.", rating: 4, comment: "Great quality work and very responsive. Would definitely book again.", date: "2 months ago" },
];

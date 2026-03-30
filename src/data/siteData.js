import petrolImage from '../assets/images/petrol.avif';
import dieselImage from '../assets/images/diesel.avif';
import fnbImage from '../assets/images/fnb.png';
import absaImage from '../assets/images/absa.jpg';
import courierImage from '../assets/images/courier.png';
import sparImage from '../assets/images/Afribiz03005.webp';

export const garageInfo = {
  name: "Shell Spar Express Ottawa",
  address: "59 Chris Hani Road (Old Main Road), Ottawa, Verulam",
  hours: "24/7",
  phone: "075 321 4777",
  email: "shellgarageottawa@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61576227726268", // Fixed URL
  instagram: "https://www.instagram.com/shell_ottawa",
  tiktok: "https://www.tiktok.com/@shellspar.express",
  description: "Your 24/7 convenience stop in Ottawa, Verulam. Fuel up, grab essentials at Spar Express, and access banking services any time of day or night."
}

export const services = [
  { 
    name: "Petrol", 
    icon: "⛽", 
    description: "All Shell fuel grades available including FuelSave 93, 95, and V-Power.",
    image: petrolImage
  },
  { 
    name: "Diesel", 
    icon: "⛽", 
    description: "High-quality diesel fuel for all diesel vehicles.",
    image: dieselImage
  },
  { 
    name: "FNB ATM", 
    icon: "🏧", 
    description: "24/7 cash withdrawals and banking services.",
    image: fnbImage
  },
  { 
    name: "ABSA ATM", 
    icon: "🏧", 
    description: "24/7 banking services including withdrawals and balance inquiries.",
    image: absaImage
  },
  { 
    name: "Cash Express ATM", 
    icon: "💵", 
    description: "Quick cash access anytime, day or night.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80"
  },
  { 
    name: "Courier Guy Pickup", 
    icon: "📦", 
    description: "Send and receive parcels at our official collection point.",
    image: courierImage
  },
  { 
    name: "Water (R1 per litre)", 
    icon: "💧", 
    description: "Affordable drinking water available 24/7.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80"
  },
  { 
    name: "Spar Express", 
    icon: "🏪", 
    description: "Groceries, snacks, drinks, and everyday essentials — open 24/7.",
    image: sparImage
  },
]

export const promotions = [
  {
    title: "Shell V-Power",
    description: "Get more power and efficiency with Shell V-Power",
    validUntil: "Valid until end of month"
  },
  {
    title: "Spar Express Specials",
    description: "Check in-store for weekly specials on groceries and essentials",
    validUntil: "Updated weekly"
  },
  {
    title: "Loyalty Rewards",
    description: "Earn points on every fuel purchase",
    validUntil: "Ongoing"
  }
]
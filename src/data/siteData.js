import petrolImage from '../assets/images/petrol.avif';
import dieselImage from '../assets/images/diesel.avif';

export const garageInfo = {
  name: "Shell Spar Express Ottawa",
  address: "59 Chris Hani Road (Old Main Road), Ottawa, Verulam",
  hours: "24/7",
  phone: "075 321 4777",
  email: "shellgarageottawa@gmail.com",
  facebook: "https://www.facebook.com/ShellSparExpressOttawa",
  instagram: "https://www.instagram.com/shell_ottawa",
  description: "Your 24/7 convenience stop in Ottawa, Verulam. Fuel up, grab essentials, and access banking services any time of day or night."
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
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80"
  },
  { 
    name: "ABSA ATM", 
    icon: "🏧", 
    description: "24/7 banking services including withdrawals and balance inquiries.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80"
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
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80"
  },
  { 
    name: "Water (R1 per litre)", 
    icon: "💧", 
    description: "Affordable drinking water available 24/7.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80"
  },
  { 
    name: "Spar Convenience Store", 
    icon: "🏪", 
    description: "Groceries, snacks, drinks, and everyday essentials.",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80"
  },
]

export const promotions = [
  {
    title: "Shell V-Power",
    description: "Get more power and efficiency with Shell V-Power",
    validUntil: "Valid until end of month"
  },
  {
    title: "Spar Specials",
    description: "Check in-store for weekly specials on groceries",
    validUntil: "Updated weekly"
  },
  {
    title: "Loyalty Rewards",
    description: "Earn points on every fuel purchase",
    validUntil: "Ongoing"
  }
]